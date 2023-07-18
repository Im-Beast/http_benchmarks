import { DanetApplication, Module } from "https://deno.land/x/danet@1.8.0/mod.ts";
import { HTTP_PORT } from "../SERVER_DATA.ts";
import { FILE_SERVER_PATH } from "./BENCHMARK_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.8.0";

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
