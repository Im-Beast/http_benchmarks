import { DanetApplication, Module } from "https://deno.land/x/danet@1.7.4/mod.ts";
import { FILE_SERVER_PATH, HTTP_PORT } from "../SERVER_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.7.4";

if (import.meta.main) {
  @Module({
    controllers: [],
  })
  class FileServerModule {}

  const app = new DanetApplication();
  await app.init(FileServerModule);
  app.useStaticAssets(FILE_SERVER_PATH);
  await app.listen(HTTP_PORT);
}
