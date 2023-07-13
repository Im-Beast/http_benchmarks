import { Hono } from "https://deno.land/x/hono@v3.3.0/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Hono";
export const DESCRIPTION = "";
export const VERSION = "3.3.0";

if (import.meta.main) {
  const app = new Hono();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, (context) => context.text(RESPONSE_MESSAGE));

  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, (context) => context.text(`${Math.random()}`));

  let counter = 0;
  app.post(MULTIPLE_ROUTES.PLUS_1, (context) => {
    counter++;
    return context.body("ok");
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, (context) => {
    counter--;
    return context.body("ok");
  });
  app.get(MULTIPLE_ROUTES.COUNT, (context) => context.body(`${counter}`));

  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, app.fetch).finished;
}
