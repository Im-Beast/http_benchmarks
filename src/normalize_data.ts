import { BenchmarkInfo, BenchmarkResult, OhaJsonOutput } from "./types.ts";

// deno-lint-ignore no-explicit-any
export type AnyObject = Record<any, any>;
export type NumericData = [object: AnyObject, weight: number];

export function meanNumericData(into: AnyObject, from: AnyObject[]): void {
  const properties: Record<string, number[]> = {};

  for (const object of from) {
    for (const key in object) {
      if (typeof object[key] === "object") {
        into[key] ??= {};
        meanNumericData(into[key], from.map((object) => object[key]));
        continue;
      } else if (typeof object[key] !== "number") {
        into[key] = object[key];
        continue;
      }

      properties[key] ??= [];
      properties[key].push(object[key]);
    }
  }

  for (const key in properties) {
    const sorted = properties[key].sort((a, b) => a - b);
    into[key] = sorted[Math.round((sorted.length - 1) / 2)];
  }
}

export function sumNumericObjects(into: AnyObject, from: AnyObject): void {
  for (const key in from) {
    const aValue = into[key];
    const bValue = from[key];

    if (typeof aValue === "number" && typeof bValue === "number") {
      into[key] = aValue + bValue;
    } else if (aValue === undefined) {
      into[key] = bValue;
    }
  }
}

export function divideNumericData(object: AnyObject, divider: number): void {
  for (const key in object) {
    const aValue = object[key];

    if (typeof aValue === "number") {
      object[key] = aValue / divider;
    }
  }
}

export function multiplyNumericData(object: AnyObject, multiplier: number): void {
  for (const key in object) {
    const aValue = object[key];

    if (typeof aValue === "number") {
      object[key] = aValue * multiplier;
    }
  }
}

export function averageNumericData(a: AnyObject, b: AnyObject): void {
  for (const key in a) {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === "number" && typeof bValue === "number") {
      a[key] = (aValue + bValue) / 2;
    } else if (typeof aValue === "object" && typeof bValue === "object") {
      a[key] = averageNumericData(aValue, bValue);
    } else {
      a[key] = aValue;
    }
  }
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
