# Name: NHttp 
  
  ### Version: 1.2.23
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
    <td>86.41k</td>
    <td>98.21k</td>
    <td>12.48k</td>
    <td>1.51 MiB</td>
    <td>0.74</td>
    <td>0.54</td>
    <td>3.29</td>
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
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>95714.72k</td>
  <td>98212.95k</td>
  <td>98212.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.90</td>
  <td>1.04</td>
  <td>1.85</td>
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
  <td>86.41k</td>
  <td>98.21k</td>
  <td>12.48k</td>
  <td>1.51</td>
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>70608.86k</td>
  <td>95714.72k</td>
  <td>98212.95k</td>
  <td>98212.95k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>94.03k</td>
  <td>105.06k</td>
  <td>8.71k</td>
  <td>0.98</td>
  <td>83518.34k</td>
  <td>83518.34k</td>
  <td>83518.34k</td>
  <td>83518.34k</td>
  <td>101197.32k</td>
  <td>105064.64k</td>
  <td>105064.64k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>89.05k</td>
  <td>100.32k</td>
  <td>12.05k</td>
  <td>0.17</td>
  <td>68593.40k</td>
  <td>68593.40k</td>
  <td>68593.40k</td>
  <td>68593.40k</td>
  <td>98941.95k</td>
  <td>100320.18k</td>
  <td>100320.18k</td>
</tr><tr>
  <td>/count</td>
  <td>96.73k</td>
  <td>106.71k</td>
  <td>8.06k</td>
  <td>0.09</td>
  <td>85139.31k</td>
  <td>85139.31k</td>
  <td>85139.31k</td>
  <td>85139.31k</td>
  <td>105040.87k</td>
  <td>106709.43k</td>
  <td>106709.43k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>92.01k</td>
  <td>102.25k</td>
  <td>9.57k</td>
  <td>0.17</td>
  <td>76927.76k</td>
  <td>76927.76k</td>
  <td>76927.76k</td>
  <td>76927.76k</td>
  <td>99549.00k</td>
  <td>102250.60k</td>
  <td>102250.60k</td>
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
  <td>0.74</td>
  <td>0.54</td>
  <td>3.29</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.90</td>
  <td>1.04</td>
  <td>1.85</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.68</td>
  <td>0.50</td>
  <td>3.31</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.83</td>
  <td>0.91</td>
  <td>1.53</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.69</td>
  <td>0.51</td>
  <td>3.30</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.87</td>
  <td>1.05</td>
  <td>1.54</td>
</tr><tr>
  <td>/count</td>
  <td>0.65</td>
  <td>0.52</td>
  <td>3.31</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.80</td>
  <td>0.92</td>
  <td>1.38</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.70</td>
  <td>0.53</td>
  <td>3.22</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.86</td>
  <td>1.06</td>
  <td>1.47</td>
</tr></table>