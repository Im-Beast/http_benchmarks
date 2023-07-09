# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>10.90k</td>
    <td>13.08k</td>
    <td>1.43k</td>
    <td>57.71 MiB</td>
    <td>5.85</td>
    <td>2.94</td>
    <td>10.17</td>
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
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>12213.91k</td>
  <td>12600.63k</td>
  <td>12963.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>7.47</td>
  <td>7.77</td>
  <td>8.94</td>
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
  <td>10.90k</td>
  <td>13.08k</td>
  <td>1.43k</td>
  <td>57.71</td>
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>8717.61k</td>
  <td>12213.91k</td>
  <td>12600.63k</td>
  <td>12963.96k</td>
</tr><tr>
  <td>text.txt</td>
  <td>30.05k</td>
  <td>33.64k</td>
  <td>1.72k</td>
  <td>1.43</td>
  <td>28062.98k</td>
  <td>28062.98k</td>
  <td>28062.98k</td>
  <td>28062.98k</td>
  <td>31645.05k</td>
  <td>32179.93k</td>
  <td>33644.87k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.26k</td>
  <td>7.81k</td>
  <td>1.01k</td>
  <td>1.54k</td>
  <td>3183.32k</td>
  <td>3183.32k</td>
  <td>3183.32k</td>
  <td>3183.32k</td>
  <td>5486.98k</td>
  <td>5948.73k</td>
  <td>7441.30k</td>
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
  <td>5.85</td>
  <td>2.94</td>
  <td>10.17</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>4.89</td>
  <td>7.47</td>
  <td>7.77</td>
  <td>8.94</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.12</td>
  <td>1.24</td>
  <td>4.69</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>2.50</td>
  <td>2.64</td>
  <td>3.19</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.14</td>
  <td>7.64</td>
  <td>32.97</td>
  <td>12.59</td>
  <td>12.59</td>
  <td>12.59</td>
  <td>12.59</td>
  <td>17.43</td>
  <td>18.32</td>
  <td>20.02</td>
</tr></table>