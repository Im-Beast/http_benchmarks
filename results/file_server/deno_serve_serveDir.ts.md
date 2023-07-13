# Name: Deno.serve + serveDir from std 
  
  ### Version: std 0.194.0
  ### Deno version: 1.35.1

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
    <td>2.23k</td>
    <td>213.73k</td>
    <td>10.95k</td>
    <td>8.17 MiB</td>
    <td>41.35</td>
    <td>8.36</td>
    <td>48.16</td>
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
  <td>600.34k</td>
  <td>600.34k</td>
  <td>600.34k</td>
  <td>600.34k</td>
  <td>2867.75k</td>
  <td>3614.09k</td>
  <td>5273.38k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.03</td>
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
  <td>2.23k</td>
  <td>213.73k</td>
  <td>10.95k</td>
  <td>8.17</td>
  <td>600.34k</td>
  <td>600.34k</td>
  <td>600.34k</td>
  <td>600.34k</td>
  <td>2867.75k</td>
  <td>3614.09k</td>
  <td>5273.38k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.96k</td>
  <td>185.53k</td>
  <td>6.95k</td>
  <td>0.07</td>
  <td>557.36k</td>
  <td>557.36k</td>
  <td>557.36k</td>
  <td>557.36k</td>
  <td>2790.69k</td>
  <td>3600.76k</td>
  <td>7077.38k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.90k</td>
  <td>83.63k</td>
  <td>3.64k</td>
  <td>590.73</td>
  <td>602.64k</td>
  <td>602.64k</td>
  <td>602.64k</td>
  <td>602.64k</td>
  <td>2892.56k</td>
  <td>3563.99k</td>
  <td>5895.76k</td>
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
  <td>41.35</td>
  <td>8.36</td>
  <td>48.16</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.03</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.28</td>
  <td>3.54</td>
  <td>47.23</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.08</td>
  <td>43.05</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.45</td>
  <td>0.20</td>
  <td>55.14</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.11</td>
  <td>43.05</td>
</tr></table>