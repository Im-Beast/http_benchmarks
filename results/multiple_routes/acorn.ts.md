# Multiple routes
## Name: Acorn 

### Version: 0.4.0
### Deno version: 1.36.0

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
    <td>5.10k</td>
    <td>23.91k</td>
    <td>2.81k</td>
    <td>0.05 MiB</td>
    <td>12.71</td>
    <td>5.96</td>
    <td>20.31</td>
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
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>8596.01k</td>
  <td>12058.88k</td>
  <td>13403.14k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>15.13</td>
  <td>15.76</td>
  <td>18.10</td>
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
  <td>5.10k</td>
  <td>23.91k</td>
  <td>2.81k</td>
  <td>0.05</td>
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>3919.44k</td>
  <td>8596.01k</td>
  <td>12058.88k</td>
  <td>13403.14k</td>
</tr><tr>
  <td>/random_number</td>
  <td>5.06k</td>
  <td>164.82k</td>
  <td>15.56k</td>
  <td>0.04</td>
  <td>79.79k</td>
  <td>79.79k</td>
  <td>79.79k</td>
  <td>79.79k</td>
  <td>8275.99k</td>
  <td>11228.68k</td>
  <td>130126.54k</td>
</tr><tr>
  <td>/count</td>
  <td>21.33k</td>
  <td>383.48k</td>
  <td>50.07k</td>
  <td>0.00</td>
  <td>64.56k</td>
  <td>64.56k</td>
  <td>64.56k</td>
  <td>64.56k</td>
  <td>128688.17k</td>
  <td>151482.54k</td>
  <td>195325.61k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>52.01k</td>
  <td>245.67k</td>
  <td>72.61k</td>
  <td>0.00</td>
  <td>51.30k</td>
  <td>51.30k</td>
  <td>51.30k</td>
  <td>51.30k</td>
  <td>164283.04k</td>
  <td>179703.21k</td>
  <td>214703.97k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>53.81k</td>
  <td>257.80k</td>
  <td>74.03k</td>
  <td>0.00</td>
  <td>35.93k</td>
  <td>35.93k</td>
  <td>35.93k</td>
  <td>35.93k</td>
  <td>169100.51k</td>
  <td>184253.88k</td>
  <td>213097.29k</td>
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
  <td>12.71</td>
  <td>5.96</td>
  <td>20.31</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>10.35</td>
  <td>15.13</td>
  <td>15.76</td>
  <td>18.10</td>
</tr><tr>
  <td>/random_number</td>
  <td>25.07</td>
  <td>12.22</td>
  <td>38.94</td>
  <td>22.44</td>
  <td>22.44</td>
  <td>22.44</td>
  <td>22.44</td>
  <td>27.71</td>
  <td>29.71</td>
  <td>34.01</td>
</tr><tr>
  <td>/count</td>
  <td>37.76</td>
  <td>18.54</td>
  <td>69.03</td>
  <td>34.93</td>
  <td>34.93</td>
  <td>34.93</td>
  <td>34.93</td>
  <td>40.01</td>
  <td>42.90</td>
  <td>49.18</td>
</tr><tr>
  <td>/plus_1</td>
  <td>50.36</td>
  <td>22.39</td>
  <td>87.20</td>
  <td>48.32</td>
  <td>48.32</td>
  <td>48.32</td>
  <td>48.32</td>
  <td>52.06</td>
  <td>53.48</td>
  <td>76.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>63.29</td>
  <td>22.79</td>
  <td>118.81</td>
  <td>59.02</td>
  <td>59.02</td>
  <td>59.02</td>
  <td>59.02</td>
  <td>66.66</td>
  <td>70.32</td>
  <td>94.99</td>
</tr></table>