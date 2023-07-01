import { Controller, DanetApplication, Get, Module, Post } from "https://deno.land/x/danet@1.7.4/mod.ts";
import { HTTP_PORT, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.7.4";

if (import.meta.main) {
  @Controller()
  class MultipleRoutesController {
    counter = 0;

    @Get(MULTIPLE_ROUTES.HELLO_WORLD)
    hello() {
      return RESPONSE_MESSAGE;
    }

    @Get(MULTIPLE_ROUTES.RANDOM_NUMBER)
    randomNumber() {
      return `${Math.random()}`;
    }

    @Post(MULTIPLE_ROUTES.PLUS_1)
    plus1() {
      this.counter++;
      return "ok";
    }

    @Post(MULTIPLE_ROUTES.MINUS_1)
    minus1() {
      this.counter--;
      return "ok";
    }

    @Get(MULTIPLE_ROUTES.COUNT)
    count() {
      return `${this.count}`;
    }
  }

  @Module({
    controllers: [MultipleRoutesController],
  })
  class MultipleRoutesModule {}

  const app = new DanetApplication();
  await app.init(MultipleRoutesModule);
  await app.listen(HTTP_PORT);
}
