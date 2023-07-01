import Aqua from "https://deno.land/x/aqua@v1.3.5/mod.ts";
import { HTTP_PORT, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Aqua";
export const DESCRIPTION = "";
export const VERSION = "1.3.5";

if (import.meta.main) {
  const app = new Aqua(HTTP_PORT);

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
}
