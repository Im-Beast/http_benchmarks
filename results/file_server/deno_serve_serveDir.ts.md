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
    <td>1.92k</td>
    <td>169.46k</td>
    <td>6.32k</td>
    <td>8.18 MiB</td>
    <td>41.27</td>
    <td>6.48</td>
    <td>47.06</td>
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
  <td>500.43k</td>
  <td>500.43k</td>
  <td>500.43k</td>
  <td>500.43k</td>
  <td>2987.42k</td>
  <td>3685.66k</td>
  <td>5580.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.04</td>
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
  <td>1.92k</td>
  <td>169.46k</td>
  <td>6.32k</td>
  <td>8.18</td>
  <td>500.43k</td>
  <td>500.43k</td>
  <td>500.43k</td>
  <td>500.43k</td>
  <td>2987.42k</td>
  <td>3685.66k</td>
  <td>5580.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.92k</td>
  <td>90.88k</td>
  <td>3.71k</td>
  <td>0.07</td>
  <td>375.16k</td>
  <td>375.16k</td>
  <td>375.16k</td>
  <td>375.16k</td>
  <td>3332.12k</td>
  <td>4404.82k</td>
  <td>7225.04k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.12k</td>
  <td>209.25k</td>
  <td>8.03k</td>
  <td>594.47</td>
  <td>556.80k</td>
  <td>556.80k</td>
  <td>556.80k</td>
  <td>556.80k</td>
  <td>2892.49k</td>
  <td>3624.82k</td>
  <td>5522.80k</td>
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
  <td>41.27</td>
  <td>6.48</td>
  <td>47.06</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.22</td>
  <td>3.21</td>
  <td>47.61</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.02</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.23</td>
  <td>0.20</td>
  <td>55.11</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.03</td>
</tr></table>