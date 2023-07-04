import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { getMimeType } from "https://deno.land/x/hono@v3.2.7/utils/mime.ts";
import { join } from "https://deno.land/std@0.192.0/path/mod.ts";

export const NAME = "Deno.serve";
export const DESCRIPTION = "";
export const VERSION = "std 0.192.0";

const body = {
  status: 404,
  statusText: "Not Found",
};

const base = join(Deno.cwd(), FILE_SERVER_PATH);

if (import.meta.main) {
  await Deno.serve({ hostname: HTTP_URL, port: HTTP_PORT }, async (request: Request) => {
    try {
      const pathname = `/${request.url.split("/").pop()}`;
      const filePath = join(base, pathname);
      const file = await Deno.open(filePath);
      return new Response(file.readable, {
        headers: { "Content-Type": getMimeType(request.url)! },
      });
    } catch {
      return new Response(body.statusText, body);
    }
  }).finished;
}
