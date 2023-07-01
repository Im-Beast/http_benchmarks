import { assertEquals } from "./deps.ts";

import { PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../benchmarks/SERVER_DATA.ts";
import { getBenchmarkList } from "../src/get_benchmarks.ts";

const benchmarks = (await getBenchmarkList())["hello_world"];

Deno.test("hello_world", async (t) => {
  for (const benchmark of benchmarks) {
    await t.step(benchmark.name, async () => {
      const deno = new Deno.Command("deno", {
        args: ["run", "--unstable", "--allow-read", "--allow-net", "--allow-env", benchmark.path],
        stdin: "null",
        stderr: "piped",
        stdout: "null",
      });
      const denoSubprocess = deno.spawn();

      // wait for a second so deno can fully start
      await new Promise((r) => setTimeout(r, 1000));

      for (let i = 0; i < 10; ++i) {
        assertEquals(await (await fetch(PROTOCOL_HTTP_URL_PORT)).text(), RESPONSE_MESSAGE);
      }

      denoSubprocess.kill();
      await denoSubprocess.output();
    });
  }
});
