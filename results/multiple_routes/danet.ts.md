# Multiple routes
## Name: Danet 

### Version: 1.8.0
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
    <td>29.19k</td>
    <td>32.57k</td>
    <td>3.21k</td>
    <td>0.31 MiB</td>
    <td>2.18</td>
    <td>0.93</td>
    <td>5.84</td>
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
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>31874.17k</td>
  <td>32140.25k</td>
  <td>32569.93k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>2.77</td>
  <td>3.10</td>
  <td>4.48</td>
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
  <td>29.19k</td>
  <td>32.57k</td>
  <td>3.21k</td>
  <td>0.31</td>
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>24456.53k</td>
  <td>31874.17k</td>
  <td>32140.25k</td>
  <td>32569.93k</td>
</tr><tr>
  <td>/random_number</td>
  <td>28.75k</td>
  <td>32.09k</td>
  <td>2.64k</td>
  <td>0.50</td>
  <td>25389.79k</td>
  <td>25389.79k</td>
  <td>25389.79k</td>
  <td>25389.79k</td>
  <td>31537.78k</td>
  <td>31968.75k</td>
  <td>32089.33k</td>
</tr><tr>
  <td>/count</td>
  <td>29.52k</td>
  <td>33.36k</td>
  <td>3.02k</td>
  <td>0.03</td>
  <td>25503.74k</td>
  <td>25503.74k</td>
  <td>25503.74k</td>
  <td>25503.74k</td>
  <td>32194.58k</td>
  <td>32921.38k</td>
  <td>33363.99k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>28.56k</td>
  <td>32.65k</td>
  <td>2.60k</td>
  <td>0.05</td>
  <td>24974.10k</td>
  <td>24974.10k</td>
  <td>24974.10k</td>
  <td>24974.10k</td>
  <td>30851.38k</td>
  <td>31873.48k</td>
  <td>32649.40k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>28.51k</td>
  <td>32.85k</td>
  <td>3.17k</td>
  <td>0.05</td>
  <td>24376.71k</td>
  <td>24376.71k</td>
  <td>24376.71k</td>
  <td>24376.71k</td>
  <td>31886.83k</td>
  <td>32247.76k</td>
  <td>32850.78k</td>
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
  <td>2.18</td>
  <td>0.93</td>
  <td>5.84</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>2.77</td>
  <td>3.10</td>
  <td>4.48</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.21</td>
  <td>0.99</td>
  <td>6.21</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>2.81</td>
  <td>3.13</td>
  <td>4.40</td>
</tr><tr>
  <td>/count</td>
  <td>2.15</td>
  <td>0.79</td>
  <td>6.06</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>2.77</td>
  <td>3.06</td>
  <td>3.92</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.23</td>
  <td>0.93</td>
  <td>6.60</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>2.81</td>
  <td>3.09</td>
  <td>3.99</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.23</td>
  <td>0.85</td>
  <td>6.28</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>2.82</td>
  <td>3.23</td>
  <td>3.93</td>
</tr></table>