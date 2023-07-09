import {
  Context,
  createDefaultHandler,
  createGetRoute,
  createPostRoute,
} from "https://deno.land/x/composium@v0.1.1/mod.ts";
import { HTTP_PORT, HTTP_URL, MULTIPLE_ROUTES, RESPONSE_MESSAGE } from "../SERVER_DATA.ts";

export const NAME = "Composium";
export const DESCRIPTION = "";
export const VERSION = "0.1.1";

if (import.meta.main) {
  const helloWorld = createGetRoute({ pathname: MULTIPLE_ROUTES.HELLO_WORLD })((ctx: Context) => {
    ctx.response = new Response(RESPONSE_MESSAGE);
    return ctx;
  });

  const randomNumber = createGetRoute({ pathname: MULTIPLE_ROUTES.RANDOM_NUMBER })((ctx: Context) => {
    ctx.response = new Response(`${Math.random()}`);
    return ctx;
  });

  let counter = 0;
  const plusOne = createPostRoute({ pathname: MULTIPLE_ROUTES.PLUS_1 })((ctx: Context) => {
    counter++;
    ctx.response = new Response("ok");
    return ctx;
  });

  const minusOne = createPostRoute({ pathname: MULTIPLE_ROUTES.MINUS_1 })((ctx: Context) => {
    counter--;
    ctx.response = new Response("ok");
    return ctx;
  });
  const count = createGetRoute({ pathname: MULTIPLE_ROUTES.COUNT })((ctx: Context) => {
    ctx.response = new Response(`${counter}`);
    return ctx;
  });

  const handler = createDefaultHandler(helloWorld, randomNumber, plusOne, minusOne, count);

  await Deno.serve({ hostname: HTTP_URL, port: HTTP_PORT }, handler).finished;
}
