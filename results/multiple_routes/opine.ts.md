# Multiple routes
## Name: Opine 

### Version: 2.3.4
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
    <td>13.86k</td>
    <td>19.35k</td>
    <td>2.32k</td>
    <td>0.15 MiB</td>
    <td>4.61</td>
    <td>2.92</td>
    <td>11.63</td>
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
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>16897.19k</td>
  <td>17386.86k</td>
  <td>19348.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>5.75</td>
  <td>6.38</td>
  <td>8.67</td>
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
  <td>13.86k</td>
  <td>19.35k</td>
  <td>2.32k</td>
  <td>0.15</td>
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>11209.20k</td>
  <td>16897.19k</td>
  <td>17386.86k</td>
  <td>19348.96k</td>
</tr><tr>
  <td>/random_number</td>
  <td>17.58k</td>
  <td>23.81k</td>
  <td>3.26k</td>
  <td>0.31</td>
  <td>13334.50k</td>
  <td>13334.50k</td>
  <td>13334.50k</td>
  <td>13334.50k</td>
  <td>21305.69k</td>
  <td>21567.04k</td>
  <td>23811.98k</td>
</tr><tr>
  <td>/count</td>
  <td>18.99k</td>
  <td>23.39k</td>
  <td>3.11k</td>
  <td>0.02</td>
  <td>13857.12k</td>
  <td>13857.12k</td>
  <td>13857.12k</td>
  <td>13857.12k</td>
  <td>22096.70k</td>
  <td>22882.01k</td>
  <td>23392.53k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>15.14k</td>
  <td>19.36k</td>
  <td>2.76k</td>
  <td>0.03</td>
  <td>11650.31k</td>
  <td>11650.31k</td>
  <td>11650.31k</td>
  <td>11650.31k</td>
  <td>17485.19k</td>
  <td>17964.89k</td>
  <td>19360.90k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>15.00k</td>
  <td>19.29k</td>
  <td>2.43k</td>
  <td>0.03</td>
  <td>12148.96k</td>
  <td>12148.96k</td>
  <td>12148.96k</td>
  <td>12148.96k</td>
  <td>17316.90k</td>
  <td>18105.98k</td>
  <td>19292.92k</td>
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
  <td>4.61</td>
  <td>2.92</td>
  <td>11.63</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>3.63</td>
  <td>5.75</td>
  <td>6.38</td>
  <td>8.67</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.62</td>
  <td>2.01</td>
  <td>9.86</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>4.69</td>
  <td>5.31</td>
  <td>7.12</td>
</tr><tr>
  <td>/count</td>
  <td>3.34</td>
  <td>1.58</td>
  <td>8.86</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>4.41</td>
  <td>4.84</td>
  <td>6.77</td>
</tr><tr>
  <td>/plus_1</td>
  <td>4.21</td>
  <td>1.65</td>
  <td>10.70</td>
  <td>3.32</td>
  <td>3.32</td>
  <td>3.32</td>
  <td>3.32</td>
  <td>5.39</td>
  <td>6.13</td>
  <td>8.33</td>
</tr><tr>
  <td>/minus_1</td>
  <td>4.25</td>
  <td>2.74</td>
  <td>11.25</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>5.40</td>
  <td>6.06</td>
  <td>8.28</td>
</tr></table>