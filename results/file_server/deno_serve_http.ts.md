# File server
## Name: Deno.serveHttp 

### Version: Deno 1.36.0
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
    <td>145.03k</td>
    <td>7.36k</td>
    <td>5.15 MiB</td>
    <td>41.13</td>
    <td>9.89</td>
    <td>48.22</td>
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
  <td>333.49k</td>
  <td>333.49k</td>
  <td>333.49k</td>
  <td>333.49k</td>
  <td>3111.56k</td>
  <td>3817.65k</td>
  <td>4771.10k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.00</td>
  <td>42.01</td>
  <td>42.17</td>
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
  <td>145.03k</td>
  <td>7.36k</td>
  <td>5.15</td>
  <td>333.49k</td>
  <td>333.49k</td>
  <td>333.49k</td>
  <td>333.49k</td>
  <td>3111.56k</td>
  <td>3817.65k</td>
  <td>4771.10k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.83k</td>
  <td>51.22k</td>
  <td>2.44k</td>
  <td>604.17</td>
  <td>601.73k</td>
  <td>601.73k</td>
  <td>601.73k</td>
  <td>601.73k</td>
  <td>2625.39k</td>
  <td>3801.55k</td>
  <td>8686.66k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.32k</td>
  <td>231.90k</td>
  <td>10.36k</td>
  <td>0.08</td>
  <td>500.05k</td>
  <td>500.05k</td>
  <td>500.05k</td>
  <td>500.05k</td>
  <td>3350.45k</td>
  <td>4095.97k</td>
  <td>12930.68k</td>
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
  <td>41.13</td>
  <td>9.89</td>
  <td>48.22</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.00</td>
  <td>42.01</td>
  <td>42.17</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>38.60</td>
  <td>0.16</td>
  <td>48.97</td>
  <td>40.57</td>
  <td>40.57</td>
  <td>40.57</td>
  <td>40.57</td>
  <td>44.03</td>
  <td>45.11</td>
  <td>47.21</td>
</tr><tr>
  <td>text.txt</td>
  <td>40.99</td>
  <td>3.11</td>
  <td>43.39</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>41.99</td>
  <td>42.02</td>
  <td>42.96</td>
</tr></table>