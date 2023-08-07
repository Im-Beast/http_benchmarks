# Multiple routes
## Name: Vixeny 

### Version: 0.0.682
### Deno version: 1.35.2

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
    <td>63.45k</td>
    <td>71.16k</td>
    <td>7.24k</td>
    <td>0.66 MiB</td>
    <td>1.00</td>
    <td>0.15</td>
    <td>2.04</td>
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
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>70359.59k</td>
  <td>71163.26k</td>
  <td>71163.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.24</td>
  <td>1.34</td>
  <td>1.54</td>
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
  <td>63.45k</td>
  <td>71.16k</td>
  <td>7.24k</td>
  <td>0.66</td>
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>54375.93k</td>
  <td>70359.59k</td>
  <td>71163.26k</td>
  <td>71163.26k</td>
</tr><tr>
  <td>/random_number</td>
  <td>61.28k</td>
  <td>69.42k</td>
  <td>5.98k</td>
  <td>1.07</td>
  <td>52518.80k</td>
  <td>52518.80k</td>
  <td>52518.80k</td>
  <td>52518.80k</td>
  <td>68410.16k</td>
  <td>69421.47k</td>
  <td>69421.47k</td>
</tr><tr>
  <td>/count</td>
  <td>59.18k</td>
  <td>73.65k</td>
  <td>7.21k</td>
  <td>0.06</td>
  <td>50061.53k</td>
  <td>50061.53k</td>
  <td>50061.53k</td>
  <td>50061.53k</td>
  <td>71489.44k</td>
  <td>73653.22k</td>
  <td>73653.22k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>59.52k</td>
  <td>71.50k</td>
  <td>6.44k</td>
  <td>0.11</td>
  <td>50073.18k</td>
  <td>50073.18k</td>
  <td>50073.18k</td>
  <td>50073.18k</td>
  <td>69909.99k</td>
  <td>71504.63k</td>
  <td>71504.63k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>60.27k</td>
  <td>73.30k</td>
  <td>7.49k</td>
  <td>0.12</td>
  <td>50639.17k</td>
  <td>50639.17k</td>
  <td>50639.17k</td>
  <td>50639.17k</td>
  <td>70620.85k</td>
  <td>73301.67k</td>
  <td>73301.67k</td>
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
  <td>1.00</td>
  <td>0.15</td>
  <td>2.04</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.24</td>
  <td>1.34</td>
  <td>1.54</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.04</td>
  <td>0.16</td>
  <td>2.29</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.30</td>
  <td>1.39</td>
  <td>1.60</td>
</tr><tr>
  <td>/count</td>
  <td>1.07</td>
  <td>0.15</td>
  <td>2.02</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.26</td>
  <td>1.35</td>
  <td>1.66</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.06</td>
  <td>0.13</td>
  <td>2.27</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.25</td>
  <td>1.36</td>
  <td>1.81</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.04</td>
  <td>0.62</td>
  <td>2.14</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.26</td>
  <td>1.34</td>
  <td>1.65</td>
</tr></table>