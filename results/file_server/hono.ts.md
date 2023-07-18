# File server
## Name: Hono 

### Version: 3.3.1
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
    <td>3.23k</td>
    <td>299.44k</td>
    <td>18.23k</td>
    <td>8.22 MiB</td>
    <td>41.10</td>
    <td>0.59</td>
    <td>48.70</td>
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
  <td>90.74k</td>
  <td>90.74k</td>
  <td>90.74k</td>
  <td>90.74k</td>
  <td>3835.77k</td>
  <td>4686.79k</td>
  <td>7048.57k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>43.01</td>
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
  <td>3.23k</td>
  <td>299.44k</td>
  <td>18.23k</td>
  <td>8.22</td>
  <td>90.74k</td>
  <td>90.74k</td>
  <td>90.74k</td>
  <td>90.74k</td>
  <td>3835.77k</td>
  <td>4686.79k</td>
  <td>7048.57k</td>
</tr><tr>
  <td>text.txt</td>
  <td>5.48k</td>
  <td>766.28k</td>
  <td>38.51k</td>
  <td>0.07</td>
  <td>50.03k</td>
  <td>50.03k</td>
  <td>50.03k</td>
  <td>50.03k</td>
  <td>5354.14k</td>
  <td>6276.22k</td>
  <td>98538.60k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.28k</td>
  <td>121.18k</td>
  <td>6.51k</td>
  <td>573.33</td>
  <td>82.94k</td>
  <td>82.94k</td>
  <td>82.94k</td>
  <td>82.94k</td>
  <td>3887.10k</td>
  <td>4671.40k</td>
  <td>6647.45k</td>
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
  <td>41.10</td>
  <td>0.59</td>
  <td>48.70</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>43.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.08</td>
  <td>0.66</td>
  <td>45.57</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>42.94</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.67</td>
  <td>0.15</td>
  <td>52.65</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.10</td>
  <td>43.08</td>
</tr></table>