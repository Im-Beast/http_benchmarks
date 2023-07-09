# Name: Vixeny – Response 
  ### Description: Using type: 'response'
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
    <td>125.26k</td>
    <td>144.62k</td>
    <td>27.75k</td>
    <td>2.18 MiB</td>
    <td>0.51</td>
    <td>0.36</td>
    <td>1.80</td>
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
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>144621.73k</td>
  <td>144621.73k</td>
  <td>144621.73k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.70</td>
  <td>0.77</td>
  <td>0.97</td>
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
  <td>125.26k</td>
  <td>144.62k</td>
  <td>27.75k</td>
  <td>2.18</td>
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>63832.69k</td>
  <td>144621.73k</td>
  <td>144621.73k</td>
  <td>144621.73k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>153.79k</td>
  <td>159.48k</td>
  <td>9.34k</td>
  <td>1.61</td>
  <td>133237.38k</td>
  <td>133237.38k</td>
  <td>133237.38k</td>
  <td>133237.38k</td>
  <td>159476.32k</td>
  <td>159476.32k</td>
  <td>159476.32k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>156.37k</td>
  <td>161.53k</td>
  <td>8.36k</td>
  <td>0.30</td>
  <td>139401.83k</td>
  <td>139401.83k</td>
  <td>139401.83k</td>
  <td>139401.83k</td>
  <td>161526.07k</td>
  <td>161526.07k</td>
  <td>161526.07k</td>
</tr><tr>
  <td>/count</td>
  <td>155.98k</td>
  <td>162.07k</td>
  <td>7.33k</td>
  <td>0.15</td>
  <td>142142.74k</td>
  <td>142142.74k</td>
  <td>142142.74k</td>
  <td>142142.74k</td>
  <td>162074.23k</td>
  <td>162074.23k</td>
  <td>162074.23k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>153.58k</td>
  <td>160.61k</td>
  <td>8.55k</td>
  <td>0.29</td>
  <td>136314.64k</td>
  <td>136314.64k</td>
  <td>136314.64k</td>
  <td>136314.64k</td>
  <td>160610.73k</td>
  <td>160610.73k</td>
  <td>160610.73k</td>
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
  <td>0.51</td>
  <td>0.36</td>
  <td>1.80</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.70</td>
  <td>0.77</td>
  <td>0.97</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.10</td>
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
  <td>1.28</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.43</td>
  <td>0.47</td>
  <td>0.59</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.11</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.43</td>
  <td>0.46</td>
  <td>0.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.28</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.57</td>
</tr></table>