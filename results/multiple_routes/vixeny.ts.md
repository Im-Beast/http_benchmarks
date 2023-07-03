# Name: Vixeny 
  
  ### Version: 0.0.63
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
    <td>131.69k</td>
    <td>139.77k</td>
    <td>13.92k</td>
    <td>2.30 MiB</td>
    <td>0.48</td>
    <td>0.36</td>
    <td>1.07</td>
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
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>139767.45k</td>
  <td>139767.45k</td>
  <td>139767.45k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.67</td>
  <td>0.91</td>
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
  <td>131.69k</td>
  <td>139.77k</td>
  <td>13.92k</td>
  <td>2.30</td>
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>104750.02k</td>
  <td>139767.45k</td>
  <td>139767.45k</td>
  <td>139767.45k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>145.97k</td>
  <td>153.38k</td>
  <td>12.00k</td>
  <td>1.53</td>
  <td>128235.93k</td>
  <td>128235.93k</td>
  <td>128235.93k</td>
  <td>128235.93k</td>
  <td>153382.48k</td>
  <td>153382.48k</td>
  <td>153382.48k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>145.38k</td>
  <td>154.82k</td>
  <td>9.36k</td>
  <td>0.28</td>
  <td>125884.90k</td>
  <td>125884.90k</td>
  <td>125884.90k</td>
  <td>125884.90k</td>
  <td>154816.75k</td>
  <td>154816.75k</td>
  <td>154816.75k</td>
</tr><tr>
  <td>/count</td>
  <td>146.79k</td>
  <td>155.02k</td>
  <td>11.66k</td>
  <td>0.14</td>
  <td>125137.94k</td>
  <td>125137.94k</td>
  <td>125137.94k</td>
  <td>125137.94k</td>
  <td>155017.19k</td>
  <td>155017.19k</td>
  <td>155017.19k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>146.50k</td>
  <td>157.93k</td>
  <td>8.56k</td>
  <td>0.28</td>
  <td>132408.55k</td>
  <td>132408.55k</td>
  <td>132408.55k</td>
  <td>132408.55k</td>
  <td>157934.45k</td>
  <td>157934.45k</td>
  <td>157934.45k</td>
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
  <td>0.48</td>
  <td>0.36</td>
  <td>1.07</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.67</td>
  <td>0.91</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.10</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.49</td>
  <td>0.55</td>
  <td>0.66</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.06</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.50</td>
  <td>0.57</td>
  <td>0.75</td>
</tr><tr>
  <td>/count</td>
  <td>0.43</td>
  <td>0.32</td>
  <td>1.21</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.48</td>
  <td>0.54</td>
  <td>0.67</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.30</td>
  <td>1.04</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.51</td>
  <td>0.56</td>
  <td>0.72</td>
</tr></table>