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
    <td>24.28k</td>
    <td>27.37k</td>
    <td>2.09k</td>
    <td>0.43 MiB</td>
    <td>2.62</td>
    <td>1.00</td>
    <td>6.94</td>
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
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>26041.56k</td>
  <td>26758.57k</td>
  <td>27365.69k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>3.25</td>
  <td>3.54</td>
  <td>4.27</td>
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
  <td>24.28k</td>
  <td>27.37k</td>
  <td>2.09k</td>
  <td>0.43</td>
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>21920.35k</td>
  <td>26041.56k</td>
  <td>26758.57k</td>
  <td>27365.69k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>18.95k</td>
  <td>21.01k</td>
  <td>1.30k</td>
  <td>0.20</td>
  <td>17450.95k</td>
  <td>17450.95k</td>
  <td>17450.95k</td>
  <td>17450.95k</td>
  <td>19915.61k</td>
  <td>20005.38k</td>
  <td>21007.62k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>20.67k</td>
  <td>24.63k</td>
  <td>1.79k</td>
  <td>0.04</td>
  <td>18720.10k</td>
  <td>18720.10k</td>
  <td>18720.10k</td>
  <td>18720.10k</td>
  <td>22023.81k</td>
  <td>22170.39k</td>
  <td>24626.04k</td>
</tr><tr>
  <td>/count</td>
  <td>25.77k</td>
  <td>27.94k</td>
  <td>1.64k</td>
  <td>0.02</td>
  <td>24948.85k</td>
  <td>24948.85k</td>
  <td>24948.85k</td>
  <td>24948.85k</td>
  <td>27070.75k</td>
  <td>27751.20k</td>
  <td>27935.46k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>20.58k</td>
  <td>23.61k</td>
  <td>1.60k</td>
  <td>0.04</td>
  <td>19100.54k</td>
  <td>19100.54k</td>
  <td>19100.54k</td>
  <td>19100.54k</td>
  <td>21736.81k</td>
  <td>22097.81k</td>
  <td>23608.12k</td>
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
  <td>2.62</td>
  <td>1.00</td>
  <td>6.94</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>2.23</td>
  <td>3.25</td>
  <td>3.54</td>
  <td>4.27</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.36</td>
  <td>1.63</td>
  <td>7.91</td>
  <td>2.91</td>
  <td>2.91</td>
  <td>2.91</td>
  <td>2.91</td>
  <td>4.17</td>
  <td>4.57</td>
  <td>5.22</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.08</td>
  <td>1.45</td>
  <td>7.84</td>
  <td>2.66</td>
  <td>2.66</td>
  <td>2.66</td>
  <td>2.66</td>
  <td>3.89</td>
  <td>4.23</td>
  <td>4.79</td>
</tr><tr>
  <td>/count</td>
  <td>2.47</td>
  <td>1.06</td>
  <td>6.16</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>3.02</td>
  <td>3.38</td>
  <td>4.00</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.10</td>
  <td>1.57</td>
  <td>5.41</td>
  <td>2.68</td>
  <td>2.68</td>
  <td>2.68</td>
  <td>2.68</td>
  <td>3.80</td>
  <td>4.17</td>
  <td>4.66</td>
</tr></table>