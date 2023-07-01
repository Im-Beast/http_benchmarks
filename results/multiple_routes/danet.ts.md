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
    <td>28.51k</td>
    <td>31.61k</td>
    <td>2.77k</td>
    <td>0.50 MiB</td>
    <td>2.23</td>
    <td>1.33</td>
    <td>6.00</td>
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
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>30967.17k</td>
  <td>31414.39k</td>
  <td>31607.45k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>2.84</td>
  <td>3.05</td>
  <td>3.76</td>
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
  <td>28.51k</td>
  <td>31.61k</td>
  <td>2.77k</td>
  <td>0.50</td>
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>25334.28k</td>
  <td>30967.17k</td>
  <td>31414.39k</td>
  <td>31607.45k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>29.44k</td>
  <td>32.64k</td>
  <td>3.08k</td>
  <td>0.31</td>
  <td>26046.81k</td>
  <td>26046.81k</td>
  <td>26046.81k</td>
  <td>26046.81k</td>
  <td>32166.63k</td>
  <td>32560.71k</td>
  <td>32641.05k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>29.40k</td>
  <td>33.50k</td>
  <td>2.72k</td>
  <td>0.06</td>
  <td>24900.38k</td>
  <td>24900.38k</td>
  <td>24900.38k</td>
  <td>24900.38k</td>
  <td>31413.01k</td>
  <td>32348.04k</td>
  <td>33500.10k</td>
</tr><tr>
  <td>/count</td>
  <td>30.36k</td>
  <td>35.02k</td>
  <td>2.79k</td>
  <td>0.03</td>
  <td>28132.46k</td>
  <td>28132.46k</td>
  <td>28132.46k</td>
  <td>28132.46k</td>
  <td>32612.22k</td>
  <td>33527.74k</td>
  <td>35022.38k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>30.13k</td>
  <td>33.80k</td>
  <td>2.45k</td>
  <td>0.06</td>
  <td>27252.27k</td>
  <td>27252.27k</td>
  <td>27252.27k</td>
  <td>27252.27k</td>
  <td>32571.51k</td>
  <td>33240.81k</td>
  <td>33801.97k</td>
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
  <td>2.23</td>
  <td>1.33</td>
  <td>6.00</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>2.84</td>
  <td>3.05</td>
  <td>3.76</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.16</td>
  <td>0.95</td>
  <td>6.28</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>2.71</td>
  <td>3.00</td>
  <td>3.72</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.17</td>
  <td>0.84</td>
  <td>5.75</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>2.77</td>
  <td>3.07</td>
  <td>3.99</td>
</tr><tr>
  <td>/count</td>
  <td>2.10</td>
  <td>0.98</td>
  <td>5.26</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.64</td>
  <td>2.84</td>
  <td>3.52</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.11</td>
  <td>0.78</td>
  <td>5.60</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>1.78</td>
  <td>2.64</td>
  <td>2.92</td>
  <td>3.44</td>
</tr></table>