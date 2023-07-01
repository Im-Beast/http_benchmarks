import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

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
  }).finished;
}
