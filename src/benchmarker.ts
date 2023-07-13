import { crayon, normalize } from "./deps.ts";

import { PROTOCOL_HTTP_URL_PORT } from "../benchmarks/SERVER_DATA.ts";
import {
  divideNumericData,
  meanNumericData,
  multiplyNumericData,
  normalizeData,
  sumNumericObjects,
} from "./normalize_data.ts";

import type { BenchmarkInfo, BenchmarkResult, OhaJsonOutput } from "./types.ts";

const textDecoder = new TextDecoder();

export async function benchmarkFramework(
  info: BenchmarkInfo,
  steps: [method: string, route: string, weight: number][],
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
  await new Promise((r) => setTimeout(r, 100));

  // warmup

  const routeOutputs: Record<string, BenchmarkResult> = {};

  let sumWeight = 0;
  for (const [method, route, weight] of steps) {
    sumWeight += weight;

    const testedUrl = PROTOCOL_HTTP_URL_PORT.slice(0, -1) + normalize(`/${route}`);

    // warmup
    await (new Deno.Command("oha", {
      args: [testedUrl, "-m", method, "-n", "3000", "-c", "64", "-j", "--no-tui"],
      stdin: "null",
      stderr: "piped",
      stdout: "piped",
    })).output();

    const results: BenchmarkResult[] = [];
    for (let i = 0; i < 5; ++i) {
      const oha = new Deno.Command("oha", {
        args: [testedUrl, "-m", method, "-n", "9984", "-c", "64", "-j", "--no-tui"], // {method} method | 6.4k requests | 64 concurrent workers | return as json | don't run tui
        stdin: "null",
        stderr: "piped",
        stdout: "piped",
      });

      const output = await oha.output();
      const parsedOutput: OhaJsonOutput = JSON.parse(
        textDecoder.decode(output.stdout),
      );
      const convertedOutput = normalizeData(info, parsedOutput);

      results.push(convertedOutput);
    }

    const result = routeOutputs[route] = {} as BenchmarkResult;
    meanNumericData(result, results);

    if (result.successRate !== 1) {
      try {
        denoSubprocess.kill();
      } catch {
        console.log(crayon.yellow("==== Start of subprocess stderr ====="));
        await denoSubprocess.stderr.pipeTo(Deno.stdout.writable, { preventCancel: true });
        console.log(crayon.yellow("====  End of subprocess stderr  ====="));
      }

      throw new Error(
        `${info.fileName} didn't achieve 100% success rate, instead achieved ${result.successRate} at ${route} route (${testedUrl})`,
      );
    }

    multiplyNumericData(result, weight);
  }

  const benchmarkerOutput = {} as BenchmarkResult;
  for (const route in routeOutputs) {
    const output = routeOutputs[route];

    sumNumericObjects(benchmarkerOutput, output);

    if (trackSteps) {
      benchmarkerOutput.steps ??= {};
      benchmarkerOutput.steps[route] = structuredClone(output);
    }
  }
  divideNumericData(benchmarkerOutput!, sumWeight);

  try {
    denoSubprocess.kill();
  } catch (error) {
    console.log(crayon.yellow("==== Start of subprocess stderr ====="));
    await denoSubprocess.stderr.pipeTo(Deno.stdout.writable, { preventCancel: true });
    console.log(crayon.yellow("====  End of subprocess stderr  ====="));
    throw error;
  }

  return benchmarkerOutput!;
}
