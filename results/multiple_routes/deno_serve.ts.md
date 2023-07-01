# Name: Deno.serve 
  
  ### Version: Deno 1.34.3
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
    <td>114.43k</td>
    <td>127.90k</td>
    <td>9.72k</td>
    <td>1.99 MiB</td>
    <td>0.55</td>
    <td>0.41</td>
    <td>2.61</td>
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
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>126896.61k</td>
  <td>127898.28k</td>
  <td>127898.28k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.68</td>
  <td>0.79</td>
  <td>1.62</td>
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
  <td>114.43k</td>
  <td>127.90k</td>
  <td>9.72k</td>
  <td>1.99</td>
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>97905.75k</td>
  <td>126896.61k</td>
  <td>127898.28k</td>
  <td>127898.28k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>127.67k</td>
  <td>141.33k</td>
  <td>12.85k</td>
  <td>1.34</td>
  <td>110496.25k</td>
  <td>110496.25k</td>
  <td>110496.25k</td>
  <td>110496.25k</td>
  <td>141326.00k</td>
  <td>141326.00k</td>
  <td>141326.00k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>130.91k</td>
  <td>143.60k</td>
  <td>10.48k</td>
  <td>0.25</td>
  <td>110387.88k</td>
  <td>110387.88k</td>
  <td>110387.88k</td>
  <td>110387.88k</td>
  <td>143600.89k</td>
  <td>143600.89k</td>
  <td>143600.89k</td>
</tr><tr>
  <td>/count</td>
  <td>130.79k</td>
  <td>143.10k</td>
  <td>9.40k</td>
  <td>0.12</td>
  <td>112012.47k</td>
  <td>112012.47k</td>
  <td>112012.47k</td>
  <td>112012.47k</td>
  <td>143103.30k</td>
  <td>143103.30k</td>
  <td>143103.30k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>129.41k</td>
  <td>143.28k</td>
  <td>12.48k</td>
  <td>0.25</td>
  <td>111344.32k</td>
  <td>111344.32k</td>
  <td>111344.32k</td>
  <td>111344.32k</td>
  <td>143283.15k</td>
  <td>143283.15k</td>
  <td>143283.15k</td>
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
  <td>0.55</td>
  <td>0.41</td>
  <td>2.61</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.68</td>
  <td>0.79</td>
  <td>1.62</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.49</td>
  <td>0.36</td>
  <td>1.72</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.57</td>
  <td>0.65</td>
  <td>1.31</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.48</td>
  <td>0.36</td>
  <td>1.36</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.57</td>
  <td>0.66</td>
  <td>1.13</td>
</tr><tr>
  <td>/count</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.62</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.63</td>
  <td>1.07</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.49</td>
  <td>0.36</td>
  <td>1.84</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.61</td>
  <td>1.14</td>
</tr></table>