import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";
import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";

export const NAME = "std serve serveDir";
export const DESCRIPTION = "";
export const VERSION = "0.192.0";

if (import.meta.main) {
  await serve((request) =>
    serveDir(request, {
      fsRoot: FILE_SERVER_PATH,
    }), { hostname: HTTP_URL, port: HTTP_PORT });
}
