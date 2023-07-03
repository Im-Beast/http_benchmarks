# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.2.23
  ### Deno version: 1.34.3

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
    <td>126.28k</td>
    <td>138.20k</td>
    <td>9.85k</td>
    <td>2.20 MiB</td>
    <td>0.50</td>
    <td>0.36</td>
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
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>138197.25k</td>
  <td>138197.25k</td>
  <td>138197.25k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.63</td>
  <td>0.73</td>
  <td>1.05</td>
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
  <td>126.28k</td>
  <td>138.20k</td>
  <td>9.85k</td>
  <td>2.20</td>
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>108919.07k</td>
  <td>138197.25k</td>
  <td>138197.25k</td>
  <td>138197.25k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>154.72k</td>
  <td>162.33k</td>
  <td>8.21k</td>
  <td>1.63</td>
  <td>139600.38k</td>
  <td>139600.38k</td>
  <td>139600.38k</td>
  <td>139600.38k</td>
  <td>162326.74k</td>
  <td>162326.74k</td>
  <td>162326.74k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>152.46k</td>
  <td>158.60k</td>
  <td>8.67k</td>
  <td>0.29</td>
  <td>135041.63k</td>
  <td>135041.63k</td>
  <td>135041.63k</td>
  <td>135041.63k</td>
  <td>158595.34k</td>
  <td>158595.34k</td>
  <td>158595.34k</td>
</tr><tr>
  <td>/count</td>
  <td>147.62k</td>
  <td>155.56k</td>
  <td>8.13k</td>
  <td>0.14</td>
  <td>131176.99k</td>
  <td>131176.99k</td>
  <td>131176.99k</td>
  <td>131176.99k</td>
  <td>155561.66k</td>
  <td>155561.66k</td>
  <td>155561.66k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>148.56k</td>
  <td>160.62k</td>
  <td>11.35k</td>
  <td>0.28</td>
  <td>127753.45k</td>
  <td>127753.45k</td>
  <td>127753.45k</td>
  <td>127753.45k</td>
  <td>160624.41k</td>
  <td>160624.41k</td>
  <td>160624.41k</td>
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
  <td>0.50</td>
  <td>0.36</td>
  <td>1.53</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.63</td>
  <td>0.73</td>
  <td>1.05</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>1.10</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.44</td>
  <td>0.50</td>
  <td>0.68</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.41</td>
  <td>0.31</td>
  <td>1.02</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.52</td>
  <td>0.60</td>
</tr><tr>
  <td>/count</td>
  <td>0.44</td>
  <td>0.32</td>
  <td>1.10</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.53</td>
  <td>0.57</td>
  <td>0.69</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.32</td>
  <td>1.11</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.55</td>
  <td>0.64</td>
</tr></table>