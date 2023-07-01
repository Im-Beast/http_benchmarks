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
    <td>1.93k</td>
    <td>253.31k</td>
    <td>9.17k</td>
    <td>8.14 MiB</td>
    <td>41.49</td>
    <td>1.06</td>
    <td>51.52</td>
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
  <td>701.57k</td>
  <td>701.57k</td>
  <td>701.57k</td>
  <td>701.57k</td>
  <td>2556.48k</td>
  <td>2916.09k</td>
  <td>4544.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.48</td>
  <td>43.00</td>
  <td>43.94</td>
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
  <td>1.93k</td>
  <td>253.31k</td>
  <td>9.17k</td>
  <td>8.14</td>
  <td>701.57k</td>
  <td>701.57k</td>
  <td>701.57k</td>
  <td>701.57k</td>
  <td>2556.48k</td>
  <td>2916.09k</td>
  <td>4544.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.74k</td>
  <td>44.15k</td>
  <td>1.99k</td>
  <td>0.07</td>
  <td>400.80k</td>
  <td>400.80k</td>
  <td>400.80k</td>
  <td>400.80k</td>
  <td>3127.66k</td>
  <td>3976.25k</td>
  <td>5886.40k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.68k</td>
  <td>13.01k</td>
  <td>1.03k</td>
  <td>595.22</td>
  <td>521.40k</td>
  <td>521.40k</td>
  <td>521.40k</td>
  <td>521.40k</td>
  <td>2869.51k</td>
  <td>3304.56k</td>
  <td>4853.58k</td>
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
  <td>41.49</td>
  <td>1.06</td>
  <td>51.52</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.48</td>
  <td>43.00</td>
  <td>43.94</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.35</td>
  <td>1.05</td>
  <td>46.72</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.06</td>
  <td>42.99</td>
  <td>43.89</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.18</td>
  <td>0.21</td>
  <td>57.28</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.09</td>
  <td>42.96</td>
  <td>43.93</td>
</tr></table>