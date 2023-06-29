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
    <td>1.71k</td>
    <td>61.07k</td>
    <td>2.70k</td>
    <td>299.21 MiB</td>
    <td>40.31</td>
    <td>0.26</td>
    <td>54.77</td>
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
  <td>635.01k</td>
  <td>635.01k</td>
  <td>635.01k</td>
  <td>635.01k</td>
  <td>2757.67k</td>
  <td>3256.34k</td>
  <td>5026.85k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.12</td>
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
  <td>1.71k</td>
  <td>61.07k</td>
  <td>2.70k</td>
  <td>299.21</td>
  <td>635.01k</td>
  <td>635.01k</td>
  <td>635.01k</td>
  <td>635.01k</td>
  <td>2757.67k</td>
  <td>3256.34k</td>
  <td>5026.85k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.03k</td>
  <td>220.99k</td>
  <td>8.12k</td>
  <td>0.07</td>
  <td>667.85k</td>
  <td>667.85k</td>
  <td>667.85k</td>
  <td>667.85k</td>
  <td>2708.88k</td>
  <td>3334.05k</td>
  <td>6996.32k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.63k</td>
  <td>7.07k</td>
  <td>848.97</td>
  <td>594.30</td>
  <td>623.36k</td>
  <td>623.36k</td>
  <td>623.36k</td>
  <td>623.36k</td>
  <td>2660.04k</td>
  <td>3095.63k</td>
  <td>4274.40k</td>
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
  <td>40.31</td>
  <td>0.26</td>
  <td>54.77</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.12</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.19</td>
  <td>0.22</td>
  <td>48.82</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.98</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.31</td>
  <td>0.21</td>
  <td>59.15</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.20</td>
  <td>43.02</td>
</tr></table>