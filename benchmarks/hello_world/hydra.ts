import { Hydra } from "https://deno.land/x/hydra@0.1.1/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Hydra";
export const DESCRIPTION = "";
export const VERSION = "0.1.1";

if (import.meta.main) {
  const app = new Hydra(HTTP_URL, HTTP_PORT);

  app.get("/", () => HELLO_WORLD_MESSAGE);

  await app.serve();
}
