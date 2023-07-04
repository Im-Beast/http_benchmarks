import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { getMimeType } from "https://deno.land/x/hono@v3.2.7/utils/mime.ts";
import { join } from "https://deno.land/std@0.192.0/path/mod.ts";

export const NAME = "Deno.serveHttp";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

const body = {
  status: 404,
  statusText: "Not Found",
};

const base = join(Deno.cwd(), FILE_SERVER_PATH);

if (import.meta.main) {
  for await (const conn of Deno.listen({ port: HTTP_PORT, hostname: HTTP_URL })) {
    serveHttp(conn);
  }
}

async function serveHttp(conn: Deno.Conn) {
  for await (const req of Deno.serveHttp(conn)) {
    try {
      const pathname = `/${req.request.url.split("/").pop()}`;
      const filePath = join(base, pathname)
      const file = await Deno.open(filePath);
      const response = new Response(file.readable, {
        headers: { "Content-Type": getMimeType(req.request.url)! },
      });
      req.respondWith(response);
    } catch {
      req.respondWith(
        new Response(body.statusText, body),
      );
    }
  }
}
