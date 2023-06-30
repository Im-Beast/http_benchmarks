# Name: Deno.serve + serveDir from std 
  
  ### Version: std 0.192.0
  ### Deno version: 1.34.3

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
    <td>2.13k</td>
    <td>344.12k</td>
    <td>12.75k</td>
    <td>8.18 MiB</td>
    <td>41.45</td>
    <td>12.26</td>
    <td>52.12</td>
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
  <td>700.80k</td>
  <td>700.80k</td>
  <td>700.80k</td>
  <td>700.80k</td>
  <td>3108.96k</td>
  <td>3808.63k</td>
  <td>6629.61k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.03</td>
  <td>42.96</td>
  <td>43.55</td>
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
  <td>2.13k</td>
  <td>344.12k</td>
  <td>12.75k</td>
  <td>8.18</td>
  <td>700.80k</td>
  <td>700.80k</td>
  <td>700.80k</td>
  <td>700.80k</td>
  <td>3108.96k</td>
  <td>3808.63k</td>
  <td>6629.61k</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.62k</td>
  <td>411.47k</td>
  <td>22.36k</td>
  <td>0.07</td>
  <td>400.38k</td>
  <td>400.38k</td>
  <td>400.38k</td>
  <td>400.38k</td>
  <td>4272.09k</td>
  <td>5600.99k</td>
  <td>11228.72k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.11k</td>
  <td>121.15k</td>
  <td>6.70k</td>
  <td>597.69</td>
  <td>625.58k</td>
  <td>625.58k</td>
  <td>625.58k</td>
  <td>625.58k</td>
  <td>3200.68k</td>
  <td>3705.64k</td>
  <td>5486.09k</td>
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
  <td>41.45</td>
  <td>12.26</td>
  <td>52.12</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.03</td>
  <td>42.96</td>
  <td>43.55</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.28</td>
  <td>3.17</td>
  <td>46.99</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.04</td>
  <td>42.95</td>
  <td>43.05</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.25</td>
  <td>0.21</td>
  <td>56.25</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.94</td>
  <td>44.01</td>
</tr></table>