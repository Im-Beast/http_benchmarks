import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Deno.serve";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main) {
  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, () => new Response(RESPONSE_MESSAGE)).finished;
}
