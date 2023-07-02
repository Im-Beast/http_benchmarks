import { assertEquals, join } from "./deps.ts";

import { FILE_SERVER_PATH, FILE_SERVER_STEPS, PROTOCOL_HTTP_URL_PORT } from "../benchmarks/SERVER_DATA.ts";
import { getBenchmarkList } from "../src/get_benchmarks.ts";

const benchmarks = (await getBenchmarkList())["file_server"];

const fileData: Record<string, Uint8Array> = {};

for (const [_, fileName] of FILE_SERVER_STEPS) {
  const filePath = join(FILE_SERVER_PATH, fileName);

  const fileInfo = await Deno.stat(filePath);
  const file = await Deno.open(filePath);
  const buffer = new Uint8Array(fileInfo.size);
  await file.read(buffer);

  fileData[fileName] = buffer;
}

Deno.test("file_server", async (t) => {
  for (const benchmark of benchmarks) {
    await t.step(benchmark.name, async (t) => {
      const deno = new Deno.Command("deno", {
        args: ["run", "--unstable", "--allow-read", "--allow-net", "--allow-env", benchmark.path],
        stdin: "null",
        stderr: "piped",
        stdout: "null",
      });
      const denoSubprocess = deno.spawn();

      // wait for a second so deno can fully start
      await new Promise((r) => setTimeout(r, 1000));

      for (const fileName in fileData) {
        await t.step(fileName, async () => {
          const route = `${PROTOCOL_HTTP_URL_PORT}${fileName}`;
          const readyBuffer = fileData[fileName];

          for (let i = 0; i < 10; ++i) {
            const response = await fetch(route);
            const buffer = new Uint8Array(await response.arrayBuffer());

            assertEquals(buffer, readyBuffer);
          }
        });
      }

      denoSubprocess.kill();
      await denoSubprocess.output();
    });
  }
});
