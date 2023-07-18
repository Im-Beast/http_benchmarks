import type { Benchmark } from "../../src/mod.ts";

export enum MULTIPLE_ROUTES {
  HELLO_WORLD = "/hello_world",
  RANDOM_NUMBER = "/random_number",
  COUNT = "/count",
  PLUS_1 = "/plus_1",
  MINUS_1 = "/minus_1",
}

export const MULTIPLE_ROUTES_HELLO = "Hello world";
export const MULTIPLE_ROUTES_OK = "ok";

const BENCHMARK: Benchmark = {
  name: "Multiple routes",
  steps: [
    { method: "GET", route: MULTIPLE_ROUTES.HELLO_WORLD, weight: 1 },
    { method: "GET", route: MULTIPLE_ROUTES.RANDOM_NUMBER, weight: 1 },
    { method: "GET", route: MULTIPLE_ROUTES.COUNT, weight: 1 },
    { method: "POST", route: MULTIPLE_ROUTES.PLUS_1, weight: 1 },
    { method: "POST", route: MULTIPLE_ROUTES.MINUS_1, weight: 1 },
  ],
  trackSteps: true,
  groupByHeaders: false,
};

export default BENCHMARK;
