# Name: Acorn 
  
  ### Version: 0.3.0
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
    <td>6.44k</td>
    <td>48.21k</td>
    <td>3.40k</td>
    <td>0.10 MiB</td>
    <td>11.31</td>
    <td>4.89</td>
    <td>25.53</td>
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
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>9655.37k</td>
  <td>14456.43k</td>
  <td>18816.02k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>13.84</td>
  <td>15.01</td>
  <td>18.81</td>
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
  <td>6.44k</td>
  <td>48.21k</td>
  <td>3.40k</td>
  <td>0.10</td>
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>4351.36k</td>
  <td>9655.37k</td>
  <td>14456.43k</td>
  <td>18816.02k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>9.74k</td>
  <td>235.99k</td>
  <td>30.33k</td>
  <td>0.03</td>
  <td>67.00k</td>
  <td>67.00k</td>
  <td>67.00k</td>
  <td>67.00k</td>
  <td>12881.50k</td>
  <td>22423.73k</td>
  <td>188878.55k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>36.64k</td>
  <td>239.68k</td>
  <td>68.25k</td>
  <td>0.00</td>
  <td>48.04k</td>
  <td>48.04k</td>
  <td>48.04k</td>
  <td>48.04k</td>
  <td>168944.94k</td>
  <td>190493.71k</td>
  <td>217174.42k</td>
</tr><tr>
  <td>/count</td>
  <td>58.38k</td>
  <td>261.82k</td>
  <td>75.93k</td>
  <td>0.00</td>
  <td>25.76k</td>
  <td>25.76k</td>
  <td>25.76k</td>
  <td>25.76k</td>
  <td>175230.57k</td>
  <td>195759.68k</td>
  <td>230330.16k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>54.97k</td>
  <td>259.06k</td>
  <td>74.25k</td>
  <td>0.00</td>
  <td>30.64k</td>
  <td>30.64k</td>
  <td>30.64k</td>
  <td>30.64k</td>
  <td>172045.75k</td>
  <td>196753.57k</td>
  <td>221878.57k</td>
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
  <td>11.31</td>
  <td>4.89</td>
  <td>25.53</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>13.84</td>
  <td>15.01</td>
  <td>18.81</td>
</tr><tr>
  <td>/hello_world</td>
  <td>21.82</td>
  <td>9.44</td>
  <td>41.72</td>
  <td>18.46</td>
  <td>18.46</td>
  <td>18.46</td>
  <td>18.46</td>
  <td>24.97</td>
  <td>29.71</td>
  <td>34.27</td>
</tr><tr>
  <td>/plus_1</td>
  <td>33.41</td>
  <td>12.94</td>
  <td>60.87</td>
  <td>28.85</td>
  <td>28.85</td>
  <td>28.85</td>
  <td>28.85</td>
  <td>36.92</td>
  <td>43.25</td>
  <td>54.02</td>
</tr><tr>
  <td>/count</td>
  <td>70.05</td>
  <td>28.42</td>
  <td>131.45</td>
  <td>58.19</td>
  <td>58.19</td>
  <td>58.19</td>
  <td>58.19</td>
  <td>81.03</td>
  <td>89.54</td>
  <td>108.98</td>
</tr><tr>
  <td>/minus_1</td>
  <td>57.05</td>
  <td>26.17</td>
  <td>105.29</td>
  <td>48.05</td>
  <td>48.05</td>
  <td>48.05</td>
  <td>48.05</td>
  <td>64.80</td>
  <td>71.94</td>
  <td>91.31</td>
</tr></table>