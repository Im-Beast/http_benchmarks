# Name: Hono 
  
  ### Version: 3.2.6

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
    <td>21.58k</td>
    <td>24.08k</td>
    <td>1.95k</td>
    <td>698.48 MiB</td>
    <td>10.13</td>
    <td>2.98</td>
    <td>14.95</td>
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
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>23389.61k</td>
  <td>23526.98k</td>
  <td>23880.38k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>11.39</td>
  <td>12.07</td>
  <td>12.73</td>
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
  <td>21.58k</td>
  <td>24.08k</td>
  <td>1.95k</td>
  <td>698.48</td>
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>19288.36k</td>
  <td>23389.61k</td>
  <td>23526.98k</td>
  <td>23880.38k</td>
</tr><tr>
  <td>text.txt</td>
  <td>66.82k</td>
  <td>72.24k</td>
  <td>5.60k</td>
  <td>2.04</td>
  <td>61158.11k</td>
  <td>61158.11k</td>
  <td>61158.11k</td>
  <td>61158.11k</td>
  <td>71823.09k</td>
  <td>72029.25k</td>
  <td>72240.75k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.74k</td>
  <td>4.94k</td>
  <td>379.05</td>
  <td>1.36k</td>
  <td>3201.39k</td>
  <td>3201.39k</td>
  <td>3201.39k</td>
  <td>3201.39k</td>
  <td>4202.27k</td>
  <td>4312.22k</td>
  <td>4661.59k</td>
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
  <td>10.13</td>
  <td>2.98</td>
  <td>14.95</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>9.06</td>
  <td>11.39</td>
  <td>12.07</td>
  <td>12.73</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.96</td>
  <td>0.81</td>
  <td>3.60</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.02</td>
  <td>1.24</td>
  <td>1.72</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>17.13</td>
  <td>3.44</td>
  <td>22.25</td>
  <td>15.43</td>
  <td>15.43</td>
  <td>15.43</td>
  <td>15.43</td>
  <td>18.95</td>
  <td>19.86</td>
  <td>20.58</td>
</tr></table>