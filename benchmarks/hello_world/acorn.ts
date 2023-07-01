import { Router } from "https://deno.land/x/acorn@0.3.0/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Acorn";
export const DESCRIPTION = "";
export const VERSION = "0.3.0";

if (import.meta.main) {
  const app = new Router();

  app.get("/", () => RESPONSE_MESSAGE);

  await app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  });
}
