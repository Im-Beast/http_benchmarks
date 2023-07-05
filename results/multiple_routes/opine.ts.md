# Name: Opine 
  
  ### Version: 2.3.4
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
    <td>22.20k</td>
    <td>26.28k</td>
    <td>2.16k</td>
    <td>0.39 MiB</td>
    <td>2.87</td>
    <td>1.22</td>
    <td>7.19</td>
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
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>24355.98k</td>
  <td>24566.26k</td>
  <td>26279.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>3.51</td>
  <td>3.83</td>
  <td>4.85</td>
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
  <td>22.20k</td>
  <td>26.28k</td>
  <td>2.16k</td>
  <td>0.39</td>
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>19578.36k</td>
  <td>24355.98k</td>
  <td>24566.26k</td>
  <td>26279.07k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>17.28k</td>
  <td>20.64k</td>
  <td>1.16k</td>
  <td>0.18</td>
  <td>16017.07k</td>
  <td>16017.07k</td>
  <td>16017.07k</td>
  <td>16017.07k</td>
  <td>18764.43k</td>
  <td>18976.05k</td>
  <td>20636.35k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>18.71k</td>
  <td>22.56k</td>
  <td>1.66k</td>
  <td>0.04</td>
  <td>16756.69k</td>
  <td>16756.69k</td>
  <td>16756.69k</td>
  <td>16756.69k</td>
  <td>20490.38k</td>
  <td>20931.92k</td>
  <td>22560.40k</td>
</tr><tr>
  <td>/count</td>
  <td>23.21k</td>
  <td>26.88k</td>
  <td>1.99k</td>
  <td>0.02</td>
  <td>21500.69k</td>
  <td>21500.69k</td>
  <td>21500.69k</td>
  <td>21500.69k</td>
  <td>25084.54k</td>
  <td>25454.08k</td>
  <td>26883.57k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>18.76k</td>
  <td>21.11k</td>
  <td>1.49k</td>
  <td>0.04</td>
  <td>17020.49k</td>
  <td>17020.49k</td>
  <td>17020.49k</td>
  <td>17020.49k</td>
  <td>20356.31k</td>
  <td>20889.14k</td>
  <td>21110.77k</td>
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
  <td>2.87</td>
  <td>1.22</td>
  <td>7.19</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>3.51</td>
  <td>3.83</td>
  <td>4.85</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.70</td>
  <td>2.14</td>
  <td>6.55</td>
  <td>3.13</td>
  <td>3.13</td>
  <td>3.13</td>
  <td>3.13</td>
  <td>4.46</td>
  <td>4.99</td>
  <td>5.70</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.41</td>
  <td>1.68</td>
  <td>7.61</td>
  <td>2.86</td>
  <td>2.86</td>
  <td>2.86</td>
  <td>2.86</td>
  <td>4.15</td>
  <td>4.61</td>
  <td>5.65</td>
</tr><tr>
  <td>/count</td>
  <td>2.74</td>
  <td>1.36</td>
  <td>6.15</td>
  <td>2.29</td>
  <td>2.29</td>
  <td>2.29</td>
  <td>2.29</td>
  <td>3.35</td>
  <td>3.74</td>
  <td>4.55</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.40</td>
  <td>1.25</td>
  <td>7.63</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>4.18</td>
  <td>4.51</td>
  <td>5.59</td>
</tr></table>