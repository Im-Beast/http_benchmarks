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
    <td>79.07k</td>
    <td>93.82k</td>
    <td>13.71k</td>
    <td>1.38 MiB</td>
    <td>0.80</td>
    <td>0.47</td>
    <td>3.46</td>
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
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>88102.32k</td>
  <td>93824.00k</td>
  <td>93824.00k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.98</td>
  <td>1.23</td>
  <td>2.14</td>
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
  <td>79.07k</td>
  <td>93.82k</td>
  <td>13.71k</td>
  <td>1.38</td>
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>63215.03k</td>
  <td>88102.32k</td>
  <td>93824.00k</td>
  <td>93824.00k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>87.07k</td>
  <td>99.03k</td>
  <td>10.06k</td>
  <td>0.92</td>
  <td>73105.29k</td>
  <td>73105.29k</td>
  <td>73105.29k</td>
  <td>73105.29k</td>
  <td>96405.24k</td>
  <td>99033.85k</td>
  <td>99033.85k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>84.64k</td>
  <td>97.34k</td>
  <td>8.05k</td>
  <td>0.16</td>
  <td>71251.95k</td>
  <td>71251.95k</td>
  <td>71251.95k</td>
  <td>71251.95k</td>
  <td>96459.90k</td>
  <td>97343.09k</td>
  <td>97343.09k</td>
</tr><tr>
  <td>/count</td>
  <td>89.39k</td>
  <td>103.89k</td>
  <td>11.29k</td>
  <td>0.09</td>
  <td>79211.68k</td>
  <td>79211.68k</td>
  <td>79211.68k</td>
  <td>79211.68k</td>
  <td>98547.21k</td>
  <td>103887.13k</td>
  <td>103887.13k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>82.18k</td>
  <td>95.83k</td>
  <td>8.89k</td>
  <td>0.16</td>
  <td>70682.14k</td>
  <td>70682.14k</td>
  <td>70682.14k</td>
  <td>70682.14k</td>
  <td>91123.41k</td>
  <td>95828.88k</td>
  <td>95828.88k</td>
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
  <td>0.80</td>
  <td>0.47</td>
  <td>3.46</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.98</td>
  <td>1.23</td>
  <td>2.14</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.73</td>
  <td>0.39</td>
  <td>2.91</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.89</td>
  <td>1.08</td>
  <td>1.58</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.75</td>
  <td>0.40</td>
  <td>3.20</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.93</td>
  <td>1.13</td>
  <td>1.80</td>
</tr><tr>
  <td>/count</td>
  <td>0.70</td>
  <td>0.38</td>
  <td>3.65</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.85</td>
  <td>1.12</td>
  <td>1.72</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.77</td>
  <td>0.38</td>
  <td>3.40</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.98</td>
  <td>1.17</td>
  <td>1.84</td>
</tr></table>