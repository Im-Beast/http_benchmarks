# Name: Deno.serve 
  
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
    <td>2.85k</td>
    <td>259.76k</td>
    <td>13.20k</td>
    <td>8.20 MiB</td>
    <td>41.19</td>
    <td>0.45</td>
    <td>45.00</td>
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
  <td>83.64k</td>
  <td>83.64k</td>
  <td>83.64k</td>
  <td>83.64k</td>
  <td>3963.72k</td>
  <td>6283.73k</td>
  <td>9878.05k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.01</td>
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
  <td>2.85k</td>
  <td>259.76k</td>
  <td>13.20k</td>
  <td>8.20</td>
  <td>83.64k</td>
  <td>83.64k</td>
  <td>83.64k</td>
  <td>83.64k</td>
  <td>3963.72k</td>
  <td>6283.73k</td>
  <td>9878.05k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.94k</td>
  <td>296.77k</td>
  <td>11.48k</td>
  <td>0.07</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>5000.73k</td>
  <td>6375.91k</td>
  <td>11320.27k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.39k</td>
  <td>147.87k</td>
  <td>8.83k</td>
  <td>572.09</td>
  <td>500.89k</td>
  <td>500.89k</td>
  <td>500.89k</td>
  <td>500.89k</td>
  <td>3214.02k</td>
  <td>3754.05k</td>
  <td>7138.45k</td>
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
  <td>41.19</td>
  <td>0.45</td>
  <td>45.00</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.10</td>
  <td>2.45</td>
  <td>47.12</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>42.91</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>40.74</td>
  <td>0.16</td>
  <td>53.07</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.13</td>
  <td>43.07</td>
</tr></table>