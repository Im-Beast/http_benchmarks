import { Hydra } from "https://deno.land/x/hydra@0.1.0/mod.ts";
import { HTTP_PORT, HTTP_URL, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Hydra";
export const DESCRIPTION = "";
export const VERSION = "0.1.0";

if (import.meta.main) {
  const app = new Hydra(HTTP_URL, HTTP_PORT);

  app.get("/", () => RESPONSE_MESSAGE);

  await app.serve();
}
