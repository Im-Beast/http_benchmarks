import { join } from "../../src/deps.ts";
import type { Benchmark, BenchmarkStep } from "../../src/mod.ts";

export const FILE_SERVER_PATH = "./benchmarks/file_server/FILE_SERVER_FILES";

export const FILE_SERVER_STEPS: BenchmarkStep[] = [];
for (const entry of Deno.readDirSync(FILE_SERVER_PATH)) {
  FILE_SERVER_STEPS.push({
    method: "GET",
    route: entry.name,
    weight: Deno.statSync(join(FILE_SERVER_PATH, entry.name)).size,
  });
}

const BENCHMARK: Benchmark = {
  name: "File server",
  steps: FILE_SERVER_STEPS,
  trackSteps: true,
  groupByHeaders: true,
};

export default BENCHMARK;
