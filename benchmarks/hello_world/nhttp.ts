import nhttp from "https://deno.land/x/nhttp@1.3.0/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "NHttp (flash)";
export const DESCRIPTION = "NHttp with `flash` option set to `true`";
export const VERSION = "1.3.0";

if (import.meta.main) {
  const app = nhttp();

  app.get("/", () => RESPONSE_MESSAGE);

  app.listen({
    hostname: HTTP_URL,
    port: HTTP_PORT,
  })?.finished;
}
