# Name: Vixeny 
  
  ### Version: 0.0.6
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
    <td>130.90k</td>
    <td>144.35k</td>
    <td>17.16k</td>
    <td>2.29 MiB</td>
    <td>0.48</td>
    <td>0.35</td>
    <td>1.37</td>
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
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>144345.64k</td>
  <td>144345.64k</td>
  <td>144345.64k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.60</td>
  <td>0.70</td>
  <td>0.91</td>
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
  <td>130.90k</td>
  <td>144.35k</td>
  <td>17.16k</td>
  <td>2.29</td>
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>103369.74k</td>
  <td>144345.64k</td>
  <td>144345.64k</td>
  <td>144345.64k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>152.39k</td>
  <td>162.61k</td>
  <td>9.15k</td>
  <td>1.60</td>
  <td>135622.43k</td>
  <td>135622.43k</td>
  <td>135622.43k</td>
  <td>135622.43k</td>
  <td>162610.75k</td>
  <td>162610.75k</td>
  <td>162610.75k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>136.20k</td>
  <td>150.10k</td>
  <td>12.68k</td>
  <td>2.42</td>
  <td>117594.15k</td>
  <td>117594.15k</td>
  <td>117594.15k</td>
  <td>117594.15k</td>
  <td>150098.51k</td>
  <td>150098.51k</td>
  <td>150098.51k</td>
</tr><tr>
  <td>/count</td>
  <td>149.37k</td>
  <td>159.17k</td>
  <td>11.14k</td>
  <td>0.14</td>
  <td>127662.41k</td>
  <td>127662.41k</td>
  <td>127662.41k</td>
  <td>127662.41k</td>
  <td>159173.21k</td>
  <td>159173.21k</td>
  <td>159173.21k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>153.55k</td>
  <td>162.28k</td>
  <td>11.16k</td>
  <td>0.15</td>
  <td>129730.09k</td>
  <td>129730.09k</td>
  <td>129730.09k</td>
  <td>129730.09k</td>
  <td>162281.94k</td>
  <td>162281.94k</td>
  <td>162281.94k</td>
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
  <td>0.35</td>
  <td>1.37</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.60</td>
  <td>0.70</td>
  <td>0.91</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.02</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.46</td>
  <td>0.54</td>
  <td>0.73</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.46</td>
  <td>0.34</td>
  <td>1.33</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.49</td>
  <td>0.66</td>
  <td>0.87</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.32</td>
  <td>1.07</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.49</td>
  <td>0.55</td>
  <td>0.70</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>1.28</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.52</td>
  <td>0.75</td>
</tr></table>