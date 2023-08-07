import { Hono } from "https://deno.land/x/hono@v3.3.4/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.3.4";

if (import.meta.main) {
  const app = new Hono();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, (context) => context.text(MULTIPLE_ROUTES_HELLO));

  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, (context) => context.text(`${Math.random()}`));

  let counter = 0;
  app.get(MULTIPLE_ROUTES.COUNT, (context) => context.body(`${counter}`));
  app.post(MULTIPLE_ROUTES.PLUS_1, (context) => {
    counter++;
    return context.body(MULTIPLE_ROUTES_OK);
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, (context) => {
    counter--;
    return context.body(MULTIPLE_ROUTES_OK);
  });

  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, app.fetch).finished;
}
