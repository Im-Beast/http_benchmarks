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
    <td>128.13k</td>
    <td>137.64k</td>
    <td>11.24k</td>
    <td>2.23 MiB</td>
    <td>0.49</td>
    <td>0.38</td>
    <td>1.25</td>
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
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>137643.45k</td>
  <td>137643.45k</td>
  <td>137643.45k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.63</td>
  <td>0.70</td>
  <td>0.84</td>
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
  <td>128.13k</td>
  <td>137.64k</td>
  <td>11.24k</td>
  <td>2.23</td>
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>106863.74k</td>
  <td>137643.45k</td>
  <td>137643.45k</td>
  <td>137643.45k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>134.33k</td>
  <td>148.12k</td>
  <td>13.25k</td>
  <td>1.41</td>
  <td>111268.20k</td>
  <td>111268.20k</td>
  <td>111268.20k</td>
  <td>111268.20k</td>
  <td>148118.44k</td>
  <td>148118.44k</td>
  <td>148118.44k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>134.63k</td>
  <td>148.63k</td>
  <td>13.69k</td>
  <td>0.27</td>
  <td>100501.54k</td>
  <td>100501.54k</td>
  <td>100501.54k</td>
  <td>100501.54k</td>
  <td>148628.92k</td>
  <td>148628.92k</td>
  <td>148628.92k</td>
</tr><tr>
  <td>/count</td>
  <td>144.23k</td>
  <td>154.54k</td>
  <td>9.65k</td>
  <td>0.14</td>
  <td>125018.98k</td>
  <td>125018.98k</td>
  <td>125018.98k</td>
  <td>125018.98k</td>
  <td>154543.86k</td>
  <td>154543.86k</td>
  <td>154543.86k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>133.61k</td>
  <td>152.15k</td>
  <td>26.98k</td>
  <td>0.27</td>
  <td>70152.69k</td>
  <td>70152.69k</td>
  <td>70152.69k</td>
  <td>70152.69k</td>
  <td>152150.02k</td>
  <td>152150.02k</td>
  <td>152150.02k</td>
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
  <td>0.49</td>
  <td>0.38</td>
  <td>1.25</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.63</td>
  <td>0.70</td>
  <td>0.84</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.47</td>
  <td>0.35</td>
  <td>1.80</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.55</td>
  <td>0.60</td>
  <td>0.84</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>1.37</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.49</td>
  <td>0.59</td>
  <td>0.76</td>
</tr><tr>
  <td>/count</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>1.16</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.49</td>
  <td>0.58</td>
  <td>0.68</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.44</td>
  <td>0.34</td>
  <td>1.13</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.50</td>
  <td>0.59</td>
  <td>0.74</td>
</tr></table>