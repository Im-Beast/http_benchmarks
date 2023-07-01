import nhttp from "https://deno.land/x/nhttp@1.2.22/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "NHttp";
export const DESCRIPTION = "";
export const VERSION = "1.2.22";

if (import.meta.main) {
  const app = nhttp({
    flash: false,
  });

  app.get("/", () => RESPONSE_MESSAGE);

  await app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  }).finished;
}
