# Name: NHttp (flash) 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.2.23
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
    <td>129.58k</td>
    <td>138.65k</td>
    <td>12.80k</td>
    <td>2.26 MiB</td>
    <td>0.49</td>
    <td>0.35</td>
    <td>1.21</td>
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
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>138649.39k</td>
  <td>138649.39k</td>
  <td>138649.39k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.62</td>
  <td>0.69</td>
  <td>0.88</td>
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
  <td>129.58k</td>
  <td>138.65k</td>
  <td>12.80k</td>
  <td>2.26</td>
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>108501.69k</td>
  <td>138649.39k</td>
  <td>138649.39k</td>
  <td>138649.39k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>146.60k</td>
  <td>157.22k</td>
  <td>10.74k</td>
  <td>1.53</td>
  <td>121506.15k</td>
  <td>121506.15k</td>
  <td>121506.15k</td>
  <td>121506.15k</td>
  <td>157216.06k</td>
  <td>157216.06k</td>
  <td>157216.06k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>148.87k</td>
  <td>160.45k</td>
  <td>10.29k</td>
  <td>0.28</td>
  <td>130318.75k</td>
  <td>130318.75k</td>
  <td>130318.75k</td>
  <td>130318.75k</td>
  <td>160452.12k</td>
  <td>160452.12k</td>
  <td>160452.12k</td>
</tr><tr>
  <td>/count</td>
  <td>149.35k</td>
  <td>161.13k</td>
  <td>8.45k</td>
  <td>0.14</td>
  <td>134715.05k</td>
  <td>134715.05k</td>
  <td>134715.05k</td>
  <td>134715.05k</td>
  <td>161130.21k</td>
  <td>161130.21k</td>
  <td>161130.21k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>150.00k</td>
  <td>161.21k</td>
  <td>8.71k</td>
  <td>0.29</td>
  <td>133316.09k</td>
  <td>133316.09k</td>
  <td>133316.09k</td>
  <td>133316.09k</td>
  <td>161213.40k</td>
  <td>161213.40k</td>
  <td>161213.40k</td>
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
  <td>0.35</td>
  <td>1.21</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.62</td>
  <td>0.69</td>
  <td>0.88</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.28</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.51</td>
  <td>0.57</td>
  <td>0.71</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.21</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.48</td>
  <td>0.54</td>
  <td>0.68</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.12</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.57</td>
  <td>0.71</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.12</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.56</td>
  <td>0.70</td>
</tr></table>