import { crayon } from "./deps.ts";

import { PROTOCOL_HTTP_URL_PORT } from "../benchmarks/SERVER_DATA.ts";
import { averageBenchmarkerData, normalizeData } from "./normalize_data.ts";

import type { BenchmarkInfo, BenchmarkResult, OhaJsonOutput } from "./types.ts";

const textDecoder = new TextDecoder();

export async function benchmarkFramework(
  info: BenchmarkInfo,
  steps: string[],
  trackSteps: boolean,
): Promise<BenchmarkResult> {
  const deno = new Deno.Command("deno", {
    args: ["run", "--unstable", "--allow-read", "--allow-net", "--allow-env", info.path],
    stdin: "null",
    stderr: "piped",
    stdout: "null",
  });
  const denoSubprocess = deno.spawn();

  // wait for a second so deno can fully start
  await new Promise((r) => setTimeout(r, 1000));

  let benchmarkerOutput: BenchmarkResult;
  for (const route of steps) {
    const testedUrl = `${PROTOCOL_HTTP_URL_PORT}/${route}`;

    const oha = new Deno.Command("oha", {
      args: [testedUrl, "-n", "25000", "-c", "64", "-j", "--no-tui"], // 25k requests | 64 concurrent workers | return as json | don't run tui
      stdin: "null",
      stderr: "piped",
      stdout: "piped",
    });

    const output = await oha.output();
    const parsedOutput: OhaJsonOutput = JSON.parse(
      textDecoder.decode(output.stdout),
    );
    const convertedOutput = normalizeData(info, parsedOutput);

    benchmarkerOutput &&= averageBenchmarkerData(benchmarkerOutput, convertedOutput);
    benchmarkerOutput ??= convertedOutput;

    if (trackSteps) {
      benchmarkerOutput.steps[route] = convertedOutput;
    }

    if (benchmarkerOutput.successRate !== 1) {
      throw new Error(
        `${info.name} didn't achieve 100% success rate, instead achieved ${benchmarkerOutput.successRate} at ${route} route (${testedUrl})`,
      );
    }
  }

  try {
    denoSubprocess.kill();
  } catch (error) {
    console.log(crayon.yellow("==== Start of subprocess stderr ====="));
    await denoSubprocess.stderr.pipeTo(Deno.stderr.writable);
    console.log(crayon.yellow("====  End of subprocess stderr  ====="));
    throw error;
  }

  return benchmarkerOutput!;
}
