# Name: Fastro 
  
  ### Version: 0.70.5
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
    <td>75.49k</td>
    <td>89.02k</td>
    <td>9.04k</td>
    <td>1.34 MiB</td>
    <td>0.83</td>
    <td>0.48</td>
    <td>3.64</td>
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
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>87993.14k</td>
  <td>89016.72k</td>
  <td>89016.72k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>1.06</td>
  <td>1.36</td>
  <td>1.78</td>
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
  <td>75.49k</td>
  <td>89.02k</td>
  <td>9.04k</td>
  <td>1.34</td>
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>60741.57k</td>
  <td>87993.14k</td>
  <td>89016.72k</td>
  <td>89016.72k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>81.85k</td>
  <td>95.95k</td>
  <td>10.99k</td>
  <td>0.86</td>
  <td>63364.85k</td>
  <td>63364.85k</td>
  <td>63364.85k</td>
  <td>63364.85k</td>
  <td>91738.83k</td>
  <td>95948.74k</td>
  <td>95948.74k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>75.23k</td>
  <td>89.03k</td>
  <td>9.92k</td>
  <td>0.14</td>
  <td>61855.05k</td>
  <td>61855.05k</td>
  <td>61855.05k</td>
  <td>61855.05k</td>
  <td>85020.25k</td>
  <td>89025.00k</td>
  <td>89025.00k</td>
</tr><tr>
  <td>/count</td>
  <td>83.06k</td>
  <td>97.14k</td>
  <td>10.11k</td>
  <td>0.08</td>
  <td>69762.29k</td>
  <td>69762.29k</td>
  <td>69762.29k</td>
  <td>69762.29k</td>
  <td>95464.02k</td>
  <td>97140.47k</td>
  <td>97140.47k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>81.01k</td>
  <td>92.23k</td>
  <td>9.84k</td>
  <td>0.15</td>
  <td>64317.32k</td>
  <td>64317.32k</td>
  <td>64317.32k</td>
  <td>64317.32k</td>
  <td>91156.40k</td>
  <td>92230.24k</td>
  <td>92230.24k</td>
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
  <td>0.83</td>
  <td>0.48</td>
  <td>3.64</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>1.06</td>
  <td>1.36</td>
  <td>1.78</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.77</td>
  <td>0.50</td>
  <td>4.02</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.98</td>
  <td>1.27</td>
  <td>1.73</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.84</td>
  <td>0.47</td>
  <td>3.70</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>1.11</td>
  <td>1.31</td>
  <td>1.90</td>
</tr><tr>
  <td>/count</td>
  <td>0.76</td>
  <td>0.52</td>
  <td>3.39</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.93</td>
  <td>1.19</td>
  <td>1.88</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.78</td>
  <td>0.39</td>
  <td>3.33</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.99</td>
  <td>1.22</td>
  <td>1.92</td>
</tr></table>