# Multiple routes
## Name: Composium 

### Version: 0.1.1
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
    <td>19.52k</td>
    <td>20.75k</td>
    <td>1.07k</td>
    <td>0.20 MiB</td>
    <td>3.26</td>
    <td>1.12</td>
    <td>6.06</td>
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
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>20467.13k</td>
  <td>20551.18k</td>
  <td>20745.87k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>3.66</td>
  <td>3.73</td>
  <td>4.32</td>
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
  <td>19.52k</td>
  <td>20.75k</td>
  <td>1.07k</td>
  <td>0.20</td>
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>18401.11k</td>
  <td>20467.13k</td>
  <td>20551.18k</td>
  <td>20745.87k</td>
</tr><tr>
  <td>/random_number</td>
  <td>18.93k</td>
  <td>20.31k</td>
  <td>1.04k</td>
  <td>0.33</td>
  <td>17652.01k</td>
  <td>17652.01k</td>
  <td>17652.01k</td>
  <td>17652.01k</td>
  <td>19741.57k</td>
  <td>19901.98k</td>
  <td>20314.09k</td>
</tr><tr>
  <td>/count</td>
  <td>18.95k</td>
  <td>20.37k</td>
  <td>944.27</td>
  <td>0.02</td>
  <td>18378.84k</td>
  <td>18378.84k</td>
  <td>18378.84k</td>
  <td>18378.84k</td>
  <td>20016.05k</td>
  <td>20324.18k</td>
  <td>20372.17k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>23.33k</td>
  <td>25.26k</td>
  <td>1.78k</td>
  <td>0.05</td>
  <td>23082.84k</td>
  <td>23082.84k</td>
  <td>23082.84k</td>
  <td>23082.84k</td>
  <td>24457.14k</td>
  <td>24687.01k</td>
  <td>25262.91k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>25.04k</td>
  <td>26.45k</td>
  <td>1.09k</td>
  <td>0.05</td>
  <td>24504.99k</td>
  <td>24504.99k</td>
  <td>24504.99k</td>
  <td>24504.99k</td>
  <td>25858.12k</td>
  <td>25879.47k</td>
  <td>26449.70k</td>
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
  <td>3.26</td>
  <td>1.12</td>
  <td>6.06</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>2.94</td>
  <td>3.66</td>
  <td>3.73</td>
  <td>4.32</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.37</td>
  <td>1.14</td>
  <td>5.99</td>
  <td>3.05</td>
  <td>3.05</td>
  <td>3.05</td>
  <td>3.05</td>
  <td>3.79</td>
  <td>3.90</td>
  <td>4.24</td>
</tr><tr>
  <td>/count</td>
  <td>3.36</td>
  <td>1.26</td>
  <td>5.74</td>
  <td>3.00</td>
  <td>3.00</td>
  <td>3.00</td>
  <td>3.00</td>
  <td>3.70</td>
  <td>3.89</td>
  <td>4.07</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.69</td>
  <td>1.11</td>
  <td>5.03</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>2.94</td>
  <td>3.11</td>
  <td>3.24</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.54</td>
  <td>1.05</td>
  <td>4.85</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>2.74</td>
  <td>2.98</td>
  <td>3.12</td>
</tr></table>