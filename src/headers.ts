import { BenchmarkResult } from "./types.ts";

const FORBIDDEN_HEADERS = [
  "accept-charset",
  "accept-encoding",
  "access-control-request-headers",
  "access-control-request-method",
  "connection",
  "content-length",
  "cookie",
  "date",
  "dnt",
  "expect",
  "host",
  "keep-alive",
  "origin",
  "permissions-policy",
  "referer",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "via",
];

export function filterForbiddenHeaders(headers: Headers): Headers {
  const filtered = new Headers();
  for (const [key, value] of headers.entries()) {
    const lowerCaseKey = key.toLowerCase();

    if (FORBIDDEN_HEADERS.includes(lowerCaseKey)) {
      continue;
    }
    filtered.set(lowerCaseKey, value);
  }
  return filtered;
}

export function stringifyHeaders(headers: Headers): string {
  return Array.from(headers.keys()).join(",");
}

export function groupByHeaders(results: BenchmarkResult[]): Record<string, BenchmarkResult[]> {
  const groupped: Record<string, BenchmarkResult[]> = {};

  for (const result of results) {
    const filteredHeaders = filterForbiddenHeaders(result.headers);
    const stringified = stringifyHeaders(filteredHeaders);

    groupped[stringified] ??= [];
    groupped[stringified].push(result);
  }

  return groupped;
}
