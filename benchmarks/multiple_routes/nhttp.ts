import nhttp from "https://deno.land/x/nhttp@1.3.6/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "NHttp";
export const DESCRIPTION = "";
export const VERSION = "1.3.6";

if (import.meta.main) {
  const app = nhttp();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, () => MULTIPLE_ROUTES_HELLO);
  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, () => `${Math.random()}`);

  let counter = 0;
  app.get(MULTIPLE_ROUTES.COUNT, () => `${counter}`);
  app.post(MULTIPLE_ROUTES.PLUS_1, () => {
    counter++;
    return MULTIPLE_ROUTES_OK;
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, () => {
    counter--;
    return MULTIPLE_ROUTES_OK;
  });

  app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  })?.finished;
}
