import vixeny from "https://deno.land/x/endofunctor@v0.0.682/fun.ts";

import { PROTOCOL_HTTP_URL_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Vixeny";
export const DESCRIPTION = "";
export const VERSION = "0.0.682";

if (import.meta.main) {
  let count = 0;

  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        path: MULTIPLE_ROUTES.HELLO_WORLD,
        f: () => MULTIPLE_ROUTES_HELLO,
      },
      {
        path: MULTIPLE_ROUTES.RANDOM_NUMBER,
        f: () => `${Math.random()}`,
      },
      {
        path: MULTIPLE_ROUTES.PLUS_1,
        f: () => {
          count++;
          return MULTIPLE_ROUTES_OK;
        },
        method: "POST",
      },
      {
        path: MULTIPLE_ROUTES.MINUS_1,
        f: () => {
          count--;
          return MULTIPLE_ROUTES_OK;
        },
        method: "POST",
      },
      {
        path: MULTIPLE_ROUTES.COUNT,
        f: () => `${count}`,
        method: "GET",
      },
    ]),
  ).finished;
}
