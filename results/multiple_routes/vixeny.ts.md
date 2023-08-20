# Multiple routes
## Name: Vixeny 

### Version: 0.0.682
### Deno version: 1.36.0

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
    <td>95.86k</td>
    <td>128.38k</td>
    <td>12.25k</td>
    <td>1.02 MiB</td>
    <td>0.65</td>
    <td>0.41</td>
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
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>125241.68k</td>
  <td>128381.38k</td>
  <td>128381.38k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.79</td>
  <td>0.81</td>
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
  <td>/hello_world</td>
  <td>95.86k</td>
  <td>128.38k</td>
  <td>12.25k</td>
  <td>1.02</td>
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>82299.31k</td>
  <td>125241.68k</td>
  <td>128381.38k</td>
  <td>128381.38k</td>
</tr><tr>
  <td>/random_number</td>
  <td>127.43k</td>
  <td>134.50k</td>
  <td>6.25k</td>
  <td>2.22</td>
  <td>113402.36k</td>
  <td>113402.36k</td>
  <td>113402.36k</td>
  <td>113402.36k</td>
  <td>134501.57k</td>
  <td>134501.57k</td>
  <td>134501.57k</td>
</tr><tr>
  <td>/count</td>
  <td>129.47k</td>
  <td>134.39k</td>
  <td>9.94k</td>
  <td>0.12</td>
  <td>105514.30k</td>
  <td>105514.30k</td>
  <td>105514.30k</td>
  <td>105514.30k</td>
  <td>134390.05k</td>
  <td>134390.05k</td>
  <td>134390.05k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>95.83k</td>
  <td>142.25k</td>
  <td>21.43k</td>
  <td>0.19</td>
  <td>83021.89k</td>
  <td>83021.89k</td>
  <td>83021.89k</td>
  <td>83021.89k</td>
  <td>123474.57k</td>
  <td>142253.58k</td>
  <td>142253.58k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>131.90k</td>
  <td>140.60k</td>
  <td>17.48k</td>
  <td>0.25</td>
  <td>99404.38k</td>
  <td>99404.38k</td>
  <td>99404.38k</td>
  <td>99404.38k</td>
  <td>140600.36k</td>
  <td>140600.36k</td>
  <td>140600.36k</td>
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
  <td>0.65</td>
  <td>0.41</td>
  <td>1.32</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.79</td>
  <td>0.81</td>
  <td>0.88</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.50</td>
  <td>0.40</td>
  <td>1.22</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.55</td>
  <td>0.63</td>
  <td>0.85</td>
</tr><tr>
  <td>/count</td>
  <td>0.49</td>
  <td>0.40</td>
  <td>1.45</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.52</td>
  <td>0.61</td>
  <td>0.80</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.64</td>
  <td>0.38</td>
  <td>1.46</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.77</td>
  <td>0.79</td>
  <td>0.87</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.48</td>
  <td>0.38</td>
  <td>1.32</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.57</td>
  <td>0.70</td>
  <td>0.83</td>
</tr></table>