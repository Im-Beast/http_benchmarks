import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Oak";
export const DESCRIPTION = "";
export const VERSION = "11.1.0";

if (import.meta.main) {
  const app = new Application();

  let count = 0;

  app.use((context) => {
    const route = context.request.url.pathname;

    switch (context.request.method) {
      case "GET":
        switch (route) {
          case MULTIPLE_ROUTES.HELLO_WORLD:
            context.response.body = RESPONSE_MESSAGE;
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
            context.response.body = "ok";
            break;
          case MULTIPLE_ROUTES.MINUS_1:
            count--;
            context.response.body = "ok";
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
