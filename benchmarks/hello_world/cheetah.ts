import cheetah from "https://deno.land/x/cheetah@v1.0.0-canary.1/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "cheetah";
export const DESCRIPTION = "";
export const VERSION = "1.0.0-canary.1";

if (import.meta.main) {
  const app = new cheetah().get("/", () => RESPONSE_MESSAGE);

  await app.serve({ port: HTTP_PORT, hostname: HTTP_URL });
}
