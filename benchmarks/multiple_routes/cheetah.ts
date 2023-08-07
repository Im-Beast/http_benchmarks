import cheetah from "https://deno.land/x/cheetah@v1.1.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "cheetah";
export const DESCRIPTION = "";
export const VERSION = "0.0.6821.1.0";

if (import.meta.main) {
  let counter = 0;
  const app = new cheetah()
    .get(MULTIPLE_ROUTES.HELLO_WORLD, () => MULTIPLE_ROUTES_HELLO)
    .get(MULTIPLE_ROUTES.RANDOM_NUMBER, () => `${Math.random()}`)
    .post(MULTIPLE_ROUTES.PLUS_1, () => {
      counter++;
      return MULTIPLE_ROUTES_OK;
    })
    .post(MULTIPLE_ROUTES.MINUS_1, () => {
      counter--;
      return MULTIPLE_ROUTES_OK;
    })
    .get(MULTIPLE_ROUTES.COUNT, () => `${counter}`);

  await app.serve({ port: HTTP_PORT, hostname: HTTP_URL });
}
