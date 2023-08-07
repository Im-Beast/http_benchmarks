# File server
## Name: Deno.serve 

### Version: 1.35.2
### Deno version: 1.35.2

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
    <td>2.41k</td>
    <td>139.92k</td>
    <td>7.54k</td>
    <td>8.20 MiB</td>
    <td>41.21</td>
    <td>2.57</td>
    <td>46.95</td>
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
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>4474.03k</td>
  <td>5097.68k</td>
  <td>7514.33k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.10</td>
  <td>43.14</td>
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
  <td>2.41k</td>
  <td>139.92k</td>
  <td>7.54k</td>
  <td>8.20</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>77.14k</td>
  <td>4474.03k</td>
  <td>5097.68k</td>
  <td>7514.33k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.77k</td>
  <td>7.16k</td>
  <td>1.02k</td>
  <td>627.23</td>
  <td>614.38k</td>
  <td>614.38k</td>
  <td>614.38k</td>
  <td>614.38k</td>
  <td>2973.57k</td>
  <td>3504.01k</td>
  <td>4620.53k</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.26k</td>
  <td>165.21k</td>
  <td>12.41k</td>
  <td>0.07</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>62.29k</td>
  <td>4624.53k</td>
  <td>5968.06k</td>
  <td>13953.44k</td>
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
  <td>41.21</td>
  <td>2.57</td>
  <td>46.95</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.10</td>
  <td>43.14</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>37.16</td>
  <td>0.21</td>
  <td>53.91</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>42.05</td>
  <td>42.93</td>
  <td>45.03</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.13</td>
  <td>3.26</td>
  <td>47.13</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.02</td>
  <td>42.09</td>
  <td>43.01</td>
</tr></table>