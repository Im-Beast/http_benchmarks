# Name: Deno.serve + serveDir from std 
  
  ### Version: std 0.192.0
  ### Deno version: 1.35.0

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
    <td>2.01k</td>
    <td>164.57k</td>
    <td>6.29k</td>
    <td>8.16 MiB</td>
    <td>41.36</td>
    <td>9.99</td>
    <td>48.90</td>
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
  <td>620.55k</td>
  <td>620.55k</td>
  <td>620.55k</td>
  <td>620.55k</td>
  <td>3004.92k</td>
  <td>4237.26k</td>
  <td>6518.59k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.90</td>
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
  <td>2.01k</td>
  <td>164.57k</td>
  <td>6.29k</td>
  <td>8.16</td>
  <td>620.55k</td>
  <td>620.55k</td>
  <td>620.55k</td>
  <td>620.55k</td>
  <td>3004.92k</td>
  <td>4237.26k</td>
  <td>6518.59k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.78k</td>
  <td>11.17k</td>
  <td>1.45k</td>
  <td>0.07</td>
  <td>375.95k</td>
  <td>375.95k</td>
  <td>375.95k</td>
  <td>375.95k</td>
  <td>3145.34k</td>
  <td>4143.22k</td>
  <td>8174.49k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.72k</td>
  <td>77.19k</td>
  <td>3.03k</td>
  <td>594.55</td>
  <td>662.73k</td>
  <td>662.73k</td>
  <td>662.73k</td>
  <td>662.73k</td>
  <td>2804.57k</td>
  <td>3346.16k</td>
  <td>5137.80k</td>
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
  <td>41.36</td>
  <td>9.99</td>
  <td>48.90</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.90</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.22</td>
  <td>2.20</td>
  <td>47.60</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.21</td>
  <td>0.21</td>
  <td>53.69</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.94</td>
  <td>43.59</td>
</tr></table>