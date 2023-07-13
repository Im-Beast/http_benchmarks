import cheetah from "https://deno.land/x/cheetah@v1.0.0-canary.0/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Cheetah";
export const DESCRIPTION = "";
export const VERSION = "1.0.0-canary.0";

if (import.meta.main) {
  let counter = 0;

  const app = new cheetah()
    .get(MULTIPLE_ROUTES.HELLO_WORLD, () => RESPONSE_MESSAGE)
    .get(MULTIPLE_ROUTES.RANDOM_NUMBER, () => `${Math.random()}`)
    .post(MULTIPLE_ROUTES.PLUS_1, (req) => {
      req.body = { ok: true };
      counter++;
      return "ok";
    })
    .post(MULTIPLE_ROUTES.MINUS_1, () => {
      counter--;
      return "ok";
    })
    .get(MULTIPLE_ROUTES.COUNT, () => `${counter}`);

  await Deno.serve({ port: HTTP_PORT, hostname: HTTP_URL }, (request) => app.fetch(request)).finished;
}
