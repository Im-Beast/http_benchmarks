# Name: Opine 
  
  ### Version: 2.3.4
  ### Deno version: 1.34.3

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
    <td>20.89k</td>
    <td>25.53k</td>
    <td>2.54k</td>
    <td>0.37 MiB</td>
    <td>3.04</td>
    <td>1.71</td>
    <td>8.16</td>
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
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>23712.49k</td>
  <td>24131.66k</td>
  <td>25532.67k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>4.03</td>
  <td>4.41</td>
  <td>5.77</td>
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
  <td>20.89k</td>
  <td>25.53k</td>
  <td>2.54k</td>
  <td>0.37</td>
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>17399.99k</td>
  <td>23712.49k</td>
  <td>24131.66k</td>
  <td>25532.67k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>16.73k</td>
  <td>20.91k</td>
  <td>1.91k</td>
  <td>0.18</td>
  <td>14507.96k</td>
  <td>14507.96k</td>
  <td>14507.96k</td>
  <td>14507.96k</td>
  <td>18802.99k</td>
  <td>18915.74k</td>
  <td>20913.29k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>18.62k</td>
  <td>21.29k</td>
  <td>2.14k</td>
  <td>0.04</td>
  <td>15903.88k</td>
  <td>15903.88k</td>
  <td>15903.88k</td>
  <td>15903.88k</td>
  <td>20952.36k</td>
  <td>21196.89k</td>
  <td>21294.05k</td>
</tr><tr>
  <td>/count</td>
  <td>22.62k</td>
  <td>25.98k</td>
  <td>2.41k</td>
  <td>0.02</td>
  <td>19754.75k</td>
  <td>19754.75k</td>
  <td>19754.75k</td>
  <td>19754.75k</td>
  <td>24972.24k</td>
  <td>25503.99k</td>
  <td>25976.72k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>18.67k</td>
  <td>22.79k</td>
  <td>1.77k</td>
  <td>0.04</td>
  <td>16244.25k</td>
  <td>16244.25k</td>
  <td>16244.25k</td>
  <td>16244.25k</td>
  <td>20465.11k</td>
  <td>20726.55k</td>
  <td>22790.89k</td>
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
  <td>3.04</td>
  <td>1.71</td>
  <td>8.16</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>4.03</td>
  <td>4.41</td>
  <td>5.77</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.81</td>
  <td>1.70</td>
  <td>8.95</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>4.83</td>
  <td>5.38</td>
  <td>6.61</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.44</td>
  <td>1.78</td>
  <td>8.51</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>2.80</td>
  <td>4.40</td>
  <td>4.80</td>
  <td>6.19</td>
</tr><tr>
  <td>/count</td>
  <td>2.81</td>
  <td>1.25</td>
  <td>7.24</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>3.66</td>
  <td>4.02</td>
  <td>5.22</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.42</td>
  <td>1.77</td>
  <td>7.31</td>
  <td>2.83</td>
  <td>2.83</td>
  <td>2.83</td>
  <td>2.83</td>
  <td>4.38</td>
  <td>4.72</td>
  <td>6.17</td>
</tr></table>