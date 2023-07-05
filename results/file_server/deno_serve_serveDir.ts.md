# Name: Deno.serve + serveDir from std 
  
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
    <td>2.00k</td>
    <td>184.88k</td>
    <td>8.68k</td>
    <td>8.16 MiB</td>
    <td>41.36</td>
    <td>4.92</td>
    <td>50.03</td>
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
  <td>500.11k</td>
  <td>500.11k</td>
  <td>500.11k</td>
  <td>500.11k</td>
  <td>2872.97k</td>
  <td>3646.30k</td>
  <td>5483.74k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.04</td>
  <td>42.97</td>
  <td>43.82</td>
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
  <td>184.88k</td>
  <td>8.68k</td>
  <td>8.16</td>
  <td>500.11k</td>
  <td>500.11k</td>
  <td>500.11k</td>
  <td>500.11k</td>
  <td>2872.97k</td>
  <td>3646.30k</td>
  <td>5483.74k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.03k</td>
  <td>163.63k</td>
  <td>6.23k</td>
  <td>0.07</td>
  <td>445.76k</td>
  <td>445.76k</td>
  <td>445.76k</td>
  <td>445.76k</td>
  <td>3238.10k</td>
  <td>4234.57k</td>
  <td>7712.09k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.72k</td>
  <td>9.35k</td>
  <td>994.89</td>
  <td>598.08</td>
  <td>663.69k</td>
  <td>663.69k</td>
  <td>663.69k</td>
  <td>663.69k</td>
  <td>2901.02k</td>
  <td>3348.76k</td>
  <td>4756.05k</td>
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
  <td>41.36</td>
  <td>4.92</td>
  <td>50.03</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.04</td>
  <td>42.97</td>
  <td>43.82</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.31</td>
  <td>3.79</td>
  <td>48.01</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.04</td>
  <td>42.96</td>
  <td>43.08</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.00</td>
  <td>0.21</td>
  <td>56.74</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>42.05</td>
  <td>42.95</td>
  <td>43.97</td>
</tr></table>