# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.2.23
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
    <td>138.94k</td>
    <td>148.39k</td>
    <td>12.36k</td>
    <td>2.42 MiB</td>
    <td>0.45</td>
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
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>148390.28k</td>
  <td>148390.28k</td>
  <td>148390.28k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.54</td>
  <td>0.60</td>
  <td>0.70</td>
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
  <td>138.94k</td>
  <td>148.39k</td>
  <td>12.36k</td>
  <td>2.42</td>
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>118458.29k</td>
  <td>148390.28k</td>
  <td>148390.28k</td>
  <td>148390.28k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>155.88k</td>
  <td>163.20k</td>
  <td>9.44k</td>
  <td>1.64</td>
  <td>135214.39k</td>
  <td>135214.39k</td>
  <td>135214.39k</td>
  <td>135214.39k</td>
  <td>163201.34k</td>
  <td>163201.34k</td>
  <td>163201.34k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>159.23k</td>
  <td>165.95k</td>
  <td>8.57k</td>
  <td>0.31</td>
  <td>144061.94k</td>
  <td>144061.94k</td>
  <td>144061.94k</td>
  <td>144061.94k</td>
  <td>165951.60k</td>
  <td>165951.60k</td>
  <td>165951.60k</td>
</tr><tr>
  <td>/count</td>
  <td>158.55k</td>
  <td>165.33k</td>
  <td>10.52k</td>
  <td>0.15</td>
  <td>140287.31k</td>
  <td>140287.31k</td>
  <td>140287.31k</td>
  <td>140287.31k</td>
  <td>165327.99k</td>
  <td>165327.99k</td>
  <td>165327.99k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>158.30k</td>
  <td>166.23k</td>
  <td>10.36k</td>
  <td>0.30</td>
  <td>139825.80k</td>
  <td>139825.80k</td>
  <td>139825.80k</td>
  <td>139825.80k</td>
  <td>166229.17k</td>
  <td>166229.17k</td>
  <td>166229.17k</td>
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
  <td>0.36</td>
  <td>1.24</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.54</td>
  <td>0.60</td>
  <td>0.70</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.08</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.39</td>
  <td>0.32</td>
  <td>1.08</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.42</td>
  <td>0.46</td>
  <td>0.54</td>
</tr><tr>
  <td>/count</td>
  <td>0.39</td>
  <td>0.32</td>
  <td>1.09</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.42</td>
  <td>0.47</td>
  <td>0.53</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.39</td>
  <td>0.32</td>
  <td>1.25</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.56</td>
</tr></table>