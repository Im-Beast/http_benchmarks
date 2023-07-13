import { serve } from "https://deno.land/std@0.193.0/http/server.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "std serve";
export const DESCRIPTION = "";
export const VERSION = "0.193.0";

if (import.meta.main) {
  let count = 0;

  await serve((request) => {
    const route = request.url.replace(PROTOCOL_HTTP_URL_PORT, "/");

    switch (request.method) {
      case "GET":
        switch (route) {
          case MULTIPLE_ROUTES.HELLO_WORLD:
            return new Response(RESPONSE_MESSAGE);
          case MULTIPLE_ROUTES.RANDOM_NUMBER:
            return new Response(`${Math.random()}`);
          case MULTIPLE_ROUTES.COUNT:
            return new Response(`${count}`);
        }
        break;

      case "POST":
        switch (route) {
          case MULTIPLE_ROUTES.PLUS_1:
            count++;
            return new Response("ok");
          case MULTIPLE_ROUTES.MINUS_1:
            count--;
            return new Response("ok");
        }
        break;
    }

    return new Response("Not found", { status: 404 });
  }, {
    hostname: HTTP_URL,
    port: HTTP_PORT,
  });
}
