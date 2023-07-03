# Name: Vixeny – Response 
  ### Description: Using type: 'response'
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
    <td>131.38k</td>
    <td>141.89k</td>
    <td>12.40k</td>
    <td>2.30 MiB</td>
    <td>0.48</td>
    <td>0.36</td>
    <td>1.69</td>
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
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>141890.37k</td>
  <td>141890.37k</td>
  <td>141890.37k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.60</td>
  <td>0.67</td>
  <td>0.90</td>
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
  <td>131.38k</td>
  <td>141.89k</td>
  <td>12.40k</td>
  <td>2.30</td>
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>103907.04k</td>
  <td>141890.37k</td>
  <td>141890.37k</td>
  <td>141890.37k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>148.58k</td>
  <td>161.49k</td>
  <td>9.83k</td>
  <td>1.56</td>
  <td>134322.57k</td>
  <td>134322.57k</td>
  <td>134322.57k</td>
  <td>134322.57k</td>
  <td>161491.60k</td>
  <td>161491.60k</td>
  <td>161491.60k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>152.48k</td>
  <td>159.14k</td>
  <td>9.40k</td>
  <td>0.29</td>
  <td>135103.47k</td>
  <td>135103.47k</td>
  <td>135103.47k</td>
  <td>135103.47k</td>
  <td>159141.55k</td>
  <td>159141.55k</td>
  <td>159141.55k</td>
</tr><tr>
  <td>/count</td>
  <td>150.17k</td>
  <td>162.45k</td>
  <td>9.20k</td>
  <td>0.14</td>
  <td>135910.66k</td>
  <td>135910.66k</td>
  <td>135910.66k</td>
  <td>135910.66k</td>
  <td>162448.28k</td>
  <td>162448.28k</td>
  <td>162448.28k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>150.69k</td>
  <td>161.31k</td>
  <td>10.26k</td>
  <td>0.29</td>
  <td>131024.24k</td>
  <td>131024.24k</td>
  <td>131024.24k</td>
  <td>131024.24k</td>
  <td>161309.81k</td>
  <td>161309.81k</td>
  <td>161309.81k</td>
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
  <td>1.69</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.60</td>
  <td>0.67</td>
  <td>0.90</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.11</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.54</td>
  <td>0.65</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.18</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.46</td>
  <td>0.53</td>
  <td>0.65</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.14</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.48</td>
  <td>0.54</td>
  <td>0.64</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.05</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.48</td>
  <td>0.54</td>
  <td>0.65</td>
</tr></table>