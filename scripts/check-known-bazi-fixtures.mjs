import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import process from "node:process";
import ts from "typescript";

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, "lib", "bazi", "known-fixtures.ts");
const tempDir = path.join(os.tmpdir(), `known-bazi-fixtures-${Date.now()}`);
const outputPath = path.join(tempDir, "known-fixtures.mjs");
const allowedStatuses = new Set(["pending", "verified"]);
const allowedExpectedKeys = new Set([
  "yearPillar",
  "monthPillar",
  "dayPillar",
  "hourPillar",
  "dayMaster"
]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function importKnownFixtures() {
  await mkdir(tempDir, { recursive: true });
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

  await writeFile(outputPath, transpiled.outputText);
  return import(pathToFileURL(outputPath).href);
}

function validateExpected(fixture) {
  if (!fixture.expected) {
    return;
  }

  for (const key of Object.keys(fixture.expected)) {
    assert(
      allowedExpectedKeys.has(key),
      `${fixture.id}: unexpected expected.${key}`
    );
  }
}

function validateFixture(fixture, index) {
  const label = fixture.id || `fixture ${index + 1}`;

  assert(fixture.id, `${label}: missing id`);
  assert(fixture.description, `${label}: missing description`);
  assert(fixture.input?.date, `${label}: missing input.date`);
  assert(fixture.input?.calendar, `${label}: missing input.calendar`);
  assert(
    fixture.input.calendar === "solar" || fixture.input.calendar === "lunar",
    `${label}: input.calendar must be solar or lunar`
  );
  assert(fixture.notes, `${label}: missing notes`);
  assert(
    allowedStatuses.has(fixture.verificationStatus),
    `${label}: invalid verificationStatus`
  );

  validateExpected(fixture);
}

try {
  const { knownBaziFixtures } = await importKnownFixtures();

  assert(Array.isArray(knownBaziFixtures), "knownBaziFixtures must be an array");
  assert(
    knownBaziFixtures.length >= 20,
    "expected at least 20 known BaZi fixtures"
  );

  const ids = new Set();

  knownBaziFixtures.forEach((fixture, index) => {
    validateFixture(fixture, index);
    assert(!ids.has(fixture.id), `${fixture.id}: duplicate id`);
    ids.add(fixture.id);
  });

  console.log("known bazi fixtures check passed");
} finally {
  await rm(tempDir, { force: true, recursive: true });
}
