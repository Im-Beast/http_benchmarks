# Name: Vixeny 
  
  ### Version: 0.0.63
  ### Deno version: 1.34.3

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
    <td>13.21k</td>
    <td>15.01k</td>
    <td>1.57k</td>
    <td>69.84 MiB</td>
    <td>4.83</td>
    <td>1.48</td>
    <td>8.66</td>
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
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>14633.71k</td>
  <td>14797.86k</td>
  <td>15010.13k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>6.33</td>
  <td>6.89</td>
  <td>7.70</td>
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
  <td>lorem-20.txt</td>
  <td>13.21k</td>
  <td>15.01k</td>
  <td>1.57k</td>
  <td>69.84</td>
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>10606.49k</td>
  <td>14633.71k</td>
  <td>14797.86k</td>
  <td>15010.13k</td>
</tr><tr>
  <td>text.txt</td>
  <td>89.14k</td>
  <td>94.81k</td>
  <td>6.81k</td>
  <td>2.74</td>
  <td>82258.32k</td>
  <td>82258.32k</td>
  <td>82258.32k</td>
  <td>82258.32k</td>
  <td>94015.42k</td>
  <td>94812.30k</td>
  <td>94812.30k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.52k</td>
  <td>4.93k</td>
  <td>447.63</td>
  <td>1.28k</td>
  <td>3001.81k</td>
  <td>3001.81k</td>
  <td>3001.81k</td>
  <td>3001.81k</td>
  <td>4035.75k</td>
  <td>4191.10k</td>
  <td>4613.92k</td>
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
  <td>lorem-20.txt</td>
  <td>4.83</td>
  <td>1.48</td>
  <td>8.66</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>6.33</td>
  <td>6.89</td>
  <td>7.70</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.71</td>
  <td>0.58</td>
  <td>1.94</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.85</td>
  <td>0.93</td>
  <td>1.11</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>18.21</td>
  <td>1.76</td>
  <td>27.86</td>
  <td>16.44</td>
  <td>16.44</td>
  <td>16.44</td>
  <td>16.44</td>
  <td>20.83</td>
  <td>21.53</td>
  <td>22.31</td>
</tr></table>