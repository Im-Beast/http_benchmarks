# Multiple routes
## Name: Vixeny 

### Version: 0.0.675
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
    <td>132.88k</td>
    <td>156.26k</td>
    <td>28.49k</td>
    <td>1.49 MiB</td>
    <td>0.44</td>
    <td>0.34</td>
    <td>1.69</td>
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
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>156264.20k</td>
  <td>156264.20k</td>
  <td>156264.20k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.52</td>
  <td>0.61</td>
  <td>1.02</td>
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
  <td>132.88k</td>
  <td>156.26k</td>
  <td>28.49k</td>
  <td>1.49</td>
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>84139.76k</td>
  <td>156264.20k</td>
  <td>156264.20k</td>
  <td>156264.20k</td>
</tr><tr>
  <td>/random_number</td>
  <td>138.37k</td>
  <td>149.74k</td>
  <td>11.47k</td>
  <td>2.46</td>
  <td>117663.25k</td>
  <td>117663.25k</td>
  <td>117663.25k</td>
  <td>117663.25k</td>
  <td>149744.62k</td>
  <td>149744.62k</td>
  <td>149744.62k</td>
</tr><tr>
  <td>/count</td>
  <td>147.27k</td>
  <td>155.10k</td>
  <td>9.53k</td>
  <td>0.14</td>
  <td>134888.92k</td>
  <td>134888.92k</td>
  <td>134888.92k</td>
  <td>134888.92k</td>
  <td>155098.77k</td>
  <td>155098.77k</td>
  <td>155098.77k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>152.34k</td>
  <td>158.00k</td>
  <td>8.07k</td>
  <td>0.29</td>
  <td>142738.88k</td>
  <td>142738.88k</td>
  <td>142738.88k</td>
  <td>142738.88k</td>
  <td>157999.93k</td>
  <td>157999.93k</td>
  <td>157999.93k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>146.48k</td>
  <td>159.32k</td>
  <td>10.97k</td>
  <td>0.28</td>
  <td>130151.97k</td>
  <td>130151.97k</td>
  <td>130151.97k</td>
  <td>130151.97k</td>
  <td>159323.40k</td>
  <td>159323.40k</td>
  <td>159323.40k</td>
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
  <td>0.44</td>
  <td>0.34</td>
  <td>1.69</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.52</td>
  <td>0.61</td>
  <td>1.02</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.45</td>
  <td>0.34</td>
  <td>1.56</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.52</td>
  <td>0.63</td>
  <td>0.92</td>
</tr><tr>
  <td>/count</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.35</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.48</td>
  <td>0.55</td>
  <td>0.95</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.03</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.45</td>
  <td>0.52</td>
  <td>0.81</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.20</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.47</td>
  <td>0.54</td>
  <td>0.94</td>
</tr></table>