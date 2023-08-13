# Multiple routes
## Name: Oak 

### Version: 12.6.0
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
    <td>24.18k</td>
    <td>30.63k</td>
    <td>3.66k</td>
    <td>0.26 MiB</td>
    <td>2.61</td>
    <td>1.60</td>
    <td>9.42</td>
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
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>28290.23k</td>
  <td>28811.08k</td>
  <td>30625.33k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>3.20</td>
  <td>3.56</td>
  <td>4.86</td>
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
  <td>24.18k</td>
  <td>30.63k</td>
  <td>3.66k</td>
  <td>0.26</td>
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>20637.25k</td>
  <td>28290.23k</td>
  <td>28811.08k</td>
  <td>30625.33k</td>
</tr><tr>
  <td>/random_number</td>
  <td>24.59k</td>
  <td>30.52k</td>
  <td>3.53k</td>
  <td>0.43</td>
  <td>20261.35k</td>
  <td>20261.35k</td>
  <td>20261.35k</td>
  <td>20261.35k</td>
  <td>29473.44k</td>
  <td>29556.77k</td>
  <td>30523.19k</td>
</tr><tr>
  <td>/count</td>
  <td>25.94k</td>
  <td>31.74k</td>
  <td>4.00k</td>
  <td>0.02</td>
  <td>19871.24k</td>
  <td>19871.24k</td>
  <td>19871.24k</td>
  <td>19871.24k</td>
  <td>30718.99k</td>
  <td>31128.93k</td>
  <td>31741.97k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>23.65k</td>
  <td>28.94k</td>
  <td>3.84k</td>
  <td>0.05</td>
  <td>19068.89k</td>
  <td>19068.89k</td>
  <td>19068.89k</td>
  <td>19068.89k</td>
  <td>26642.70k</td>
  <td>27033.22k</td>
  <td>28937.06k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>24.98k</td>
  <td>30.71k</td>
  <td>4.75k</td>
  <td>0.05</td>
  <td>19084.65k</td>
  <td>19084.65k</td>
  <td>19084.65k</td>
  <td>19084.65k</td>
  <td>29612.60k</td>
  <td>29929.91k</td>
  <td>30714.92k</td>
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
  <td>2.61</td>
  <td>1.60</td>
  <td>9.42</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>2.12</td>
  <td>3.20</td>
  <td>3.56</td>
  <td>4.86</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.59</td>
  <td>1.61</td>
  <td>5.64</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>3.17</td>
  <td>3.62</td>
  <td>4.66</td>
</tr><tr>
  <td>/count</td>
  <td>2.43</td>
  <td>1.61</td>
  <td>7.36</td>
  <td>2.04</td>
  <td>2.04</td>
  <td>2.04</td>
  <td>2.04</td>
  <td>3.02</td>
  <td>3.33</td>
  <td>4.32</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.67</td>
  <td>1.78</td>
  <td>7.31</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>2.28</td>
  <td>3.28</td>
  <td>3.71</td>
  <td>5.28</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.55</td>
  <td>1.61</td>
  <td>7.62</td>
  <td>2.09</td>
  <td>2.09</td>
  <td>2.09</td>
  <td>2.09</td>
  <td>3.27</td>
  <td>3.60</td>
  <td>5.32</td>
</tr></table>