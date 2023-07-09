# Name: Oak 
  
  ### Version: 12.5.0
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
    <td>5.44k</td>
    <td>12.97k</td>
    <td>1.74k</td>
    <td>27.72 MiB</td>
    <td>12.19</td>
    <td>5.20</td>
    <td>15.98</td>
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
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>7061.16k</td>
  <td>8149.29k</td>
  <td>11679.83k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>13.96</td>
  <td>14.23</td>
  <td>14.82</td>
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
  <td>5.44k</td>
  <td>12.97k</td>
  <td>1.74k</td>
  <td>27.72</td>
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>3349.46k</td>
  <td>7061.16k</td>
  <td>8149.29k</td>
  <td>11679.83k</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.34k</td>
  <td>15.65k</td>
  <td>2.92k</td>
  <td>0.48</td>
  <td>6801.27k</td>
  <td>6801.27k</td>
  <td>6801.27k</td>
  <td>6801.27k</td>
  <td>14499.00k</td>
  <td>15153.63k</td>
  <td>15399.32k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.67k</td>
  <td>8.30k</td>
  <td>704.36</td>
  <td>595.28</td>
  <td>899.09k</td>
  <td>899.09k</td>
  <td>899.09k</td>
  <td>899.09k</td>
  <td>2442.22k</td>
  <td>2706.01k</td>
  <td>3558.49k</td>
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
  <td>12.19</td>
  <td>5.20</td>
  <td>15.98</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>10.52</td>
  <td>13.96</td>
  <td>14.23</td>
  <td>14.82</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.30</td>
  <td>4.10</td>
  <td>9.83</td>
  <td>5.46</td>
  <td>5.46</td>
  <td>5.46</td>
  <td>5.46</td>
  <td>6.96</td>
  <td>8.56</td>
  <td>9.49</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.22</td>
  <td>5.70</td>
  <td>238.70</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>81.52</td>
  <td>105.48</td>
  <td>154.54</td>
</tr></table>