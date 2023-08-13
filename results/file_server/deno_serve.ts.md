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
    <td>1.81k</td>
    <td>104.51k</td>
    <td>4.05k</td>
    <td>8.21 MiB</td>
    <td>41.17</td>
    <td>4.30</td>
    <td>47.23</td>
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
  <td>91.07k</td>
  <td>91.07k</td>
  <td>91.07k</td>
  <td>91.07k</td>
  <td>3491.84k</td>
  <td>4164.64k</td>
  <td>6434.21k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.11</td>
  <td>43.83</td>
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
  <td>1.81k</td>
  <td>104.51k</td>
  <td>4.05k</td>
  <td>8.21</td>
  <td>91.07k</td>
  <td>91.07k</td>
  <td>91.07k</td>
  <td>91.07k</td>
  <td>3491.84k</td>
  <td>4164.64k</td>
  <td>6434.21k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.01k</td>
  <td>85.99k</td>
  <td>3.55k</td>
  <td>667.46</td>
  <td>667.07k</td>
  <td>667.07k</td>
  <td>667.07k</td>
  <td>667.07k</td>
  <td>3404.03k</td>
  <td>4001.47k</td>
  <td>5266.75k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.02k</td>
  <td>45.89k</td>
  <td>2.43k</td>
  <td>0.07</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>4096.18k</td>
  <td>4765.47k</td>
  <td>10335.21k</td>
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
  <td>41.17</td>
  <td>4.30</td>
  <td>47.23</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.11</td>
  <td>43.83</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>34.90</td>
  <td>0.20</td>
  <td>56.81</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>42.03</td>
  <td>42.69</td>
  <td>43.96</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.13</td>
  <td>0.52</td>
  <td>46.13</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.01</td>
</tr></table>