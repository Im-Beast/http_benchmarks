# Name: Deno.serveHttp 
  
  ### Version: Deno 1.35.0
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
    <td>1.71k</td>
    <td>11.94k</td>
    <td>1.19k</td>
    <td>5.13 MiB</td>
    <td>41.24</td>
    <td>9.36</td>
    <td>45.84</td>
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
  <td>500.24k</td>
  <td>500.24k</td>
  <td>500.24k</td>
  <td>500.24k</td>
  <td>3005.66k</td>
  <td>3583.78k</td>
  <td>5628.61k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.01</td>
  <td>42.03</td>
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
  <td>1.71k</td>
  <td>11.94k</td>
  <td>1.19k</td>
  <td>5.13</td>
  <td>500.24k</td>
  <td>500.24k</td>
  <td>500.24k</td>
  <td>500.24k</td>
  <td>3005.66k</td>
  <td>3583.78k</td>
  <td>5628.61k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.26k</td>
  <td>223.91k</td>
  <td>9.25k</td>
  <td>0.08</td>
  <td>503.96k</td>
  <td>503.96k</td>
  <td>503.96k</td>
  <td>503.96k</td>
  <td>3424.45k</td>
  <td>5108.07k</td>
  <td>12614.02k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.70k</td>
  <td>36.02k</td>
  <td>1.81k</td>
  <td>565.21</td>
  <td>600.53k</td>
  <td>600.53k</td>
  <td>600.53k</td>
  <td>600.53k</td>
  <td>2713.51k</td>
  <td>3508.77k</td>
  <td>6305.06k</td>
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
  <td>41.24</td>
  <td>9.36</td>
  <td>45.84</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>43.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.08</td>
  <td>4.55</td>
  <td>44.09</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.90</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>41.26</td>
  <td>0.18</td>
  <td>48.42</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.04</td>
  <td>43.02</td>
  <td>46.38</td>
</tr></table>