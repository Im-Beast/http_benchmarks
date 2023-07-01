import opine from "https://deno.land/x/opine@2.3.4/mod.ts";
import { HTTP_PORT, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Opine";
export const DESCRIPTION = "";
export const VERSION = "2.3.4";

if (import.meta.main) {
  const app = opine();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, (_request, response) => response.send(RESPONSE_MESSAGE));
  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, (_request, response) => response.send(`${Math.random()}`));

  let counter = 0;
  app.post(MULTIPLE_ROUTES.PLUS_1, (_request, response) => {
    counter++;
    response.send("ok");
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, (_request, response) => {
    counter--;
    response.send("ok");
  });
  app.get(MULTIPLE_ROUTES.COUNT, (_request, response) => response.send(`${counter}`));

  app.listen(HTTP_PORT);
}
