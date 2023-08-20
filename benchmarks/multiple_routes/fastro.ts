import fastro from "https://deno.land/x/fastro@v0.80.4/server/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Fastro";
export const DESCRIPTION = "";
export const VERSION = "0.80.4";

if (import.meta.main) {
  const app = fastro();

  app.get(MULTIPLE_ROUTES.HELLO_WORLD, () => MULTIPLE_ROUTES_HELLO);
  app.get(MULTIPLE_ROUTES.RANDOM_NUMBER, () => `${Math.random()}`);

  let counter = 0;
  app.post(MULTIPLE_ROUTES.PLUS_1, () => {
    counter++;
    return MULTIPLE_ROUTES_OK;
  });
  app.post(MULTIPLE_ROUTES.MINUS_1, () => {
    counter--;
    return MULTIPLE_ROUTES_OK;
  });
  app.get(MULTIPLE_ROUTES.COUNT, () => `${counter}`);

  await app.serve({
    port: HTTP_PORT,
  });
}
