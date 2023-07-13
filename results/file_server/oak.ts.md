# Name: Oak 
  
  ### Version: 12.6.0
  ### Deno version: 1.35.1

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
    <td>5.83k</td>
    <td>13.36k</td>
    <td>2.57k</td>
    <td>30.16 MiB</td>
    <td>11.21</td>
    <td>4.94</td>
    <td>17.09</td>
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
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>8880.61k</td>
  <td>10900.87k</td>
  <td>12292.15k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>13.43</td>
  <td>13.77</td>
  <td>14.33</td>
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
  <td>5.83k</td>
  <td>13.36k</td>
  <td>2.57k</td>
  <td>30.16</td>
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>2111.93k</td>
  <td>8880.61k</td>
  <td>10900.87k</td>
  <td>12292.15k</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.47k</td>
  <td>16.70k</td>
  <td>3.25k</td>
  <td>0.49</td>
  <td>6861.23k</td>
  <td>6861.23k</td>
  <td>6861.23k</td>
  <td>6861.23k</td>
  <td>14963.53k</td>
  <td>15363.95k</td>
  <td>15610.83k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.66k</td>
  <td>7.43k</td>
  <td>667.73</td>
  <td>597.52</td>
  <td>934.97k</td>
  <td>934.97k</td>
  <td>934.97k</td>
  <td>934.97k</td>
  <td>2389.22k</td>
  <td>2660.19k</td>
  <td>3560.13k</td>
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
  <td>11.21</td>
  <td>4.94</td>
  <td>17.09</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>9.12</td>
  <td>13.43</td>
  <td>13.77</td>
  <td>14.33</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.21</td>
  <td>3.07</td>
  <td>9.80</td>
  <td>5.41</td>
  <td>5.41</td>
  <td>5.41</td>
  <td>5.41</td>
  <td>6.96</td>
  <td>7.20</td>
  <td>9.26</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.07</td>
  <td>5.32</td>
  <td>238.63</td>
  <td>16.32</td>
  <td>16.32</td>
  <td>16.32</td>
  <td>16.32</td>
  <td>80.95</td>
  <td>103.67</td>
  <td>147.89</td>
</tr></table>