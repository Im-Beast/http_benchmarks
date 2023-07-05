# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>28.45k</td>
    <td>32.52k</td>
    <td>8.11k</td>
    <td>0.49 MiB</td>
    <td>2.27</td>
    <td>0.89</td>
    <td>5.99</td>
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
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>30976.18k</td>
  <td>31778.59k</td>
  <td>32521.65k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>2.86</td>
  <td>3.14</td>
  <td>4.07</td>
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
  <td>28.45k</td>
  <td>32.52k</td>
  <td>8.11k</td>
  <td>0.49</td>
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>24999.95k</td>
  <td>30976.18k</td>
  <td>31778.59k</td>
  <td>32521.65k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>28.96k</td>
  <td>32.59k</td>
  <td>3.18k</td>
  <td>0.30</td>
  <td>25857.35k</td>
  <td>25857.35k</td>
  <td>25857.35k</td>
  <td>25857.35k</td>
  <td>31640.07k</td>
  <td>32548.23k</td>
  <td>32585.12k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>28.91k</td>
  <td>33.12k</td>
  <td>2.60k</td>
  <td>0.06</td>
  <td>25385.96k</td>
  <td>25385.96k</td>
  <td>25385.96k</td>
  <td>25385.96k</td>
  <td>31445.00k</td>
  <td>32687.23k</td>
  <td>33118.06k</td>
</tr><tr>
  <td>/count</td>
  <td>29.93k</td>
  <td>35.78k</td>
  <td>2.53k</td>
  <td>0.03</td>
  <td>27669.49k</td>
  <td>27669.49k</td>
  <td>27669.49k</td>
  <td>27669.49k</td>
  <td>32321.78k</td>
  <td>33431.84k</td>
  <td>35775.17k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>29.44k</td>
  <td>32.91k</td>
  <td>1.87k</td>
  <td>0.06</td>
  <td>26701.11k</td>
  <td>26701.11k</td>
  <td>26701.11k</td>
  <td>26701.11k</td>
  <td>31736.01k</td>
  <td>32796.16k</td>
  <td>32913.56k</td>
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
  <td>2.27</td>
  <td>0.89</td>
  <td>5.99</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>2.86</td>
  <td>3.14</td>
  <td>4.07</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.20</td>
  <td>0.90</td>
  <td>5.51</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>2.78</td>
  <td>3.08</td>
  <td>4.03</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.21</td>
  <td>0.69</td>
  <td>6.16</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>2.80</td>
  <td>3.06</td>
  <td>3.84</td>
</tr><tr>
  <td>/count</td>
  <td>2.13</td>
  <td>0.66</td>
  <td>5.69</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>2.61</td>
  <td>2.83</td>
  <td>3.52</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.17</td>
  <td>0.89</td>
  <td>4.30</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>2.70</td>
  <td>2.91</td>
  <td>3.47</td>
</tr></table>