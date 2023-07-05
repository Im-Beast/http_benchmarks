# Name: Hono 
  
  ### Version: 3.2.7
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
    <td>115.56k</td>
    <td>128.32k</td>
    <td>13.68k</td>
    <td>2.01 MiB</td>
    <td>0.55</td>
    <td>0.40</td>
    <td>3.09</td>
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
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>128319.94k</td>
  <td>128319.94k</td>
  <td>128319.94k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.62</td>
  <td>0.84</td>
  <td>1.25</td>
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
  <td>115.56k</td>
  <td>128.32k</td>
  <td>13.68k</td>
  <td>2.01</td>
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>81407.28k</td>
  <td>128319.94k</td>
  <td>128319.94k</td>
  <td>128319.94k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>129.84k</td>
  <td>148.40k</td>
  <td>17.48k</td>
  <td>1.36</td>
  <td>91116.40k</td>
  <td>91116.40k</td>
  <td>91116.40k</td>
  <td>91116.40k</td>
  <td>148399.28k</td>
  <td>148399.28k</td>
  <td>148399.28k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>129.67k</td>
  <td>146.53k</td>
  <td>13.68k</td>
  <td>0.25</td>
  <td>99218.25k</td>
  <td>99218.25k</td>
  <td>99218.25k</td>
  <td>99218.25k</td>
  <td>146532.82k</td>
  <td>146532.82k</td>
  <td>146532.82k</td>
</tr><tr>
  <td>/count</td>
  <td>130.24k</td>
  <td>148.25k</td>
  <td>16.00k</td>
  <td>0.12</td>
  <td>103274.41k</td>
  <td>103274.41k</td>
  <td>103274.41k</td>
  <td>103274.41k</td>
  <td>148250.46k</td>
  <td>148250.46k</td>
  <td>148250.46k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>133.03k</td>
  <td>146.24k</td>
  <td>12.12k</td>
  <td>0.25</td>
  <td>107950.14k</td>
  <td>107950.14k</td>
  <td>107950.14k</td>
  <td>107950.14k</td>
  <td>146243.74k</td>
  <td>146243.74k</td>
  <td>146243.74k</td>
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
  <td>0.55</td>
  <td>0.40</td>
  <td>3.09</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.45</td>
  <td>0.62</td>
  <td>0.84</td>
  <td>1.25</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.49</td>
  <td>0.34</td>
  <td>1.98</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.56</td>
  <td>0.68</td>
  <td>1.44</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.49</td>
  <td>0.20</td>
  <td>1.57</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.68</td>
  <td>1.24</td>
</tr><tr>
  <td>/count</td>
  <td>0.48</td>
  <td>0.36</td>
  <td>2.92</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.52</td>
  <td>0.64</td>
  <td>1.54</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.63</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.53</td>
  <td>0.62</td>
  <td>1.38</td>
</tr></table>