# File server
## Name: Deno.serve + serveDir from std 

### Version: std 0.197.0
### Deno version: 1.35.2

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
    <td>1.60k</td>
    <td>5.67k</td>
    <td>847.66</td>
    <td>8.14 MiB</td>
    <td>41.45</td>
    <td>3.95</td>
    <td>51.06</td>
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
  <td>568.58k</td>
  <td>568.58k</td>
  <td>568.58k</td>
  <td>568.58k</td>
  <td>2666.99k</td>
  <td>3118.51k</td>
  <td>4589.63k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.15</td>
  <td>43.00</td>
  <td>45.01</td>
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
  <td>1.60k</td>
  <td>5.67k</td>
  <td>847.66</td>
  <td>8.14</td>
  <td>568.58k</td>
  <td>568.58k</td>
  <td>568.58k</td>
  <td>568.58k</td>
  <td>2666.99k</td>
  <td>3118.51k</td>
  <td>4589.63k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.83k</td>
  <td>7.52k</td>
  <td>952.41</td>
  <td>1.40k</td>
  <td>2631.74k</td>
  <td>2631.74k</td>
  <td>2631.74k</td>
  <td>2631.74k</td>
  <td>4750.26k</td>
  <td>4859.59k</td>
  <td>5170.44k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.71k</td>
  <td>23.06k</td>
  <td>1.26k</td>
  <td>0.07</td>
  <td>667.31k</td>
  <td>667.31k</td>
  <td>667.31k</td>
  <td>667.31k</td>
  <td>2904.74k</td>
  <td>3600.82k</td>
  <td>5746.06k</td>
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
  <td>41.45</td>
  <td>3.95</td>
  <td>51.06</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.15</td>
  <td>43.00</td>
  <td>45.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>16.47</td>
  <td>0.32</td>
  <td>71.21</td>
  <td>4.51</td>
  <td>4.51</td>
  <td>4.51</td>
  <td>4.51</td>
  <td>48.56</td>
  <td>52.53</td>
  <td>59.00</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.37</td>
  <td>7.75</td>
  <td>51.89</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.07</td>
  <td>42.95</td>
  <td>43.96</td>
</tr></table>