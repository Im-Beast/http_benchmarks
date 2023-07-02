import { Hono } from "https://deno.land/x/hono@v3.2.7/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.2.7/middleware.ts";
import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.2.7";

if (import.meta.main) {
  const app = new Hono();

  app.use("/*", serveStatic({ root: FILE_SERVER_PATH }));

  await Deno.serve({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  }, app.fetch).finished;
}
