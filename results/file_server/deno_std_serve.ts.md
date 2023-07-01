# Name: std serve + serveDir 
  
  ### Version: 0.192.0
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
    <td>1.59k</td>
    <td>5.97k</td>
    <td>637.68</td>
    <td>5.09 MiB</td>
    <td>41.57</td>
    <td>15.49</td>
    <td>66.82</td>
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
  <td>890.06k</td>
  <td>890.06k</td>
  <td>890.06k</td>
  <td>890.06k</td>
  <td>2378.36k</td>
  <td>2664.60k</td>
  <td>3377.10k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.08</td>
  <td>42.99</td>
  <td>43.98</td>
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
  <td>1.59k</td>
  <td>5.97k</td>
  <td>637.68</td>
  <td>5.09</td>
  <td>890.06k</td>
  <td>890.06k</td>
  <td>890.06k</td>
  <td>890.06k</td>
  <td>2378.36k</td>
  <td>2664.60k</td>
  <td>3377.10k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.20k</td>
  <td>192.51k</td>
  <td>9.84k</td>
  <td>0.08</td>
  <td>335.86k</td>
  <td>335.86k</td>
  <td>335.86k</td>
  <td>335.86k</td>
  <td>3313.55k</td>
  <td>3870.12k</td>
  <td>7019.48k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.25k</td>
  <td>120.66k</td>
  <td>7.09k</td>
  <td>519.41</td>
  <td>92.15k</td>
  <td>92.15k</td>
  <td>92.15k</td>
  <td>92.15k</td>
  <td>4916.20k</td>
  <td>6425.33k</td>
  <td>19939.65k</td>
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
  <td>41.57</td>
  <td>15.49</td>
  <td>66.82</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.08</td>
  <td>42.99</td>
  <td>43.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.39</td>
  <td>8.27</td>
  <td>51.62</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.20</td>
  <td>42.99</td>
  <td>43.99</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>44.93</td>
  <td>0.24</td>
  <td>56.00</td>
  <td>41.00</td>
  <td>41.00</td>
  <td>41.00</td>
  <td>41.00</td>
  <td>50.07</td>
  <td>50.97</td>
  <td>52.96</td>
</tr></table>