# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>4.83k</td>
    <td>10.84k</td>
    <td>1.58k</td>
    <td>25.40 MiB</td>
    <td>13.31</td>
    <td>6.91</td>
    <td>20.68</td>
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
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>6335.81k</td>
  <td>6708.44k</td>
  <td>8281.74k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>16.05</td>
  <td>16.56</td>
  <td>17.21</td>
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
  <td>4.83k</td>
  <td>10.84k</td>
  <td>1.58k</td>
  <td>25.40</td>
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>2367.18k</td>
  <td>6335.81k</td>
  <td>6708.44k</td>
  <td>8281.74k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.36k</td>
  <td>14.91k</td>
  <td>1.97k</td>
  <td>0.44</td>
  <td>6790.04k</td>
  <td>6790.04k</td>
  <td>6790.04k</td>
  <td>6790.04k</td>
  <td>12576.76k</td>
  <td>13162.07k</td>
  <td>13532.15k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.46k</td>
  <td>8.27k</td>
  <td>749.45</td>
  <td>511.46</td>
  <td>611.82k</td>
  <td>611.82k</td>
  <td>611.82k</td>
  <td>611.82k</td>
  <td>2262.64k</td>
  <td>2560.29k</td>
  <td>3766.60k</td>
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
  <td>13.31</td>
  <td>6.91</td>
  <td>20.68</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>11.16</td>
  <td>16.05</td>
  <td>16.56</td>
  <td>17.21</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.86</td>
  <td>2.39</td>
  <td>11.57</td>
  <td>5.91</td>
  <td>5.91</td>
  <td>5.91</td>
  <td>5.91</td>
  <td>7.78</td>
  <td>8.15</td>
  <td>10.63</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>45.66</td>
  <td>7.73</td>
  <td>287.88</td>
  <td>21.43</td>
  <td>21.43</td>
  <td>21.43</td>
  <td>21.43</td>
  <td>92.91</td>
  <td>128.62</td>
  <td>188.55</td>
</tr></table>