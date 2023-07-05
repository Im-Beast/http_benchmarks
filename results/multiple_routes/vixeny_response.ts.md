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
    <td>131.66k</td>
    <td>143.39k</td>
    <td>12.00k</td>
    <td>2.29 MiB</td>
    <td>0.48</td>
    <td>0.37</td>
    <td>1.35</td>
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
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>143387.91k</td>
  <td>143387.91k</td>
  <td>143387.91k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.61</td>
  <td>0.69</td>
  <td>0.81</td>
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
  <td>131.66k</td>
  <td>143.39k</td>
  <td>12.00k</td>
  <td>2.29</td>
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>105902.84k</td>
  <td>143387.91k</td>
  <td>143387.91k</td>
  <td>143387.91k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>147.18k</td>
  <td>155.94k</td>
  <td>7.70k</td>
  <td>1.55</td>
  <td>135871.19k</td>
  <td>135871.19k</td>
  <td>135871.19k</td>
  <td>135871.19k</td>
  <td>155944.46k</td>
  <td>155944.46k</td>
  <td>155944.46k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>150.78k</td>
  <td>157.97k</td>
  <td>8.87k</td>
  <td>0.29</td>
  <td>135379.98k</td>
  <td>135379.98k</td>
  <td>135379.98k</td>
  <td>135379.98k</td>
  <td>157972.76k</td>
  <td>157972.76k</td>
  <td>157972.76k</td>
</tr><tr>
  <td>/count</td>
  <td>148.53k</td>
  <td>160.65k</td>
  <td>8.32k</td>
  <td>0.14</td>
  <td>132708.55k</td>
  <td>132708.55k</td>
  <td>132708.55k</td>
  <td>132708.55k</td>
  <td>160652.68k</td>
  <td>160652.68k</td>
  <td>160652.68k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>150.14k</td>
  <td>161.38k</td>
  <td>10.98k</td>
  <td>0.29</td>
  <td>129428.10k</td>
  <td>129428.10k</td>
  <td>129428.10k</td>
  <td>129428.10k</td>
  <td>161382.01k</td>
  <td>161382.01k</td>
  <td>161382.01k</td>
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
  <td>0.48</td>
  <td>0.37</td>
  <td>1.35</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.61</td>
  <td>0.69</td>
  <td>0.81</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.26</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.56</td>
  <td>0.77</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.28</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.48</td>
  <td>0.56</td>
  <td>0.74</td>
</tr><tr>
  <td>/count</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.17</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.50</td>
  <td>0.56</td>
  <td>0.75</td>
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
  <td>0.71</td>
</tr></table>