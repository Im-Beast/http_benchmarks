# Name: Deno.serveHttp 
  
  ### Version: Deno 1.35.0
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
    <td>2.00k</td>
    <td>208.12k</td>
    <td>7.73k</td>
    <td>5.12 MiB</td>
    <td>41.28</td>
    <td>10.33</td>
    <td>46.05</td>
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
  <td>598.28k</td>
  <td>598.28k</td>
  <td>598.28k</td>
  <td>598.28k</td>
  <td>3006.86k</td>
  <td>3437.42k</td>
  <td>4975.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.06</td>
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
  <td>2.00k</td>
  <td>208.12k</td>
  <td>7.73k</td>
  <td>5.12</td>
  <td>598.28k</td>
  <td>598.28k</td>
  <td>598.28k</td>
  <td>598.28k</td>
  <td>3006.86k</td>
  <td>3437.42k</td>
  <td>4975.96k</td>
</tr><tr>
  <td>text.txt</td>
  <td>5.38k</td>
  <td>384.47k</td>
  <td>28.16k</td>
  <td>0.08</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>4450.58k</td>
  <td>6768.93k</td>
  <td>164171.26k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.71k</td>
  <td>51.15k</td>
  <td>2.15k</td>
  <td>564.69</td>
  <td>600.64k</td>
  <td>600.64k</td>
  <td>600.64k</td>
  <td>600.64k</td>
  <td>2764.05k</td>
  <td>3131.97k</td>
  <td>6278.97k</td>
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
  <td>41.28</td>
  <td>10.33</td>
  <td>46.05</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.12</td>
  <td>4.46</td>
  <td>45.00</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>41.26</td>
  <td>0.16</td>
  <td>49.13</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.07</td>
  <td>43.00</td>
  <td>46.05</td>
</tr></table>