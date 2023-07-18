import { Context, createDefaultHandler, createGetRoute } from "https://deno.land/x/composium@v0.1.1/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Composium";
export const DESCRIPTION = "";
export const VERSION = "0.1.1";

if (import.meta.main) {
  const helloWorld = (ctx: Context) => {
    ctx.response = new Response(HELLO_WORLD_MESSAGE);
    return ctx;
  };

  const route = createGetRoute({ pathname: "/" })(helloWorld);
  const handler = createDefaultHandler(route);

  await Deno.serve({ hostname: HTTP_URL, port: HTTP_PORT }, handler).finished;
}
