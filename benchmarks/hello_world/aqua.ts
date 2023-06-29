import Aqua from "https://deno.land/x/aqua@v1.3.5/mod.ts";
import { HTTP_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Aqua";
export const DESCRIPTION = "";
export const VERSION = "1.3.5";

if (import.meta.main) {
  const app = new Aqua(HTTP_PORT);

  app.get("/", () => RESPONSE_MESSAGE);
}
