# Multiple routes
## Name: Fastro (flash) 

### Version: 0.70.5
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
    <td>135.61k</td>
    <td>146.99k</td>
    <td>11.07k</td>
    <td>1.43 MiB</td>
    <td>0.46</td>
    <td>0.35</td>
    <td>1.76</td>
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
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>146992.54k</td>
  <td>146992.54k</td>
  <td>146992.54k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.53</td>
  <td>0.59</td>
  <td>1.06</td>
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
  <td>/hello_world</td>
  <td>135.61k</td>
  <td>146.99k</td>
  <td>11.07k</td>
  <td>1.43</td>
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>124761.62k</td>
  <td>146992.54k</td>
  <td>146992.54k</td>
  <td>146992.54k</td>
</tr><tr>
  <td>/random_number</td>
  <td>128.27k</td>
  <td>134.41k</td>
  <td>8.56k</td>
  <td>2.23</td>
  <td>111158.97k</td>
  <td>111158.97k</td>
  <td>111158.97k</td>
  <td>111158.97k</td>
  <td>134408.15k</td>
  <td>134408.15k</td>
  <td>134408.15k</td>
</tr><tr>
  <td>/count</td>
  <td>138.27k</td>
  <td>146.66k</td>
  <td>7.89k</td>
  <td>0.13</td>
  <td>122248.51k</td>
  <td>122248.51k</td>
  <td>122248.51k</td>
  <td>122248.51k</td>
  <td>146657.86k</td>
  <td>146657.86k</td>
  <td>146657.86k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>138.64k</td>
  <td>153.67k</td>
  <td>9.32k</td>
  <td>0.27</td>
  <td>126543.18k</td>
  <td>126543.18k</td>
  <td>126543.18k</td>
  <td>126543.18k</td>
  <td>153673.59k</td>
  <td>153673.59k</td>
  <td>153673.59k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>135.39k</td>
  <td>152.98k</td>
  <td>20.97k</td>
  <td>0.27</td>
  <td>88775.23k</td>
  <td>88775.23k</td>
  <td>88775.23k</td>
  <td>88775.23k</td>
  <td>152975.03k</td>
  <td>152975.03k</td>
  <td>152975.03k</td>
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
  <td>/hello_world</td>
  <td>0.46</td>
  <td>0.35</td>
  <td>1.76</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.53</td>
  <td>0.59</td>
  <td>1.06</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.49</td>
  <td>0.37</td>
  <td>1.27</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.60</td>
  <td>0.71</td>
  <td>0.97</td>
</tr><tr>
  <td>/count</td>
  <td>0.46</td>
  <td>0.33</td>
  <td>1.16</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.54</td>
  <td>0.60</td>
  <td>0.89</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.45</td>
  <td>0.33</td>
  <td>1.21</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.54</td>
  <td>0.59</td>
  <td>0.95</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.44</td>
  <td>0.33</td>
  <td>1.17</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.52</td>
  <td>0.56</td>
  <td>0.92</td>
</tr></table>