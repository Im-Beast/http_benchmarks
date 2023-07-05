# Name: Deno.serveHttp 
  
  ### Version: Deno 1.35.0
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
    <td>70.16k</td>
    <td>82.87k</td>
    <td>10.09k</td>
    <td>1.25 MiB</td>
    <td>0.88</td>
    <td>0.48</td>
    <td>3.23</td>
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
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>80743.66k</td>
  <td>82866.58k</td>
  <td>82866.58k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.13</td>
  <td>1.31</td>
  <td>2.09</td>
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
  <td>70.16k</td>
  <td>82.87k</td>
  <td>10.09k</td>
  <td>1.25</td>
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>56411.56k</td>
  <td>80743.66k</td>
  <td>82866.58k</td>
  <td>82866.58k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>76.43k</td>
  <td>82.96k</td>
  <td>5.36k</td>
  <td>0.80</td>
  <td>67131.24k</td>
  <td>67131.24k</td>
  <td>67131.24k</td>
  <td>67131.24k</td>
  <td>82338.72k</td>
  <td>82955.29k</td>
  <td>82955.29k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>73.72k</td>
  <td>83.71k</td>
  <td>8.11k</td>
  <td>0.14</td>
  <td>64779.79k</td>
  <td>64779.79k</td>
  <td>64779.79k</td>
  <td>64779.79k</td>
  <td>83444.49k</td>
  <td>83712.48k</td>
  <td>83712.48k</td>
</tr><tr>
  <td>/count</td>
  <td>76.32k</td>
  <td>88.90k</td>
  <td>10.44k</td>
  <td>0.07</td>
  <td>62520.33k</td>
  <td>62520.33k</td>
  <td>62520.33k</td>
  <td>62520.33k</td>
  <td>86937.38k</td>
  <td>88899.85k</td>
  <td>88899.85k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>73.79k</td>
  <td>83.62k</td>
  <td>8.62k</td>
  <td>0.14</td>
  <td>64166.06k</td>
  <td>64166.06k</td>
  <td>64166.06k</td>
  <td>64166.06k</td>
  <td>80111.72k</td>
  <td>83619.29k</td>
  <td>83619.29k</td>
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
  <td>0.88</td>
  <td>0.48</td>
  <td>3.23</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.13</td>
  <td>1.31</td>
  <td>2.09</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.83</td>
  <td>0.47</td>
  <td>3.21</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>1.05</td>
  <td>1.27</td>
  <td>1.69</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.86</td>
  <td>0.45</td>
  <td>3.76</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>1.08</td>
  <td>1.34</td>
  <td>1.99</td>
</tr><tr>
  <td>/count</td>
  <td>0.83</td>
  <td>0.55</td>
  <td>3.39</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>1.04</td>
  <td>1.29</td>
  <td>2.01</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.86</td>
  <td>0.49</td>
  <td>3.44</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.15</td>
  <td>1.26</td>
  <td>1.77</td>
</tr></table>