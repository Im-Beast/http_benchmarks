import { join } from "../src/deps.ts";

export const HTTP_URL = "127.0.0.1";
export const HTTP_PORT = 8000;
export const PROTOCOL_HTTP_URL_PORT = `http://${HTTP_URL}:${HTTP_PORT}/` as const;

export const RESPONSE_MESSAGE = "hello world";

export const FILE_SERVER_PATH = "./benchmarks/SERVER_FILES";
export const FILE_SERVER_STEPS: [method: string, name: string, size: number][] = [];
for (const entry of Deno.readDirSync(FILE_SERVER_PATH)) {
  FILE_SERVER_STEPS.push(["GET", entry.name, Deno.statSync(join(FILE_SERVER_PATH, entry.name)).size]);
}

export enum MULTIPLE_ROUTES {
  RANDOM_NUMBER = "/random_number",
  HELLO_WORLD = "/hello_world",
  COUNT = "/count",
  PLUS_1 = "/plus_1",
  MINUS_1 = "/minus_1",
}
export const MULTIPLE_ROUTES_STEPS: [method: string, route: string, weight: number][] = [
  ["GET", MULTIPLE_ROUTES.RANDOM_NUMBER, 1],
  ["GET", MULTIPLE_ROUTES.HELLO_WORLD, 1],
  ["POST", MULTIPLE_ROUTES.PLUS_1, 1],
  ["GET", MULTIPLE_ROUTES.COUNT, 1],
  ["POST", MULTIPLE_ROUTES.MINUS_1, 1],
  ["GET", MULTIPLE_ROUTES.COUNT, 1],
];
