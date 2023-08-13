# File server
## Name: Aqua 

### Version: 1.3.5
### Deno version: 1.36.0

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
    <td>8.32k</td>
    <td>11.87k</td>
    <td>1.60k</td>
    <td>44.11 MiB</td>
    <td>7.65</td>
    <td>4.23</td>
    <td>15.85</td>
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
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>10001.38k</td>
  <td>10455.63k</td>
  <td>10980.27k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>9.75</td>
  <td>10.62</td>
  <td>12.37</td>
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
  <td>8.32k</td>
  <td>11.87k</td>
  <td>1.60k</td>
  <td>44.11</td>
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>6393.36k</td>
  <td>10001.38k</td>
  <td>10455.63k</td>
  <td>10980.27k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.99k</td>
  <td>12.19k</td>
  <td>1.41k</td>
  <td>1.05k</td>
  <td>1010.06k</td>
  <td>1010.06k</td>
  <td>1010.06k</td>
  <td>1010.06k</td>
  <td>4553.64k</td>
  <td>5097.03k</td>
  <td>6879.56k</td>
</tr><tr>
  <td>text.txt</td>
  <td>18.35k</td>
  <td>23.45k</td>
  <td>3.03k</td>
  <td>0.87</td>
  <td>14001.63k</td>
  <td>14001.63k</td>
  <td>14001.63k</td>
  <td>14001.63k</td>
  <td>21655.26k</td>
  <td>22597.42k</td>
  <td>23447.15k</td>
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
  <td>7.65</td>
  <td>4.23</td>
  <td>15.85</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>6.19</td>
  <td>9.75</td>
  <td>10.62</td>
  <td>12.37</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>22.18</td>
  <td>11.11</td>
  <td>42.63</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>27.28</td>
  <td>28.70</td>
  <td>31.67</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.47</td>
  <td>1.98</td>
  <td>7.98</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>4.64</td>
  <td>5.32</td>
  <td>6.75</td>
</tr></table>