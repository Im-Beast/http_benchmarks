import cheetah from "https://deno.land/x/cheetah@v1.4.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "cheetah";
export const DESCRIPTION = "";
export const VERSION = "0.0.6821.4.0";

if (import.meta.main) {
  const app = new cheetah().get("/", () => HELLO_WORLD_MESSAGE);

  await app.serve({ port: HTTP_PORT, hostname: HTTP_URL });
}
