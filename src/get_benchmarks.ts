import { join } from "./deps.ts";
import type { BenchmarkInfo } from "./types.ts";

const BENCHMARK_PATH = "./benchmarks";

export async function getBenchmarkList(): Promise<Record<string, Omit<BenchmarkInfo, "headers">[]>> {
  const benchmarkList: Record<string, Omit<BenchmarkInfo, "headers">[]> = {};

  for await (const entry of Deno.readDir(BENCHMARK_PATH)) {
    if (!entry.isDirectory || /SERVER_.+/.test(entry.name)) continue;

    const benchmarks = benchmarkList[entry.name] ??= [];
    const groupPath = join(BENCHMARK_PATH, entry.name);

    for await (const groupEntry of Deno.readDir(groupPath)) {
      if (!groupEntry.isFile || groupEntry.name === "BENCHMARK_DATA.ts") continue;

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
  return benchmarkList;
}
