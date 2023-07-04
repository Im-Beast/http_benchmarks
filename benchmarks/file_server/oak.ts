import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { FILE_SERVER_PATH, HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "12.5.0";

const opts = {
  root: FILE_SERVER_PATH,
};

if (import.meta.main) {
  const app = new Application();

  app.use(async (context, next) => {
    try {
      await context.send(opts);
    } catch {
      await next();
    }
  });

  await app.listen({ port: HTTP_PORT, hostname: HTTP_URL });
}
