import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Deno.serveHttp";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main)
    for await (const conn of Deno.listen({ port: HTTP_PORT, hostname: HTTP_URL }))
        serveHttp(conn)


async function serveHttp(conn: Deno.Conn) {
    for await (const req of Deno.serveHttp(conn))
        req.respondWith(new Response(RESPONSE_MESSAGE))
}