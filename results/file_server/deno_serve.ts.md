# File server
## Name: Deno.serve 

### Version: 1.36.0
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
    <td>2.30k</td>
    <td>176.66k</td>
    <td>7.68k</td>
    <td>8.25 MiB</td>
    <td>40.95</td>
    <td>8.19</td>
    <td>44.00</td>
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
  <td>66.67k</td>
  <td>66.67k</td>
  <td>66.67k</td>
  <td>66.67k</td>
  <td>4639.84k</td>
  <td>5514.10k</td>
  <td>9536.67k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>41.96</td>
  <td>42.00</td>
  <td>42.56</td>
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
  <td>2.30k</td>
  <td>176.66k</td>
  <td>7.68k</td>
  <td>8.25</td>
  <td>66.67k</td>
  <td>66.67k</td>
  <td>66.67k</td>
  <td>66.67k</td>
  <td>4639.84k</td>
  <td>5514.10k</td>
  <td>9536.67k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.17k</td>
  <td>8.26k</td>
  <td>1.28k</td>
  <td>702.74</td>
  <td>602.22k</td>
  <td>602.22k</td>
  <td>602.22k</td>
  <td>602.22k</td>
  <td>3701.32k</td>
  <td>4450.76k</td>
  <td>6756.22k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.03k</td>
  <td>102.59k</td>
  <td>4.29k</td>
  <td>0.07</td>
  <td>66.26k</td>
  <td>66.26k</td>
  <td>66.26k</td>
  <td>66.26k</td>
  <td>3578.14k</td>
  <td>4519.88k</td>
  <td>10712.44k</td>
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
  <td>40.95</td>
  <td>8.19</td>
  <td>44.00</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>41.96</td>
  <td>42.00</td>
  <td>42.56</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>33.15</td>
  <td>0.14</td>
  <td>54.02</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>42.00</td>
  <td>42.01</td>
  <td>42.97</td>
</tr><tr>
  <td>text.txt</td>
  <td>40.94</td>
  <td>6.86</td>
  <td>44.10</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>41.98</td>
  <td>42.01</td>
  <td>42.11</td>
</tr></table>