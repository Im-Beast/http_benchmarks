# Name: Vixeny 
  
  ### Version: 0.0.67
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
    <td>137.54k</td>
    <td>147.79k</td>
    <td>8.32k</td>
    <td>2.41 MiB</td>
    <td>0.46</td>
    <td>0.35</td>
    <td>1.34</td>
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
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>147787.40k</td>
  <td>147787.40k</td>
  <td>147787.40k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.50</td>
  <td>0.57</td>
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
  <td>137.54k</td>
  <td>147.79k</td>
  <td>8.32k</td>
  <td>2.41</td>
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>122416.44k</td>
  <td>147787.40k</td>
  <td>147787.40k</td>
  <td>147787.40k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>157.20k</td>
  <td>162.79k</td>
  <td>8.27k</td>
  <td>1.66</td>
  <td>139032.33k</td>
  <td>139032.33k</td>
  <td>139032.33k</td>
  <td>139032.33k</td>
  <td>162786.60k</td>
  <td>162786.60k</td>
  <td>162786.60k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>157.44k</td>
  <td>163.96k</td>
  <td>10.59k</td>
  <td>0.30</td>
  <td>141677.69k</td>
  <td>141677.69k</td>
  <td>141677.69k</td>
  <td>141677.69k</td>
  <td>163955.80k</td>
  <td>163955.80k</td>
  <td>163955.80k</td>
</tr><tr>
  <td>/count</td>
  <td>157.67k</td>
  <td>164.32k</td>
  <td>8.75k</td>
  <td>0.15</td>
  <td>142298.59k</td>
  <td>142298.59k</td>
  <td>142298.59k</td>
  <td>142298.59k</td>
  <td>164316.28k</td>
  <td>164316.28k</td>
  <td>164316.28k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>157.76k</td>
  <td>163.71k</td>
  <td>8.16k</td>
  <td>0.30</td>
  <td>142195.01k</td>
  <td>142195.01k</td>
  <td>142195.01k</td>
  <td>142195.01k</td>
  <td>163709.51k</td>
  <td>163709.51k</td>
  <td>163709.51k</td>
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
  <td>0.35</td>
  <td>1.34</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.50</td>
  <td>0.57</td>
  <td>0.72</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.08</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.56</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.17</td>
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
  <td>1.10</td>
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
  <td>0.33</td>
  <td>1.21</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.56</td>
</tr></table>