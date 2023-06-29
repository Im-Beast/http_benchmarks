import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "std serve";
export const DESCRIPTION = "";
export const VERSION = "0.192.0";

if (import.meta.main) {
  await serve(() => new Response(RESPONSE_MESSAGE), {
    port: HTTP_PORT,
    hostname: HTTP_URL,
  });
}
