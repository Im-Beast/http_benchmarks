import opine from "https://deno.land/x/opine@2.3.4/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Opine";
export const DESCRIPTION = "";
export const VERSION = "2.3.4";

if (import.meta.main) {
  const app = opine();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, (_request, response) => response.send(MULTIPLE_ROUTES_HELLO));
  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, (_request, response) => response.send(`${Math.random()}`));

  let counter = 0;
  app.get(MULTIPLE_ROUTES.COUNT, (_request, response) => response.send(`${counter}`));
  app.post(MULTIPLE_ROUTES.PLUS_1, (_request, response) => {
    counter++;
    response.send(MULTIPLE_ROUTES_OK);
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, (_request, response) => {
    counter--;
    response.send(MULTIPLE_ROUTES_OK);
  });

  app.listen(HTTP_PORT);
}
