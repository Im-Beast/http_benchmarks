# Name: Fastro (flash) 
  
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
    <td>133.90k</td>
    <td>143.09k</td>
    <td>8.33k</td>
    <td>2.33 MiB</td>
    <td>0.47</td>
    <td>0.37</td>
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
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>143087.46k</td>
  <td>143087.46k</td>
  <td>143087.46k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.51</td>
  <td>0.61</td>
  <td>0.78</td>
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
  <td>133.90k</td>
  <td>143.09k</td>
  <td>8.33k</td>
  <td>2.33</td>
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>115716.59k</td>
  <td>143087.46k</td>
  <td>143087.46k</td>
  <td>143087.46k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>149.37k</td>
  <td>155.32k</td>
  <td>7.24k</td>
  <td>1.57</td>
  <td>133783.58k</td>
  <td>133783.58k</td>
  <td>133783.58k</td>
  <td>133783.58k</td>
  <td>155319.61k</td>
  <td>155319.61k</td>
  <td>155319.61k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>149.32k</td>
  <td>155.19k</td>
  <td>7.58k</td>
  <td>0.28</td>
  <td>134365.72k</td>
  <td>134365.72k</td>
  <td>134365.72k</td>
  <td>134365.72k</td>
  <td>155194.40k</td>
  <td>155194.40k</td>
  <td>155194.40k</td>
</tr><tr>
  <td>/count</td>
  <td>150.75k</td>
  <td>155.55k</td>
  <td>6.53k</td>
  <td>0.14</td>
  <td>137589.89k</td>
  <td>137589.89k</td>
  <td>137589.89k</td>
  <td>137589.89k</td>
  <td>155550.29k</td>
  <td>155550.29k</td>
  <td>155550.29k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>151.16k</td>
  <td>155.61k</td>
  <td>6.90k</td>
  <td>0.29</td>
  <td>136704.39k</td>
  <td>136704.39k</td>
  <td>136704.39k</td>
  <td>136704.39k</td>
  <td>155608.32k</td>
  <td>155608.32k</td>
  <td>155608.32k</td>
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
  <td>0.37</td>
  <td>1.32</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.51</td>
  <td>0.61</td>
  <td>0.78</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.20</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.49</td>
  <td>0.62</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.13</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.45</td>
  <td>0.51</td>
  <td>0.58</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.18</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.48</td>
  <td>0.60</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.10</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.48</td>
  <td>0.59</td>
</tr></table>