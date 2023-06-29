import Aqua from "https://deno.land/x/aqua@v1.3.5/aqua.ts";
import { FILE_SERVER_PATH, HTTP_PORT } from "../SERVER_DATA.ts";

export const NAME = "Aqua";
export const DESCRIPTION = "";
export const VERSION = "1.3.5";

if (import.meta.main) {
  const app = new Aqua(HTTP_PORT);
  app.serve(FILE_SERVER_PATH, "/");
}
