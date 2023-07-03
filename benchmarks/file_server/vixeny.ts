import vixeny from "https://deno.land/x/endofunctor@v0.0.63/fun.ts";
import { FILE_SERVER_PATH, PROTOCOL_HTTP_URL_PORT } from "../SERVER_DATA.ts";

export const NAME = "Vixeny";
export const DESCRIPTION = "";
export const VERSION = "0.0.63";

if (import.meta.main) {
  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        type: "static",
        path: FILE_SERVER_PATH + "/",
        name: "/",
        mime: true,
      },
    ]),
  ).finished;
}
