# File server
## Name: Deno.serve 

### Version: 1.35.1
### Deno version: 1.35.1

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
    <td>3.02k</td>
    <td>562.05k</td>
    <td>23.65k</td>
    <td>8.21 MiB</td>
    <td>41.15</td>
    <td>5.78</td>
    <td>45.58</td>
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
  <td>83.07k</td>
  <td>83.07k</td>
  <td>83.07k</td>
  <td>83.07k</td>
  <td>3651.39k</td>
  <td>4355.93k</td>
  <td>8740.02k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.00</td>
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
  <td>3.02k</td>
  <td>562.05k</td>
  <td>23.65k</td>
  <td>8.21</td>
  <td>83.07k</td>
  <td>83.07k</td>
  <td>83.07k</td>
  <td>83.07k</td>
  <td>3651.39k</td>
  <td>4355.93k</td>
  <td>8740.02k</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.00k</td>
  <td>597.73k</td>
  <td>23.04k</td>
  <td>0.07</td>
  <td>71.30k</td>
  <td>71.30k</td>
  <td>71.30k</td>
  <td>71.30k</td>
  <td>4598.18k</td>
  <td>6274.37k</td>
  <td>13544.95k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.68k</td>
  <td>9.06k</td>
  <td>1.16k</td>
  <td>570.79</td>
  <td>494.93k</td>
  <td>494.93k</td>
  <td>494.93k</td>
  <td>494.93k</td>
  <td>3199.12k</td>
  <td>4211.17k</td>
  <td>5608.70k</td>
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
  <td>41.15</td>
  <td>5.78</td>
  <td>45.58</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.00</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.06</td>
  <td>3.31</td>
  <td>45.93</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>42.91</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.84</td>
  <td>0.15</td>
  <td>52.03</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.18</td>
  <td>43.87</td>
</tr></table>