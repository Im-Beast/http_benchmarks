import { HTTP_PORT, HTTP_URL, FILE_SERVER_PATH } from "../SERVER_DATA.ts"
import { getMimeType } from "https://deno.land/x/hono@v3.2.6/utils/mime.ts"
import * as path from "https://deno.land/std@0.192.0/path/mod.ts"

export const NAME = "Deno.serveHttp";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main) {
    for await (const conn of Deno.listen({ port: HTTP_PORT, hostname: HTTP_URL })) {
        serveHttp(conn)
    }
}

async function serveHttp(conn: Deno.Conn) {
    for await (const req of Deno.serveHttp(conn)) {
        try {
            const filePath = path.join(Deno.cwd(), FILE_SERVER_PATH, new URL(req.request.url).pathname)
            const file = Deno.openSync(filePath)
            const response = new Response(file.readable, {
                headers: { 'Content-Type': getMimeType(req.request.url)! }
            })
            req.respondWith(response)
        }
        
        catch (e) {
            req.respondWith(
                new Response("Not Found", {
                    status: 200,
                    statusText: "Not Found"
                })
            )
        }
    }
}
