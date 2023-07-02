# Name: Hono 
  
  ### Version: 3.2.7
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
    <td>119.50k</td>
    <td>134.33k</td>
    <td>14.23k</td>
    <td>2.09 MiB</td>
    <td>0.53</td>
    <td>0.39</td>
    <td>2.96</td>
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
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>134328.24k</td>
  <td>134328.24k</td>
  <td>134328.24k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.57</td>
  <td>0.78</td>
  <td>1.18</td>
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
  <td>119.50k</td>
  <td>134.33k</td>
  <td>14.23k</td>
  <td>2.09</td>
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>85951.20k</td>
  <td>134328.24k</td>
  <td>134328.24k</td>
  <td>134328.24k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>137.35k</td>
  <td>149.16k</td>
  <td>15.10k</td>
  <td>1.44</td>
  <td>100038.00k</td>
  <td>100038.00k</td>
  <td>100038.00k</td>
  <td>100038.00k</td>
  <td>149161.54k</td>
  <td>149161.54k</td>
  <td>149161.54k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>131.07k</td>
  <td>146.16k</td>
  <td>13.07k</td>
  <td>0.25</td>
  <td>105405.14k</td>
  <td>105405.14k</td>
  <td>105405.14k</td>
  <td>105405.14k</td>
  <td>146155.42k</td>
  <td>146155.42k</td>
  <td>146155.42k</td>
</tr><tr>
  <td>/count</td>
  <td>135.77k</td>
  <td>148.70k</td>
  <td>12.31k</td>
  <td>0.13</td>
  <td>111394.94k</td>
  <td>111394.94k</td>
  <td>111394.94k</td>
  <td>111394.94k</td>
  <td>148696.71k</td>
  <td>148696.71k</td>
  <td>148696.71k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>137.47k</td>
  <td>148.98k</td>
  <td>12.73k</td>
  <td>0.26</td>
  <td>111496.64k</td>
  <td>111496.64k</td>
  <td>111496.64k</td>
  <td>111496.64k</td>
  <td>148979.89k</td>
  <td>148979.89k</td>
  <td>148979.89k</td>
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
  <td>0.53</td>
  <td>0.39</td>
  <td>2.96</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.57</td>
  <td>0.78</td>
  <td>1.18</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.46</td>
  <td>0.35</td>
  <td>1.32</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.46</td>
  <td>0.48</td>
  <td>1.19</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.48</td>
  <td>0.36</td>
  <td>1.60</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.51</td>
  <td>0.56</td>
  <td>1.23</td>
</tr><tr>
  <td>/count</td>
  <td>0.47</td>
  <td>0.36</td>
  <td>1.43</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.47</td>
  <td>0.49</td>
  <td>1.19</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.36</td>
  <td>1.38</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.47</td>
  <td>0.49</td>
  <td>1.14</td>
</tr></table>