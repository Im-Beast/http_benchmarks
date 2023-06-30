import { join } from "../src/deps.ts";

export const HTTP_URL = "127.0.0.1";
export const HTTP_PORT = 8000;
export const PROTOCOL_HTTP_URL_PORT = `http://${HTTP_URL}:${HTTP_PORT}`;

export const RESPONSE_MESSAGE = "hello world";

export const FILE_SERVER_PATH = "./benchmarks/file_server/FILES";
export const FILE_SERVER_FILES: [name: string, size: number][] = [];
for (const entry of Deno.readDirSync(FILE_SERVER_PATH)) {
  FILE_SERVER_FILES.push([entry.name, Deno.statSync(join(FILE_SERVER_PATH, entry.name)).size]);
}
