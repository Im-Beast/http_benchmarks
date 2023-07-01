# Name: Fastro (flash) 
  
  ### Version: 0.70.5
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
    <td>121.33k</td>
    <td>132.31k</td>
    <td>13.58k</td>
    <td>2.13 MiB</td>
    <td>0.52</td>
    <td>0.39</td>
    <td>2.09</td>
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
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>132307.08k</td>
  <td>132307.08k</td>
  <td>132307.08k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.64</td>
  <td>0.75</td>
  <td>1.21</td>
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
  <td>/random_number</td>
  <td>121.33k</td>
  <td>132.31k</td>
  <td>13.58k</td>
  <td>2.13</td>
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>102384.54k</td>
  <td>132307.08k</td>
  <td>132307.08k</td>
  <td>132307.08k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>123.62k</td>
  <td>146.24k</td>
  <td>18.46k</td>
  <td>1.29</td>
  <td>94889.50k</td>
  <td>94889.50k</td>
  <td>94889.50k</td>
  <td>94889.50k</td>
  <td>146242.51k</td>
  <td>146242.51k</td>
  <td>146242.51k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>135.06k</td>
  <td>149.91k</td>
  <td>12.08k</td>
  <td>0.26</td>
  <td>116771.29k</td>
  <td>116771.29k</td>
  <td>116771.29k</td>
  <td>116771.29k</td>
  <td>149909.13k</td>
  <td>149909.13k</td>
  <td>149909.13k</td>
</tr><tr>
  <td>/count</td>
  <td>134.61k</td>
  <td>149.11k</td>
  <td>14.62k</td>
  <td>0.13</td>
  <td>107984.48k</td>
  <td>107984.48k</td>
  <td>107984.48k</td>
  <td>107984.48k</td>
  <td>149105.70k</td>
  <td>149105.70k</td>
  <td>149105.70k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>137.13k</td>
  <td>152.09k</td>
  <td>9.72k</td>
  <td>0.26</td>
  <td>125540.52k</td>
  <td>125540.52k</td>
  <td>125540.52k</td>
  <td>125540.52k</td>
  <td>152085.11k</td>
  <td>152085.11k</td>
  <td>152085.11k</td>
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
  <td>/random_number</td>
  <td>0.52</td>
  <td>0.39</td>
  <td>2.09</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.64</td>
  <td>0.75</td>
  <td>1.21</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.51</td>
  <td>0.35</td>
  <td>1.60</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.78</td>
  <td>1.31</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.47</td>
  <td>0.34</td>
  <td>1.69</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.57</td>
  <td>0.68</td>
  <td>1.22</td>
</tr><tr>
  <td>/count</td>
  <td>0.47</td>
  <td>0.34</td>
  <td>1.48</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.57</td>
  <td>0.65</td>
  <td>1.20</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.34</td>
  <td>1.45</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.54</td>
  <td>0.62</td>
  <td>1.12</td>
</tr></table>