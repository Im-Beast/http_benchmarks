# File server
## Name: Deno.serve + serveDir from std 

### Version: std 0.198.0
### Deno version: 1.36.0

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
    <td>2.03k</td>
    <td>134.43k</td>
    <td>5.46k</td>
    <td>8.21 MiB</td>
    <td>41.12</td>
    <td>5.99</td>
    <td>52.48</td>
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
  <td>83.30k</td>
  <td>83.30k</td>
  <td>83.30k</td>
  <td>83.30k</td>
  <td>3763.25k</td>
  <td>4454.61k</td>
  <td>6522.87k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.98</td>
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
  <td>2.03k</td>
  <td>134.43k</td>
  <td>5.46k</td>
  <td>8.21</td>
  <td>83.30k</td>
  <td>83.30k</td>
  <td>83.30k</td>
  <td>83.30k</td>
  <td>3763.25k</td>
  <td>4454.61k</td>
  <td>6522.87k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>6.32k</td>
  <td>7.63k</td>
  <td>1.32k</td>
  <td>2.30k</td>
  <td>5545.96k</td>
  <td>5545.96k</td>
  <td>5545.96k</td>
  <td>5545.96k</td>
  <td>7253.68k</td>
  <td>7364.46k</td>
  <td>7589.65k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.62k</td>
  <td>169.38k</td>
  <td>9.38k</td>
  <td>0.07</td>
  <td>69.19k</td>
  <td>69.19k</td>
  <td>69.19k</td>
  <td>69.19k</td>
  <td>3709.87k</td>
  <td>5837.66k</td>
  <td>10979.81k</td>
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
  <td>41.12</td>
  <td>5.99</td>
  <td>52.48</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.98</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>10.01</td>
  <td>0.21</td>
  <td>55.83</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>42.13</td>
  <td>42.98</td>
  <td>44.68</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.13</td>
  <td>2.33</td>
  <td>48.94</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>43.03</td>
</tr></table>