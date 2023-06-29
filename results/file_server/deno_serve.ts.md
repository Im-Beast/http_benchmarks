# Name: Deno.serve + serveDir from std 
  
  ### Version: std 0.192.0

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
    <td>1.80k</td>
    <td>77.42k</td>
    <td>3.31k</td>
    <td>297.15 MiB</td>
    <td>40.48</td>
    <td>1.18</td>
    <td>55.50</td>
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
  <td>682.96k</td>
  <td>682.96k</td>
  <td>682.96k</td>
  <td>682.96k</td>
  <td>2689.77k</td>
  <td>3263.98k</td>
  <td>4956.70k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.49</td>
  <td>43.02</td>
</tr>
</table>

## Individual test steps

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
<tr>
  <td>lorem-20.txt</td>
  <td>1.80k</td>
  <td>77.42k</td>
  <td>3.31k</td>
  <td>297.15</td>
  <td>682.96k</td>
  <td>682.96k</td>
  <td>682.96k</td>
  <td>682.96k</td>
  <td>2689.77k</td>
  <td>3263.98k</td>
  <td>4956.70k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.14k</td>
  <td>285.18k</td>
  <td>10.47k</td>
  <td>0.07</td>
  <td>777.56k</td>
  <td>777.56k</td>
  <td>777.56k</td>
  <td>777.56k</td>
  <td>2508.79k</td>
  <td>2902.49k</td>
  <td>5777.50k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.75k</td>
  <td>9.10k</td>
  <td>1.02k</td>
  <td>590.18</td>
  <td>602.37k</td>
  <td>602.37k</td>
  <td>602.37k</td>
  <td>602.37k</td>
  <td>2875.59k</td>
  <td>3679.03k</td>
  <td>5227.86k</td>
</tr></table>

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
<tr>
  <td>lorem-20.txt</td>
  <td>40.48</td>
  <td>1.18</td>
  <td>55.50</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.49</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.28</td>
  <td>0.17</td>
  <td>48.11</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.01</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.59</td>
  <td>0.21</td>
  <td>57.53</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.03</td>
  <td>42.94</td>
  <td>43.04</td>
</tr></table>