# Name: Vixeny 
  
  ### Version: 0.0.63
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
    <td>13.31k</td>
    <td>15.32k</td>
    <td>1.58k</td>
    <td>70.42 MiB</td>
    <td>4.79</td>
    <td>1.58</td>
    <td>8.45</td>
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
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>14675.17k</td>
  <td>15207.89k</td>
  <td>15324.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>5.74</td>
  <td>6.92</td>
  <td>7.74</td>
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
  <td>13.31k</td>
  <td>15.32k</td>
  <td>1.58k</td>
  <td>70.42</td>
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>10478.04k</td>
  <td>14675.17k</td>
  <td>15207.89k</td>
  <td>15324.96k</td>
</tr><tr>
  <td>text.txt</td>
  <td>88.87k</td>
  <td>95.03k</td>
  <td>7.27k</td>
  <td>2.71</td>
  <td>80061.72k</td>
  <td>80061.72k</td>
  <td>80061.72k</td>
  <td>80061.72k</td>
  <td>94495.66k</td>
  <td>95033.43k</td>
  <td>95033.43k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.51k</td>
  <td>5.00k</td>
  <td>414.10</td>
  <td>1.28k</td>
  <td>3096.77k</td>
  <td>3096.77k</td>
  <td>3096.77k</td>
  <td>3096.77k</td>
  <td>4070.58k</td>
  <td>4285.64k</td>
  <td>4626.14k</td>
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
  <td>4.79</td>
  <td>1.58</td>
  <td>8.45</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>4.02</td>
  <td>5.74</td>
  <td>6.92</td>
  <td>7.74</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.72</td>
  <td>0.57</td>
  <td>2.04</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.89</td>
  <td>0.99</td>
  <td>1.26</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>18.24</td>
  <td>2.82</td>
  <td>27.64</td>
  <td>16.45</td>
  <td>16.45</td>
  <td>16.45</td>
  <td>16.45</td>
  <td>20.40</td>
  <td>20.87</td>
  <td>21.51</td>
</tr></table>