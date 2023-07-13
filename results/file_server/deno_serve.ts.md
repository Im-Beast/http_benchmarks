# Name: Deno.serve 
  
  ### Version: std 0.194.0
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
    <td>2.10k</td>
    <td>27.82k</td>
    <td>2.60k</td>
    <td>8.22 MiB</td>
    <td>41.08</td>
    <td>5.58</td>
    <td>44.90</td>
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
  <td>253.29k</td>
  <td>253.29k</td>
  <td>253.29k</td>
  <td>253.29k</td>
  <td>3834.60k</td>
  <td>5385.49k</td>
  <td>8374.50k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.89</td>
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
  <td>2.10k</td>
  <td>27.82k</td>
  <td>2.60k</td>
  <td>8.22</td>
  <td>253.29k</td>
  <td>253.29k</td>
  <td>253.29k</td>
  <td>253.29k</td>
  <td>3834.60k</td>
  <td>5385.49k</td>
  <td>8374.50k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.20k</td>
  <td>89.04k</td>
  <td>3.80k</td>
  <td>0.07</td>
  <td>75.72k</td>
  <td>75.72k</td>
  <td>75.72k</td>
  <td>75.72k</td>
  <td>3874.42k</td>
  <td>5131.47k</td>
  <td>12742.79k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.76k</td>
  <td>16.65k</td>
  <td>1.58k</td>
  <td>572.87</td>
  <td>445.86k</td>
  <td>445.86k</td>
  <td>445.86k</td>
  <td>445.86k</td>
  <td>3153.37k</td>
  <td>3974.73k</td>
  <td>5805.79k</td>
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
  <td>5.58</td>
  <td>44.90</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.89</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.01</td>
  <td>4.15</td>
  <td>43.76</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.07</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.70</td>
  <td>0.16</td>
  <td>51.85</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>43.01</td>
</tr></table>