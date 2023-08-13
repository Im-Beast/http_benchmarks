# File server
## Name: Deno.serveHttp 

### Version: Deno 1.36.0
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
    <td>1.63k</td>
    <td>6.06k</td>
    <td>888.09</td>
    <td>5.11 MiB</td>
    <td>41.42</td>
    <td>9.35</td>
    <td>50.09</td>
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
  <td>601.03k</td>
  <td>601.03k</td>
  <td>601.03k</td>
  <td>601.03k</td>
  <td>2736.89k</td>
  <td>3205.46k</td>
  <td>4269.92k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.96</td>
  <td>44.02</td>
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
  <td>1.63k</td>
  <td>6.06k</td>
  <td>888.09</td>
  <td>5.11</td>
  <td>601.03k</td>
  <td>601.03k</td>
  <td>601.03k</td>
  <td>601.03k</td>
  <td>2736.89k</td>
  <td>3205.46k</td>
  <td>4269.92k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.70k</td>
  <td>21.65k</td>
  <td>1.46k</td>
  <td>582.53</td>
  <td>400.50k</td>
  <td>400.50k</td>
  <td>400.50k</td>
  <td>400.50k</td>
  <td>3004.23k</td>
  <td>4092.11k</td>
  <td>6102.75k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.99k</td>
  <td>97.73k</td>
  <td>4.29k</td>
  <td>0.08</td>
  <td>700.06k</td>
  <td>700.06k</td>
  <td>700.06k</td>
  <td>700.06k</td>
  <td>2884.83k</td>
  <td>3841.89k</td>
  <td>8923.41k</td>
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
  <td>41.42</td>
  <td>9.35</td>
  <td>50.09</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.96</td>
  <td>44.02</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.03</td>
  <td>0.23</td>
  <td>55.74</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>40.94</td>
  <td>45.91</td>
  <td>46.99</td>
  <td>51.97</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.19</td>
  <td>0.31</td>
  <td>47.02</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.04</td>
  <td>42.18</td>
  <td>43.11</td>
</tr></table>