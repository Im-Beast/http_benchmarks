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
    <td>2.10k</td>
    <td>156.61k</td>
    <td>7.71k</td>
    <td>5.13 MiB</td>
    <td>41.23</td>
    <td>9.52</td>
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
  <td>557.27k</td>
  <td>557.27k</td>
  <td>557.27k</td>
  <td>557.27k</td>
  <td>3014.75k</td>
  <td>3845.96k</td>
  <td>5302.79k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.98</td>
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
  <td>156.61k</td>
  <td>7.71k</td>
  <td>5.13</td>
  <td>557.27k</td>
  <td>557.27k</td>
  <td>557.27k</td>
  <td>557.27k</td>
  <td>3014.75k</td>
  <td>3845.96k</td>
  <td>5302.79k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.35k</td>
  <td>290.71k</td>
  <td>12.82k</td>
  <td>0.08</td>
  <td>288.36k</td>
  <td>288.36k</td>
  <td>288.36k</td>
  <td>288.36k</td>
  <td>3283.57k</td>
  <td>5431.83k</td>
  <td>13105.33k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.77k</td>
  <td>82.36k</td>
  <td>3.28k</td>
  <td>565.26</td>
  <td>575.79k</td>
  <td>575.79k</td>
  <td>575.79k</td>
  <td>575.79k</td>
  <td>2727.80k</td>
  <td>3306.85k</td>
  <td>7149.54k</td>
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
  <td>41.23</td>
  <td>9.52</td>
  <td>46.00</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.12</td>
  <td>4.39</td>
  <td>45.11</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.48</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>41.24</td>
  <td>0.16</td>
  <td>47.29</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>43.99</td>
  <td>46.49</td>
</tr></table>