# Multiple routes
## Name: NHttp 

### Version: 1.3.6
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
    <td>60.85k</td>
    <td>69.70k</td>
    <td>8.15k</td>
    <td>0.64 MiB</td>
    <td>1.03</td>
    <td>0.16</td>
    <td>2.00</td>
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
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>69671.42k</td>
  <td>69703.09k</td>
  <td>69703.09k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.24</td>
  <td>1.30</td>
  <td>1.50</td>
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
  <td>60.85k</td>
  <td>69.70k</td>
  <td>8.15k</td>
  <td>0.64</td>
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>52155.49k</td>
  <td>69671.42k</td>
  <td>69703.09k</td>
  <td>69703.09k</td>
</tr><tr>
  <td>/random_number</td>
  <td>55.88k</td>
  <td>67.21k</td>
  <td>6.12k</td>
  <td>0.97</td>
  <td>45843.89k</td>
  <td>45843.89k</td>
  <td>45843.89k</td>
  <td>45843.89k</td>
  <td>65119.31k</td>
  <td>67211.85k</td>
  <td>67211.85k</td>
</tr><tr>
  <td>/count</td>
  <td>64.89k</td>
  <td>73.04k</td>
  <td>6.84k</td>
  <td>0.06</td>
  <td>54181.38k</td>
  <td>54181.38k</td>
  <td>54181.38k</td>
  <td>54181.38k</td>
  <td>72784.99k</td>
  <td>73044.05k</td>
  <td>73044.05k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.96k</td>
  <td>73.73k</td>
  <td>7.05k</td>
  <td>0.12</td>
  <td>55210.54k</td>
  <td>55210.54k</td>
  <td>55210.54k</td>
  <td>55210.54k</td>
  <td>72455.83k</td>
  <td>73731.92k</td>
  <td>73731.92k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>61.66k</td>
  <td>73.70k</td>
  <td>10.37k</td>
  <td>0.12</td>
  <td>48894.75k</td>
  <td>48894.75k</td>
  <td>48894.75k</td>
  <td>48894.75k</td>
  <td>73648.00k</td>
  <td>73704.81k</td>
  <td>73704.81k</td>
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
  <td>1.03</td>
  <td>0.16</td>
  <td>2.00</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.24</td>
  <td>1.30</td>
  <td>1.50</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.13</td>
  <td>0.18</td>
  <td>2.42</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>1.35</td>
  <td>1.48</td>
  <td>1.75</td>
</tr><tr>
  <td>/count</td>
  <td>0.98</td>
  <td>0.63</td>
  <td>2.17</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.20</td>
  <td>1.29</td>
  <td>1.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.98</td>
  <td>0.14</td>
  <td>1.99</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.20</td>
  <td>1.27</td>
  <td>1.52</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.01</td>
  <td>0.28</td>
  <td>3.22</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.22</td>
  <td>1.31</td>
  <td>1.87</td>
</tr></table>