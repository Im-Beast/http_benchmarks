# Multiple routes
## Name: Oak 

### Version: 12.6.0
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
    <td>24.95k</td>
    <td>32.81k</td>
    <td>3.91k</td>
    <td>0.26 MiB</td>
    <td>2.55</td>
    <td>1.14</td>
    <td>6.76</td>
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
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>28926.39k</td>
  <td>29816.02k</td>
  <td>32809.91k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>3.26</td>
  <td>3.73</td>
  <td>4.83</td>
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
  <td>24.95k</td>
  <td>32.81k</td>
  <td>3.91k</td>
  <td>0.26</td>
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>19903.58k</td>
  <td>28926.39k</td>
  <td>29816.02k</td>
  <td>32809.91k</td>
</tr><tr>
  <td>/random_number</td>
  <td>27.30k</td>
  <td>33.05k</td>
  <td>4.94k</td>
  <td>0.48</td>
  <td>18700.97k</td>
  <td>18700.97k</td>
  <td>18700.97k</td>
  <td>18700.97k</td>
  <td>32259.98k</td>
  <td>32345.28k</td>
  <td>33050.68k</td>
</tr><tr>
  <td>/count</td>
  <td>27.43k</td>
  <td>35.29k</td>
  <td>4.46k</td>
  <td>0.03</td>
  <td>20458.00k</td>
  <td>20458.00k</td>
  <td>20458.00k</td>
  <td>20458.00k</td>
  <td>32904.00k</td>
  <td>33812.71k</td>
  <td>35288.08k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>28.25k</td>
  <td>33.44k</td>
  <td>4.46k</td>
  <td>0.05</td>
  <td>19535.98k</td>
  <td>19535.98k</td>
  <td>19535.98k</td>
  <td>19535.98k</td>
  <td>32072.83k</td>
  <td>32932.30k</td>
  <td>33438.63k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>26.55k</td>
  <td>33.83k</td>
  <td>4.37k</td>
  <td>0.05</td>
  <td>22131.87k</td>
  <td>22131.87k</td>
  <td>22131.87k</td>
  <td>22131.87k</td>
  <td>31231.24k</td>
  <td>32508.46k</td>
  <td>33832.19k</td>
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
  <td>2.55</td>
  <td>1.14</td>
  <td>6.76</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>1.96</td>
  <td>3.26</td>
  <td>3.73</td>
  <td>4.83</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.34</td>
  <td>0.97</td>
  <td>7.20</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>3.07</td>
  <td>3.39</td>
  <td>5.50</td>
</tr><tr>
  <td>/count</td>
  <td>2.32</td>
  <td>1.14</td>
  <td>8.17</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>2.91</td>
  <td>3.40</td>
  <td>4.83</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.25</td>
  <td>1.22</td>
  <td>5.72</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>1.84</td>
  <td>2.87</td>
  <td>3.36</td>
  <td>4.92</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.40</td>
  <td>1.61</td>
  <td>6.76</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>3.02</td>
  <td>3.48</td>
  <td>4.81</td>
</tr></table>