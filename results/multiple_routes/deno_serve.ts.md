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
    <td>126.88k</td>
    <td>132.57k</td>
    <td>8.19k</td>
    <td>2.21 MiB</td>
    <td>0.50</td>
    <td>0.40</td>
    <td>1.36</td>
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
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>132574.24k</td>
  <td>132574.24k</td>
  <td>132574.24k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.56</td>
  <td>0.65</td>
  <td>0.76</td>
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
  <td>126.88k</td>
  <td>132.57k</td>
  <td>8.19k</td>
  <td>2.21</td>
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>107248.54k</td>
  <td>132574.24k</td>
  <td>132574.24k</td>
  <td>132574.24k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>137.22k</td>
  <td>142.57k</td>
  <td>8.43k</td>
  <td>1.45</td>
  <td>122536.45k</td>
  <td>122536.45k</td>
  <td>122536.45k</td>
  <td>122536.45k</td>
  <td>142568.43k</td>
  <td>142568.43k</td>
  <td>142568.43k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>137.62k</td>
  <td>144.32k</td>
  <td>10.32k</td>
  <td>0.27</td>
  <td>120148.98k</td>
  <td>120148.98k</td>
  <td>120148.98k</td>
  <td>120148.98k</td>
  <td>144321.50k</td>
  <td>144321.50k</td>
  <td>144321.50k</td>
</tr><tr>
  <td>/count</td>
  <td>136.94k</td>
  <td>143.51k</td>
  <td>9.98k</td>
  <td>0.13</td>
  <td>117555.17k</td>
  <td>117555.17k</td>
  <td>117555.17k</td>
  <td>117555.17k</td>
  <td>143513.19k</td>
  <td>143513.19k</td>
  <td>143513.19k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>137.28k</td>
  <td>145.25k</td>
  <td>12.29k</td>
  <td>0.27</td>
  <td>110185.53k</td>
  <td>110185.53k</td>
  <td>110185.53k</td>
  <td>110185.53k</td>
  <td>145245.42k</td>
  <td>145245.42k</td>
  <td>145245.42k</td>
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
  <td>0.50</td>
  <td>0.40</td>
  <td>1.36</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.56</td>
  <td>0.65</td>
  <td>0.76</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.22</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.54</td>
  <td>0.61</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.45</td>
  <td>0.37</td>
  <td>1.19</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.54</td>
  <td>0.61</td>
</tr><tr>
  <td>/count</td>
  <td>0.45</td>
  <td>0.37</td>
  <td>1.29</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.53</td>
  <td>0.63</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.45</td>
  <td>0.37</td>
  <td>1.24</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.53</td>
  <td>0.60</td>
</tr></table>