# Name: Cheetah 
  
  ### Version: 0.13.0
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
    <td>64.10k</td>
    <td>65.93k</td>
    <td>4.53k</td>
    <td>1.12 MiB</td>
    <td>0.99</td>
    <td>0.70</td>
    <td>1.86</td>
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
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>65817.92k</td>
  <td>65929.57k</td>
  <td>65929.57k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.13</td>
  <td>1.15</td>
  <td>1.22</td>
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
  <td>64.10k</td>
  <td>65.93k</td>
  <td>4.53k</td>
  <td>1.12</td>
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>55587.88k</td>
  <td>65817.92k</td>
  <td>65929.57k</td>
  <td>65929.57k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>69.51k</td>
  <td>71.55k</td>
  <td>3.14k</td>
  <td>0.73</td>
  <td>65841.89k</td>
  <td>65841.89k</td>
  <td>65841.89k</td>
  <td>65841.89k</td>
  <td>71228.52k</td>
  <td>71550.85k</td>
  <td>71550.85k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>73.24k</td>
  <td>74.85k</td>
  <td>3.09k</td>
  <td>0.14</td>
  <td>69720.25k</td>
  <td>69720.25k</td>
  <td>69720.25k</td>
  <td>69720.25k</td>
  <td>74718.14k</td>
  <td>74854.59k</td>
  <td>74854.59k</td>
</tr><tr>
  <td>/count</td>
  <td>68.97k</td>
  <td>71.15k</td>
  <td>2.77k</td>
  <td>0.07</td>
  <td>65436.98k</td>
  <td>65436.98k</td>
  <td>65436.98k</td>
  <td>65436.98k</td>
  <td>71047.79k</td>
  <td>71153.93k</td>
  <td>71153.93k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>73.19k</td>
  <td>75.06k</td>
  <td>2.93k</td>
  <td>0.14</td>
  <td>71410.78k</td>
  <td>71410.78k</td>
  <td>71410.78k</td>
  <td>71410.78k</td>
  <td>74772.90k</td>
  <td>75056.50k</td>
  <td>75056.50k</td>
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
  <td>0.99</td>
  <td>0.70</td>
  <td>1.86</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.13</td>
  <td>1.15</td>
  <td>1.22</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.91</td>
  <td>0.55</td>
  <td>1.77</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.03</td>
  <td>1.05</td>
  <td>1.10</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.87</td>
  <td>0.59</td>
  <td>1.76</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.98</td>
  <td>1.00</td>
  <td>1.04</td>
</tr><tr>
  <td>/count</td>
  <td>0.92</td>
  <td>0.55</td>
  <td>1.74</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>0.83</td>
  <td>1.04</td>
  <td>1.06</td>
  <td>1.16</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.87</td>
  <td>0.60</td>
  <td>1.49</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.78</td>
  <td>0.98</td>
  <td>1.00</td>
  <td>1.04</td>
</tr></table>