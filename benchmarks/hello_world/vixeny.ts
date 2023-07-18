import vixeny from "https://deno.land/x/endofunctor@v0.0.67/fun.ts";

import { PROTOCOL_HTTP_URL_PORT } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Vixeny";
export const DESCRIPTION = "";
export const VERSION = "0.0.67";

if (import.meta.main) {
  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        path: "/",
        f: () => HELLO_WORLD_MESSAGE,
      },
    ]),
  ).finished;
}
