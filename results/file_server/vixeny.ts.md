# Name: Vixeny 
  
  ### Version: 0.0.67
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
    <td>14.13k</td>
    <td>16.03k</td>
    <td>1.49k</td>
    <td>74.75 MiB</td>
    <td>4.52</td>
    <td>1.54</td>
    <td>7.56</td>
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
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>15409.32k</td>
  <td>15569.12k</td>
  <td>16031.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>5.41</td>
  <td>6.39</td>
  <td>7.02</td>
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
  <td>14.13k</td>
  <td>16.03k</td>
  <td>1.49k</td>
  <td>74.75</td>
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>11395.88k</td>
  <td>15409.32k</td>
  <td>15569.12k</td>
  <td>16031.07k</td>
</tr><tr>
  <td>text.txt</td>
  <td>95.51k</td>
  <td>100.48k</td>
  <td>4.88k</td>
  <td>2.91</td>
  <td>90128.38k</td>
  <td>90128.38k</td>
  <td>90128.38k</td>
  <td>90128.38k</td>
  <td>100100.24k</td>
  <td>100483.02k</td>
  <td>100483.02k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.18k</td>
  <td>5.53k</td>
  <td>284.15</td>
  <td>1.52k</td>
  <td>3909.08k</td>
  <td>3909.08k</td>
  <td>3909.08k</td>
  <td>3909.08k</td>
  <td>4418.44k</td>
  <td>4461.92k</td>
  <td>4711.33k</td>
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
  <td>4.52</td>
  <td>1.54</td>
  <td>7.56</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>3.89</td>
  <td>5.41</td>
  <td>6.39</td>
  <td>7.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.66</td>
  <td>0.54</td>
  <td>1.46</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.78</td>
  <td>0.86</td>
  <td>1.02</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.31</td>
  <td>2.31</td>
  <td>34.16</td>
  <td>14.22</td>
  <td>14.22</td>
  <td>14.22</td>
  <td>14.22</td>
  <td>16.77</td>
  <td>16.93</td>
  <td>17.17</td>
</tr></table>