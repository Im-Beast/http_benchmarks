import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { FILE_SERVER_PATH } from "./BENCHMARK_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "12.6.0";

if (import.meta.main) {
  const app = new Application();

  app.use(async (context, next) => {
    try {
      await context.send({
        root: FILE_SERVER_PATH,
      });
    } catch {
      await next();
    }
  });

  await app.listen({ port: HTTP_PORT, hostname: HTTP_URL });
}
