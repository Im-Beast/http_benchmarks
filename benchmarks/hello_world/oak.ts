import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "12.6.0";

if (import.meta.main) {
  const app = new Application();

  app.use((context) => {
    context.response.body = HELLO_WORLD_MESSAGE;
  });

  await app.listen({ port: HTTP_PORT, hostname: HTTP_URL });
}
