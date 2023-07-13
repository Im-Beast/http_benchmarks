<<<<<<< Updated upstream
import vixeny from "https://deno.land/x/endofunctor@v0.0.67/fun.ts";
=======
import vixeny from "https://deno.land/x/endofunctor@v0.0.66/fun.ts";
>>>>>>> Stashed changes
import { PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Vixeny – Response";
export const DESCRIPTION = "Using type: 'response'";
<<<<<<< Updated upstream
export const VERSION = "0.0.67";
=======
export const VERSION = "0.0.66";
>>>>>>> Stashed changes

if (import.meta.main) {
  await Deno.serve(
    vixeny({ hasName: PROTOCOL_HTTP_URL_PORT })([
      {
        path: "/",
        type: "response",
        r: () => new Response(RESPONSE_MESSAGE),
      },
    ]),
  ).finished;
}
