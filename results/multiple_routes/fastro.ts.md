# Multiple routes
## Name: Fastro 

### Version: 0.80.4
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
    <td>79.82k</td>
    <td>89.83k</td>
    <td>10.76k</td>
    <td>0.84 MiB</td>
    <td>0.80</td>
    <td>0.47</td>
    <td>3.36</td>
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
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>86171.19k</td>
  <td>89826.95k</td>
  <td>89826.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.86</td>
  <td>0.90</td>
  <td>1.66</td>
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
  <td>79.82k</td>
  <td>89.83k</td>
  <td>10.76k</td>
  <td>0.84</td>
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>73400.16k</td>
  <td>86171.19k</td>
  <td>89826.95k</td>
  <td>89826.95k</td>
</tr><tr>
  <td>/random_number</td>
  <td>113.16k</td>
  <td>128.42k</td>
  <td>10.45k</td>
  <td>1.97</td>
  <td>75569.29k</td>
  <td>75569.29k</td>
  <td>75569.29k</td>
  <td>75569.29k</td>
  <td>128424.09k</td>
  <td>128424.09k</td>
  <td>128424.09k</td>
</tr><tr>
  <td>/count</td>
  <td>98.91k</td>
  <td>135.75k</td>
  <td>17.53k</td>
  <td>0.09</td>
  <td>84412.45k</td>
  <td>84412.45k</td>
  <td>84412.45k</td>
  <td>84412.45k</td>
  <td>124775.55k</td>
  <td>135748.78k</td>
  <td>135748.78k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>87.89k</td>
  <td>113.78k</td>
  <td>11.76k</td>
  <td>0.17</td>
  <td>81574.41k</td>
  <td>81574.41k</td>
  <td>81574.41k</td>
  <td>81574.41k</td>
  <td>91827.00k</td>
  <td>113784.69k</td>
  <td>113784.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>88.62k</td>
  <td>118.79k</td>
  <td>14.98k</td>
  <td>0.17</td>
  <td>77040.31k</td>
  <td>77040.31k</td>
  <td>77040.31k</td>
  <td>77040.31k</td>
  <td>117467.33k</td>
  <td>118792.99k</td>
  <td>118792.99k</td>
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
  <td>0.80</td>
  <td>0.47</td>
  <td>3.36</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.86</td>
  <td>0.90</td>
  <td>1.66</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.56</td>
  <td>0.42</td>
  <td>1.76</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.76</td>
  <td>0.81</td>
  <td>1.56</td>
</tr><tr>
  <td>/count</td>
  <td>0.65</td>
  <td>0.40</td>
  <td>3.74</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.80</td>
  <td>0.83</td>
  <td>1.65</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.72</td>
  <td>0.43</td>
  <td>2.31</td>
  <td>0.53</td>
  <td>0.53</td>
  <td>0.53</td>
  <td>0.53</td>
  <td>0.80</td>
  <td>0.83</td>
  <td>1.59</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.73</td>
  <td>0.43</td>
  <td>1.88</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.79</td>
  <td>0.82</td>
  <td>1.62</td>
</tr></table>