# Name: Fastro 
  
  ### Version: 0.70.5
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
    <td>82.64k</td>
    <td>92.78k</td>
    <td>9.37k</td>
    <td>1.45 MiB</td>
    <td>0.77</td>
    <td>0.38</td>
    <td>3.70</td>
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
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>91955.13k</td>
  <td>92776.89k</td>
  <td>92776.89k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.93</td>
  <td>1.23</td>
  <td>1.61</td>
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
  <td>82.64k</td>
  <td>92.78k</td>
  <td>9.37k</td>
  <td>1.45</td>
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>69545.57k</td>
  <td>91955.13k</td>
  <td>92776.89k</td>
  <td>92776.89k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>86.50k</td>
  <td>98.22k</td>
  <td>9.57k</td>
  <td>0.91</td>
  <td>75576.49k</td>
  <td>75576.49k</td>
  <td>75576.49k</td>
  <td>75576.49k</td>
  <td>96478.06k</td>
  <td>98215.38k</td>
  <td>98215.38k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>82.11k</td>
  <td>93.52k</td>
  <td>10.73k</td>
  <td>0.16</td>
  <td>65056.85k</td>
  <td>65056.85k</td>
  <td>65056.85k</td>
  <td>65056.85k</td>
  <td>89574.46k</td>
  <td>93520.35k</td>
  <td>93520.35k</td>
</tr><tr>
  <td>/count</td>
  <td>87.25k</td>
  <td>98.71k</td>
  <td>11.89k</td>
  <td>0.08</td>
  <td>79242.68k</td>
  <td>79242.68k</td>
  <td>79242.68k</td>
  <td>79242.68k</td>
  <td>95279.44k</td>
  <td>98714.15k</td>
  <td>98714.15k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>84.77k</td>
  <td>94.81k</td>
  <td>9.77k</td>
  <td>0.16</td>
  <td>70830.26k</td>
  <td>70830.26k</td>
  <td>70830.26k</td>
  <td>70830.26k</td>
  <td>92682.82k</td>
  <td>94809.53k</td>
  <td>94809.53k</td>
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
  <td>0.77</td>
  <td>0.38</td>
  <td>3.70</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.93</td>
  <td>1.23</td>
  <td>1.61</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.73</td>
  <td>0.46</td>
  <td>3.52</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.88</td>
  <td>1.15</td>
  <td>1.62</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.76</td>
  <td>0.50</td>
  <td>3.47</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.94</td>
  <td>1.15</td>
  <td>1.77</td>
</tr><tr>
  <td>/count</td>
  <td>0.72</td>
  <td>0.39</td>
  <td>3.39</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.87</td>
  <td>1.15</td>
  <td>1.57</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.75</td>
  <td>0.45</td>
  <td>3.33</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.92</td>
  <td>1.17</td>
  <td>1.54</td>
</tr></table>