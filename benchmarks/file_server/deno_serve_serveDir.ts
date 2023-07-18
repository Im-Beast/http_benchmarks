import { serveDir } from "https://deno.land/std@0.194.0/http/file_server.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { FILE_SERVER_PATH } from "./BENCHMARK_DATA.ts";

export const NAME = "Deno.serve + serveDir from std";
export const DESCRIPTION = "";
export const VERSION = "std 0.194.0";

if (import.meta.main) {
  await Deno.serve({ hostname: HTTP_URL, port: HTTP_PORT }, (request) =>
    serveDir(request, {
      fsRoot: FILE_SERVER_PATH,
      quiet: true,
    })).finished;
}
