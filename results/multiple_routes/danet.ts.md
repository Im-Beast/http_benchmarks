# Name: Danet 
  
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
    <td>31.12k</td>
    <td>33.78k</td>
    <td>2.58k</td>
    <td>0.54 MiB</td>
    <td>2.05</td>
    <td>0.92</td>
    <td>6.40</td>
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
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>33021.99k</td>
  <td>33190.29k</td>
  <td>33782.78k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>2.54</td>
  <td>2.78</td>
  <td>3.23</td>
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
  <td>31.12k</td>
  <td>33.78k</td>
  <td>2.58k</td>
  <td>0.54</td>
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>28756.41k</td>
  <td>33021.99k</td>
  <td>33190.29k</td>
  <td>33782.78k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>32.23k</td>
  <td>35.86k</td>
  <td>2.47k</td>
  <td>0.34</td>
  <td>30396.55k</td>
  <td>30396.55k</td>
  <td>30396.55k</td>
  <td>30396.55k</td>
  <td>34143.20k</td>
  <td>34902.02k</td>
  <td>35859.42k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>32.04k</td>
  <td>35.44k</td>
  <td>2.76k</td>
  <td>0.06</td>
  <td>29957.04k</td>
  <td>29957.04k</td>
  <td>29957.04k</td>
  <td>29957.04k</td>
  <td>34099.43k</td>
  <td>34489.70k</td>
  <td>35443.04k</td>
</tr><tr>
  <td>/count</td>
  <td>32.31k</td>
  <td>36.25k</td>
  <td>2.98k</td>
  <td>0.03</td>
  <td>29163.52k</td>
  <td>29163.52k</td>
  <td>29163.52k</td>
  <td>29163.52k</td>
  <td>34576.99k</td>
  <td>34731.13k</td>
  <td>36253.13k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>31.91k</td>
  <td>36.38k</td>
  <td>2.88k</td>
  <td>0.06</td>
  <td>29900.80k</td>
  <td>29900.80k</td>
  <td>29900.80k</td>
  <td>29900.80k</td>
  <td>34021.65k</td>
  <td>34519.82k</td>
  <td>36384.86k</td>
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
  <td>2.05</td>
  <td>0.92</td>
  <td>6.40</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>2.54</td>
  <td>2.78</td>
  <td>3.23</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.98</td>
  <td>0.92</td>
  <td>5.25</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.49</td>
  <td>2.68</td>
  <td>3.26</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.99</td>
  <td>0.96</td>
  <td>5.31</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.48</td>
  <td>2.68</td>
  <td>3.38</td>
</tr><tr>
  <td>/count</td>
  <td>1.97</td>
  <td>0.74</td>
  <td>5.64</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>2.43</td>
  <td>2.66</td>
  <td>3.22</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.99</td>
  <td>0.95</td>
  <td>5.47</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.50</td>
  <td>2.70</td>
  <td>3.24</td>
</tr></table>