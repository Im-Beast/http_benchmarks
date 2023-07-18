import { HTTP_PORT, HTTP_URL, PROTOCOL_HTTP_URL_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Deno.serve";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main) {
  let count = 0;

  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, (request) => {
    const route = request.url.replace(request.headers.get("host") ?? PROTOCOL_HTTP_URL_PORT, "").replace(
      "http://",
      "",
    );

    switch (request.method) {
      case "GET":
        switch (route) {
          case MULTIPLE_ROUTES.HELLO_WORLD:
            return new Response(MULTIPLE_ROUTES_HELLO);
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
            return new Response(MULTIPLE_ROUTES_OK);
          case MULTIPLE_ROUTES.MINUS_1:
            count--;
            return new Response(MULTIPLE_ROUTES_OK);
        }
        break;
    }

    return new Response("Not found", { status: 404 });
  }).finished;
}
