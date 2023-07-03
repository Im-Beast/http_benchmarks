import vixeny from "https://deno.land/x/endofunctor@v0.0.63/fun.ts";
import { MULTIPLE_ROUTES, PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Vixeny – Response";
export const DESCRIPTION = "Using type: 'response'";
export const VERSION = "0.0.63";

if (import.meta.main) {
  let count = 0;

  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        path: MULTIPLE_ROUTES.HELLO_WORLD,
        type: "response",
        r: () => new Response(RESPONSE_MESSAGE),
        method: "GET",
      },
      {
        path: MULTIPLE_ROUTES.RANDOM_NUMBER,
        type: "response",
        r: () => new Response(`${Math.random()}`),
        method: "GET",
      },
      {
        path: MULTIPLE_ROUTES.PLUS_1,
        type: "response",
        r: () => {
          count++;
          return new Response("ok");
        },
        method: "POST",
      },
      {
        path: MULTIPLE_ROUTES.MINUS_1,
        type: "response",
        r: () => {
          count--;
          return new Response("ok");
        },
        method: "POST",
      },
      {
        path: MULTIPLE_ROUTES.COUNT,
        type: "response",
        r: () => new Response(`${count}`),
        method: "GET",
      },
    ]),
  ).finished;
}
