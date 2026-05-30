import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const requiredFiles = [
  "package.json",
  "vercel.json",
  ".env.example",
  "app/page.tsx",
  "app/checkout/page.tsx",
  "app/result/[token]/page.tsx",
  "components/ResultActions.tsx",
  "package-lock.json"
];

const ignoredDirectories = new Set([
  ".git",
  ".next",
  "node_modules",
  ".vercel"
]);
const scannedExtensions = new Set([
  "",
  ".env",
  ".example",
  ".json",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".ts",
  ".tsx",
  ".md",
  ".yml",
  ".yaml"
]);

const secretPatterns = [
  {
    label: ["s", "k-"].join(""),
    pattern: new RegExp(`${["s", "k-"].join("")}[A-Za-z0-9_-]{16,}`)
  },
  {
    label: ["OPENAI", "_API_KEY="].join(""),
    pattern: new RegExp(["OPENAI", "_API_KEY="].join(""))
  },
  {
    label: ["QWEN", "_API_KEY="].join(""),
    pattern: new RegExp(["QWEN", "_API_KEY="].join(""))
  },
  {
    label: ["STRIPE", "_SECRET_KEY="].join(""),
    pattern: new RegExp(["STRIPE", "_SECRET_KEY="].join(""))
  },
  {
    label: ["PAYPAL", "_SECRET="].join(""),
    pattern: new RegExp(["PAYPAL", "_SECRET="].join(""))
  },
  {
    label: ["DATABASE_URL=", "postgres://"].join(""),
    pattern: new RegExp(["DATABASE_URL=", "postgres://"].join(""))
  },
  {
    label: ["DATABASE_URL=", "mysql://"].join(""),
    pattern: new RegExp(["DATABASE_URL=", "mysql://"].join(""))
  }
];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    if (entry.isFile()) {
      const extension = path.extname(entry.name);
      const isEnvExample = entry.name === ".env.example";

      if (isEnvExample || scannedExtensions.has(extension)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

function checkBuildScript(packageJson) {
  if (!packageJson.scripts?.build) {
    throw new Error("package.json is missing a build script");
  }
}

async function checkRequiredFiles() {
  for (const filePath of requiredFiles) {
    if (!(await exists(filePath))) {
      throw new Error(`Missing required deployment file: ${filePath}`);
    }
  }

  if (await exists(".env.local")) {
    throw new Error(".env.local must not be present in the deployable tree");
  }
}

async function checkSecretPatterns() {
  const files = await collectFiles(".");
  const matches = [];

  for (const filePath of files) {
    const buffer = await readFile(filePath);

    if (buffer.includes(0)) {
      continue;
    }

    const content = buffer.toString("utf8");

    for (const secretPattern of secretPatterns) {
      const match = secretPattern.pattern.exec(content);

      if (match?.index !== undefined) {
        matches.push({
          filePath,
          line: lineNumberForIndex(content, match.index),
          label: secretPattern.label
        });
      }
    }
  }

  if (matches.length > 0) {
    const details = matches
      .map((match) => `- ${match.filePath}:${match.line} matched ${match.label}`)
      .join("\n");
    throw new Error(`Potential secret patterns found:\n${details}`);
  }
}

await checkRequiredFiles();
const packageJson = JSON.parse(await readFile("package.json", "utf8"));
checkBuildScript(packageJson);
await checkSecretPatterns();

console.log("deployment readiness check passed");
