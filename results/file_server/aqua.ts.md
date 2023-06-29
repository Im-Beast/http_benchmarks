# Name: Aqua 
  
  ### Version: 1.3.5

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
    <td>12.67k</td>
    <td>17.54k</td>
    <td>1.37k</td>
    <td>792.58 MiB</td>
    <td>9.53</td>
    <td>4.67</td>
    <td>24.51</td>
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
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>14195.28k</td>
  <td>14597.94k</td>
  <td>15952.99k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>11.13</td>
  <td>11.66</td>
  <td>12.99</td>
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
  <td>12.67k</td>
  <td>17.54k</td>
  <td>1.37k</td>
  <td>792.58</td>
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>10970.73k</td>
  <td>14195.28k</td>
  <td>14597.94k</td>
  <td>15952.99k</td>
</tr><tr>
  <td>text.txt</td>
  <td>31.59k</td>
  <td>36.26k</td>
  <td>1.86k</td>
  <td>1.51</td>
  <td>29477.18k</td>
  <td>29477.18k</td>
  <td>29477.18k</td>
  <td>29477.18k</td>
  <td>33827.12k</td>
  <td>34180.60k</td>
  <td>36256.03k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>4.28k</td>
  <td>9.88k</td>
  <td>989.13</td>
  <td>1.56k</td>
  <td>3104.68k</td>
  <td>3104.68k</td>
  <td>3104.68k</td>
  <td>3104.68k</td>
  <td>5465.15k</td>
  <td>5959.65k</td>
  <td>7054.72k</td>
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
  <td>9.53</td>
  <td>4.67</td>
  <td>24.51</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>7.98</td>
  <td>11.13</td>
  <td>11.66</td>
  <td>12.99</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.02</td>
  <td>1.22</td>
  <td>4.78</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>2.40</td>
  <td>2.53</td>
  <td>2.90</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>15.01</td>
  <td>7.23</td>
  <td>39.65</td>
  <td>12.60</td>
  <td>12.60</td>
  <td>12.60</td>
  <td>12.60</td>
  <td>17.17</td>
  <td>17.94</td>
  <td>19.80</td>
</tr></table>