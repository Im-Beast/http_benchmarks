# Multiple routes
## Name: cheetah 

### Version: 0.0.6821.4.0
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
    <td>67.50k</td>
    <td>85.23k</td>
    <td>9.13k</td>
    <td>0.71 MiB</td>
    <td>0.94</td>
    <td>0.64</td>
    <td>3.34</td>
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
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>79469.38k</td>
  <td>85231.95k</td>
  <td>85231.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.10</td>
  <td>1.20</td>
  <td>1.56</td>
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
  <td>67.50k</td>
  <td>85.23k</td>
  <td>9.13k</td>
  <td>0.71</td>
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>57809.18k</td>
  <td>79469.38k</td>
  <td>85231.95k</td>
  <td>85231.95k</td>
</tr><tr>
  <td>/random_number</td>
  <td>64.97k</td>
  <td>73.80k</td>
  <td>5.22k</td>
  <td>1.14</td>
  <td>59778.29k</td>
  <td>59778.29k</td>
  <td>59778.29k</td>
  <td>59778.29k</td>
  <td>70263.65k</td>
  <td>73797.05k</td>
  <td>73797.05k</td>
</tr><tr>
  <td>/count</td>
  <td>80.15k</td>
  <td>94.31k</td>
  <td>14.44k</td>
  <td>0.08</td>
  <td>65417.32k</td>
  <td>65417.32k</td>
  <td>65417.32k</td>
  <td>65417.32k</td>
  <td>93384.71k</td>
  <td>94307.77k</td>
  <td>94307.77k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>67.99k</td>
  <td>78.26k</td>
  <td>6.11k</td>
  <td>0.13</td>
  <td>64318.70k</td>
  <td>64318.70k</td>
  <td>64318.70k</td>
  <td>64318.70k</td>
  <td>70882.68k</td>
  <td>78260.71k</td>
  <td>78260.71k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>67.99k</td>
  <td>72.78k</td>
  <td>16.63k</td>
  <td>0.13</td>
  <td>61565.11k</td>
  <td>61565.11k</td>
  <td>61565.11k</td>
  <td>61565.11k</td>
  <td>72502.58k</td>
  <td>72781.54k</td>
  <td>72781.54k</td>
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
  <td>0.94</td>
  <td>0.64</td>
  <td>3.34</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.10</td>
  <td>1.20</td>
  <td>1.56</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.97</td>
  <td>0.61</td>
  <td>3.27</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.06</td>
  <td>1.11</td>
  <td>1.66</td>
</tr><tr>
  <td>/count</td>
  <td>0.78</td>
  <td>0.58</td>
  <td>2.10</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.02</td>
  <td>1.06</td>
  <td>1.47</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.93</td>
  <td>0.61</td>
  <td>3.10</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>1.02</td>
  <td>1.06</td>
  <td>1.45</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.93</td>
  <td>0.57</td>
  <td>2.80</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.01</td>
  <td>1.06</td>
  <td>1.49</td>
</tr></table>