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
    <td>6.32k</td>
    <td>16.79k</td>
    <td>3.11k</td>
    <td>0.11 MiB</td>
    <td>10.05</td>
    <td>4.98</td>
    <td>19.81</td>
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
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>7716.81k</td>
  <td>8529.21k</td>
  <td>16793.29k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>12.17</td>
  <td>13.29</td>
  <td>15.97</td>
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
  <td>6.32k</td>
  <td>16.79k</td>
  <td>3.11k</td>
  <td>0.11</td>
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>5014.41k</td>
  <td>7716.81k</td>
  <td>8529.21k</td>
  <td>16793.29k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>5.33k</td>
  <td>165.35k</td>
  <td>12.46k</td>
  <td>0.03</td>
  <td>82.51k</td>
  <td>82.51k</td>
  <td>82.51k</td>
  <td>82.51k</td>
  <td>10368.57k</td>
  <td>13806.63k</td>
  <td>35252.09k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>34.76k</td>
  <td>314.86k</td>
  <td>68.42k</td>
  <td>0.00</td>
  <td>55.35k</td>
  <td>55.35k</td>
  <td>55.35k</td>
  <td>55.35k</td>
  <td>168342.44k</td>
  <td>189907.97k</td>
  <td>218077.91k</td>
</tr><tr>
  <td>/count</td>
  <td>62.57k</td>
  <td>269.48k</td>
  <td>80.64k</td>
  <td>0.00</td>
  <td>32.02k</td>
  <td>32.02k</td>
  <td>32.02k</td>
  <td>32.02k</td>
  <td>186645.74k</td>
  <td>209937.74k</td>
  <td>240632.74k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>60.80k</td>
  <td>271.55k</td>
  <td>80.59k</td>
  <td>0.00</td>
  <td>39.50k</td>
  <td>39.50k</td>
  <td>39.50k</td>
  <td>39.50k</td>
  <td>184464.72k</td>
  <td>206437.41k</td>
  <td>240875.96k</td>
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
  <td>10.05</td>
  <td>4.98</td>
  <td>19.81</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>7.89</td>
  <td>12.17</td>
  <td>13.29</td>
  <td>15.97</td>
</tr><tr>
  <td>/hello_world</td>
  <td>19.16</td>
  <td>9.49</td>
  <td>33.49</td>
  <td>16.02</td>
  <td>16.02</td>
  <td>16.02</td>
  <td>16.02</td>
  <td>21.33</td>
  <td>26.33</td>
  <td>29.83</td>
</tr><tr>
  <td>/plus_1</td>
  <td>29.04</td>
  <td>12.15</td>
  <td>52.89</td>
  <td>24.59</td>
  <td>24.59</td>
  <td>24.59</td>
  <td>24.59</td>
  <td>32.67</td>
  <td>39.30</td>
  <td>46.53</td>
</tr><tr>
  <td>/count</td>
  <td>59.77</td>
  <td>23.61</td>
  <td>106.45</td>
  <td>51.30</td>
  <td>51.30</td>
  <td>51.30</td>
  <td>51.30</td>
  <td>66.91</td>
  <td>74.35</td>
  <td>90.74</td>
</tr><tr>
  <td>/minus_1</td>
  <td>49.14</td>
  <td>18.65</td>
  <td>87.80</td>
  <td>41.61</td>
  <td>41.61</td>
  <td>41.61</td>
  <td>41.61</td>
  <td>55.99</td>
  <td>62.68</td>
  <td>75.31</td>
</tr></table>