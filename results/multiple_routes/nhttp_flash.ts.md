# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.2.24
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
    <td>148.18k</td>
    <td>154.56k</td>
    <td>8.61k</td>
    <td>2.58 MiB</td>
    <td>0.43</td>
    <td>0.34</td>
    <td>1.27</td>
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
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>154558.06k</td>
  <td>154558.06k</td>
  <td>154558.06k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.46</td>
  <td>0.56</td>
  <td>0.68</td>
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
  <td>148.18k</td>
  <td>154.56k</td>
  <td>8.61k</td>
  <td>2.58</td>
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>129572.89k</td>
  <td>154558.06k</td>
  <td>154558.06k</td>
  <td>154558.06k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>155.17k</td>
  <td>159.61k</td>
  <td>7.77k</td>
  <td>1.63</td>
  <td>138655.08k</td>
  <td>138655.08k</td>
  <td>138655.08k</td>
  <td>138655.08k</td>
  <td>159609.05k</td>
  <td>159609.05k</td>
  <td>159609.05k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>154.17k</td>
  <td>164.24k</td>
  <td>9.06k</td>
  <td>0.30</td>
  <td>137459.93k</td>
  <td>137459.93k</td>
  <td>137459.93k</td>
  <td>137459.93k</td>
  <td>164240.90k</td>
  <td>164240.90k</td>
  <td>164240.90k</td>
</tr><tr>
  <td>/count</td>
  <td>157.80k</td>
  <td>164.70k</td>
  <td>9.44k</td>
  <td>0.15</td>
  <td>142197.83k</td>
  <td>142197.83k</td>
  <td>142197.83k</td>
  <td>142197.83k</td>
  <td>164696.95k</td>
  <td>164696.95k</td>
  <td>164696.95k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>158.28k</td>
  <td>165.11k</td>
  <td>8.66k</td>
  <td>0.30</td>
  <td>139832.47k</td>
  <td>139832.47k</td>
  <td>139832.47k</td>
  <td>139832.47k</td>
  <td>165109.21k</td>
  <td>165109.21k</td>
  <td>165109.21k</td>
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
  <td>0.43</td>
  <td>0.34</td>
  <td>1.27</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.46</td>
  <td>0.56</td>
  <td>0.68</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.12</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.58</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>1.12</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.09</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.55</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.05</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.55</td>
</tr></table>