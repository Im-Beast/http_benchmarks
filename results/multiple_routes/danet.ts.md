# Name: Danet 
  
  ### Version: 1.7.4
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
    <td>26.84k</td>
    <td>31.36k</td>
    <td>3.03k</td>
    <td>0.47 MiB</td>
    <td>2.36</td>
    <td>1.08</td>
    <td>6.33</td>
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
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>29794.90k</td>
  <td>30397.67k</td>
  <td>31358.31k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>3.06</td>
  <td>3.45</td>
  <td>4.20</td>
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
  <td>26.84k</td>
  <td>31.36k</td>
  <td>3.03k</td>
  <td>0.47</td>
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>23327.72k</td>
  <td>29794.90k</td>
  <td>30397.67k</td>
  <td>31358.31k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>28.95k</td>
  <td>33.28k</td>
  <td>2.80k</td>
  <td>0.30</td>
  <td>25253.43k</td>
  <td>25253.43k</td>
  <td>25253.43k</td>
  <td>25253.43k</td>
  <td>32397.11k</td>
  <td>32542.10k</td>
  <td>33282.95k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>27.93k</td>
  <td>32.60k</td>
  <td>3.23k</td>
  <td>0.05</td>
  <td>22814.87k</td>
  <td>22814.87k</td>
  <td>22814.87k</td>
  <td>22814.87k</td>
  <td>31050.65k</td>
  <td>32467.98k</td>
  <td>32599.61k</td>
</tr><tr>
  <td>/count</td>
  <td>21.08k</td>
  <td>24.45k</td>
  <td>2.29k</td>
  <td>1.39</td>
  <td>18733.77k</td>
  <td>18733.77k</td>
  <td>18733.77k</td>
  <td>18733.77k</td>
  <td>23681.56k</td>
  <td>23972.28k</td>
  <td>24452.99k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>28.47k</td>
  <td>33.43k</td>
  <td>3.03k</td>
  <td>0.05</td>
  <td>24889.43k</td>
  <td>24889.43k</td>
  <td>24889.43k</td>
  <td>24889.43k</td>
  <td>32973.08k</td>
  <td>33164.12k</td>
  <td>33432.29k</td>
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
  <td>2.36</td>
  <td>1.08</td>
  <td>6.33</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>3.06</td>
  <td>3.45</td>
  <td>4.20</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.21</td>
  <td>0.83</td>
  <td>5.79</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>2.85</td>
  <td>3.14</td>
  <td>3.98</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.28</td>
  <td>0.95</td>
  <td>5.66</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>2.94</td>
  <td>3.33</td>
  <td>4.68</td>
</tr><tr>
  <td>/count</td>
  <td>3.02</td>
  <td>1.32</td>
  <td>6.75</td>
  <td>2.50</td>
  <td>2.50</td>
  <td>2.50</td>
  <td>2.50</td>
  <td>3.92</td>
  <td>4.27</td>
  <td>5.40</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.23</td>
  <td>0.97</td>
  <td>5.65</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>1.76</td>
  <td>3.01</td>
  <td>3.53</td>
  <td>4.35</td>
</tr></table>