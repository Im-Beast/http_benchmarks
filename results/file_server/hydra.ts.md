# Name: Hydra 
  
  ### Version: 0.2.0
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
    <td>15.59k</td>
    <td>17.04k</td>
    <td>596.79</td>
    <td>82.52 MiB</td>
    <td>4.09</td>
    <td>1.21</td>
    <td>5.34</td>
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
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>16169.71k</td>
  <td>16312.41k</td>
  <td>17036.48k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>4.39</td>
  <td>4.46</td>
  <td>4.93</td>
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
  <td>15.59k</td>
  <td>17.04k</td>
  <td>596.79</td>
  <td>82.52</td>
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>14904.68k</td>
  <td>16169.71k</td>
  <td>16312.41k</td>
  <td>17036.48k</td>
</tr><tr>
  <td>text.txt</td>
  <td>129.44k</td>
  <td>134.66k</td>
  <td>8.01k</td>
  <td>3.95</td>
  <td>111112.88k</td>
  <td>111112.88k</td>
  <td>111112.88k</td>
  <td>111112.88k</td>
  <td>134657.18k</td>
  <td>134657.18k</td>
  <td>134657.18k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.29k</td>
  <td>7.07k</td>
  <td>611.01</td>
  <td>1.56k</td>
  <td>3606.13k</td>
  <td>3606.13k</td>
  <td>3606.13k</td>
  <td>3606.13k</td>
  <td>5176.90k</td>
  <td>5318.39k</td>
  <td>5500.38k</td>
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
  <td>4.09</td>
  <td>1.21</td>
  <td>5.34</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>3.53</td>
  <td>4.39</td>
  <td>4.46</td>
  <td>4.93</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.49</td>
  <td>0.38</td>
  <td>1.27</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.57</td>
  <td>0.60</td>
  <td>0.68</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.93</td>
  <td>1.99</td>
  <td>18.76</td>
  <td>13.20</td>
  <td>13.20</td>
  <td>13.20</td>
  <td>13.20</td>
  <td>17.19</td>
  <td>17.40</td>
  <td>17.73</td>
</tr></table>