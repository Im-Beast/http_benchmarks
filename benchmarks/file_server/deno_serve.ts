import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { getMimeType } from "https://deno.land/x/hono@v3.3.0/utils/mime.ts";
import * as path from "https://deno.land/std@0.194.0/path/mod.ts";

export const NAME = "Deno.serve";
export const DESCRIPTION = "";
export const VERSION = "std 0.194.0";

if (import.meta.main) {
  await Deno.serve({ hostname: HTTP_URL, port: HTTP_PORT }, (request: Request) => {
    try {
      const filePath = path.join(Deno.cwd(), FILE_SERVER_PATH, new URL(request.url).pathname);
      const file = Deno.openSync(filePath);
      return new Response(file.readable, {
        headers: { "Content-Type": getMimeType(request.url)! },
      });
    } catch {
      return new Response("Not Found", {
        status: 404,
        statusText: "Not Found",
      });
    }
  }).finished;
}
