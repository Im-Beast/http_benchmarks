import { Hydra } from "https://deno.land/x/hydra@0.1.1/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { FILE_SERVER_PATH } from "./BENCHMARK_DATA.ts";

export const NAME = "Hydra";
export const DESCRIPTION = "";
export const VERSION = "0.1.1";

if (import.meta.main) {
  const app = new Hydra(HTTP_URL, HTTP_PORT);

  app.staticDir("/", FILE_SERVER_PATH);

  await app.serve();
}
