# Name: Hydra 
  
  ### Version: 0.1.1
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
    <td>136.61k</td>
    <td>145.69k</td>
    <td>14.21k</td>
    <td>2.44 MiB</td>
    <td>0.45</td>
    <td>0.37</td>
    <td>1.32</td>
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
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>145686.94k</td>
  <td>145686.94k</td>
  <td>145686.94k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.48</td>
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
  <td>136.61k</td>
  <td>145.69k</td>
  <td>14.21k</td>
  <td>2.44</td>
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>107053.87k</td>
  <td>145686.94k</td>
  <td>145686.94k</td>
  <td>145686.94k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>150.25k</td>
  <td>155.10k</td>
  <td>7.53k</td>
  <td>1.58</td>
  <td>134278.17k</td>
  <td>134278.17k</td>
  <td>134278.17k</td>
  <td>134278.17k</td>
  <td>155099.20k</td>
  <td>155099.20k</td>
  <td>155099.20k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>151.08k</td>
  <td>156.06k</td>
  <td>8.23k</td>
  <td>0.29</td>
  <td>133133.66k</td>
  <td>133133.66k</td>
  <td>133133.66k</td>
  <td>133133.66k</td>
  <td>156059.94k</td>
  <td>156059.94k</td>
  <td>156059.94k</td>
</tr><tr>
  <td>/count</td>
  <td>151.13k</td>
  <td>156.44k</td>
  <td>7.52k</td>
  <td>0.14</td>
  <td>134403.83k</td>
  <td>134403.83k</td>
  <td>134403.83k</td>
  <td>134403.83k</td>
  <td>156444.73k</td>
  <td>156444.73k</td>
  <td>156444.73k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>152.18k</td>
  <td>157.34k</td>
  <td>7.66k</td>
  <td>0.29</td>
  <td>135256.29k</td>
  <td>135256.29k</td>
  <td>135256.29k</td>
  <td>135256.29k</td>
  <td>157339.46k</td>
  <td>157339.46k</td>
  <td>157339.46k</td>
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
  <td>0.45</td>
  <td>0.37</td>
  <td>1.32</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.48</td>
  <td>0.60</td>
  <td>0.71</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.18</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.27</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.59</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.19</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.58</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.41</td>
  <td>0.34</td>
  <td>1.15</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.48</td>
  <td>0.57</td>
</tr></table>