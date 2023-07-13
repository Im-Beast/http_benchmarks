# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>5.09k</td>
    <td>8.97k</td>
    <td>1.29k</td>
    <td>26.92 MiB</td>
    <td>12.55</td>
    <td>7.09</td>
    <td>19.94</td>
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
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>6308.47k</td>
  <td>6601.96k</td>
  <td>7455.72k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>15.23</td>
  <td>15.45</td>
  <td>15.98</td>
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
  <td>5.09k</td>
  <td>8.97k</td>
  <td>1.29k</td>
  <td>26.92</td>
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>3199.64k</td>
  <td>6308.47k</td>
  <td>6601.96k</td>
  <td>7455.72k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.38k</td>
  <td>14.38k</td>
  <td>2.47k</td>
  <td>0.45</td>
  <td>6788.42k</td>
  <td>6788.42k</td>
  <td>6788.42k</td>
  <td>6788.42k</td>
  <td>12890.01k</td>
  <td>13550.63k</td>
  <td>14349.86k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.55k</td>
  <td>6.49k</td>
  <td>744.45</td>
  <td>551.46</td>
  <td>712.43k</td>
  <td>712.43k</td>
  <td>712.43k</td>
  <td>712.43k</td>
  <td>2387.68k</td>
  <td>2691.46k</td>
  <td>4066.92k</td>
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
  <td>12.55</td>
  <td>7.09</td>
  <td>19.94</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>10.82</td>
  <td>15.23</td>
  <td>15.45</td>
  <td>15.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.83</td>
  <td>4.09</td>
  <td>10.91</td>
  <td>5.94</td>
  <td>5.94</td>
  <td>5.94</td>
  <td>5.94</td>
  <td>7.62</td>
  <td>7.97</td>
  <td>10.55</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.35</td>
  <td>8.96</td>
  <td>269.59</td>
  <td>21.34</td>
  <td>21.34</td>
  <td>21.34</td>
  <td>21.34</td>
  <td>83.78</td>
  <td>115.16</td>
  <td>172.05</td>
</tr></table>