import { HTTP_PORT, HTTP_URL, PROTOCOL_HTTP_URL_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Deno.serveHttp";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

let count = 0;

if (import.meta.main) {
  for await (const conn of Deno.listen({ port: HTTP_PORT, hostname: HTTP_URL })) {
    serveHttp(conn);
  }
}

async function serveHttp(conn: Deno.Conn) {
  for await (const event of Deno.serveHttp(conn)) {
    const route = event.request.url.replace(event.request.headers.get("host") ?? PROTOCOL_HTTP_URL_PORT, "").replace(
      "http://",
      "",
    );

    switch (event.request.method) {
      case "GET":
        switch (route) {
          case MULTIPLE_ROUTES.HELLO_WORLD:
            event.respondWith(new Response(MULTIPLE_ROUTES_HELLO));
            continue;
          case MULTIPLE_ROUTES.RANDOM_NUMBER:
            event.respondWith(new Response(`${Math.random()}`));
            continue;
          case MULTIPLE_ROUTES.COUNT:
            event.respondWith(new Response(`${count}`));
            continue;
        }
        break;

      case "POST":
        switch (route) {
          case MULTIPLE_ROUTES.PLUS_1:
            count++;
            event.respondWith(new Response(MULTIPLE_ROUTES_OK));
            continue;
          case MULTIPLE_ROUTES.MINUS_1:
            count--;
            event.respondWith(new Response(MULTIPLE_ROUTES_OK));
            continue;
        }
        break;
    }

    event.respondWith(new Response("Not found", { status: 404 }));
  }
}
