# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.2.22
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
    <td>121.55k</td>
    <td>141.10k</td>
    <td>13.89k</td>
    <td>2.13 MiB</td>
    <td>0.52</td>
    <td>0.36</td>
    <td>1.88</td>
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
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>141097.67k</td>
  <td>141097.67k</td>
  <td>141097.67k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.65</td>
  <td>0.72</td>
  <td>1.53</td>
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
  <td>121.55k</td>
  <td>141.10k</td>
  <td>13.89k</td>
  <td>2.13</td>
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>100323.64k</td>
  <td>141097.67k</td>
  <td>141097.67k</td>
  <td>141097.67k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>138.72k</td>
  <td>157.31k</td>
  <td>17.52k</td>
  <td>1.46</td>
  <td>107996.08k</td>
  <td>107996.08k</td>
  <td>107996.08k</td>
  <td>107996.08k</td>
  <td>157305.55k</td>
  <td>157305.55k</td>
  <td>157305.55k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>144.07k</td>
  <td>156.92k</td>
  <td>12.43k</td>
  <td>0.27</td>
  <td>120624.92k</td>
  <td>120624.92k</td>
  <td>120624.92k</td>
  <td>120624.92k</td>
  <td>156915.65k</td>
  <td>156915.65k</td>
  <td>156915.65k</td>
</tr><tr>
  <td>/count</td>
  <td>148.68k</td>
  <td>162.37k</td>
  <td>10.82k</td>
  <td>0.14</td>
  <td>131796.36k</td>
  <td>131796.36k</td>
  <td>131796.36k</td>
  <td>131796.36k</td>
  <td>162373.67k</td>
  <td>162373.67k</td>
  <td>162373.67k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>147.05k</td>
  <td>159.71k</td>
  <td>13.45k</td>
  <td>0.28</td>
  <td>123327.58k</td>
  <td>123327.58k</td>
  <td>123327.58k</td>
  <td>123327.58k</td>
  <td>159710.73k</td>
  <td>159710.73k</td>
  <td>159710.73k</td>
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
  <td>0.36</td>
  <td>1.88</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.65</td>
  <td>0.72</td>
  <td>1.53</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.45</td>
  <td>0.32</td>
  <td>1.92</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.52</td>
  <td>0.61</td>
  <td>1.12</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.44</td>
  <td>0.32</td>
  <td>1.81</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.52</td>
  <td>0.58</td>
  <td>1.07</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.71</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.49</td>
  <td>0.56</td>
  <td>1.08</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.32</td>
  <td>1.61</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.57</td>
  <td>1.09</td>
</tr></table>