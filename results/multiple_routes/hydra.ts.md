# Name: Hydra 
  
  ### Version: 0.1.1
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
    <td>134.71k</td>
    <td>144.96k</td>
    <td>9.49k</td>
    <td>2.37 MiB</td>
    <td>0.46</td>
    <td>0.36</td>
    <td>1.32</td>
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
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>144963.22k</td>
  <td>144963.22k</td>
  <td>144963.22k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.63</td>
  <td>0.73</td>
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
  <td>134.71k</td>
  <td>144.96k</td>
  <td>9.49k</td>
  <td>2.37</td>
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>116251.69k</td>
  <td>144963.22k</td>
  <td>144963.22k</td>
  <td>144963.22k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>150.77k</td>
  <td>156.72k</td>
  <td>8.03k</td>
  <td>1.58</td>
  <td>135061.89k</td>
  <td>135061.89k</td>
  <td>135061.89k</td>
  <td>135061.89k</td>
  <td>156724.07k</td>
  <td>156724.07k</td>
  <td>156724.07k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>151.68k</td>
  <td>157.53k</td>
  <td>7.67k</td>
  <td>0.29</td>
  <td>134604.90k</td>
  <td>134604.90k</td>
  <td>134604.90k</td>
  <td>134604.90k</td>
  <td>157528.44k</td>
  <td>157528.44k</td>
  <td>157528.44k</td>
</tr><tr>
  <td>/count</td>
  <td>152.42k</td>
  <td>157.51k</td>
  <td>7.62k</td>
  <td>0.15</td>
  <td>136680.01k</td>
  <td>136680.01k</td>
  <td>136680.01k</td>
  <td>136680.01k</td>
  <td>157513.29k</td>
  <td>157513.29k</td>
  <td>157513.29k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>150.43k</td>
  <td>156.09k</td>
  <td>8.56k</td>
  <td>0.29</td>
  <td>132250.95k</td>
  <td>132250.95k</td>
  <td>132250.95k</td>
  <td>132250.95k</td>
  <td>156087.61k</td>
  <td>156087.61k</td>
  <td>156087.61k</td>
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
  <td>0.36</td>
  <td>1.32</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.63</td>
  <td>0.73</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.15</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.46</td>
  <td>0.50</td>
  <td>0.58</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.41</td>
  <td>0.34</td>
  <td>1.21</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.50</td>
  <td>0.59</td>
</tr><tr>
  <td>/count</td>
  <td>0.41</td>
  <td>0.34</td>
  <td>1.13</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.59</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.23</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.47</td>
  <td>0.52</td>
  <td>0.64</td>
</tr></table>