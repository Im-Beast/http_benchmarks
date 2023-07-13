# Name: Cheetah 
  
  ### Version: 1.0.0-canary.0
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
    <td>65.04k</td>
    <td>67.16k</td>
    <td>3.25k</td>
    <td>1.14 MiB</td>
    <td>0.97</td>
    <td>0.77</td>
    <td>1.93</td>
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
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>66930.23k</td>
  <td>67155.20k</td>
  <td>67155.20k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.11</td>
  <td>1.13</td>
  <td>1.27</td>
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
  <td>65.04k</td>
  <td>67.16k</td>
  <td>3.25k</td>
  <td>1.14</td>
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>59160.69k</td>
  <td>66930.23k</td>
  <td>67155.20k</td>
  <td>67155.20k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>69.01k</td>
  <td>70.87k</td>
  <td>2.68k</td>
  <td>0.72</td>
  <td>66254.20k</td>
  <td>66254.20k</td>
  <td>66254.20k</td>
  <td>66254.20k</td>
  <td>70765.83k</td>
  <td>70866.61k</td>
  <td>70866.61k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>72.54k</td>
  <td>74.57k</td>
  <td>2.74k</td>
  <td>0.14</td>
  <td>70559.94k</td>
  <td>70559.94k</td>
  <td>70559.94k</td>
  <td>70559.94k</td>
  <td>74353.89k</td>
  <td>74572.80k</td>
  <td>74572.80k</td>
</tr><tr>
  <td>/count</td>
  <td>69.19k</td>
  <td>71.15k</td>
  <td>2.47k</td>
  <td>0.07</td>
  <td>66586.11k</td>
  <td>66586.11k</td>
  <td>66586.11k</td>
  <td>66586.11k</td>
  <td>70717.49k</td>
  <td>71153.05k</td>
  <td>71153.05k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>72.85k</td>
  <td>74.52k</td>
  <td>3.19k</td>
  <td>0.14</td>
  <td>71807.17k</td>
  <td>71807.17k</td>
  <td>71807.17k</td>
  <td>71807.17k</td>
  <td>74474.00k</td>
  <td>74522.77k</td>
  <td>74522.77k</td>
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
  <td>0.97</td>
  <td>0.77</td>
  <td>1.93</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.11</td>
  <td>1.13</td>
  <td>1.27</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.92</td>
  <td>0.73</td>
  <td>1.85</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>1.04</td>
  <td>1.06</td>
  <td>1.13</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.88</td>
  <td>0.65</td>
  <td>1.80</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.99</td>
  <td>1.01</td>
  <td>1.07</td>
</tr><tr>
  <td>/count</td>
  <td>0.92</td>
  <td>0.56</td>
  <td>1.65</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>1.04</td>
  <td>1.05</td>
  <td>1.10</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.87</td>
  <td>0.70</td>
  <td>1.68</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.99</td>
  <td>1.01</td>
  <td>1.08</td>
</tr></table>