import { Router } from "https://deno.land/x/acorn@0.3.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Acorn";
export const DESCRIPTION = "";
export const VERSION = "0.3.0";

if (import.meta.main) {
  const app = new Router();

  app.get("/", () => HELLO_WORLD_MESSAGE);

  await app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  });
}
