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
    <td>20.50k</td>
    <td>21.42k</td>
    <td>1.34k</td>
    <td>0.36 MiB</td>
    <td>3.11</td>
    <td>1.40</td>
    <td>6.25</td>
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
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>21325.63k</td>
  <td>21354.73k</td>
  <td>21415.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>3.46</td>
  <td>3.61</td>
  <td>4.83</td>
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
  <td>20.50k</td>
  <td>21.42k</td>
  <td>1.34k</td>
  <td>0.36</td>
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>18702.65k</td>
  <td>21325.63k</td>
  <td>21354.73k</td>
  <td>21415.95k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>21.03k</td>
  <td>22.54k</td>
  <td>937.71</td>
  <td>0.22</td>
  <td>20202.71k</td>
  <td>20202.71k</td>
  <td>20202.71k</td>
  <td>20202.71k</td>
  <td>21847.26k</td>
  <td>21873.93k</td>
  <td>22537.71k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>27.20k</td>
  <td>28.57k</td>
  <td>1.55k</td>
  <td>0.05</td>
  <td>25762.22k</td>
  <td>25762.22k</td>
  <td>25762.22k</td>
  <td>25762.22k</td>
  <td>28493.55k</td>
  <td>28523.59k</td>
  <td>28573.72k</td>
</tr><tr>
  <td>/count</td>
  <td>21.31k</td>
  <td>22.17k</td>
  <td>871.75</td>
  <td>0.02</td>
  <td>20863.26k</td>
  <td>20863.26k</td>
  <td>20863.26k</td>
  <td>20863.26k</td>
  <td>22084.99k</td>
  <td>22104.46k</td>
  <td>22166.27k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>27.12k</td>
  <td>28.54k</td>
  <td>1.16k</td>
  <td>0.05</td>
  <td>26278.71k</td>
  <td>26278.71k</td>
  <td>26278.71k</td>
  <td>26278.71k</td>
  <td>28346.45k</td>
  <td>28487.22k</td>
  <td>28536.09k</td>
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
  <td>1.40</td>
  <td>6.25</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>2.81</td>
  <td>3.46</td>
  <td>3.61</td>
  <td>4.83</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.03</td>
  <td>1.01</td>
  <td>5.43</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>3.40</td>
  <td>3.50</td>
  <td>3.74</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.33</td>
  <td>0.93</td>
  <td>4.68</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.58</td>
  <td>2.77</td>
  <td>3.10</td>
</tr><tr>
  <td>/count</td>
  <td>2.99</td>
  <td>0.96</td>
  <td>5.31</td>
  <td>2.72</td>
  <td>2.72</td>
  <td>2.72</td>
  <td>2.72</td>
  <td>3.27</td>
  <td>3.49</td>
  <td>3.75</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.34</td>
  <td>0.96</td>
  <td>4.36</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.56</td>
  <td>2.79</td>
  <td>3.13</td>
</tr></table>