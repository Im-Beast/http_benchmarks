import { assert, assertEquals, assertStringIncludes, join } from "./deps.ts";

import { PROTOCOL_HTTP_URL_PORT } from "../benchmarks/SERVER_DATA.ts";
import { getBenchmarkList } from "../src/get_benchmarks.ts";
import { getMimeType } from "https://deno.land/x/hono@v3.2.7/utils/mime.ts";

import { FILE_SERVER_PATH } from "../benchmarks/file_server/BENCHMARK_DATA.ts";

const benchmarks = (await getBenchmarkList())["file_server"];

let counter = 0;
async function updateChangeFile() {
  ++counter;
  await Deno.writeTextFile(join(FILE_SERVER_PATH, "this-changes.txt"), `${counter}`);
}
await updateChangeFile();

const headers: Record<string, string[]> = {};

Deno.test("file_server", async (t) => {
  for (const benchmark of benchmarks) {
    await t.step({
      name: benchmark.name,
      sanitizeExit: false,
      sanitizeOps: false,
      sanitizeResources: false,
      fn: async (t) => {
        const deno = new Deno.Command("deno", {
          args: ["run", "--unstable", "--allow-read", "--allow-net", "--allow-env", benchmark.path],
          stdin: "null",
          stderr: "piped",
          stdout: "null",
        });
        const denoSubprocess = deno.spawn();

        // wait for a second so deno can fully start
        await new Promise((r) => setTimeout(r, 1000));

        for await (const { name: fileName } of Deno.readDir(FILE_SERVER_PATH)) {
          await t.step(fileName, async () => {
            const filePath = join(FILE_SERVER_PATH, fileName);
            const route = `${PROTOCOL_HTTP_URL_PORT}${fileName}`;

            for (let i = 0; i < 10; ++i) {
              await updateChangeFile();

              const fileInfo = await Deno.stat(filePath);
              const file = await Deno.open(filePath);
              const readyBuffer = new Uint8Array(fileInfo.size);
              await file.read(readyBuffer);
              await file.close();

              const response = await fetch(route);
              const buffer = new Uint8Array(await response.arrayBuffer());

              assertEquals(buffer, readyBuffer);

              const contentType = response.headers.get("content-type")?.split(";")?.[0];

              if (contentType) {
                assertStringIncludes(
                  getMimeType(fileName)!.toLowerCase(),
                  contentType?.toLowerCase(),
                  "Invalid content-type header",
                );
              } else {
                assert(false, "Missing content-type header");
              }
            }
          });
        }

        denoSubprocess.kill();
        await denoSubprocess.output();
      },
    });
  }
});

addEventListener("unload", async () => {
  await Deno.writeTextFile("headers.json", JSON.stringify(headers));
  await Deno.remove(join(FILE_SERVER_PATH, "this-changes.txt"));
});
