import { groupByHeaders } from "./headers.ts";
import { Benchmark } from "./mod.ts";
import { BenchmarkResult } from "./types.ts";

export function formatNumber(number: number): string {
  return number > 1000 ? (number / 1000).toFixed(2) + "k" : number.toFixed(2);
}

export function formatResult(data: Benchmark, result: BenchmarkResult): string {
  let output = `# ${data.name}
## Name: ${result.name} 
${result.description ? `### Description: ${result.description}` : ""}
### Version: ${result.version}
### Deno version: ${Deno.version.deno}

## Summary
<table>
<tr>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr>
<tr>
    <td>${formatNumber(result.throughput.mean)}</td>
    <td>${formatNumber(result.throughput.max)}</td>
    <td>${formatNumber(result.throughput.standardDeviation)}</td>
    <td>${formatNumber(result.throughput.sizePerSecond)} MiB</td>
    <td>${formatNumber(result.latency.average)}</td>
    <td>${formatNumber(result.latency.min)}</td>
    <td>${formatNumber(result.latency.max)}</td>
</tr>
</table>

## Percentiles

<table>
<tr>
  <td align="center">Mesaure</td>
  <td align="center">p10</td>
  <td align="center">p25</td>
  <td align="center">p50</td>
  <td align="center">p75</td>
  <td align="center">p90</td>
  <td align="center">p95</td>
  <td align="center">p99</td>
</tr>
<tr>
  <td>Throughput (rps)</td>
  <td>${formatNumber(result.throughput.percentiles.p10)}</td>
  <td>${formatNumber(result.throughput.percentiles.p25)}</td>
  <td>${formatNumber(result.throughput.percentiles.p50)}</td>
  <td>${formatNumber(result.throughput.percentiles.p75)}</td>
  <td>${formatNumber(result.throughput.percentiles.p90)}</td>
  <td>${formatNumber(result.throughput.percentiles.p95)}</td>
  <td>${formatNumber(result.throughput.percentiles.p99)}</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>${formatNumber(result.latency.percentiles.p10)}</td>
  <td>${formatNumber(result.latency.percentiles.p25)}</td>
  <td>${formatNumber(result.latency.percentiles.p50)}</td>
  <td>${formatNumber(result.latency.percentiles.p75)}</td>
  <td>${formatNumber(result.latency.percentiles.p90)}</td>
  <td>${formatNumber(result.latency.percentiles.p95)}</td>
  <td>${formatNumber(result.latency.percentiles.p99)}</td>
</tr>
</table>
`;

  if (Object.keys(result.steps).length) {
    output += "\n## Individual test steps";

    let throughput = `

### Throughput

<table>
<tr>
  <td align="center" rowspan="2">Step</td>
  <td align="center" rowspan="2">Mean</td>
  <td align="center" rowspan="2">Max</td>
  <td align="center" rowspan="2">Standard deviation</td>
  <td align="center" rowspan="2">Size per second</td>
  <td align="center" colspan="7">Percentiles</td>
</tr>
<tr>
  <!-- still Step -->
  <!-- still Mean -->
  <!-- still Max -->
  <!-- still Standard deviation -->
  <!-- still Size per second -->
  <td align="center">p10</td>
  <td align="center">p25</td>
  <td align="center">p50</td>
  <td align="center">p75</td>
  <td align="center">p90</td>
  <td align="center">p95</td>
  <td align="center">p99</td>
</tr>
`;

    let latency = `

### Latency

<table>
<tr>
  <td align="center" rowspan="2">Step</td>
  <td align="center" rowspan="2">Avg</td>
  <td align="center" rowspan="2">Min</td>
  <td align="center" rowspan="2">Max</td>
  <td align="center" colspan="7">Percentiles</td>
</tr>
<tr>
  <!-- still Avg -->
  <!-- still Min -->
  <!-- still Max -->
  <td>p10</td>
  <td>p25</td>
  <td>p50</td>
  <td>p75</td>
  <td>p90</td>
  <td>p95</td>
  <td>p99</td>
</tr>
`;

    for (const key in result.steps) {
      const step = result.steps[key];

      throughput += `<tr>
  <td>${key}</td>
  <td>${formatNumber(step.throughput.mean)}</td>
  <td>${formatNumber(step.throughput.max)}</td>
  <td>${formatNumber(step.throughput.standardDeviation)}</td>
  <td>${formatNumber(step.throughput.sizePerSecond)}</td>
  <td>${formatNumber(step.throughput.percentiles.p10)}</td>
  <td>${formatNumber(step.throughput.percentiles.p25)}</td>
  <td>${formatNumber(step.throughput.percentiles.p50)}</td>
  <td>${formatNumber(step.throughput.percentiles.p75)}</td>
  <td>${formatNumber(step.throughput.percentiles.p90)}</td>
  <td>${formatNumber(step.throughput.percentiles.p95)}</td>
  <td>${formatNumber(step.throughput.percentiles.p99)}</td>
</tr>`;

      step.throughput.percentiles;

      latency += `<tr>
  <td>${key}</td>
  <td>${formatNumber(step.latency.average)}</td>
  <td>${formatNumber(step.latency.min)}</td>
  <td>${formatNumber(step.latency.max)}</td>
  <td>${formatNumber(step.latency.percentiles.p10)}</td>
  <td>${formatNumber(step.latency.percentiles.p25)}</td>
  <td>${formatNumber(step.latency.percentiles.p50)}</td>
  <td>${formatNumber(step.latency.percentiles.p75)}</td>
  <td>${formatNumber(step.latency.percentiles.p90)}</td>
  <td>${formatNumber(step.latency.percentiles.p95)}</td>
  <td>${formatNumber(step.latency.percentiles.p99)}</td>
</tr>`;
    }

    output += throughput + "</table>";
    output += latency + "</table>";
  }

  return output;
}

export function formatResultComparison(data: Benchmark, results: BenchmarkResult[]): string {
  let table = `# ${data.name}
  
<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <!-- still Name -->
    <td align="center">Throughput</td>
    <td align="center">Latency</td>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr>`;

  const bestThroughput = results.sort((a, b) => b.throughput.mean - a.throughput.mean)[0];
  const bestLatency = results.toSorted((a, b) => a.latency.average - b.latency.average)[0];
  for (const data of results) {
    table += `<tr>
    <td><a href="./${data.fileName}.md">${data.name}</a></td>
    <td>${formatNumber(100 * (data.throughput.mean / bestThroughput.throughput.mean))}%</td>
    <td>${formatNumber(100 * (bestLatency.latency.average / data.latency.average))}%</td>
    <td>${formatNumber(data.throughput.mean)}</td>
    <td>${formatNumber(data.throughput.max)}</td>
    <td>${formatNumber(data.throughput.standardDeviation)}</td>
    <td>${formatNumber(data.throughput.sizePerSecond)} MiB</td>
    <td>${formatNumber(data.latency.average)}</td>
    <td>${formatNumber(data.latency.min)}</td>
    <td>${formatNumber(data.latency.max)}</td>
</tr>
`;
  }

  table += "</table>";

  return table;
}

export function formatGrouppedResultsComparison(data: Benchmark, dataset: BenchmarkResult[]): string {
  const grouppedByHeaders = groupByHeaders(dataset);

  let markdown = `# ${data.name}
## Benchmarks groupped by headers they respond with`;

  const tables: [headerAmount: number, table: string][] = [];

  for (const group in grouppedByHeaders) {
    const headers = group.split(",");
    const header = headers.map((header) => `\`${header}\``).reduce((p, n) => p + (p ? "," : "") + n, "");

    let table = `\n\n### ${header}\n\n
<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <!-- still Name -->
    <td align="center">Throughput</td>
    <td align="center">Latency</td>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr>`;

    const dataset = grouppedByHeaders[group];
    const bestThroughput = dataset.sort((a, b) => b.throughput.mean - a.throughput.mean)[0];
    const bestLatency = dataset.toSorted((a, b) => a.latency.average - b.latency.average)[0];
    for (const data of dataset) {
      table += `<tr>
    <td><a href="./${data.fileName}.md">${data.name}</a></td>
    <td>${formatNumber(100 * (data.throughput.mean / bestThroughput.throughput.mean))}%</td>
    <td>${formatNumber(100 * (bestLatency.latency.average / data.latency.average))}%</td>
    <td>${formatNumber(data.throughput.mean)}</td>
    <td>${formatNumber(data.throughput.max)}</td>
    <td>${formatNumber(data.throughput.standardDeviation)}</td>
    <td>${formatNumber(data.throughput.sizePerSecond)} MiB</td>
    <td>${formatNumber(data.latency.average)}</td>
    <td>${formatNumber(data.latency.min)}</td>
    <td>${formatNumber(data.latency.max)}</td>
</tr>
`;
    }

    table += "</table>";

    tables.push([headers.length, table]);
  }

  tables.sort(([a], [b]) => b - a);

  for (const [_, table] of tables) {
    markdown += table;
  }

  return markdown;
}
