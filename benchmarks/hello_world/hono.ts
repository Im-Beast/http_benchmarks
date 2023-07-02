import { Hono } from "https://deno.land/x/hono@v3.2.7/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.2.7";

if (import.meta.main) {
  const app = new Hono();

  app.get("/", (context) => {
    return context.text(RESPONSE_MESSAGE);
  });

  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, app.fetch).finished;
}
