import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import process from "node:process";
import ts from "typescript";

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, "lib", "bazi");
const tempDir = path.join(os.tmpdir(), `bazi-adapter-check-${Date.now()}`);
const modules = [
  "types.ts",
  "fallback-engine.ts",
  "adapter.ts",
  "fixtures.ts",
  "index.ts"
];

function rewriteImports(output) {
  return output.replace(
    /(from\s+["']\.\/[^"']+)(["'])/g,
    (_match, specifier, quote) => `${specifier}.mjs${quote}`
  );
}

async function transpileBaziModules() {
  await mkdir(tempDir, { recursive: true });

  for (const moduleName of modules) {
    const sourcePath = path.join(sourceDir, moduleName);
    const source = await readFile(sourcePath, "utf8");
    const transpiled = ts.transpileModule(source, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ES2022,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        verbatimModuleSyntax: true
      },
      fileName: sourcePath
    });
    const output = rewriteImports(transpiled.outputText);
    await writeFile(
      path.join(tempDir, moduleName.replace(/\.ts$/, ".mjs")),
      output
    );
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function validateChart(chart, label) {
  assert(chart.displayName, `${label}: missing displayName`);
  assert(chart.dayMaster, `${label}: missing dayMaster`);
  assert(Array.isArray(chart.pillars), `${label}: pillars is not an array`);
  assert(chart.pillars.length === 4, `${label}: expected 4 pillars`);
  assert(
    Array.isArray(chart.fiveElements),
    `${label}: fiveElements is not an array`
  );
  assert(chart.fiveElements.length === 5, `${label}: expected 5 fiveElements`);
  assert(
    chart.engine?.deterministic === true,
    `${label}: engine not deterministic`
  );
  assert(
    chart.engine?.realCalculation === false,
    `${label}: engine realCalculation must be false`
  );
}

try {
  await transpileBaziModules();
  const { baziAdapterFixtures, calculateBaziChart } = await import(
    pathToFileURL(path.join(tempDir, "index.mjs")).href
  );

  assert(
    Array.isArray(baziAdapterFixtures) && baziAdapterFixtures.length >= 5,
    "expected at least 5 BaZi adapter fixtures"
  );

  for (const [index, profile] of baziAdapterFixtures.entries()) {
    const first = calculateBaziChart(profile);
    const second = calculateBaziChart(profile);
    const label = `fixture ${index + 1}`;

    validateChart(first, label);
    assert(
      JSON.stringify(first) === JSON.stringify(second),
      `${label}: repeated calculation is not stable`
    );
  }

  console.log("bazi adapter check passed");
} finally {
  await rm(tempDir, { force: true, recursive: true });
}
