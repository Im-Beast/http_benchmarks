export interface OhaJsonOutput {
  summary: {
    successRate: number;
    total: number;
    slowest: number;
    fastest: number;
    average: number;
    requestsPerSec: number;
    totalData: number;
    sizePerRequest: number;
    sizePerSec: number;
  };
  responseTimeHistogram: {
    [time: number]: number;
  };
  latencyPercentiles: {
    p10: number;
    p25: number;
    p50: number;
    p75: number;
    p90: number;
    p95: number;
    p99: number;
  };
  rps: {
    mean: number;
    stddev: number;
    max: number;
    percentiles: {
      p10: number;
      p25: number;
      p50: number;
      p75: number;
      p90: number;
      p95: number;
      p99: number;
    };
  };
  details: {
    DNSDialup: { average: number; fastest: number; slowest: number };
    DNSLookup: { average: number; fastest: number; slowest: number };
  };
  statusCodeDistribution: {
    [code: number]: number;
  };
  errorDistribution: {
    [code: number]: number;
  };
}

export interface BenchmarkResult {
  name: string;
  description: string;
  version: string;
  path: string;
  fileName: string;
  successRate: number;
  headers: Headers;
  steps: {
    [name: string]: {
      throughput: BenchmarkResult["throughput"];
      latency: BenchmarkResult["latency"];
    };
  };
  throughput: {
    sizePerSecond: number;
    standardDeviation: number;
    mean: number;
    max: number;
    percentiles: {
      p10: number;
      p25: number;
      p50: number;
      p75: number;
      p90: number;
      p95: number;
      p99: number;
    };
  };
  latency: {
    max: number;
    min: number;
    average: number;
    percentiles: {
      p10: number;
      p25: number;
      p50: number;
      p75: number;
      p90: number;
      p95: number;
      p99: number;
    };
  };
}

export interface BenchmarkInfo {
  headers: Headers;
  name: string;
  description: string;
  version: string;
  path: string;
  fileName: string;
}
