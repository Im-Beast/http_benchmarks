import { Controller, DanetApplication, Get, Module } from "https://deno.land/x/danet@1.8.0/mod.ts";
import { HTTP_PORT, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.8.0";

if (import.meta.main) {
  @Controller()
  class HelloWorldController {
    @Get("/")
    hello() {
      return RESPONSE_MESSAGE;
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
