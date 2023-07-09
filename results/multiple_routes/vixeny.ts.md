# Name: Vixeny 
  
  ### Version: 0.0.63
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
    <td>135.99k</td>
    <td>145.30k</td>
    <td>9.92k</td>
    <td>2.40 MiB</td>
    <td>0.46</td>
    <td>0.37</td>
    <td>1.37</td>
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
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>145299.04k</td>
  <td>145299.04k</td>
  <td>145299.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.58</td>
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
  <td>135.99k</td>
  <td>145.30k</td>
  <td>9.92k</td>
  <td>2.40</td>
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>120277.31k</td>
  <td>145299.04k</td>
  <td>145299.04k</td>
  <td>145299.04k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>151.26k</td>
  <td>161.27k</td>
  <td>8.39k</td>
  <td>1.59</td>
  <td>141185.18k</td>
  <td>141185.18k</td>
  <td>141185.18k</td>
  <td>141185.18k</td>
  <td>161267.27k</td>
  <td>161267.27k</td>
  <td>161267.27k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>157.12k</td>
  <td>163.21k</td>
  <td>8.96k</td>
  <td>0.30</td>
  <td>143818.59k</td>
  <td>143818.59k</td>
  <td>143818.59k</td>
  <td>143818.59k</td>
  <td>163205.76k</td>
  <td>163205.76k</td>
  <td>163205.76k</td>
</tr><tr>
  <td>/count</td>
  <td>157.03k</td>
  <td>163.54k</td>
  <td>9.13k</td>
  <td>0.15</td>
  <td>136279.91k</td>
  <td>136279.91k</td>
  <td>136279.91k</td>
  <td>136279.91k</td>
  <td>163536.07k</td>
  <td>163536.07k</td>
  <td>163536.07k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>154.90k</td>
  <td>162.50k</td>
  <td>8.26k</td>
  <td>0.30</td>
  <td>135289.12k</td>
  <td>135289.12k</td>
  <td>135289.12k</td>
  <td>135289.12k</td>
  <td>162502.62k</td>
  <td>162502.62k</td>
  <td>162502.62k</td>
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
  <td>0.46</td>
  <td>0.37</td>
  <td>1.37</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.58</td>
  <td>0.70</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.15</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.56</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>0.98</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.56</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.07</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.44</td>
  <td>0.47</td>
  <td>0.55</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.01</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.48</td>
  <td>0.56</td>
</tr></table>