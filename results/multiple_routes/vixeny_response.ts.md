# Name: Vixeny – Response 
  ### Description: Using type: 'response'
  ### Version: 0.0.6
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
    <td>131.59k</td>
    <td>141.80k</td>
    <td>13.01k</td>
    <td>2.30 MiB</td>
    <td>0.48</td>
    <td>0.36</td>
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
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>141802.78k</td>
  <td>141802.78k</td>
  <td>141802.78k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.67</td>
  <td>0.92</td>
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
  <td>131.59k</td>
  <td>141.80k</td>
  <td>13.01k</td>
  <td>2.30</td>
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>105447.58k</td>
  <td>141802.78k</td>
  <td>141802.78k</td>
  <td>141802.78k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>152.95k</td>
  <td>160.63k</td>
  <td>8.69k</td>
  <td>1.60</td>
  <td>139460.90k</td>
  <td>139460.90k</td>
  <td>139460.90k</td>
  <td>139460.90k</td>
  <td>160628.42k</td>
  <td>160628.42k</td>
  <td>160628.42k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>135.79k</td>
  <td>150.86k</td>
  <td>16.92k</td>
  <td>2.48</td>
  <td>97812.99k</td>
  <td>97812.99k</td>
  <td>97812.99k</td>
  <td>97812.99k</td>
  <td>150856.06k</td>
  <td>150856.06k</td>
  <td>150856.06k</td>
</tr><tr>
  <td>/count</td>
  <td>153.61k</td>
  <td>162.50k</td>
  <td>8.99k</td>
  <td>0.15</td>
  <td>139408.18k</td>
  <td>139408.18k</td>
  <td>139408.18k</td>
  <td>139408.18k</td>
  <td>162500.26k</td>
  <td>162500.26k</td>
  <td>162500.26k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>149.94k</td>
  <td>162.43k</td>
  <td>12.34k</td>
  <td>0.14</td>
  <td>130396.85k</td>
  <td>130396.85k</td>
  <td>130396.85k</td>
  <td>130396.85k</td>
  <td>162425.72k</td>
  <td>162425.72k</td>
  <td>162425.72k</td>
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
  <td>1.34</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.67</td>
  <td>0.92</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>1.07</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.46</td>
  <td>0.55</td>
  <td>0.73</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>2.10</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.49</td>
  <td>0.66</td>
  <td>0.97</td>
</tr><tr>
  <td>/count</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>0.96</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.45</td>
  <td>0.53</td>
  <td>0.76</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.00</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.53</td>
  <td>0.71</td>
</tr></table>