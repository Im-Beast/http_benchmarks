# Name: Oak 
  
  ### Version: 11.1.0
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
    <td>4.72k</td>
    <td>19.76k</td>
    <td>2.21k</td>
    <td>24.80 MiB</td>
    <td>14.58</td>
    <td>8.69</td>
    <td>27.17</td>
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
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>6564.76k</td>
  <td>7429.02k</td>
  <td>15623.42k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>17.09</td>
  <td>17.88</td>
  <td>21.82</td>
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
  <td>4.72k</td>
  <td>19.76k</td>
  <td>2.21k</td>
  <td>24.80</td>
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>2637.00k</td>
  <td>6564.76k</td>
  <td>7429.02k</td>
  <td>15623.42k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.25k</td>
  <td>13.93k</td>
  <td>1.80k</td>
  <td>0.44</td>
  <td>7304.74k</td>
  <td>7304.74k</td>
  <td>7304.74k</td>
  <td>7304.74k</td>
  <td>11608.10k</td>
  <td>12424.51k</td>
  <td>13731.20k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.55k</td>
  <td>8.01k</td>
  <td>761.89</td>
  <td>548.79</td>
  <td>751.15k</td>
  <td>751.15k</td>
  <td>751.15k</td>
  <td>751.15k</td>
  <td>2427.29k</td>
  <td>2803.17k</td>
  <td>4105.10k</td>
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
  <td>14.58</td>
  <td>8.69</td>
  <td>27.17</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>12.21</td>
  <td>17.09</td>
  <td>17.88</td>
  <td>21.82</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.25</td>
  <td>4.29</td>
  <td>13.34</td>
  <td>6.10</td>
  <td>6.10</td>
  <td>6.10</td>
  <td>6.10</td>
  <td>8.35</td>
  <td>9.04</td>
  <td>11.38</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>43.01</td>
  <td>8.21</td>
  <td>293.80</td>
  <td>22.28</td>
  <td>22.28</td>
  <td>22.28</td>
  <td>22.28</td>
  <td>84.86</td>
  <td>119.74</td>
  <td>180.76</td>
</tr></table>