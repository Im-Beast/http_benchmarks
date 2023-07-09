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
    <td>29.44k</td>
    <td>33.77k</td>
    <td>4.84k</td>
    <td>0.53 MiB</td>
    <td>2.12</td>
    <td>0.70</td>
    <td>6.49</td>
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
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>31850.94k</td>
  <td>32280.90k</td>
  <td>33770.60k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>2.64</td>
  <td>2.88</td>
  <td>3.51</td>
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
  <td>29.44k</td>
  <td>33.77k</td>
  <td>4.84k</td>
  <td>0.53</td>
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>26395.94k</td>
  <td>31850.94k</td>
  <td>32280.90k</td>
  <td>33770.60k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>31.42k</td>
  <td>34.52k</td>
  <td>2.19k</td>
  <td>0.33</td>
  <td>29603.03k</td>
  <td>29603.03k</td>
  <td>29603.03k</td>
  <td>29603.03k</td>
  <td>33253.60k</td>
  <td>33406.92k</td>
  <td>34518.40k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>31.02k</td>
  <td>33.19k</td>
  <td>2.58k</td>
  <td>0.06</td>
  <td>28913.21k</td>
  <td>28913.21k</td>
  <td>28913.21k</td>
  <td>28913.21k</td>
  <td>32989.51k</td>
  <td>33111.46k</td>
  <td>33194.76k</td>
</tr><tr>
  <td>/count</td>
  <td>31.42k</td>
  <td>34.55k</td>
  <td>2.04k</td>
  <td>0.03</td>
  <td>29682.89k</td>
  <td>29682.89k</td>
  <td>29682.89k</td>
  <td>29682.89k</td>
  <td>33479.35k</td>
  <td>33921.58k</td>
  <td>34548.44k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>30.96k</td>
  <td>33.81k</td>
  <td>2.72k</td>
  <td>0.06</td>
  <td>29503.97k</td>
  <td>29503.97k</td>
  <td>29503.97k</td>
  <td>29503.97k</td>
  <td>32884.47k</td>
  <td>33058.37k</td>
  <td>33814.09k</td>
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
  <td>2.12</td>
  <td>0.70</td>
  <td>6.49</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>2.64</td>
  <td>2.88</td>
  <td>3.51</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.03</td>
  <td>0.79</td>
  <td>5.96</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.55</td>
  <td>2.76</td>
  <td>3.32</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.05</td>
  <td>0.78</td>
  <td>5.31</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.57</td>
  <td>2.80</td>
  <td>3.26</td>
</tr><tr>
  <td>/count</td>
  <td>2.02</td>
  <td>0.87</td>
  <td>3.82</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.51</td>
  <td>2.73</td>
  <td>3.23</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.04</td>
  <td>0.92</td>
  <td>5.63</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>2.57</td>
  <td>2.77</td>
  <td>3.40</td>
</tr></table>