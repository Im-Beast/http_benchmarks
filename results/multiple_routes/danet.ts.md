# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>22.28k</td>
    <td>29.99k</td>
    <td>4.83k</td>
    <td>0.39 MiB</td>
    <td>2.86</td>
    <td>0.89</td>
    <td>8.30</td>
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
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>28018.99k</td>
  <td>28878.30k</td>
  <td>29988.57k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>4.21</td>
  <td>4.87</td>
  <td>6.23</td>
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
  <td>22.28k</td>
  <td>29.99k</td>
  <td>4.83k</td>
  <td>0.39</td>
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>15911.98k</td>
  <td>28018.99k</td>
  <td>28878.30k</td>
  <td>29988.57k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>27.00k</td>
  <td>32.01k</td>
  <td>2.83k</td>
  <td>0.28</td>
  <td>22055.25k</td>
  <td>22055.25k</td>
  <td>22055.25k</td>
  <td>22055.25k</td>
  <td>30815.52k</td>
  <td>31304.36k</td>
  <td>32007.96k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>25.67k</td>
  <td>32.15k</td>
  <td>3.61k</td>
  <td>0.05</td>
  <td>22730.87k</td>
  <td>22730.87k</td>
  <td>22730.87k</td>
  <td>22730.87k</td>
  <td>30193.95k</td>
  <td>31156.73k</td>
  <td>32150.31k</td>
</tr><tr>
  <td>/count</td>
  <td>28.32k</td>
  <td>35.33k</td>
  <td>2.99k</td>
  <td>0.03</td>
  <td>25177.48k</td>
  <td>25177.48k</td>
  <td>25177.48k</td>
  <td>25177.48k</td>
  <td>31418.63k</td>
  <td>32886.61k</td>
  <td>35329.24k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>26.19k</td>
  <td>31.22k</td>
  <td>3.03k</td>
  <td>0.05</td>
  <td>23151.69k</td>
  <td>23151.69k</td>
  <td>23151.69k</td>
  <td>23151.69k</td>
  <td>29760.87k</td>
  <td>30319.98k</td>
  <td>31224.76k</td>
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
  <td>2.86</td>
  <td>0.89</td>
  <td>8.30</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>2.01</td>
  <td>4.21</td>
  <td>4.87</td>
  <td>6.23</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.36</td>
  <td>0.94</td>
  <td>6.46</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>1.87</td>
  <td>3.14</td>
  <td>3.63</td>
  <td>4.28</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.48</td>
  <td>0.93</td>
  <td>5.77</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>1.89</td>
  <td>3.28</td>
  <td>3.61</td>
  <td>4.62</td>
</tr><tr>
  <td>/count</td>
  <td>2.26</td>
  <td>0.81</td>
  <td>5.37</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>2.86</td>
  <td>3.11</td>
  <td>4.07</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.44</td>
  <td>0.85</td>
  <td>7.29</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>1.91</td>
  <td>3.12</td>
  <td>3.46</td>
  <td>4.59</td>
</tr></table>