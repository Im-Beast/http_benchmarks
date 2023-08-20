import nhttp from "https://deno.land/x/nhttp@1.3.7/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "NHttp";
export const DESCRIPTION = "";
export const VERSION = "1.3.7";

if (import.meta.main) {
  const app = nhttp();

  app.get("/", () => HELLO_WORLD_MESSAGE);

  app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  })?.finished;
}
