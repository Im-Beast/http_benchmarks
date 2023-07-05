# Name: Deno.serve 
  
  ### Version: Deno 1.35.0
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
    <td>113.86k</td>
    <td>123.78k</td>
    <td>9.39k</td>
    <td>1.98 MiB</td>
    <td>0.56</td>
    <td>0.43</td>
    <td>1.32</td>
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
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>120807.45k</td>
  <td>123782.01k</td>
  <td>123782.01k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.69</td>
  <td>0.75</td>
  <td>0.94</td>
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
  <td>113.86k</td>
  <td>123.78k</td>
  <td>9.39k</td>
  <td>1.98</td>
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>99126.76k</td>
  <td>120807.45k</td>
  <td>123782.01k</td>
  <td>123782.01k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>133.61k</td>
  <td>142.35k</td>
  <td>8.54k</td>
  <td>1.40</td>
  <td>113753.74k</td>
  <td>113753.74k</td>
  <td>113753.74k</td>
  <td>113753.74k</td>
  <td>142345.49k</td>
  <td>142345.49k</td>
  <td>142345.49k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>134.28k</td>
  <td>144.42k</td>
  <td>6.91k</td>
  <td>0.26</td>
  <td>123274.58k</td>
  <td>123274.58k</td>
  <td>123274.58k</td>
  <td>123274.58k</td>
  <td>144419.03k</td>
  <td>144419.03k</td>
  <td>144419.03k</td>
</tr><tr>
  <td>/count</td>
  <td>133.11k</td>
  <td>145.31k</td>
  <td>11.33k</td>
  <td>0.13</td>
  <td>114650.64k</td>
  <td>114650.64k</td>
  <td>114650.64k</td>
  <td>114650.64k</td>
  <td>145306.64k</td>
  <td>145306.64k</td>
  <td>145306.64k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>132.21k</td>
  <td>143.26k</td>
  <td>9.25k</td>
  <td>0.26</td>
  <td>113959.21k</td>
  <td>113959.21k</td>
  <td>113959.21k</td>
  <td>113959.21k</td>
  <td>143263.65k</td>
  <td>143263.65k</td>
  <td>143263.65k</td>
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
  <td>0.56</td>
  <td>0.43</td>
  <td>1.32</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.69</td>
  <td>0.75</td>
  <td>0.94</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.29</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.56</td>
  <td>0.62</td>
  <td>0.83</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.36</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.55</td>
  <td>0.61</td>
  <td>0.77</td>
</tr><tr>
  <td>/count</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.04</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.61</td>
  <td>0.74</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.11</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.63</td>
  <td>0.80</td>
</tr></table>