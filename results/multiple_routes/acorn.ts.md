# Multiple routes
## Name: Acorn 

### Version: 0.4.0
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
    <td>6.66k</td>
    <td>81.24k</td>
    <td>6.93k</td>
    <td>0.04 MiB</td>
    <td>16.19</td>
    <td>5.49</td>
    <td>35.01</td>
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
  <td>93.46k</td>
  <td>93.46k</td>
  <td>93.46k</td>
  <td>93.46k</td>
  <td>9443.65k</td>
  <td>12399.11k</td>
  <td>34152.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>20.25</td>
  <td>22.29</td>
  <td>27.13</td>
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
  <td>6.66k</td>
  <td>81.24k</td>
  <td>6.93k</td>
  <td>0.04</td>
  <td>93.46k</td>
  <td>93.46k</td>
  <td>93.46k</td>
  <td>93.46k</td>
  <td>9443.65k</td>
  <td>12399.11k</td>
  <td>34152.95k</td>
</tr><tr>
  <td>/random_number</td>
  <td>39.29k</td>
  <td>145.44k</td>
  <td>51.35k</td>
  <td>0.04</td>
  <td>57.75k</td>
  <td>57.75k</td>
  <td>57.75k</td>
  <td>57.75k</td>
  <td>119692.39k</td>
  <td>124438.57k</td>
  <td>132627.46k</td>
</tr><tr>
  <td>/count</td>
  <td>39.90k</td>
  <td>166.56k</td>
  <td>53.25k</td>
  <td>0.00</td>
  <td>38.23k</td>
  <td>38.23k</td>
  <td>38.23k</td>
  <td>38.23k</td>
  <td>123292.96k</td>
  <td>131315.29k</td>
  <td>144628.62k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>45.25k</td>
  <td>162.04k</td>
  <td>55.18k</td>
  <td>0.00</td>
  <td>29.44k</td>
  <td>29.44k</td>
  <td>29.44k</td>
  <td>29.44k</td>
  <td>126543.72k</td>
  <td>131843.79k</td>
  <td>143447.63k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>43.57k</td>
  <td>153.88k</td>
  <td>54.32k</td>
  <td>0.00</td>
  <td>23.98k</td>
  <td>23.98k</td>
  <td>23.98k</td>
  <td>23.98k</td>
  <td>123820.89k</td>
  <td>130165.67k</td>
  <td>140533.70k</td>
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
  <td>16.19</td>
  <td>5.49</td>
  <td>35.01</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>12.70</td>
  <td>20.25</td>
  <td>22.29</td>
  <td>27.13</td>
</tr><tr>
  <td>/random_number</td>
  <td>30.13</td>
  <td>15.25</td>
  <td>57.66</td>
  <td>24.97</td>
  <td>24.97</td>
  <td>24.97</td>
  <td>24.97</td>
  <td>35.39</td>
  <td>41.64</td>
  <td>47.71</td>
</tr><tr>
  <td>/count</td>
  <td>45.55</td>
  <td>22.51</td>
  <td>83.98</td>
  <td>38.84</td>
  <td>38.84</td>
  <td>38.84</td>
  <td>38.84</td>
  <td>51.40</td>
  <td>63.93</td>
  <td>70.71</td>
</tr><tr>
  <td>/plus_1</td>
  <td>61.08</td>
  <td>25.40</td>
  <td>117.82</td>
  <td>52.55</td>
  <td>52.55</td>
  <td>52.55</td>
  <td>52.55</td>
  <td>67.58</td>
  <td>82.33</td>
  <td>94.64</td>
</tr><tr>
  <td>/minus_1</td>
  <td>76.19</td>
  <td>37.89</td>
  <td>155.02</td>
  <td>65.67</td>
  <td>65.67</td>
  <td>65.67</td>
  <td>65.67</td>
  <td>84.48</td>
  <td>102.25</td>
  <td>117.46</td>
</tr></table>