import { crayon, join } from "./deps.ts";

import { benchmarkFramework } from "./benchmarker.ts";
import { FILE_SERVER_STEPS, MULTIPLE_ROUTES_STEPS } from "../benchmarks/SERVER_DATA.ts";
import { formatResult, formatResultComparison } from "./format_results.ts";

import type { BenchmarkInfo, BenchmarkResult } from "./types.ts";

const BENCHMARK_CACHE_PATH = "./results/cache.json";

let BENCHMARK_CACHE!: {
  denoVersion: string;
  data: {
    [group: string]: {
      [name: string]: BenchmarkResult;
    };
  };
};

try {
  const content = await Deno.readTextFile(BENCHMARK_CACHE_PATH);
  BENCHMARK_CACHE = JSON.parse(content);

  if (BENCHMARK_CACHE.denoVersion !== Deno.version.deno) {
    throw "Invalid version";
  }
} catch {
  BENCHMARK_CACHE = {
    denoVersion: Deno.version.deno,
    data: {},
  };
}

const BENCHMARK_PATH = "./benchmarks";
const BENCHMARK_RESULTS_PATH = "./results";

const BENCHMARK_STEPS: Record<string, [step: [method: string, route: string, weight: number][], trackSteps: boolean]> =
  {
    "file_server": [FILE_SERVER_STEPS, true],
    "hello_world": [[["GET", "", 1]], false],
    "multiple_routes": [MULTIPLE_ROUTES_STEPS, true],
  };

const benchmarkList: Record<string, BenchmarkInfo[]> = {};
const benchmarkResults: Record<string, BenchmarkResult[]> = {};

for await (const entry of Deno.readDir(BENCHMARK_PATH)) {
  if (!entry.isDirectory || /SERVER_.+/.test(entry.name)) continue;

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

for (const benchmarkGroup in benchmarkList) {
  await Deno.mkdir(join("./results", benchmarkGroup), { recursive: true });

  const [routes, trackSteps] = BENCHMARK_STEPS[benchmarkGroup];
  if (!routes) {
    throw new Error(`Unknown benchmark type: ${benchmarkGroup}`);
  }

  console.log(crayon.magenta(`Starting ${crayon.bold.lightMagenta(benchmarkGroup)} benchmarks`));

  const results = benchmarkResults[benchmarkGroup] ??= [];

  const cachedResults = BENCHMARK_CACHE.data[benchmarkGroup] ??= {};

  for (const benchmark of benchmarkList[benchmarkGroup]) {
    console.log(crayon.cyan(` - Benchmarking ${crayon.bold.lightCyan(benchmark.name)}`));

    let result = cachedResults[benchmark.name];
    if (result && benchmark.version === result.version) {
      results.push(result);
      console.log(crayon.bgLightGreen(`  - ${crayon.bold(benchmark.name)} got retrieved from cache`));
    } else {
      result = await benchmarkFramework(benchmark, routes, trackSteps);
      cachedResults[benchmark.name] = result;
      results.push(result);
    }

    await Deno.writeTextFile(
      join(BENCHMARK_RESULTS_PATH, benchmarkGroup, `${benchmark.fileName}.md`),
      formatResult(result),
    );
  }

  await Deno.writeTextFile(
    join(BENCHMARK_RESULTS_PATH, benchmarkGroup, "README.md"),
    formatResultComparison(benchmarkResults[benchmarkGroup]),
  );
}

await Deno.writeTextFile(BENCHMARK_CACHE_PATH, JSON.stringify(BENCHMARK_CACHE));
