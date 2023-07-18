# Multiple routes
## Name: Opine 

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
    <td>17.19k</td>
    <td>21.59k</td>
    <td>2.14k</td>
    <td>0.18 MiB</td>
    <td>3.71</td>
    <td>1.77</td>
    <td>9.99</td>
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
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>18835.50k</td>
  <td>19124.44k</td>
  <td>21588.89k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>4.74</td>
  <td>5.10</td>
  <td>6.97</td>
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
  <td>17.19k</td>
  <td>21.59k</td>
  <td>2.14k</td>
  <td>0.18</td>
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>14644.02k</td>
  <td>18835.50k</td>
  <td>19124.44k</td>
  <td>21588.89k</td>
</tr><tr>
  <td>/random_number</td>
  <td>21.68k</td>
  <td>24.67k</td>
  <td>1.91k</td>
  <td>0.38</td>
  <td>19319.06k</td>
  <td>19319.06k</td>
  <td>19319.06k</td>
  <td>19319.06k</td>
  <td>23782.15k</td>
  <td>24097.90k</td>
  <td>24673.10k</td>
</tr><tr>
  <td>/count</td>
  <td>22.57k</td>
  <td>25.18k</td>
  <td>1.94k</td>
  <td>0.02</td>
  <td>19435.69k</td>
  <td>19435.69k</td>
  <td>19435.69k</td>
  <td>19435.69k</td>
  <td>24489.32k</td>
  <td>24713.13k</td>
  <td>25182.27k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>19.17k</td>
  <td>23.71k</td>
  <td>1.70k</td>
  <td>0.04</td>
  <td>17165.77k</td>
  <td>17165.77k</td>
  <td>17165.77k</td>
  <td>17165.77k</td>
  <td>20601.23k</td>
  <td>21020.42k</td>
  <td>23713.03k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>19.35k</td>
  <td>24.56k</td>
  <td>1.93k</td>
  <td>0.04</td>
  <td>17500.68k</td>
  <td>17500.68k</td>
  <td>17500.68k</td>
  <td>17500.68k</td>
  <td>20919.03k</td>
  <td>22017.51k</td>
  <td>24564.49k</td>
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
  <td>3.71</td>
  <td>1.77</td>
  <td>9.99</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>4.74</td>
  <td>5.10</td>
  <td>6.97</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.95</td>
  <td>1.19</td>
  <td>6.27</td>
  <td>2.39</td>
  <td>2.39</td>
  <td>2.39</td>
  <td>2.39</td>
  <td>3.71</td>
  <td>4.11</td>
  <td>4.73</td>
</tr><tr>
  <td>/count</td>
  <td>2.82</td>
  <td>1.05</td>
  <td>6.76</td>
  <td>2.31</td>
  <td>2.31</td>
  <td>2.31</td>
  <td>2.31</td>
  <td>3.55</td>
  <td>3.88</td>
  <td>5.02</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.33</td>
  <td>1.44</td>
  <td>7.64</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>2.74</td>
  <td>4.20</td>
  <td>4.60</td>
  <td>5.23</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.28</td>
  <td>1.48</td>
  <td>7.82</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>4.10</td>
  <td>4.45</td>
  <td>5.43</td>
</tr></table>