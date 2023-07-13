# Name: Hydra 
  
  ### Version: 0.1.1
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
    <td>15.44k</td>
    <td>16.84k</td>
    <td>930.95</td>
    <td>81.71 MiB</td>
    <td>4.13</td>
    <td>1.50</td>
    <td>6.36</td>
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
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>16224.05k</td>
  <td>16311.95k</td>
  <td>16843.83k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>4.47</td>
  <td>4.58</td>
  <td>5.54</td>
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
  <td>15.44k</td>
  <td>16.84k</td>
  <td>930.95</td>
  <td>81.71</td>
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>14400.84k</td>
  <td>16224.05k</td>
  <td>16311.95k</td>
  <td>16843.83k</td>
</tr><tr>
  <td>text.txt</td>
  <td>128.23k</td>
  <td>133.62k</td>
  <td>8.93k</td>
  <td>3.89</td>
  <td>106706.97k</td>
  <td>106706.97k</td>
  <td>106706.97k</td>
  <td>106706.97k</td>
  <td>133624.12k</td>
  <td>133624.12k</td>
  <td>133624.12k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.25k</td>
  <td>5.96k</td>
  <td>685.11</td>
  <td>1.55k</td>
  <td>3459.45k</td>
  <td>3459.45k</td>
  <td>3459.45k</td>
  <td>3459.45k</td>
  <td>5195.84k</td>
  <td>5406.39k</td>
  <td>5787.28k</td>
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
  <td>4.13</td>
  <td>1.50</td>
  <td>6.36</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>3.54</td>
  <td>4.47</td>
  <td>4.58</td>
  <td>5.54</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.50</td>
  <td>0.39</td>
  <td>1.24</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.58</td>
  <td>0.61</td>
  <td>0.68</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.09</td>
  <td>1.87</td>
  <td>20.50</td>
  <td>13.18</td>
  <td>13.18</td>
  <td>13.18</td>
  <td>13.18</td>
  <td>17.39</td>
  <td>17.75</td>
  <td>18.23</td>
</tr></table>