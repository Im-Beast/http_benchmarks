import nhttp from "https://deno.land/x/nhttp@1.3.0/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "NHttp";
export const DESCRIPTION = "NHttp with `flash` option set to `true`";
export const VERSION = "1.3.0";

if (import.meta.main) {
  const app = nhttp();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, () => RESPONSE_MESSAGE);
  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, () => `${Math.random()}`);

  let counter = 0;
  app.post(MULTIPLE_ROUTES.PLUS_1, () => {
    counter++;
    return "ok";
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, () => {
    counter--;
    return "ok";
  });
  app.get(MULTIPLE_ROUTES.COUNT, () => `${counter}`);

  app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  })?.finished;
}
