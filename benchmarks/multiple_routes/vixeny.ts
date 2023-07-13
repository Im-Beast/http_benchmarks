import vixeny from "https://deno.land/x/endofunctor@v0.0.67/fun.ts";
import { MULTIPLE_ROUTES, PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Vixeny";
export const DESCRIPTION = "";
export const VERSION = "0.0.67";

if (import.meta.main) {
  let count = 0;

  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        path: MULTIPLE_ROUTES.HELLO_WORLD,
        f: () => RESPONSE_MESSAGE,
      },
      {
        path: MULTIPLE_ROUTES.RANDOM_NUMBER,
        f: () => `${Math.random()}`,
      },
      {
        path: MULTIPLE_ROUTES.PLUS_1,
        f: () => {
          count++;
          return "ok";
        },
        method: "POST",
      },
      {
        path: MULTIPLE_ROUTES.MINUS_1,
        f: () => {
          count--;
          return "ok";
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
