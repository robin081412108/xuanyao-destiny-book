import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const scanRoots = ["app", "components"];
const textExtensions = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".css",
  ".md"
]);

const prohibitedTerms = [
  { label: "AI", pattern: /\bAI\b/g },
  { label: "psychic", pattern: /psychic/gi },
  { label: "fortune teller", pattern: /fortune teller/gi },
  { label: "guaranteed prediction", pattern: /guaranteed prediction/gi },
  { label: "100% accurate", pattern: /100% accurate/gi },
  { label: "curse", pattern: /curse/gi },
  { label: "bad luck removal", pattern: /bad luck removal/gi },
  { label: "change your fate", pattern: /change your fate/gi },
  { label: "bad omen", pattern: /bad omen/gi },
  { label: "disaster warning", pattern: /disaster warning/gi }
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

function findHits(content, filePath) {
  const hits = [];

  for (const term of prohibitedTerms) {
    term.pattern.lastIndex = 0;

    for (const match of content.matchAll(term.pattern)) {
      hits.push({
        file: filePath,
        line: lineNumberForIndex(content, match.index ?? 0),
        term: term.label
      });
    }
  }

  return hits;
}

const allFiles = (
  await Promise.all(scanRoots.map((root) => collectFiles(root)))
).flat();
const hits = [];

for (const filePath of allFiles) {
  const buffer = await readFile(filePath);

  if (buffer.includes(0)) {
    continue;
  }

  const content = buffer.toString("utf8");
  hits.push(...findHits(content, filePath));
}

if (hits.length > 0) {
  console.error("Prohibited user-facing copy found:");

  for (const hit of hits) {
    console.error(`- ${hit.file}:${hit.line} matched "${hit.term}"`);
  }

  process.exit(1);
}

console.log("copy check passed");
