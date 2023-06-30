# Name: Deno.serveHttp 
  
  ### Version: Deno 1.34.3
  ### Deno version: 1.34.3

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
    <td>2.01k</td>
    <td>271.78k</td>
    <td>10.01k</td>
    <td>5.12 MiB</td>
    <td>41.37</td>
    <td>10.69</td>
    <td>47.03</td>
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
  <td>665.82k</td>
  <td>665.82k</td>
  <td>665.82k</td>
  <td>665.82k</td>
  <td>3001.54k</td>
  <td>3586.23k</td>
  <td>4800.54k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.02</td>
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
  <td>2.01k</td>
  <td>271.78k</td>
  <td>10.01k</td>
  <td>5.12</td>
  <td>665.82k</td>
  <td>665.82k</td>
  <td>665.82k</td>
  <td>665.82k</td>
  <td>3001.54k</td>
  <td>3586.23k</td>
  <td>4800.54k</td>
</tr><tr>
  <td>text.txt</td>
  <td>74.48k</td>
  <td>50000.00k</td>
  <td>1883.07k</td>
  <td>0.08</td>
  <td>169.48k</td>
  <td>169.48k</td>
  <td>169.48k</td>
  <td>169.48k</td>
  <td>5068.90k</td>
  <td>6306.10k</td>
  <td>31297.71k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.82k</td>
  <td>79.28k</td>
  <td>3.26k</td>
  <td>565.29</td>
  <td>572.73k</td>
  <td>572.73k</td>
  <td>572.73k</td>
  <td>572.73k</td>
  <td>2881.77k</td>
  <td>3890.13k</td>
  <td>8278.71k</td>
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
  <td>41.37</td>
  <td>10.69</td>
  <td>47.03</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.13</td>
  <td>4.42</td>
  <td>48.03</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.00</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.70</td>
  <td>0.18</td>
  <td>50.08</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>44.12</td>
  <td>45.15</td>
  <td>48.06</td>
</tr></table>