# Name: Opine 
  
  ### Version: 2.3.4
  ### Deno version: 1.35.1

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
    <td>24.07k</td>
    <td>27.30k</td>
    <td>1.96k</td>
    <td>0.42 MiB</td>
    <td>2.64</td>
    <td>1.17</td>
    <td>7.20</td>
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
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>25446.96k</td>
  <td>25885.13k</td>
  <td>27298.71k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>3.31</td>
  <td>3.56</td>
  <td>4.18</td>
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
  <td>24.07k</td>
  <td>27.30k</td>
  <td>1.96k</td>
  <td>0.42</td>
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>21948.41k</td>
  <td>25446.96k</td>
  <td>25885.13k</td>
  <td>27298.71k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>18.45k</td>
  <td>21.10k</td>
  <td>1.35k</td>
  <td>0.19</td>
  <td>17425.86k</td>
  <td>17425.86k</td>
  <td>17425.86k</td>
  <td>17425.86k</td>
  <td>19352.11k</td>
  <td>19415.41k</td>
  <td>21098.62k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>20.25k</td>
  <td>22.03k</td>
  <td>1.21k</td>
  <td>0.04</td>
  <td>19286.62k</td>
  <td>19286.62k</td>
  <td>19286.62k</td>
  <td>19286.62k</td>
  <td>21216.43k</td>
  <td>21329.86k</td>
  <td>22029.12k</td>
</tr><tr>
  <td>/count</td>
  <td>25.05k</td>
  <td>26.58k</td>
  <td>1.69k</td>
  <td>0.02</td>
  <td>24081.73k</td>
  <td>24081.73k</td>
  <td>24081.73k</td>
  <td>24081.73k</td>
  <td>25891.47k</td>
  <td>26329.14k</td>
  <td>26582.80k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>20.19k</td>
  <td>23.31k</td>
  <td>1.41k</td>
  <td>0.04</td>
  <td>18800.22k</td>
  <td>18800.22k</td>
  <td>18800.22k</td>
  <td>18800.22k</td>
  <td>21177.56k</td>
  <td>21260.89k</td>
  <td>23307.43k</td>
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
  <td>2.64</td>
  <td>1.17</td>
  <td>7.20</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>2.25</td>
  <td>3.31</td>
  <td>3.56</td>
  <td>4.18</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.45</td>
  <td>1.50</td>
  <td>8.04</td>
  <td>2.97</td>
  <td>2.97</td>
  <td>2.97</td>
  <td>2.97</td>
  <td>4.33</td>
  <td>4.72</td>
  <td>5.26</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.14</td>
  <td>1.45</td>
  <td>7.84</td>
  <td>2.70</td>
  <td>2.70</td>
  <td>2.70</td>
  <td>2.70</td>
  <td>3.96</td>
  <td>4.29</td>
  <td>4.83</td>
</tr><tr>
  <td>/count</td>
  <td>2.54</td>
  <td>1.13</td>
  <td>6.56</td>
  <td>2.21</td>
  <td>2.21</td>
  <td>2.21</td>
  <td>2.21</td>
  <td>3.17</td>
  <td>3.49</td>
  <td>3.96</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.18</td>
  <td>1.38</td>
  <td>7.75</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>3.97</td>
  <td>4.31</td>
  <td>4.86</td>
</tr></table>