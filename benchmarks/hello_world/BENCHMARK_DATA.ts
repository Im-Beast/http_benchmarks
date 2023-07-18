import type { Benchmark } from "../../src/mod.ts";

export const HELLO_WORLD_MESSAGE = "hello world";

const BENCHMARK: Benchmark = {
  name: "Hello world",
  steps: [{
    method: "GET",
    route: "/",
    weight: 1,
  }],
  trackSteps: false,
  groupByHeaders: false,
};

export default BENCHMARK;
