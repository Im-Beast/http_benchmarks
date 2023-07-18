import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { HTTP_PORT, HTTP_URL } from "../SERVER_DATA.ts";
import { MULTIPLE_ROUTES, MULTIPLE_ROUTES_HELLO, MULTIPLE_ROUTES_OK } from "./BENCHMARK_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "12.6.0";

if (import.meta.main) {
  const app = new Application();

  let count = 0;

  app.use((context) => {
    const route = context.request.url.pathname;

    switch (context.request.method) {
      case "GET":
        switch (route) {
          case MULTIPLE_ROUTES.HELLO_WORLD:
            context.response.body = MULTIPLE_ROUTES_HELLO;
            break;
          case MULTIPLE_ROUTES.RANDOM_NUMBER:
            context.response.body = `${Math.random()}`;
            break;
          case MULTIPLE_ROUTES.COUNT:
            context.response.body = `${count}`;
            break;
        }
        break;

      case "POST":
        switch (route) {
          case MULTIPLE_ROUTES.PLUS_1:
            count++;
            context.response.body = MULTIPLE_ROUTES_OK;
            break;
          case MULTIPLE_ROUTES.MINUS_1:
            count--;
            context.response.body = MULTIPLE_ROUTES_OK;
            break;
        }
        break;
    }

    if (!context.response.body) {
      context.response.body = "Not found";
      context.response.status = 404;
    }
  });

  await app.listen({ port: HTTP_PORT, hostname: HTTP_URL });
}
