# Name: Deno.serve + custom response 
  
  ### Version: std 0.192.0
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
    <td>3.94k</td>
    <td>514.47k</td>
    <td>28.35k</td>
    <td>8.22 MiB</td>
    <td>41.14</td>
    <td>14.27</td>
    <td>46.01</td>
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
  <td>111.69k</td>
  <td>111.69k</td>
  <td>111.69k</td>
  <td>111.69k</td>
  <td>4180.17k</td>
  <td>5462.86k</td>
  <td>12991.41k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
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
  <td>3.94k</td>
  <td>514.47k</td>
  <td>28.35k</td>
  <td>8.22</td>
  <td>111.69k</td>
  <td>111.69k</td>
  <td>111.69k</td>
  <td>111.69k</td>
  <td>4180.17k</td>
  <td>5462.86k</td>
  <td>12991.41k</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.17k</td>
  <td>580.38k</td>
  <td>22.83k</td>
  <td>0.07</td>
  <td>83.14k</td>
  <td>83.14k</td>
  <td>83.14k</td>
  <td>83.14k</td>
  <td>4725.23k</td>
  <td>6522.15k</td>
  <td>12634.49k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.32k</td>
  <td>241.81k</td>
  <td>10.45k</td>
  <td>574.55</td>
  <td>400.47k</td>
  <td>400.47k</td>
  <td>400.47k</td>
  <td>400.47k</td>
  <td>3407.03k</td>
  <td>4319.65k</td>
  <td>6457.36k</td>
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
  <td>41.14</td>
  <td>14.27</td>
  <td>46.01</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.04</td>
  <td>4.77</td>
  <td>47.02</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.03</td>
  <td>42.89</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>40.68</td>
  <td>0.15</td>
  <td>52.90</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.00</td>
</tr></table>