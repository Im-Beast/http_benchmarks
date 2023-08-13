import fastro from "https://deno.land/x/fastro@v0.78.2/server/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Fastro (flash)";
export const DESCRIPTION = "";
export const VERSION = "0.78.2";

if (import.meta.main) {
  const app = fastro();

  app.get("/", () => HELLO_WORLD_MESSAGE);

  await app.serve({
    port: HTTP_PORT,
  });
}
