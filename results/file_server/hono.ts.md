# File server
## Name: Hono 

### Version: 3.4.1
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
    <td>1.76k</td>
    <td>44.61k</td>
    <td>1.95k</td>
    <td>8.17 MiB</td>
    <td>41.30</td>
    <td>9.17</td>
    <td>47.93</td>
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
  <td>501.12k</td>
  <td>501.12k</td>
  <td>501.12k</td>
  <td>501.12k</td>
  <td>3100.74k</td>
  <td>3985.33k</td>
  <td>5457.06k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.04</td>
  <td>42.25</td>
  <td>44.13</td>
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
  <td>1.76k</td>
  <td>44.61k</td>
  <td>1.95k</td>
  <td>8.17</td>
  <td>501.12k</td>
  <td>501.12k</td>
  <td>501.12k</td>
  <td>501.12k</td>
  <td>3100.74k</td>
  <td>3985.33k</td>
  <td>5457.06k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.91k</td>
  <td>10.23k</td>
  <td>1.13k</td>
  <td>640.81</td>
  <td>694.95k</td>
  <td>694.95k</td>
  <td>694.95k</td>
  <td>694.95k</td>
  <td>3111.20k</td>
  <td>3623.37k</td>
  <td>5005.92k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.14k</td>
  <td>96.28k</td>
  <td>4.34k</td>
  <td>0.07</td>
  <td>110.36k</td>
  <td>110.36k</td>
  <td>110.36k</td>
  <td>110.36k</td>
  <td>3490.38k</td>
  <td>4216.81k</td>
  <td>9231.90k</td>
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
  <td>9.17</td>
  <td>47.93</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.04</td>
  <td>42.25</td>
  <td>44.13</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>36.41</td>
  <td>0.22</td>
  <td>57.89</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>42.04</td>
  <td>42.93</td>
  <td>44.71</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.19</td>
  <td>4.14</td>
  <td>46.96</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.03</td>
  <td>42.11</td>
  <td>43.21</td>
</tr></table>