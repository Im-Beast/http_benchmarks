import fastro from "https://deno.land/x/fastro@v0.70.5/server/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Fastro";
export const DESCRIPTION = "";
export const VERSION = "0.70.5";

if (import.meta.main) {
  const app = fastro();

  app.flash(false);
  app.get("/", () => HELLO_WORLD_MESSAGE);

  await app.serve({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  });
}
