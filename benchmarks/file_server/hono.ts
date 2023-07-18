import { Hono } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.3.1/middleware.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { FILE_SERVER_PATH } from "./BENCHMARK_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.3.1";

if (import.meta.main) {
  const app = new Hono();

  app.use("/*", serveStatic({ root: FILE_SERVER_PATH }));

  await Deno.serve({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  }, app.fetch).finished;
}
