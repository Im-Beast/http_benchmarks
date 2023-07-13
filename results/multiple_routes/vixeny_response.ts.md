# Name: Vixeny – Response 
  ### Description: Using type: 'response'
  ### Version: 0.0.66
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
    <td>142.88k</td>
    <td>150.85k</td>
    <td>9.51k</td>
    <td>2.49 MiB</td>
    <td>0.44</td>
    <td>0.35</td>
    <td>1.16</td>
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
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>150846.52k</td>
  <td>150846.52k</td>
  <td>150846.52k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.49</td>
  <td>0.57</td>
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
  <td>142.88k</td>
  <td>150.85k</td>
  <td>9.51k</td>
  <td>2.49</td>
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>127724.28k</td>
  <td>150846.52k</td>
  <td>150846.52k</td>
  <td>150846.52k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>157.05k</td>
  <td>163.90k</td>
  <td>8.60k</td>
  <td>1.66</td>
  <td>137238.58k</td>
  <td>137238.58k</td>
  <td>137238.58k</td>
  <td>137238.58k</td>
  <td>163900.46k</td>
  <td>163900.46k</td>
  <td>163900.46k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>157.45k</td>
  <td>164.51k</td>
  <td>9.79k</td>
  <td>0.30</td>
  <td>141260.46k</td>
  <td>141260.46k</td>
  <td>141260.46k</td>
  <td>141260.46k</td>
  <td>164508.04k</td>
  <td>164508.04k</td>
  <td>164508.04k</td>
</tr><tr>
  <td>/count</td>
  <td>158.25k</td>
  <td>164.74k</td>
  <td>9.77k</td>
  <td>0.15</td>
  <td>140706.65k</td>
  <td>140706.65k</td>
  <td>140706.65k</td>
  <td>140706.65k</td>
  <td>164739.23k</td>
  <td>164739.23k</td>
  <td>164739.23k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>158.68k</td>
  <td>165.03k</td>
  <td>9.03k</td>
  <td>0.30</td>
  <td>142374.41k</td>
  <td>142374.41k</td>
  <td>142374.41k</td>
  <td>142374.41k</td>
  <td>165027.59k</td>
  <td>165027.59k</td>
  <td>165027.59k</td>
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
  <td>0.35</td>
  <td>1.16</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.49</td>
  <td>0.57</td>
  <td>0.70</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.10</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.11</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.56</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.13</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.55</td>
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
  <td>0.56</td>
</tr></table>