import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Deno.serveHttp";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main) {
  for await (const conn of Deno.listen({ port: HTTP_PORT, hostname: HTTP_URL })) {
    serveHttp(conn);
  }
}

async function serveHttp(conn: Deno.Conn) {
  for await (const event of Deno.serveHttp(conn)) {
    event.respondWith(new Response(HELLO_WORLD_MESSAGE));
  }
}
