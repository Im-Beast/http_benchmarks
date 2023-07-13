# Name: Composium 
  
  ### Version: 0.1.1
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
    <td>20.56k</td>
    <td>21.49k</td>
    <td>1.03k</td>
    <td>0.36 MiB</td>
    <td>3.09</td>
    <td>1.11</td>
    <td>5.37</td>
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
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>21310.07k</td>
  <td>21365.26k</td>
  <td>21486.81k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>3.39</td>
  <td>3.59</td>
  <td>3.90</td>
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
  <td>20.56k</td>
  <td>21.49k</td>
  <td>1.03k</td>
  <td>0.36</td>
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>20026.44k</td>
  <td>21310.07k</td>
  <td>21365.26k</td>
  <td>21486.81k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>21.05k</td>
  <td>22.38k</td>
  <td>981.87</td>
  <td>0.22</td>
  <td>20114.01k</td>
  <td>20114.01k</td>
  <td>20114.01k</td>
  <td>20114.01k</td>
  <td>21834.59k</td>
  <td>21904.18k</td>
  <td>22377.63k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>27.49k</td>
  <td>28.67k</td>
  <td>1.27k</td>
  <td>0.05</td>
  <td>26748.31k</td>
  <td>26748.31k</td>
  <td>26748.31k</td>
  <td>26748.31k</td>
  <td>28565.98k</td>
  <td>28620.65k</td>
  <td>28671.33k</td>
</tr><tr>
  <td>/count</td>
  <td>21.28k</td>
  <td>22.25k</td>
  <td>865.97</td>
  <td>0.02</td>
  <td>20646.81k</td>
  <td>20646.81k</td>
  <td>20646.81k</td>
  <td>20646.81k</td>
  <td>22036.60k</td>
  <td>22109.55k</td>
  <td>22253.01k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>27.50k</td>
  <td>28.62k</td>
  <td>1.33k</td>
  <td>0.05</td>
  <td>26659.72k</td>
  <td>26659.72k</td>
  <td>26659.72k</td>
  <td>26659.72k</td>
  <td>28537.62k</td>
  <td>28550.71k</td>
  <td>28615.04k</td>
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
  <td>3.09</td>
  <td>1.11</td>
  <td>5.37</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>3.39</td>
  <td>3.59</td>
  <td>3.90</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.03</td>
  <td>1.09</td>
  <td>5.24</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>3.31</td>
  <td>3.50</td>
  <td>3.82</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.32</td>
  <td>0.95</td>
  <td>4.55</td>
  <td>2.10</td>
  <td>2.10</td>
  <td>2.10</td>
  <td>2.10</td>
  <td>2.50</td>
  <td>2.73</td>
  <td>2.88</td>
</tr><tr>
  <td>/count</td>
  <td>2.99</td>
  <td>1.14</td>
  <td>5.30</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>3.28</td>
  <td>3.47</td>
  <td>3.72</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.32</td>
  <td>1.03</td>
  <td>4.65</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.52</td>
  <td>2.73</td>
  <td>2.96</td>
</tr></table>