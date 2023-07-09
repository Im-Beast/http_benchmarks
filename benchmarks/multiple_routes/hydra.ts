import { Hydra } from "https://deno.land/x/hydra@0.1.0/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Hydra";
export const DESCRIPTION = "";
export const VERSION = "0.2.0";

if (import.meta.main) {
  const app = new Hydra(HTTP_URL, HTTP_PORT);

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

  await app.serve();
}
