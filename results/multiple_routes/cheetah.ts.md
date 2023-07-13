# Name: cheetah 
  
  ### Version: 1.0.0-canary.1
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
    <td>61.35k</td>
    <td>64.66k</td>
    <td>3.19k</td>
    <td>1.09 MiB</td>
    <td>1.02</td>
    <td>0.76</td>
    <td>2.10</td>
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
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>64380.72k</td>
  <td>64656.00k</td>
  <td>64656.00k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.15</td>
  <td>1.17</td>
  <td>1.30</td>
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
  <td>61.35k</td>
  <td>64.66k</td>
  <td>3.19k</td>
  <td>1.09</td>
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>55157.39k</td>
  <td>64380.72k</td>
  <td>64656.00k</td>
  <td>64656.00k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>65.59k</td>
  <td>67.65k</td>
  <td>2.81k</td>
  <td>0.69</td>
  <td>59188.95k</td>
  <td>59188.95k</td>
  <td>59188.95k</td>
  <td>59188.95k</td>
  <td>67337.87k</td>
  <td>67654.23k</td>
  <td>67654.23k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>75.04k</td>
  <td>77.71k</td>
  <td>4.12k</td>
  <td>0.14</td>
  <td>67430.67k</td>
  <td>67430.67k</td>
  <td>67430.67k</td>
  <td>67430.67k</td>
  <td>77340.25k</td>
  <td>77708.34k</td>
  <td>77708.34k</td>
</tr><tr>
  <td>/count</td>
  <td>65.53k</td>
  <td>67.18k</td>
  <td>2.62k</td>
  <td>0.06</td>
  <td>60037.91k</td>
  <td>60037.91k</td>
  <td>60037.91k</td>
  <td>60037.91k</td>
  <td>66896.69k</td>
  <td>67175.66k</td>
  <td>67175.66k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>75.40k</td>
  <td>77.82k</td>
  <td>4.20k</td>
  <td>0.15</td>
  <td>66817.36k</td>
  <td>66817.36k</td>
  <td>66817.36k</td>
  <td>66817.36k</td>
  <td>77542.03k</td>
  <td>77818.23k</td>
  <td>77818.23k</td>
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
  <td>1.02</td>
  <td>0.76</td>
  <td>2.10</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.15</td>
  <td>1.17</td>
  <td>1.30</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.96</td>
  <td>0.65</td>
  <td>1.79</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.09</td>
  <td>1.10</td>
  <td>1.15</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.84</td>
  <td>0.71</td>
  <td>1.70</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.95</td>
  <td>0.98</td>
  <td>1.07</td>
</tr><tr>
  <td>/count</td>
  <td>0.97</td>
  <td>0.72</td>
  <td>1.83</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.09</td>
  <td>1.11</td>
  <td>1.15</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.84</td>
  <td>0.69</td>
  <td>1.67</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.95</td>
  <td>0.97</td>
  <td>1.02</td>
</tr></table>