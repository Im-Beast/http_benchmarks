import { Controller, DanetApplication, Get, Module } from "https://deno.land/x/danet@1.8.0/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { HELLO_WORLD_MESSAGE } from "./BENCHMARK_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.8.0";

if (import.meta.main) {
  @Controller()
  class HelloWorldController {
    @Get("/")
    hello() {
      return HELLO_WORLD_MESSAGE;
    }
  }

  @Module({
    controllers: [HelloWorldController],
  })
  class HelloWorldModule {}

  const app = new DanetApplication();
  await app.init(HelloWorldModule);
  await app.listen(HTTP_PORT);
}
