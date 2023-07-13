# Name: Vixeny – Response 
  ### Description: Using type: 'response'
  ### Version: 0.0.67
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
    <td>143.19k</td>
    <td>149.05k</td>
    <td>8.66k</td>
    <td>2.49 MiB</td>
    <td>0.44</td>
    <td>0.36</td>
    <td>1.24</td>
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
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>149048.77k</td>
  <td>149048.77k</td>
  <td>149048.77k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.49</td>
  <td>0.60</td>
  <td>0.71</td>
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
  <td>143.19k</td>
  <td>149.05k</td>
  <td>8.66k</td>
  <td>2.49</td>
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>124437.44k</td>
  <td>149048.77k</td>
  <td>149048.77k</td>
  <td>149048.77k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>156.29k</td>
  <td>162.59k</td>
  <td>8.61k</td>
  <td>1.64</td>
  <td>138415.88k</td>
  <td>138415.88k</td>
  <td>138415.88k</td>
  <td>138415.88k</td>
  <td>162586.68k</td>
  <td>162586.68k</td>
  <td>162586.68k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>157.44k</td>
  <td>163.35k</td>
  <td>9.41k</td>
  <td>0.30</td>
  <td>140177.48k</td>
  <td>140177.48k</td>
  <td>140177.48k</td>
  <td>140177.48k</td>
  <td>163350.83k</td>
  <td>163350.83k</td>
  <td>163350.83k</td>
</tr><tr>
  <td>/count</td>
  <td>156.67k</td>
  <td>162.68k</td>
  <td>8.20k</td>
  <td>0.15</td>
  <td>142251.16k</td>
  <td>142251.16k</td>
  <td>142251.16k</td>
  <td>142251.16k</td>
  <td>162683.51k</td>
  <td>162683.51k</td>
  <td>162683.51k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>157.65k</td>
  <td>163.08k</td>
  <td>8.24k</td>
  <td>0.30</td>
  <td>141315.34k</td>
  <td>141315.34k</td>
  <td>141315.34k</td>
  <td>141315.34k</td>
  <td>163076.55k</td>
  <td>163076.55k</td>
  <td>163076.55k</td>
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
  <td>0.44</td>
  <td>0.36</td>
  <td>1.24</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.49</td>
  <td>0.60</td>
  <td>0.71</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.11</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.47</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.19</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.56</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.05</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.09</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.54</td>
</tr></table>