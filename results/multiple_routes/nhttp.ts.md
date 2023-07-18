# Multiple routes
## Name: NHttp 

### Version: 1.3.2
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
    <td>144.75k</td>
    <td>157.33k</td>
    <td>10.38k</td>
    <td>1.52 MiB</td>
    <td>0.44</td>
    <td>0.33</td>
    <td>1.53</td>
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
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>157329.30k</td>
  <td>157329.30k</td>
  <td>157329.30k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.50</td>
  <td>0.55</td>
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
  <td>144.75k</td>
  <td>157.33k</td>
  <td>10.38k</td>
  <td>1.52</td>
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>129685.01k</td>
  <td>157329.30k</td>
  <td>157329.30k</td>
  <td>157329.30k</td>
</tr><tr>
  <td>/random_number</td>
  <td>137.80k</td>
  <td>147.56k</td>
  <td>8.56k</td>
  <td>2.44</td>
  <td>122487.41k</td>
  <td>122487.41k</td>
  <td>122487.41k</td>
  <td>122487.41k</td>
  <td>147564.25k</td>
  <td>147564.25k</td>
  <td>147564.25k</td>
</tr><tr>
  <td>/count</td>
  <td>156.96k</td>
  <td>165.97k</td>
  <td>8.74k</td>
  <td>0.15</td>
  <td>144631.39k</td>
  <td>144631.39k</td>
  <td>144631.39k</td>
  <td>144631.39k</td>
  <td>165965.11k</td>
  <td>165965.11k</td>
  <td>165965.11k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>148.41k</td>
  <td>162.46k</td>
  <td>10.06k</td>
  <td>0.28</td>
  <td>133291.03k</td>
  <td>133291.03k</td>
  <td>133291.03k</td>
  <td>133291.03k</td>
  <td>162456.80k</td>
  <td>162456.80k</td>
  <td>162456.80k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>147.85k</td>
  <td>159.39k</td>
  <td>12.09k</td>
  <td>0.28</td>
  <td>129657.10k</td>
  <td>129657.10k</td>
  <td>129657.10k</td>
  <td>129657.10k</td>
  <td>159385.73k</td>
  <td>159385.73k</td>
  <td>159385.73k</td>
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
  <td>0.44</td>
  <td>0.33</td>
  <td>1.53</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.50</td>
  <td>0.55</td>
  <td>1.04</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.45</td>
  <td>0.34</td>
  <td>1.32</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.53</td>
  <td>0.64</td>
  <td>0.95</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.12</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.50</td>
  <td>0.82</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.19</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.47</td>
  <td>0.54</td>
  <td>0.89</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.32</td>
  <td>1.08</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.56</td>
  <td>0.88</td>
</tr></table>