import cheetah from "https://deno.land/x/cheetah@v0.13.0/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Cheetah";
export const DESCRIPTION = "";
export const VERSION = "0.13.0";

if (import.meta.main) {
  const app = new cheetah().get("/", () => RESPONSE_MESSAGE);

  await Deno.serve({ port: HTTP_PORT, hostname: HTTP_URL }, (request) => app.fetch(request)).finished;
}
