# Multiple routes
## Name: Deno.serveHttp 

### Version: Deno 1.35.1
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
    <td>76.24k</td>
    <td>85.91k</td>
    <td>6.57k</td>
    <td>0.80 MiB</td>
    <td>0.84</td>
    <td>0.43</td>
    <td>3.25</td>
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
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>83769.99k</td>
  <td>85911.95k</td>
  <td>85911.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.05</td>
  <td>1.39</td>
  <td>1.94</td>
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
  <td>76.24k</td>
  <td>85.91k</td>
  <td>6.57k</td>
  <td>0.80</td>
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>65883.61k</td>
  <td>83769.99k</td>
  <td>85911.95k</td>
  <td>85911.95k</td>
</tr><tr>
  <td>/random_number</td>
  <td>70.57k</td>
  <td>80.24k</td>
  <td>9.03k</td>
  <td>1.26</td>
  <td>57768.04k</td>
  <td>57768.04k</td>
  <td>57768.04k</td>
  <td>57768.04k</td>
  <td>79826.60k</td>
  <td>80239.51k</td>
  <td>80239.51k</td>
</tr><tr>
  <td>/count</td>
  <td>72.50k</td>
  <td>83.14k</td>
  <td>6.90k</td>
  <td>0.07</td>
  <td>64804.19k</td>
  <td>64804.19k</td>
  <td>64804.19k</td>
  <td>64804.19k</td>
  <td>81360.42k</td>
  <td>83143.29k</td>
  <td>83143.29k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>71.18k</td>
  <td>83.04k</td>
  <td>9.63k</td>
  <td>0.13</td>
  <td>54657.37k</td>
  <td>54657.37k</td>
  <td>54657.37k</td>
  <td>54657.37k</td>
  <td>80305.85k</td>
  <td>83038.65k</td>
  <td>83038.65k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>74.08k</td>
  <td>81.20k</td>
  <td>8.09k</td>
  <td>0.14</td>
  <td>66437.24k</td>
  <td>66437.24k</td>
  <td>66437.24k</td>
  <td>66437.24k</td>
  <td>80743.95k</td>
  <td>81201.67k</td>
  <td>81201.67k</td>
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
  <td>0.84</td>
  <td>0.43</td>
  <td>3.25</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.05</td>
  <td>1.39</td>
  <td>1.94</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.88</td>
  <td>0.54</td>
  <td>3.35</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>1.10</td>
  <td>1.38</td>
  <td>2.02</td>
</tr><tr>
  <td>/count</td>
  <td>0.87</td>
  <td>0.49</td>
  <td>3.33</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.10</td>
  <td>1.43</td>
  <td>2.03</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.90</td>
  <td>0.52</td>
  <td>3.39</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.10</td>
  <td>1.44</td>
  <td>2.09</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.86</td>
  <td>0.46</td>
  <td>2.97</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.09</td>
  <td>1.31</td>
  <td>2.03</td>
</tr></table>