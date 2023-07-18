# Multiple routes
## Name: Hydra 

### Version: 0.1.1
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
    <td>137.47k</td>
    <td>147.59k</td>
    <td>8.61k</td>
    <td>1.46 MiB</td>
    <td>0.45</td>
    <td>0.36</td>
    <td>1.38</td>
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
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>147592.90k</td>
  <td>147592.90k</td>
  <td>147592.90k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.53</td>
  <td>0.57</td>
  <td>1.04</td>
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
  <td>137.47k</td>
  <td>147.59k</td>
  <td>8.61k</td>
  <td>1.46</td>
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>121143.53k</td>
  <td>147592.90k</td>
  <td>147592.90k</td>
  <td>147592.90k</td>
</tr><tr>
  <td>/random_number</td>
  <td>133.04k</td>
  <td>140.70k</td>
  <td>7.19k</td>
  <td>2.31</td>
  <td>120420.26k</td>
  <td>120420.26k</td>
  <td>120420.26k</td>
  <td>120420.26k</td>
  <td>140703.60k</td>
  <td>140703.60k</td>
  <td>140703.60k</td>
</tr><tr>
  <td>/count</td>
  <td>136.28k</td>
  <td>153.48k</td>
  <td>18.38k</td>
  <td>0.14</td>
  <td>99561.50k</td>
  <td>99561.50k</td>
  <td>99561.50k</td>
  <td>99561.50k</td>
  <td>153484.78k</td>
  <td>153484.78k</td>
  <td>153484.78k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>145.93k</td>
  <td>156.22k</td>
  <td>8.81k</td>
  <td>0.28</td>
  <td>132600.21k</td>
  <td>132600.21k</td>
  <td>132600.21k</td>
  <td>132600.21k</td>
  <td>156217.96k</td>
  <td>156217.96k</td>
  <td>156217.96k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>144.77k</td>
  <td>152.30k</td>
  <td>10.34k</td>
  <td>0.28</td>
  <td>128232.05k</td>
  <td>128232.05k</td>
  <td>128232.05k</td>
  <td>128232.05k</td>
  <td>152295.57k</td>
  <td>152295.57k</td>
  <td>152295.57k</td>
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
  <td>0.45</td>
  <td>0.36</td>
  <td>1.38</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.53</td>
  <td>0.57</td>
  <td>1.04</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.07</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.58</td>
  <td>0.65</td>
  <td>0.88</td>
</tr><tr>
  <td>/count</td>
  <td>0.44</td>
  <td>0.35</td>
  <td>1.34</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.48</td>
  <td>0.54</td>
  <td>0.89</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.15</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.49</td>
  <td>0.54</td>
  <td>0.90</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>1.11</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.51</td>
  <td>0.55</td>
  <td>0.89</td>
</tr></table>