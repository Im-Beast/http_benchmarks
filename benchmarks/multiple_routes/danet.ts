import { Controller, DanetApplication, Get, Module, Post } from "https://deno.land/x/danet@1.8.0/mod.ts";

import { HTTP_PORT } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Danet";
export const DESCRIPTION = "";
export const VERSION = "1.8.0";

if (import.meta.main) {
  @Controller()
  class MultipleRoutesController {
    counter = 0;

    @Get(MULTIPLE_ROUTES.HELLO_WORLD)
    hello() {
      return MULTIPLE_ROUTES_HELLO;
    }

    @Get(MULTIPLE_ROUTES.RANDOM_NUMBER)
    randomNumber() {
      return `${Math.random()}`;
    }

    @Post(MULTIPLE_ROUTES.PLUS_1)
    plus1() {
      this.counter++;
      return MULTIPLE_ROUTES_OK;
    }

    @Post(MULTIPLE_ROUTES.MINUS_1)
    minus1() {
      this.counter--;
      return MULTIPLE_ROUTES_OK;
    }

    @Get(MULTIPLE_ROUTES.COUNT)
    count() {
      return `${this.counter}`;
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
