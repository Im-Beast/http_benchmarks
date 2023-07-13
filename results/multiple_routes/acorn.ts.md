# Name: Acorn 
  
  ### Version: 0.3.0
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
    <td>5.85k</td>
    <td>50.72k</td>
    <td>5.13k</td>
    <td>0.07 MiB</td>
    <td>15.54</td>
    <td>7.95</td>
    <td>28.93</td>
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
  <td>94.13k</td>
  <td>94.13k</td>
  <td>94.13k</td>
  <td>94.13k</td>
  <td>10398.41k</td>
  <td>15284.81k</td>
  <td>29185.48k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>17.90</td>
  <td>20.65</td>
  <td>24.39</td>
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
  <td>5.85k</td>
  <td>50.72k</td>
  <td>5.13k</td>
  <td>0.07</td>
  <td>94.13k</td>
  <td>94.13k</td>
  <td>94.13k</td>
  <td>94.13k</td>
  <td>10398.41k</td>
  <td>15284.81k</td>
  <td>29185.48k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>49.04k</td>
  <td>271.49k</td>
  <td>80.74k</td>
  <td>0.02</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>52.67k</td>
  <td>188323.92k</td>
  <td>203754.71k</td>
  <td>243651.88k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>63.61k</td>
  <td>293.18k</td>
  <td>86.24k</td>
  <td>0.00</td>
  <td>39.95k</td>
  <td>39.95k</td>
  <td>39.95k</td>
  <td>39.95k</td>
  <td>200866.60k</td>
  <td>221054.18k</td>
  <td>260756.19k</td>
</tr><tr>
  <td>/count</td>
  <td>74.32k</td>
  <td>292.43k</td>
  <td>89.82k</td>
  <td>0.00</td>
  <td>17.44k</td>
  <td>17.44k</td>
  <td>17.44k</td>
  <td>17.44k</td>
  <td>207855.27k</td>
  <td>232368.23k</td>
  <td>267123.00k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>75.83k</td>
  <td>295.30k</td>
  <td>91.09k</td>
  <td>0.00</td>
  <td>22.58k</td>
  <td>22.58k</td>
  <td>22.58k</td>
  <td>22.58k</td>
  <td>207833.59k</td>
  <td>235422.77k</td>
  <td>263802.52k</td>
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
  <td>15.54</td>
  <td>7.95</td>
  <td>28.93</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>13.08</td>
  <td>17.90</td>
  <td>20.65</td>
  <td>24.39</td>
</tr><tr>
  <td>/hello_world</td>
  <td>31.89</td>
  <td>13.68</td>
  <td>61.40</td>
  <td>27.52</td>
  <td>27.52</td>
  <td>27.52</td>
  <td>27.52</td>
  <td>35.60</td>
  <td>41.73</td>
  <td>50.06</td>
</tr><tr>
  <td>/plus_1</td>
  <td>50.36</td>
  <td>17.14</td>
  <td>85.87</td>
  <td>43.83</td>
  <td>43.83</td>
  <td>43.83</td>
  <td>43.83</td>
  <td>55.72</td>
  <td>62.93</td>
  <td>76.53</td>
</tr><tr>
  <td>/count</td>
  <td>110.61</td>
  <td>40.22</td>
  <td>196.98</td>
  <td>94.37</td>
  <td>94.37</td>
  <td>94.37</td>
  <td>94.37</td>
  <td>124.85</td>
  <td>141.19</td>
  <td>172.27</td>
</tr><tr>
  <td>/minus_1</td>
  <td>90.53</td>
  <td>29.01</td>
  <td>153.96</td>
  <td>73.71</td>
  <td>73.71</td>
  <td>73.71</td>
  <td>73.71</td>
  <td>102.21</td>
  <td>108.82</td>
  <td>135.61</td>
</tr></table>