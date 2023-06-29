# Name: Deno.serve + serveDir from std 
  
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
    <td>1.63k</td>
    <td>24.79k</td>
    <td>1.11k</td>
    <td>301.00 MiB</td>
    <td>40.27</td>
    <td>0.30</td>
    <td>51.85</td>
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
  <td>683.75k</td>
  <td>683.75k</td>
  <td>683.75k</td>
  <td>683.75k</td>
  <td>2657.03k</td>
  <td>3025.94k</td>
  <td>4089.13k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.23</td>
  <td>42.96</td>
  <td>43.29</td>
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
  <td>24.79k</td>
  <td>1.11k</td>
  <td>301.00</td>
  <td>683.75k</td>
  <td>683.75k</td>
  <td>683.75k</td>
  <td>683.75k</td>
  <td>2657.03k</td>
  <td>3025.94k</td>
  <td>4089.13k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.64k</td>
  <td>79.98k</td>
  <td>2.02k</td>
  <td>0.07</td>
  <td>632.14k</td>
  <td>632.14k</td>
  <td>632.14k</td>
  <td>632.14k</td>
  <td>2662.41k</td>
  <td>3001.59k</td>
  <td>4502.42k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.66k</td>
  <td>6.12k</td>
  <td>825.70</td>
  <td>597.90</td>
  <td>701.17k</td>
  <td>701.17k</td>
  <td>701.17k</td>
  <td>701.17k</td>
  <td>2706.80k</td>
  <td>3100.89k</td>
  <td>4009.45k</td>
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
  <td>40.27</td>
  <td>0.30</td>
  <td>51.85</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.23</td>
  <td>42.96</td>
  <td>43.29</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.38</td>
  <td>0.17</td>
  <td>47.13</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.05</td>
  <td>42.98</td>
  <td>43.07</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.07</td>
  <td>0.21</td>
  <td>54.79</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.04</td>
  <td>42.94</td>
  <td>43.05</td>
</tr></table>