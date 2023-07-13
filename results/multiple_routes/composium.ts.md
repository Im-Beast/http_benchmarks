# Name: Composium 
  
  ### Version: 0.1.1
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
    <td>20.49k</td>
    <td>21.40k</td>
    <td>855.32</td>
    <td>0.36 MiB</td>
    <td>3.11</td>
    <td>1.13</td>
    <td>5.45</td>
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
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>21189.96k</td>
  <td>21243.41k</td>
  <td>21401.44k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>3.43</td>
  <td>3.60</td>
  <td>3.92</td>
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
  <td>20.49k</td>
  <td>21.40k</td>
  <td>855.32</td>
  <td>0.36</td>
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>19309.57k</td>
  <td>21189.96k</td>
  <td>21243.41k</td>
  <td>21401.44k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>20.93k</td>
  <td>22.18k</td>
  <td>899.72</td>
  <td>0.22</td>
  <td>20112.02k</td>
  <td>20112.02k</td>
  <td>20112.02k</td>
  <td>20112.02k</td>
  <td>21694.28k</td>
  <td>21752.03k</td>
  <td>22184.09k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>27.44k</td>
  <td>28.63k</td>
  <td>1.19k</td>
  <td>0.05</td>
  <td>26756.54k</td>
  <td>26756.54k</td>
  <td>26756.54k</td>
  <td>26756.54k</td>
  <td>28485.65k</td>
  <td>28552.84k</td>
  <td>28627.80k</td>
</tr><tr>
  <td>/count</td>
  <td>21.13k</td>
  <td>22.28k</td>
  <td>990.98</td>
  <td>0.02</td>
  <td>20403.16k</td>
  <td>20403.16k</td>
  <td>20403.16k</td>
  <td>20403.16k</td>
  <td>21827.94k</td>
  <td>21865.98k</td>
  <td>22275.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>27.39k</td>
  <td>28.49k</td>
  <td>1.19k</td>
  <td>0.05</td>
  <td>26449.53k</td>
  <td>26449.53k</td>
  <td>26449.53k</td>
  <td>26449.53k</td>
  <td>28419.97k</td>
  <td>28471.57k</td>
  <td>28491.51k</td>
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
  <td>3.11</td>
  <td>1.13</td>
  <td>5.45</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>3.43</td>
  <td>3.60</td>
  <td>3.92</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.04</td>
  <td>1.14</td>
  <td>5.33</td>
  <td>2.77</td>
  <td>2.77</td>
  <td>2.77</td>
  <td>2.77</td>
  <td>3.33</td>
  <td>3.52</td>
  <td>3.79</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.32</td>
  <td>0.96</td>
  <td>4.58</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.52</td>
  <td>2.72</td>
  <td>2.94</td>
</tr><tr>
  <td>/count</td>
  <td>3.01</td>
  <td>1.07</td>
  <td>5.34</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>3.28</td>
  <td>3.48</td>
  <td>3.64</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.32</td>
  <td>0.95</td>
  <td>4.57</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.52</td>
  <td>2.73</td>
  <td>2.99</td>
</tr></table>