import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Deno.serve";
export const DESCRIPTION = "";
export const VERSION = `Deno ${Deno.version.deno}`;

if (import.meta.main) {
  await Deno.serve({
    port: HTTP_PORT,
    hostname: HTTP_URL,
  }, () => new Response(HELLO_WORLD_MESSAGE)).finished;
}
