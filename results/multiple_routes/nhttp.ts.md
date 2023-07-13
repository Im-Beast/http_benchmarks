# Name: NHttp 
  
  ### Version: 1.2.24
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
    <td>91.35k</td>
    <td>100.48k</td>
    <td>9.45k</td>
    <td>1.60 MiB</td>
    <td>0.69</td>
    <td>0.54</td>
    <td>3.21</td>
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
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>97909.59k</td>
  <td>100478.05k</td>
  <td>100478.05k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.85</td>
  <td>0.94</td>
  <td>1.57</td>
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
  <td>91.35k</td>
  <td>100.48k</td>
  <td>9.45k</td>
  <td>1.60</td>
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>78465.40k</td>
  <td>97909.59k</td>
  <td>100478.05k</td>
  <td>100478.05k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>94.77k</td>
  <td>105.33k</td>
  <td>10.25k</td>
  <td>0.99</td>
  <td>82959.75k</td>
  <td>82959.75k</td>
  <td>82959.75k</td>
  <td>82959.75k</td>
  <td>102689.61k</td>
  <td>105327.20k</td>
  <td>105327.20k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>93.01k</td>
  <td>102.43k</td>
  <td>9.11k</td>
  <td>0.18</td>
  <td>83107.13k</td>
  <td>83107.13k</td>
  <td>83107.13k</td>
  <td>83107.13k</td>
  <td>99830.78k</td>
  <td>102426.35k</td>
  <td>102426.35k</td>
</tr><tr>
  <td>/count</td>
  <td>97.27k</td>
  <td>107.53k</td>
  <td>9.51k</td>
  <td>0.09</td>
  <td>89114.44k</td>
  <td>89114.44k</td>
  <td>89114.44k</td>
  <td>89114.44k</td>
  <td>105372.53k</td>
  <td>107533.83k</td>
  <td>107533.83k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>91.20k</td>
  <td>101.22k</td>
  <td>9.48k</td>
  <td>0.17</td>
  <td>77562.69k</td>
  <td>77562.69k</td>
  <td>77562.69k</td>
  <td>77562.69k</td>
  <td>99768.04k</td>
  <td>101224.40k</td>
  <td>101224.40k</td>
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
  <td>0.69</td>
  <td>0.54</td>
  <td>3.21</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.85</td>
  <td>0.94</td>
  <td>1.57</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.67</td>
  <td>0.52</td>
  <td>3.27</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.83</td>
  <td>0.93</td>
  <td>1.52</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.68</td>
  <td>0.50</td>
  <td>3.10</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.85</td>
  <td>1.01</td>
  <td>1.47</td>
</tr><tr>
  <td>/count</td>
  <td>0.65</td>
  <td>0.50</td>
  <td>3.25</td>
  <td>0.56</td>
  <td>0.56</td>
  <td>0.56</td>
  <td>0.56</td>
  <td>0.80</td>
  <td>0.87</td>
  <td>1.43</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.69</td>
  <td>0.53</td>
  <td>3.15</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.86</td>
  <td>1.01</td>
  <td>1.53</td>
</tr></table>