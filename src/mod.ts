import { crayon, join } from "./deps.ts";

import { benchmarkFramework } from "./benchmarker.ts";
import { getBenchmarkList } from "./get_benchmarks.ts";
import { formatGrouppedResultsComparison, formatResult, formatResultComparison } from "./format_results.ts";

import type { BenchmarkResult } from "./types.ts";

const BENCHMARK_RESULTS_PATH = "./results";

export interface Benchmark {
  name: string;
  steps: BenchmarkStep[];
  trackSteps: boolean;
  groupByHeaders: boolean;
}

export interface BenchmarkStep {
  method: string;
  route: string;
  weight: number;
}

const benchmarkList = await getBenchmarkList();

for (const benchmarkGroup in benchmarkList) {
  const BENCHMARK_DATA = (await import("../benchmarks/" + benchmarkGroup + "/BENCHMARK_DATA.ts")).default as Benchmark;

  if (!BENCHMARK_DATA) {
    throw new Error(`Unknown benchmark type: ${benchmarkGroup}`);
  }

  await Deno.mkdir(join("./results", benchmarkGroup), { recursive: true });

  console.log(crayon.magenta(`Starting ${crayon.bold.lightMagenta(benchmarkGroup)} benchmarks`));

  const results: BenchmarkResult[] = [];

  for (const benchmark of benchmarkList[benchmarkGroup]) {
    console.log(crayon.cyan(` - Benchmarking ${crayon.bold.lightCyan(benchmark.name)}`));

    const result = await benchmarkFramework(benchmark, BENCHMARK_DATA);
    results.push(result);

    await Deno.writeTextFile(
      join(BENCHMARK_RESULTS_PATH, benchmarkGroup, `${benchmark.fileName}.md`),
      formatResult(BENCHMARK_DATA, result),
    );
  }

  await Deno.writeTextFile(
    join(BENCHMARK_RESULTS_PATH, benchmarkGroup, "README.md"),
    BENCHMARK_DATA.groupByHeaders
      ? formatGrouppedResultsComparison(BENCHMARK_DATA, results)
      : formatResultComparison(BENCHMARK_DATA, results),
  );
}

Deno.exit(0);
