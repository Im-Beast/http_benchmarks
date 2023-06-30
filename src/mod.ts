import { crayon, join } from "./deps.ts";

import { benchmarkFramework } from "./benchmarker.ts";
import { FILE_SERVER_FILES } from "../benchmarks/SERVER_DATA.ts";
import { formatResult, formatResultComparison } from "./format_results.ts";

import type { BenchmarkInfo, BenchmarkResult } from "./types.ts";

const BENCHMARK_PATH = "./benchmarks";
const BENCHMARK_RESULTS_PATH = "./results";

const BENCHMARK_STEPS: Record<string, [routes: [string, number][], trackSteps: boolean]> = {
  "file_server": [FILE_SERVER_FILES, true],
  "hello_world": [[["", 1]], false],
};

const benchmarkList: Record<string, BenchmarkInfo[]> = {};
const benchmarkResults: Record<string, BenchmarkResult[]> = {};

for await (const entry of Deno.readDir(BENCHMARK_PATH)) {
  if (!entry.isDirectory) continue;

  const benchmarks = benchmarkList[entry.name] ??= [];
  const groupPath = join(BENCHMARK_PATH, entry.name);

  for await (const groupEntry of Deno.readDir(groupPath)) {
    if (!groupEntry.isFile) continue;

    const benchmarkPath = join(groupPath, groupEntry.name);

    const { NAME, DESCRIPTION, VERSION } = await import(`../${benchmarkPath}`);
    if (!NAME || !VERSION) { // no description isn't an issue
      throw new Error(`Benchmark at ${benchmarkPath} is missing one of those two exports: NAME, VERSION`);
    }

    benchmarks.push({
      name: NAME,
      description: DESCRIPTION,
      version: VERSION,
      path: benchmarkPath,
      fileName: groupEntry.name,
    });
  }
}

for (const benchmarkType in benchmarkList) {
  await Deno.mkdir(join("./results", benchmarkType), { recursive: true });

  const [routes, trackSteps] = BENCHMARK_STEPS[benchmarkType];
  if (!routes) {
    throw new Error(`Unknown benchmark type: ${benchmarkType}`);
  }

  console.log(crayon.magenta(`Starting ${crayon.bold.lightMagenta(benchmarkType)} benchmarks`));

  const results = benchmarkResults[benchmarkType] ??= [];

  for (const benchmark of benchmarkList[benchmarkType]) {
    console.log(crayon.cyan(` - Benchmarking ${crayon.bold.lightCyan(benchmark.name)}`));

    const result = await benchmarkFramework(benchmark, routes, trackSteps);
    results.push(result);

    await Deno.writeTextFile(
      join(BENCHMARK_RESULTS_PATH, benchmarkType, `${benchmark.fileName}.md`),
      formatResult(result),
    );
  }

  await Deno.writeTextFile(
    join(BENCHMARK_RESULTS_PATH, benchmarkType, "README.md"),
    formatResultComparison(benchmarkResults[benchmarkType]),
  );
}
