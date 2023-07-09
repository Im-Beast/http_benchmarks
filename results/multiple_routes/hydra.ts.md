# Name: Hydra 
  
  ### Version: 0.1.0
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
    <td>133.59k</td>
    <td>139.76k</td>
    <td>25.15k</td>
    <td>2.33 MiB</td>
    <td>0.47</td>
    <td>0.38</td>
    <td>1.09</td>
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
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>139757.98k</td>
  <td>139757.98k</td>
  <td>139757.98k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.53</td>
  <td>0.65</td>
  <td>0.75</td>
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
  <td>133.59k</td>
  <td>139.76k</td>
  <td>25.15k</td>
  <td>2.33</td>
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>75153.15k</td>
  <td>139757.98k</td>
  <td>139757.98k</td>
  <td>139757.98k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>146.07k</td>
  <td>155.92k</td>
  <td>6.32k</td>
  <td>1.53</td>
  <td>133262.66k</td>
  <td>133262.66k</td>
  <td>133262.66k</td>
  <td>133262.66k</td>
  <td>155916.65k</td>
  <td>155916.65k</td>
  <td>155916.65k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>146.61k</td>
  <td>150.41k</td>
  <td>6.66k</td>
  <td>0.28</td>
  <td>131612.99k</td>
  <td>131612.99k</td>
  <td>131612.99k</td>
  <td>131612.99k</td>
  <td>150406.46k</td>
  <td>150406.46k</td>
  <td>150406.46k</td>
</tr><tr>
  <td>/count</td>
  <td>150.92k</td>
  <td>155.78k</td>
  <td>7.32k</td>
  <td>0.14</td>
  <td>135781.31k</td>
  <td>135781.31k</td>
  <td>135781.31k</td>
  <td>135781.31k</td>
  <td>155781.36k</td>
  <td>155781.36k</td>
  <td>155781.36k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>144.59k</td>
  <td>148.36k</td>
  <td>7.47k</td>
  <td>0.28</td>
  <td>133460.66k</td>
  <td>133460.66k</td>
  <td>133460.66k</td>
  <td>133460.66k</td>
  <td>148362.58k</td>
  <td>148362.58k</td>
  <td>148362.58k</td>
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
  <td>0.47</td>
  <td>0.38</td>
  <td>1.09</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.53</td>
  <td>0.65</td>
  <td>0.75</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.15</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.47</td>
  <td>0.50</td>
  <td>0.59</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.08</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.47</td>
  <td>0.50</td>
  <td>0.58</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.35</td>
  <td>1.03</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.51</td>
  <td>0.58</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.44</td>
  <td>0.36</td>
  <td>1.03</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.47</td>
  <td>0.52</td>
  <td>0.59</td>
</tr></table>