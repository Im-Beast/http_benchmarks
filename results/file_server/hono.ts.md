# Name: Hono 
  
  ### Version: 3.3.0
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
    <td>13.38k</td>
    <td>14.80k</td>
    <td>1.31k</td>
    <td>70.82 MiB</td>
    <td>4.77</td>
    <td>1.54</td>
    <td>8.09</td>
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
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>14380.31k</td>
  <td>14558.33k</td>
  <td>14801.90k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>5.48</td>
  <td>6.79</td>
  <td>7.58</td>
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
  <td>13.38k</td>
  <td>14.80k</td>
  <td>1.31k</td>
  <td>70.82</td>
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>11017.04k</td>
  <td>14380.31k</td>
  <td>14558.33k</td>
  <td>14801.90k</td>
</tr><tr>
  <td>text.txt</td>
  <td>67.69k</td>
  <td>71.93k</td>
  <td>4.03k</td>
  <td>2.06</td>
  <td>62803.72k</td>
  <td>62803.72k</td>
  <td>62803.72k</td>
  <td>62803.72k</td>
  <td>71748.24k</td>
  <td>71931.00k</td>
  <td>71931.00k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.93k</td>
  <td>5.03k</td>
  <td>312.02</td>
  <td>1.43k</td>
  <td>3501.25k</td>
  <td>3501.25k</td>
  <td>3501.25k</td>
  <td>3501.25k</td>
  <td>4257.10k</td>
  <td>4323.52k</td>
  <td>4670.14k</td>
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
  <td>4.77</td>
  <td>1.54</td>
  <td>8.09</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>4.16</td>
  <td>5.48</td>
  <td>6.79</td>
  <td>7.58</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.94</td>
  <td>0.81</td>
  <td>2.01</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.00</td>
  <td>1.11</td>
  <td>1.71</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>16.26</td>
  <td>2.03</td>
  <td>20.33</td>
  <td>15.10</td>
  <td>15.10</td>
  <td>15.10</td>
  <td>15.10</td>
  <td>17.86</td>
  <td>18.06</td>
  <td>18.26</td>
</tr></table>