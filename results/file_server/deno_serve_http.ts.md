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
    <td>15.00k</td>
    <td>25148.52k</td>
    <td>577.73k</td>
    <td>283.27 MiB</td>
    <td>41.36</td>
    <td>4.97</td>
    <td>47.79</td>
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
  <td>444.03k</td>
  <td>444.03k</td>
  <td>444.03k</td>
  <td>444.03k</td>
  <td>3074.50k</td>
  <td>3675.70k</td>
  <td>6340.47k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.53</td>
  <td>44.96</td>
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
  <td>15.00k</td>
  <td>25148.52k</td>
  <td>577.73k</td>
  <td>283.27</td>
  <td>444.03k</td>
  <td>444.03k</td>
  <td>444.03k</td>
  <td>444.03k</td>
  <td>3074.50k</td>
  <td>3675.70k</td>
  <td>6340.47k</td>
</tr><tr>
  <td>text.txt</td>
  <td>54.72k</td>
  <td>100000.00k</td>
  <td>2294.12k</td>
  <td>0.08</td>
  <td>334.47k</td>
  <td>334.47k</td>
  <td>334.47k</td>
  <td>334.47k</td>
  <td>3673.26k</td>
  <td>4500.94k</td>
  <td>10416.66k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.60k</td>
  <td>54.79k</td>
  <td>1.67k</td>
  <td>563.93</td>
  <td>443.15k</td>
  <td>443.15k</td>
  <td>443.15k</td>
  <td>443.15k</td>
  <td>2957.89k</td>
  <td>3500.81k</td>
  <td>5203.53k</td>
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
  <td>4.97</td>
  <td>47.79</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.53</td>
  <td>44.96</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.23</td>
  <td>0.20</td>
  <td>47.09</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.04</td>
  <td>42.99</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.42</td>
  <td>0.16</td>
  <td>48.87</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.09</td>
  <td>43.03</td>
  <td>46.93</td>
</tr></table>