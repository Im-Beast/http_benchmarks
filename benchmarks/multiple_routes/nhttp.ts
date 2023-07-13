import nhttp from "https://deno.land/x/nhttp@1.2.24/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "NHttp";
export const DESCRIPTION = "";
export const VERSION = "1.2.24";

if (import.meta.main) {
  const app = nhttp({
    flash: false,
  });

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

  await app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  }).finished;
}
