# Name: std serve 
  
  ### Version: 0.194.0
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
    <td>87.22k</td>
    <td>95.78k</td>
    <td>7.06k</td>
    <td>1.52 MiB</td>
    <td>0.73</td>
    <td>0.49</td>
    <td>3.01</td>
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
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>94385.14k</td>
  <td>95775.82k</td>
  <td>95775.82k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.89</td>
  <td>0.95</td>
  <td>1.67</td>
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
  <td>87.22k</td>
  <td>95.78k</td>
  <td>7.06k</td>
  <td>1.52</td>
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>73308.39k</td>
  <td>94385.14k</td>
  <td>95775.82k</td>
  <td>95775.82k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>92.47k</td>
  <td>101.41k</td>
  <td>8.80k</td>
  <td>0.97</td>
  <td>77474.15k</td>
  <td>77474.15k</td>
  <td>77474.15k</td>
  <td>77474.15k</td>
  <td>100095.99k</td>
  <td>101407.50k</td>
  <td>101407.50k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>89.32k</td>
  <td>96.41k</td>
  <td>8.25k</td>
  <td>0.17</td>
  <td>80169.88k</td>
  <td>80169.88k</td>
  <td>80169.88k</td>
  <td>80169.88k</td>
  <td>95975.32k</td>
  <td>96409.19k</td>
  <td>96409.19k</td>
</tr><tr>
  <td>/count</td>
  <td>93.01k</td>
  <td>103.29k</td>
  <td>8.46k</td>
  <td>0.09</td>
  <td>78848.06k</td>
  <td>78848.06k</td>
  <td>78848.06k</td>
  <td>78848.06k</td>
  <td>101913.68k</td>
  <td>103285.69k</td>
  <td>103285.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>88.39k</td>
  <td>98.23k</td>
  <td>7.75k</td>
  <td>0.17</td>
  <td>75309.75k</td>
  <td>75309.75k</td>
  <td>75309.75k</td>
  <td>75309.75k</td>
  <td>97224.37k</td>
  <td>98228.04k</td>
  <td>98228.04k</td>
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
  <td>0.73</td>
  <td>0.49</td>
  <td>3.01</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.89</td>
  <td>0.95</td>
  <td>1.67</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.69</td>
  <td>0.37</td>
  <td>2.93</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.83</td>
  <td>0.91</td>
  <td>1.54</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.71</td>
  <td>0.49</td>
  <td>2.99</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.88</td>
  <td>1.08</td>
  <td>1.48</td>
</tr><tr>
  <td>/count</td>
  <td>0.68</td>
  <td>0.38</td>
  <td>3.08</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.81</td>
  <td>0.89</td>
  <td>1.61</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.71</td>
  <td>0.49</td>
  <td>2.98</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.87</td>
  <td>1.07</td>
  <td>1.50</td>
</tr></table>