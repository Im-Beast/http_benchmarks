# File server
## Name: Oak 

### Version: 12.6.0
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
    <td>3.91k</td>
    <td>10.76k</td>
    <td>1.39k</td>
    <td>20.47 MiB</td>
    <td>16.52</td>
    <td>7.78</td>
    <td>27.38</td>
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
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>5211.04k</td>
  <td>5648.20k</td>
  <td>8801.93k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>20.52</td>
  <td>22.11</td>
  <td>24.65</td>
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
  <td>3.91k</td>
  <td>10.76k</td>
  <td>1.39k</td>
  <td>20.47</td>
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>2180.74k</td>
  <td>5211.04k</td>
  <td>5648.20k</td>
  <td>8801.93k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.10k</td>
  <td>6.46k</td>
  <td>511.60</td>
  <td>391.95</td>
  <td>550.44k</td>
  <td>550.44k</td>
  <td>550.44k</td>
  <td>550.44k</td>
  <td>1614.93k</td>
  <td>1874.03k</td>
  <td>2900.71k</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.11k</td>
  <td>10.19k</td>
  <td>1.42k</td>
  <td>0.29</td>
  <td>4446.80k</td>
  <td>4446.80k</td>
  <td>4446.80k</td>
  <td>4446.80k</td>
  <td>7414.24k</td>
  <td>7818.70k</td>
  <td>9416.17k</td>
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
  <td>16.52</td>
  <td>7.78</td>
  <td>27.38</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>13.30</td>
  <td>20.52</td>
  <td>22.11</td>
  <td>24.65</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>59.52</td>
  <td>6.19</td>
  <td>252.55</td>
  <td>22.33</td>
  <td>22.33</td>
  <td>22.33</td>
  <td>22.33</td>
  <td>90.14</td>
  <td>100.53</td>
  <td>136.32</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.49</td>
  <td>5.59</td>
  <td>22.57</td>
  <td>8.62</td>
  <td>8.62</td>
  <td>8.62</td>
  <td>8.62</td>
  <td>12.94</td>
  <td>14.49</td>
  <td>16.71</td>
</tr></table>