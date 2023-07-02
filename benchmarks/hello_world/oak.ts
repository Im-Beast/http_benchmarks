import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "12.5.0";

if (import.meta.main) {
  const app = new Application();

  app.use((context) => {
    context.response.body = RESPONSE_MESSAGE;
  });

  await app.listen({ port: HTTP_PORT, hostname: HTTP_URL });
}
