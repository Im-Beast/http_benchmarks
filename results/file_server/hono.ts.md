# File server
## Name: Hono 

### Version: 3.4.3
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
    <td>2.10k</td>
    <td>164.65k</td>
    <td>7.09k</td>
    <td>8.23 MiB</td>
    <td>41.01</td>
    <td>6.71</td>
    <td>45.97</td>
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
  <td>87.73k</td>
  <td>87.73k</td>
  <td>87.73k</td>
  <td>87.73k</td>
  <td>3445.95k</td>
  <td>5002.96k</td>
  <td>8944.03k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>41.99</td>
  <td>42.02</td>
  <td>42.94</td>
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
  <td>164.65k</td>
  <td>7.09k</td>
  <td>8.23</td>
  <td>87.73k</td>
  <td>87.73k</td>
  <td>87.73k</td>
  <td>87.73k</td>
  <td>3445.95k</td>
  <td>5002.96k</td>
  <td>8944.03k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.12k</td>
  <td>8.70k</td>
  <td>1.48k</td>
  <td>685.40</td>
  <td>626.59k</td>
  <td>626.59k</td>
  <td>626.59k</td>
  <td>626.59k</td>
  <td>3681.41k</td>
  <td>4413.44k</td>
  <td>6136.28k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.94k</td>
  <td>13.46k</td>
  <td>1.76k</td>
  <td>0.07</td>
  <td>80.16k</td>
  <td>80.16k</td>
  <td>80.16k</td>
  <td>80.16k</td>
  <td>3806.64k</td>
  <td>5349.14k</td>
  <td>8829.75k</td>
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
  <td>41.01</td>
  <td>6.71</td>
  <td>45.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>41.99</td>
  <td>42.02</td>
  <td>42.94</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>33.99</td>
  <td>0.15</td>
  <td>50.31</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>40.97</td>
  <td>4.23</td>
  <td>45.99</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>41.99</td>
  <td>42.01</td>
  <td>42.29</td>
</tr></table>