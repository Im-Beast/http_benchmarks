# Name: Deno.serve 
  
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
    <td>2.63k</td>
    <td>441.70k</td>
    <td>19.35k</td>
    <td>8.22 MiB</td>
    <td>41.11</td>
    <td>2.30</td>
    <td>44.96</td>
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
  <td>71.43k</td>
  <td>71.43k</td>
  <td>71.43k</td>
  <td>71.43k</td>
  <td>4277.71k</td>
  <td>4912.23k</td>
  <td>7197.39k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>42.99</td>
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
  <td>2.63k</td>
  <td>441.70k</td>
  <td>19.35k</td>
  <td>8.22</td>
  <td>71.43k</td>
  <td>71.43k</td>
  <td>71.43k</td>
  <td>71.43k</td>
  <td>4277.71k</td>
  <td>4912.23k</td>
  <td>7197.39k</td>
</tr><tr>
  <td>text.txt</td>
  <td>4.17k</td>
  <td>301.69k</td>
  <td>18.25k</td>
  <td>0.07</td>
  <td>47.65k</td>
  <td>47.65k</td>
  <td>47.65k</td>
  <td>47.65k</td>
  <td>5448.93k</td>
  <td>6981.64k</td>
  <td>87634.74k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.86k</td>
  <td>112.99k</td>
  <td>4.30k</td>
  <td>573.47</td>
  <td>334.84k</td>
  <td>334.84k</td>
  <td>334.84k</td>
  <td>334.84k</td>
  <td>3303.39k</td>
  <td>4011.40k</td>
  <td>5602.48k</td>
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
  <td>41.11</td>
  <td>2.30</td>
  <td>44.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>42.99</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.03</td>
  <td>1.95</td>
  <td>45.26</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>42.71</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.65</td>
  <td>0.15</td>
  <td>47.43</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.01</td>
</tr></table>