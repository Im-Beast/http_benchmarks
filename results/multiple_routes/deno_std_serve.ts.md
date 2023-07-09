# Name: std serve 
  
  ### Version: 0.192.0
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
    <td>84.13k</td>
    <td>94.53k</td>
    <td>7.84k</td>
    <td>1.47 MiB</td>
    <td>0.76</td>
    <td>0.47</td>
    <td>3.18</td>
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
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>90887.27k</td>
  <td>94533.87k</td>
  <td>94533.87k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.91</td>
  <td>1.00</td>
  <td>1.65</td>
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
  <td>84.13k</td>
  <td>94.53k</td>
  <td>7.84k</td>
  <td>1.47</td>
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>69039.55k</td>
  <td>90887.27k</td>
  <td>94533.87k</td>
  <td>94533.87k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>92.63k</td>
  <td>101.22k</td>
  <td>8.04k</td>
  <td>0.97</td>
  <td>81631.34k</td>
  <td>81631.34k</td>
  <td>81631.34k</td>
  <td>81631.34k</td>
  <td>100394.01k</td>
  <td>101223.27k</td>
  <td>101223.27k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>88.62k</td>
  <td>98.56k</td>
  <td>9.05k</td>
  <td>0.17</td>
  <td>75378.86k</td>
  <td>75378.86k</td>
  <td>75378.86k</td>
  <td>75378.86k</td>
  <td>97630.50k</td>
  <td>98561.49k</td>
  <td>98561.49k</td>
</tr><tr>
  <td>/count</td>
  <td>92.87k</td>
  <td>101.91k</td>
  <td>7.87k</td>
  <td>0.09</td>
  <td>82234.50k</td>
  <td>82234.50k</td>
  <td>82234.50k</td>
  <td>82234.50k</td>
  <td>100583.02k</td>
  <td>101911.16k</td>
  <td>101911.16k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>89.12k</td>
  <td>98.29k</td>
  <td>8.73k</td>
  <td>0.17</td>
  <td>75050.28k</td>
  <td>75050.28k</td>
  <td>75050.28k</td>
  <td>75050.28k</td>
  <td>97414.54k</td>
  <td>98289.09k</td>
  <td>98289.09k</td>
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
  <td>0.76</td>
  <td>0.47</td>
  <td>3.18</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.91</td>
  <td>1.00</td>
  <td>1.65</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.69</td>
  <td>0.37</td>
  <td>3.22</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.83</td>
  <td>0.91</td>
  <td>1.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.72</td>
  <td>0.45</td>
  <td>3.04</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.86</td>
  <td>1.06</td>
  <td>1.55</td>
</tr><tr>
  <td>/count</td>
  <td>0.68</td>
  <td>0.36</td>
  <td>3.01</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.82</td>
  <td>0.89</td>
  <td>1.47</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.72</td>
  <td>0.41</td>
  <td>2.84</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.87</td>
  <td>1.07</td>
  <td>1.43</td>
</tr></table>