import { Hono } from "https://deno.land/x/hono@v3.3.1/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.3.1";

if (import.meta.main) {
  const app = new Hono();

  app.get("/", (context) => {
    return context.text(HELLO_WORLD_MESSAGE);
  });

  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, app.fetch).finished;
}
