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
    <td>61.29k</td>
    <td>64.74k</td>
    <td>3.55k</td>
    <td>1.07 MiB</td>
    <td>1.04</td>
    <td>0.78</td>
    <td>2.38</td>
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
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>64673.76k</td>
  <td>64737.26k</td>
  <td>64737.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.21</td>
  <td>1.31</td>
  <td>1.50</td>
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
  <td>61.29k</td>
  <td>64.74k</td>
  <td>3.55k</td>
  <td>1.07</td>
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>58478.17k</td>
  <td>64673.76k</td>
  <td>64737.26k</td>
  <td>64737.26k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>67.59k</td>
  <td>71.43k</td>
  <td>3.61k</td>
  <td>0.71</td>
  <td>63377.24k</td>
  <td>63377.24k</td>
  <td>63377.24k</td>
  <td>63377.24k</td>
  <td>71022.79k</td>
  <td>71432.57k</td>
  <td>71432.57k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>69.78k</td>
  <td>74.74k</td>
  <td>4.69k</td>
  <td>0.13</td>
  <td>61209.10k</td>
  <td>61209.10k</td>
  <td>61209.10k</td>
  <td>61209.10k</td>
  <td>74546.73k</td>
  <td>74736.75k</td>
  <td>74736.75k</td>
</tr><tr>
  <td>/count</td>
  <td>67.46k</td>
  <td>70.86k</td>
  <td>3.35k</td>
  <td>0.06</td>
  <td>64418.81k</td>
  <td>64418.81k</td>
  <td>64418.81k</td>
  <td>64418.81k</td>
  <td>70620.54k</td>
  <td>70860.82k</td>
  <td>70860.82k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>69.70k</td>
  <td>74.21k</td>
  <td>5.96k</td>
  <td>0.13</td>
  <td>59184.23k</td>
  <td>59184.23k</td>
  <td>59184.23k</td>
  <td>59184.23k</td>
  <td>73812.86k</td>
  <td>74209.10k</td>
  <td>74209.10k</td>
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
  <td>1.04</td>
  <td>0.78</td>
  <td>2.38</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.21</td>
  <td>1.31</td>
  <td>1.50</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.94</td>
  <td>0.72</td>
  <td>1.95</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.07</td>
  <td>1.16</td>
  <td>1.33</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.91</td>
  <td>0.71</td>
  <td>1.96</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>1.05</td>
  <td>1.14</td>
  <td>1.36</td>
</tr><tr>
  <td>/count</td>
  <td>0.94</td>
  <td>0.53</td>
  <td>1.83</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.07</td>
  <td>1.15</td>
  <td>1.38</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.90</td>
  <td>0.59</td>
  <td>1.56</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>1.03</td>
  <td>1.12</td>
  <td>1.30</td>
</tr></table>