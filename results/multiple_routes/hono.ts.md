# Name: Hono 
  
  ### Version: 3.3.0
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
    <td>122.06k</td>
    <td>139.48k</td>
    <td>13.90k</td>
    <td>2.15 MiB</td>
    <td>0.51</td>
    <td>0.39</td>
    <td>2.99</td>
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
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>139481.15k</td>
  <td>139481.15k</td>
  <td>139481.15k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.56</td>
  <td>0.58</td>
  <td>1.26</td>
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
  <td>122.06k</td>
  <td>139.48k</td>
  <td>13.90k</td>
  <td>2.15</td>
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>103238.94k</td>
  <td>139481.15k</td>
  <td>139481.15k</td>
  <td>139481.15k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>134.76k</td>
  <td>147.30k</td>
  <td>14.44k</td>
  <td>1.43</td>
  <td>106710.19k</td>
  <td>106710.19k</td>
  <td>106710.19k</td>
  <td>106710.19k</td>
  <td>147302.69k</td>
  <td>147302.69k</td>
  <td>147302.69k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>134.11k</td>
  <td>144.69k</td>
  <td>9.93k</td>
  <td>0.26</td>
  <td>120480.73k</td>
  <td>120480.73k</td>
  <td>120480.73k</td>
  <td>120480.73k</td>
  <td>144691.64k</td>
  <td>144691.64k</td>
  <td>144691.64k</td>
</tr><tr>
  <td>/count</td>
  <td>136.53k</td>
  <td>147.08k</td>
  <td>10.53k</td>
  <td>0.13</td>
  <td>115623.25k</td>
  <td>115623.25k</td>
  <td>115623.25k</td>
  <td>115623.25k</td>
  <td>147076.20k</td>
  <td>147076.20k</td>
  <td>147076.20k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>136.24k</td>
  <td>146.94k</td>
  <td>11.95k</td>
  <td>0.26</td>
  <td>112140.70k</td>
  <td>112140.70k</td>
  <td>112140.70k</td>
  <td>112140.70k</td>
  <td>146938.66k</td>
  <td>146938.66k</td>
  <td>146938.66k</td>
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
  <td>0.51</td>
  <td>0.39</td>
  <td>2.99</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.56</td>
  <td>0.58</td>
  <td>1.26</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.52</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.48</td>
  <td>0.51</td>
  <td>1.23</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.47</td>
  <td>0.38</td>
  <td>1.70</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.49</td>
  <td>0.50</td>
  <td>1.17</td>
</tr><tr>
  <td>/count</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.49</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.48</td>
  <td>0.50</td>
  <td>1.21</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.51</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.48</td>
  <td>0.50</td>
  <td>1.14</td>
</tr></table>