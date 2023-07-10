# Name: Deno.serve + serveDir from std 
  
  ### Version: std 0.193.0
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
    <td>1.69k</td>
    <td>8.58k</td>
    <td>1.20k</td>
    <td>8.17 MiB</td>
    <td>41.30</td>
    <td>9.67</td>
    <td>48.34</td>
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
  <td>429.05k</td>
  <td>429.05k</td>
  <td>429.05k</td>
  <td>429.05k</td>
  <td>3196.72k</td>
  <td>3880.61k</td>
  <td>6286.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.04</td>
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
  <td>1.69k</td>
  <td>8.58k</td>
  <td>1.20k</td>
  <td>8.17</td>
  <td>429.05k</td>
  <td>429.05k</td>
  <td>429.05k</td>
  <td>429.05k</td>
  <td>3196.72k</td>
  <td>3880.61k</td>
  <td>6286.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.80k</td>
  <td>353.17k</td>
  <td>15.85k</td>
  <td>0.07</td>
  <td>400.55k</td>
  <td>400.55k</td>
  <td>400.55k</td>
  <td>400.55k</td>
  <td>3434.94k</td>
  <td>4100.26k</td>
  <td>9082.59k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.81k</td>
  <td>31.31k</td>
  <td>1.50k</td>
  <td>596.26</td>
  <td>712.02k</td>
  <td>712.02k</td>
  <td>712.02k</td>
  <td>712.02k</td>
  <td>2996.95k</td>
  <td>3706.47k</td>
  <td>5012.05k</td>
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
  <td>41.30</td>
  <td>9.67</td>
  <td>48.34</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.04</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.21</td>
  <td>3.17</td>
  <td>47.02</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.04</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.09</td>
  <td>0.19</td>
  <td>54.51</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.05</td>
  <td>43.04</td>
</tr></table>