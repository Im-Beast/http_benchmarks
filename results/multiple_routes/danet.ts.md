# Multiple routes
## Name: Danet 

### Version: 1.8.0
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
    <td>24.83k</td>
    <td>28.67k</td>
    <td>3.26k</td>
    <td>0.26 MiB</td>
    <td>2.57</td>
    <td>1.36</td>
    <td>7.16</td>
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
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>27417.58k</td>
  <td>27926.00k</td>
  <td>28671.62k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>3.13</td>
  <td>3.40</td>
  <td>5.90</td>
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
  <td>24.83k</td>
  <td>28.67k</td>
  <td>3.26k</td>
  <td>0.26</td>
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>23319.54k</td>
  <td>27417.58k</td>
  <td>27926.00k</td>
  <td>28671.62k</td>
</tr><tr>
  <td>/random_number</td>
  <td>25.03k</td>
  <td>28.92k</td>
  <td>2.97k</td>
  <td>0.44</td>
  <td>22916.10k</td>
  <td>22916.10k</td>
  <td>22916.10k</td>
  <td>22916.10k</td>
  <td>27718.08k</td>
  <td>28163.61k</td>
  <td>28922.36k</td>
</tr><tr>
  <td>/count</td>
  <td>25.30k</td>
  <td>29.82k</td>
  <td>2.93k</td>
  <td>0.02</td>
  <td>23100.45k</td>
  <td>23100.45k</td>
  <td>23100.45k</td>
  <td>23100.45k</td>
  <td>27708.98k</td>
  <td>28222.70k</td>
  <td>29817.31k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>24.76k</td>
  <td>29.99k</td>
  <td>3.51k</td>
  <td>0.05</td>
  <td>21905.82k</td>
  <td>21905.82k</td>
  <td>21905.82k</td>
  <td>21905.82k</td>
  <td>27504.72k</td>
  <td>29238.67k</td>
  <td>29989.11k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>24.22k</td>
  <td>29.20k</td>
  <td>3.35k</td>
  <td>0.05</td>
  <td>20993.62k</td>
  <td>20993.62k</td>
  <td>20993.62k</td>
  <td>20993.62k</td>
  <td>27507.21k</td>
  <td>28241.67k</td>
  <td>29195.78k</td>
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
  <td>2.57</td>
  <td>1.36</td>
  <td>7.16</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>2.20</td>
  <td>3.13</td>
  <td>3.40</td>
  <td>5.90</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.53</td>
  <td>1.12</td>
  <td>7.15</td>
  <td>2.15</td>
  <td>2.15</td>
  <td>2.15</td>
  <td>2.15</td>
  <td>3.13</td>
  <td>3.36</td>
  <td>5.93</td>
</tr><tr>
  <td>/count</td>
  <td>2.52</td>
  <td>1.25</td>
  <td>7.05</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>3.03</td>
  <td>3.27</td>
  <td>5.71</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.58</td>
  <td>1.04</td>
  <td>7.41</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>3.26</td>
  <td>3.53</td>
  <td>6.20</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.64</td>
  <td>1.09</td>
  <td>7.52</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>3.26</td>
  <td>3.48</td>
  <td>6.16</td>
</tr></table>