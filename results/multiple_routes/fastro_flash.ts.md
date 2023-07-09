# Name: Fastro (flash) 
  
  ### Version: 0.70.5
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
    <td>133.53k</td>
    <td>138.90k</td>
    <td>9.12k</td>
    <td>2.33 MiB</td>
    <td>0.47</td>
    <td>0.38</td>
    <td>1.18</td>
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
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>138901.56k</td>
  <td>138901.56k</td>
  <td>138901.56k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.63</td>
  <td>0.72</td>
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
  <td>133.53k</td>
  <td>138.90k</td>
  <td>9.12k</td>
  <td>2.33</td>
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>116613.40k</td>
  <td>138901.56k</td>
  <td>138901.56k</td>
  <td>138901.56k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>146.21k</td>
  <td>153.70k</td>
  <td>7.77k</td>
  <td>1.53</td>
  <td>129703.68k</td>
  <td>129703.68k</td>
  <td>129703.68k</td>
  <td>129703.68k</td>
  <td>153700.78k</td>
  <td>153700.78k</td>
  <td>153700.78k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>145.38k</td>
  <td>153.63k</td>
  <td>9.95k</td>
  <td>0.28</td>
  <td>128811.28k</td>
  <td>128811.28k</td>
  <td>128811.28k</td>
  <td>128811.28k</td>
  <td>153631.76k</td>
  <td>153631.76k</td>
  <td>153631.76k</td>
</tr><tr>
  <td>/count</td>
  <td>150.54k</td>
  <td>156.02k</td>
  <td>7.95k</td>
  <td>0.14</td>
  <td>133627.21k</td>
  <td>133627.21k</td>
  <td>133627.21k</td>
  <td>133627.21k</td>
  <td>156016.46k</td>
  <td>156016.46k</td>
  <td>156016.46k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>149.82k</td>
  <td>154.97k</td>
  <td>8.84k</td>
  <td>0.29</td>
  <td>128847.15k</td>
  <td>128847.15k</td>
  <td>128847.15k</td>
  <td>128847.15k</td>
  <td>154971.61k</td>
  <td>154971.61k</td>
  <td>154971.61k</td>
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
  <td>1.18</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.63</td>
  <td>0.72</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.29</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.47</td>
  <td>0.52</td>
  <td>0.61</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>1.25</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.46</td>
  <td>0.51</td>
  <td>0.61</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.07</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.59</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.12</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.60</td>
</tr></table>