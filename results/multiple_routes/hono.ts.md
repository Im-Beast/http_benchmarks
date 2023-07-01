# Name: Hono 
  
  ### Version: 3.2.6
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
    <td>108.69k</td>
    <td>122.25k</td>
    <td>13.72k</td>
    <td>1.88 MiB</td>
    <td>0.59</td>
    <td>0.40</td>
    <td>3.18</td>
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
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>122253.37k</td>
  <td>122253.37k</td>
  <td>122253.37k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.67</td>
  <td>0.99</td>
  <td>1.73</td>
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
  <td>108.69k</td>
  <td>122.25k</td>
  <td>13.72k</td>
  <td>1.88</td>
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>96388.76k</td>
  <td>122253.37k</td>
  <td>122253.37k</td>
  <td>122253.37k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>117.97k</td>
  <td>141.17k</td>
  <td>17.23k</td>
  <td>1.28</td>
  <td>93324.79k</td>
  <td>93324.79k</td>
  <td>93324.79k</td>
  <td>93324.79k</td>
  <td>141172.05k</td>
  <td>141172.05k</td>
  <td>141172.05k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>118.42k</td>
  <td>138.76k</td>
  <td>19.54k</td>
  <td>0.23</td>
  <td>81851.54k</td>
  <td>81851.54k</td>
  <td>81851.54k</td>
  <td>81851.54k</td>
  <td>138764.44k</td>
  <td>138764.44k</td>
  <td>138764.44k</td>
</tr><tr>
  <td>/count</td>
  <td>127.52k</td>
  <td>140.72k</td>
  <td>15.22k</td>
  <td>0.12</td>
  <td>100014.15k</td>
  <td>100014.15k</td>
  <td>100014.15k</td>
  <td>100014.15k</td>
  <td>140722.16k</td>
  <td>140722.16k</td>
  <td>140722.16k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>127.69k</td>
  <td>138.72k</td>
  <td>13.40k</td>
  <td>0.24</td>
  <td>109289.17k</td>
  <td>109289.17k</td>
  <td>109289.17k</td>
  <td>109289.17k</td>
  <td>138722.39k</td>
  <td>138722.39k</td>
  <td>138722.39k</td>
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
  <td>0.59</td>
  <td>0.40</td>
  <td>3.18</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.67</td>
  <td>0.99</td>
  <td>1.73</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.52</td>
  <td>0.36</td>
  <td>2.53</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.59</td>
  <td>0.85</td>
  <td>1.60</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.52</td>
  <td>0.37</td>
  <td>1.84</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.56</td>
  <td>0.72</td>
  <td>1.41</td>
</tr><tr>
  <td>/count</td>
  <td>0.50</td>
  <td>0.36</td>
  <td>1.94</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.53</td>
  <td>0.70</td>
  <td>1.28</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.50</td>
  <td>0.37</td>
  <td>1.68</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.53</td>
  <td>0.75</td>
  <td>1.37</td>
</tr></table>