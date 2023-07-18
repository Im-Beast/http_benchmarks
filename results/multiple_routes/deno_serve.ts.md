# Multiple routes
## Name: Deno.serve 

### Version: Deno 1.35.1
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
    <td>125.48k</td>
    <td>133.33k</td>
    <td>7.60k</td>
    <td>1.32 MiB</td>
    <td>0.50</td>
    <td>0.39</td>
    <td>1.34</td>
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
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>133328.68k</td>
  <td>133328.68k</td>
  <td>133328.68k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.59</td>
  <td>0.64</td>
  <td>1.03</td>
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
  <td>/hello_world</td>
  <td>125.48k</td>
  <td>133.33k</td>
  <td>7.60k</td>
  <td>1.32</td>
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>113983.15k</td>
  <td>133328.68k</td>
  <td>133328.68k</td>
  <td>133328.68k</td>
</tr><tr>
  <td>/random_number</td>
  <td>121.53k</td>
  <td>131.57k</td>
  <td>10.26k</td>
  <td>2.13</td>
  <td>103239.51k</td>
  <td>103239.51k</td>
  <td>103239.51k</td>
  <td>103239.51k</td>
  <td>131567.00k</td>
  <td>131567.00k</td>
  <td>131567.00k</td>
</tr><tr>
  <td>/count</td>
  <td>133.74k</td>
  <td>142.83k</td>
  <td>8.57k</td>
  <td>0.13</td>
  <td>122110.70k</td>
  <td>122110.70k</td>
  <td>122110.70k</td>
  <td>122110.70k</td>
  <td>142832.36k</td>
  <td>142832.36k</td>
  <td>142832.36k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>135.33k</td>
  <td>144.20k</td>
  <td>8.41k</td>
  <td>0.26</td>
  <td>122491.67k</td>
  <td>122491.67k</td>
  <td>122491.67k</td>
  <td>122491.67k</td>
  <td>144195.69k</td>
  <td>144195.69k</td>
  <td>144195.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>130.69k</td>
  <td>143.54k</td>
  <td>13.91k</td>
  <td>0.25</td>
  <td>105327.24k</td>
  <td>105327.24k</td>
  <td>105327.24k</td>
  <td>105327.24k</td>
  <td>143542.93k</td>
  <td>143542.93k</td>
  <td>143542.93k</td>
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
  <td>/hello_world</td>
  <td>0.50</td>
  <td>0.39</td>
  <td>1.34</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.59</td>
  <td>0.64</td>
  <td>1.03</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.52</td>
  <td>0.40</td>
  <td>1.36</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.62</td>
  <td>0.68</td>
  <td>1.02</td>
</tr><tr>
  <td>/count</td>
  <td>0.47</td>
  <td>0.38</td>
  <td>1.25</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.54</td>
  <td>0.61</td>
  <td>0.94</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.38</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.53</td>
  <td>0.59</td>
  <td>0.97</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.51</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.62</td>
  <td>1.01</td>
</tr></table>