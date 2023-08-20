# Multiple routes
## Name: Deno.serve 

### Version: Deno 1.36.0
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
    <td>80.87k</td>
    <td>87.17k</td>
    <td>5.50k</td>
    <td>0.86 MiB</td>
    <td>0.78</td>
    <td>0.49</td>
    <td>1.47</td>
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
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>84293.84k</td>
  <td>87174.96k</td>
  <td>87174.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.85</td>
  <td>0.88</td>
  <td>0.96</td>
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
  <td>80.87k</td>
  <td>87.17k</td>
  <td>5.50k</td>
  <td>0.86</td>
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>72116.70k</td>
  <td>84293.84k</td>
  <td>87174.96k</td>
  <td>87174.96k</td>
</tr><tr>
  <td>/random_number</td>
  <td>94.81k</td>
  <td>115.50k</td>
  <td>11.54k</td>
  <td>1.64</td>
  <td>77870.73k</td>
  <td>77870.73k</td>
  <td>77870.73k</td>
  <td>77870.73k</td>
  <td>113144.10k</td>
  <td>115503.62k</td>
  <td>115503.62k</td>
</tr><tr>
  <td>/count</td>
  <td>119.61k</td>
  <td>127.79k</td>
  <td>15.77k</td>
  <td>0.12</td>
  <td>81446.24k</td>
  <td>81446.24k</td>
  <td>81446.24k</td>
  <td>81446.24k</td>
  <td>127791.79k</td>
  <td>127791.79k</td>
  <td>127791.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>85.54k</td>
  <td>90.22k</td>
  <td>3.91k</td>
  <td>0.16</td>
  <td>80207.76k</td>
  <td>80207.76k</td>
  <td>80207.76k</td>
  <td>80207.76k</td>
  <td>88622.26k</td>
  <td>90221.72k</td>
  <td>90221.72k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>85.70k</td>
  <td>102.80k</td>
  <td>6.35k</td>
  <td>0.16</td>
  <td>82867.57k</td>
  <td>82867.57k</td>
  <td>82867.57k</td>
  <td>82867.57k</td>
  <td>88430.68k</td>
  <td>102800.16k</td>
  <td>102800.16k</td>
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
  <td>0.78</td>
  <td>0.49</td>
  <td>1.47</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.85</td>
  <td>0.88</td>
  <td>0.96</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.67</td>
  <td>0.46</td>
  <td>1.39</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.52</td>
  <td>0.87</td>
  <td>0.93</td>
  <td>1.04</td>
</tr><tr>
  <td>/count</td>
  <td>0.52</td>
  <td>0.42</td>
  <td>1.30</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.58</td>
  <td>0.64</td>
  <td>0.77</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.74</td>
  <td>0.45</td>
  <td>1.35</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.82</td>
  <td>0.84</td>
  <td>0.92</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.74</td>
  <td>0.47</td>
  <td>1.40</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.82</td>
  <td>0.85</td>
  <td>0.93</td>
</tr></table>