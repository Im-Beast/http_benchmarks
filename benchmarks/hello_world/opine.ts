import opine from "https://deno.land/x/opine@2.3.4/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Opine";
export const DESCRIPTION = "";
export const VERSION = "2.3.4";

if (import.meta.main) {
  const app = opine();

  app.get("/", (_request, response) => {
    response.send(HELLO_WORLD_MESSAGE);
  });

  app.listen(HTTP_PORT);
}
