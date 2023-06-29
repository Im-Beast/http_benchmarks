import { BenchmarkInfo, BenchmarkResult, OhaJsonOutput } from "./types.ts";

// deno-lint-ignore no-explicit-any
function averageObject(a: any, b: any): void {
  for (const key in a) {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue !== typeof bValue) {
      continue;
    } else if (typeof aValue === "object") {
      averageObject(aValue, bValue);
    } else if (typeof aValue === "number") {
      a[key] = (aValue + bValue) / 2;
    }
  }
}

export function averageBenchmarkerData(a: BenchmarkResult, b: BenchmarkResult): BenchmarkResult {
  averageObject(a, b);
  return a;
}

export function normalizeData(info: BenchmarkInfo, oha: OhaJsonOutput): BenchmarkResult {
  return {
    name: info.name,
    description: info.description,
    version: info.version,
    path: info.path,
    fileName: info.fileName,
    successRate: oha.summary.successRate,
    steps: {},
    latency: {
      average: oha.summary.average * 1000,
      min: oha.summary.fastest * 1000,
      max: oha.summary.slowest * 1000,
      percentiles: {
        p10: oha.latencyPercentiles.p10 * 1000,
        p25: oha.latencyPercentiles.p10 * 1000,
        p50: oha.latencyPercentiles.p10 * 1000,
        p75: oha.latencyPercentiles.p10 * 1000,
        p90: oha.latencyPercentiles.p90 * 1000,
        p95: oha.latencyPercentiles.p95 * 1000,
        p99: oha.latencyPercentiles.p99 * 1000,
      },
    },
    throughput: {
      standardDeviation: oha.rps.stddev,
      max: oha.rps.max,
      mean: oha.rps.mean,
      percentiles: {
        p10: oha.rps.percentiles.p10 * 1000,
        p25: oha.rps.percentiles.p10 * 1000,
        p50: oha.rps.percentiles.p10 * 1000,
        p75: oha.rps.percentiles.p10 * 1000,
        p90: oha.rps.percentiles.p90 * 1000,
        p95: oha.rps.percentiles.p95 * 1000,
        p99: oha.rps.percentiles.p99 * 1000,
      },
      sizePerSecond: oha.summary.sizePerSec / (2 ** 20),
    },
  };
}
