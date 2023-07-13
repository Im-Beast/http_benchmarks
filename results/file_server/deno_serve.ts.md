# Name: Deno.serve 
  
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
    <td>2.12k</td>
    <td>157.68k</td>
    <td>8.05k</td>
    <td>8.22 MiB</td>
    <td>41.08</td>
    <td>6.67</td>
    <td>46.00</td>
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
  <td>222.76k</td>
  <td>222.76k</td>
  <td>222.76k</td>
  <td>222.76k</td>
  <td>3920.89k</td>
  <td>5081.90k</td>
  <td>9711.89k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.54</td>
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
  <td>2.12k</td>
  <td>157.68k</td>
  <td>8.05k</td>
  <td>8.22</td>
  <td>222.76k</td>
  <td>222.76k</td>
  <td>222.76k</td>
  <td>222.76k</td>
  <td>3920.89k</td>
  <td>5081.90k</td>
  <td>9711.89k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.24k</td>
  <td>140.53k</td>
  <td>5.45k</td>
  <td>0.07</td>
  <td>83.50k</td>
  <td>83.50k</td>
  <td>83.50k</td>
  <td>83.50k</td>
  <td>3754.32k</td>
  <td>5314.36k</td>
  <td>10622.14k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.06k</td>
  <td>146.35k</td>
  <td>6.57k</td>
  <td>573.13</td>
  <td>500.25k</td>
  <td>500.25k</td>
  <td>500.25k</td>
  <td>500.25k</td>
  <td>3180.00k</td>
  <td>4193.20k</td>
  <td>6661.38k</td>
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
  <td>41.08</td>
  <td>6.67</td>
  <td>46.00</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.54</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.03</td>
  <td>2.95</td>
  <td>44.92</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.09</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.67</td>
  <td>0.15</td>
  <td>51.27</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>43.00</td>
</tr></table>