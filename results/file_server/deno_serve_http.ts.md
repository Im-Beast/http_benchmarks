# Name: Deno.serveHttp 
  
  ### Version: Deno 1.34.3
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
    <td>327.68k</td>
    <td>11.93k</td>
    <td>5.11 MiB</td>
    <td>41.33</td>
    <td>10.53</td>
    <td>47.02</td>
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
  <td>554.40k</td>
  <td>554.40k</td>
  <td>554.40k</td>
  <td>554.40k</td>
  <td>2903.14k</td>
  <td>3413.12k</td>
  <td>4629.13k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.03</td>
  <td>42.91</td>
  <td>43.05</td>
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
  <td>327.68k</td>
  <td>11.93k</td>
  <td>5.11</td>
  <td>554.40k</td>
  <td>554.40k</td>
  <td>554.40k</td>
  <td>554.40k</td>
  <td>2903.14k</td>
  <td>3413.12k</td>
  <td>4629.13k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.18k</td>
  <td>99.20k</td>
  <td>4.35k</td>
  <td>0.08</td>
  <td>446.55k</td>
  <td>446.55k</td>
  <td>446.55k</td>
  <td>446.55k</td>
  <td>3674.73k</td>
  <td>5031.25k</td>
  <td>14912.31k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.71k</td>
  <td>56.81k</td>
  <td>2.55k</td>
  <td>560.89</td>
  <td>505.61k</td>
  <td>505.61k</td>
  <td>505.61k</td>
  <td>505.61k</td>
  <td>2958.39k</td>
  <td>3863.06k</td>
  <td>7140.62k</td>
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
  <td>41.33</td>
  <td>10.53</td>
  <td>47.02</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.03</td>
  <td>42.91</td>
  <td>43.05</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.16</td>
  <td>0.28</td>
  <td>47.12</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.12</td>
  <td>43.24</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.55</td>
  <td>0.18</td>
  <td>48.71</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>43.06</td>
  <td>44.82</td>
  <td>47.32</td>
</tr></table>