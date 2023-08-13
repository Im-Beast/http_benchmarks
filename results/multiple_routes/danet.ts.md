# Multiple routes
## Name: Danet 

### Version: 1.8.0
### Deno version: 1.36.0

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
    <td>21.11k</td>
    <td>26.30k</td>
    <td>4.09k</td>
    <td>0.22 MiB</td>
    <td>3.02</td>
    <td>1.63</td>
    <td>11.55</td>
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
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>25417.19k</td>
  <td>25529.85k</td>
  <td>26295.29k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>3.94</td>
  <td>4.44</td>
  <td>7.39</td>
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
  <td>21.11k</td>
  <td>26.30k</td>
  <td>4.09k</td>
  <td>0.22</td>
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>15109.08k</td>
  <td>25417.19k</td>
  <td>25529.85k</td>
  <td>26295.29k</td>
</tr><tr>
  <td>/random_number</td>
  <td>20.36k</td>
  <td>26.82k</td>
  <td>3.78k</td>
  <td>0.36</td>
  <td>15938.84k</td>
  <td>15938.84k</td>
  <td>15938.84k</td>
  <td>15938.84k</td>
  <td>25239.88k</td>
  <td>26128.62k</td>
  <td>26824.53k</td>
</tr><tr>
  <td>/count</td>
  <td>21.66k</td>
  <td>28.03k</td>
  <td>3.51k</td>
  <td>0.02</td>
  <td>16543.81k</td>
  <td>16543.81k</td>
  <td>16543.81k</td>
  <td>16543.81k</td>
  <td>25774.60k</td>
  <td>26496.60k</td>
  <td>28032.55k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>21.15k</td>
  <td>26.13k</td>
  <td>3.47k</td>
  <td>0.04</td>
  <td>16808.64k</td>
  <td>16808.64k</td>
  <td>16808.64k</td>
  <td>16808.64k</td>
  <td>25589.29k</td>
  <td>25775.85k</td>
  <td>26125.89k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>21.47k</td>
  <td>27.67k</td>
  <td>3.37k</td>
  <td>0.04</td>
  <td>16136.05k</td>
  <td>16136.05k</td>
  <td>16136.05k</td>
  <td>16136.05k</td>
  <td>25266.22k</td>
  <td>25936.01k</td>
  <td>27669.04k</td>
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
  <td>3.02</td>
  <td>1.63</td>
  <td>11.55</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>3.94</td>
  <td>4.44</td>
  <td>7.39</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.12</td>
  <td>1.35</td>
  <td>8.78</td>
  <td>2.44</td>
  <td>2.44</td>
  <td>2.44</td>
  <td>2.44</td>
  <td>4.08</td>
  <td>4.46</td>
  <td>5.93</td>
</tr><tr>
  <td>/count</td>
  <td>2.93</td>
  <td>1.18</td>
  <td>7.55</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>2.33</td>
  <td>3.79</td>
  <td>4.19</td>
  <td>5.69</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.00</td>
  <td>1.09</td>
  <td>9.62</td>
  <td>2.35</td>
  <td>2.35</td>
  <td>2.35</td>
  <td>2.35</td>
  <td>3.91</td>
  <td>4.51</td>
  <td>6.05</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.96</td>
  <td>1.27</td>
  <td>6.73</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>2.37</td>
  <td>3.87</td>
  <td>4.37</td>
  <td>5.57</td>
</tr></table>