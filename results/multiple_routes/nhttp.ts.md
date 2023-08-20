# Multiple routes
## Name: NHttp 

### Version: 1.3.7
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
    <td>88.14k</td>
    <td>95.53k</td>
    <td>7.07k</td>
    <td>0.94 MiB</td>
    <td>0.71</td>
    <td>0.41</td>
    <td>1.36</td>
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
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>93105.52k</td>
  <td>95532.08k</td>
  <td>95532.08k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.80</td>
  <td>0.83</td>
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
  <td>/hello_world</td>
  <td>88.14k</td>
  <td>95.53k</td>
  <td>7.07k</td>
  <td>0.94</td>
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>85827.62k</td>
  <td>93105.52k</td>
  <td>95532.08k</td>
  <td>95532.08k</td>
</tr><tr>
  <td>/random_number</td>
  <td>87.12k</td>
  <td>95.65k</td>
  <td>4.90k</td>
  <td>1.53</td>
  <td>82263.24k</td>
  <td>82263.24k</td>
  <td>82263.24k</td>
  <td>82263.24k</td>
  <td>90443.43k</td>
  <td>95648.99k</td>
  <td>95648.99k</td>
</tr><tr>
  <td>/count</td>
  <td>132.50k</td>
  <td>140.83k</td>
  <td>8.15k</td>
  <td>0.13</td>
  <td>114457.69k</td>
  <td>114457.69k</td>
  <td>114457.69k</td>
  <td>114457.69k</td>
  <td>140828.79k</td>
  <td>140828.79k</td>
  <td>140828.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>98.46k</td>
  <td>139.77k</td>
  <td>6.54k</td>
  <td>0.18</td>
  <td>88570.36k</td>
  <td>88570.36k</td>
  <td>88570.36k</td>
  <td>88570.36k</td>
  <td>120394.21k</td>
  <td>139774.05k</td>
  <td>139774.05k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>127.51k</td>
  <td>138.25k</td>
  <td>11.02k</td>
  <td>0.24</td>
  <td>103128.96k</td>
  <td>103128.96k</td>
  <td>103128.96k</td>
  <td>103128.96k</td>
  <td>138246.02k</td>
  <td>138246.02k</td>
  <td>138246.02k</td>
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
  <td>0.71</td>
  <td>0.41</td>
  <td>1.36</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.80</td>
  <td>0.83</td>
  <td>0.91</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.72</td>
  <td>0.45</td>
  <td>1.29</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.80</td>
  <td>0.86</td>
  <td>1.00</td>
</tr><tr>
  <td>/count</td>
  <td>0.48</td>
  <td>0.38</td>
  <td>1.22</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.52</td>
  <td>0.59</td>
  <td>0.78</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.65</td>
  <td>0.39</td>
  <td>1.20</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.76</td>
  <td>0.78</td>
  <td>0.87</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.50</td>
  <td>0.39</td>
  <td>1.41</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.58</td>
  <td>0.65</td>
  <td>0.87</td>
</tr></table>