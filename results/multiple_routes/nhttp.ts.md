# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.3.0
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
    <td>146.66k</td>
    <td>151.53k</td>
    <td>7.45k</td>
    <td>2.55 MiB</td>
    <td>0.43</td>
    <td>0.35</td>
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
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>151530.04k</td>
  <td>151530.04k</td>
  <td>151530.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.46</td>
  <td>0.58</td>
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
  <td>146.66k</td>
  <td>151.53k</td>
  <td>7.45k</td>
  <td>2.55</td>
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>130136.15k</td>
  <td>151530.04k</td>
  <td>151530.04k</td>
  <td>151530.04k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>154.52k</td>
  <td>161.25k</td>
  <td>7.84k</td>
  <td>1.62</td>
  <td>134335.72k</td>
  <td>134335.72k</td>
  <td>134335.72k</td>
  <td>134335.72k</td>
  <td>161249.65k</td>
  <td>161249.65k</td>
  <td>161249.65k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>156.74k</td>
  <td>163.55k</td>
  <td>8.64k</td>
  <td>0.30</td>
  <td>141719.50k</td>
  <td>141719.50k</td>
  <td>141719.50k</td>
  <td>141719.50k</td>
  <td>163548.57k</td>
  <td>163548.57k</td>
  <td>163548.57k</td>
</tr><tr>
  <td>/count</td>
  <td>157.48k</td>
  <td>163.80k</td>
  <td>8.85k</td>
  <td>0.15</td>
  <td>142362.77k</td>
  <td>142362.77k</td>
  <td>142362.77k</td>
  <td>142362.77k</td>
  <td>163803.65k</td>
  <td>163803.65k</td>
  <td>163803.65k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>157.62k</td>
  <td>163.50k</td>
  <td>8.49k</td>
  <td>0.30</td>
  <td>140228.99k</td>
  <td>140228.99k</td>
  <td>140228.99k</td>
  <td>140228.99k</td>
  <td>163503.59k</td>
  <td>163503.59k</td>
  <td>163503.59k</td>
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
  <td>0.35</td>
  <td>1.18</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.46</td>
  <td>0.58</td>
  <td>0.68</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.25</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.04</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.55</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.11</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.54</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.21</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.56</td>
</tr></table>