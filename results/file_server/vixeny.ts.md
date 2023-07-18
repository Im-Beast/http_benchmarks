# File server
## Name: Vixeny 

### Version: 0.0.675
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
    <td>13.43k</td>
    <td>15.69k</td>
    <td>1.69k</td>
    <td>71.06 MiB</td>
    <td>4.75</td>
    <td>1.69</td>
    <td>8.69</td>
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
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>15188.33k</td>
  <td>15284.97k</td>
  <td>15689.58k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>6.06</td>
  <td>6.78</td>
  <td>7.71</td>
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
  <td>13.43k</td>
  <td>15.69k</td>
  <td>1.69k</td>
  <td>71.06</td>
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>10627.08k</td>
  <td>15188.33k</td>
  <td>15284.97k</td>
  <td>15689.58k</td>
</tr><tr>
  <td>text.txt</td>
  <td>89.31k</td>
  <td>98.64k</td>
  <td>7.05k</td>
  <td>2.77</td>
  <td>80524.85k</td>
  <td>80524.85k</td>
  <td>80524.85k</td>
  <td>80524.85k</td>
  <td>96451.71k</td>
  <td>98644.93k</td>
  <td>98644.93k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.11k</td>
  <td>5.20k</td>
  <td>535.72</td>
  <td>1.50k</td>
  <td>3260.72k</td>
  <td>3260.72k</td>
  <td>3260.72k</td>
  <td>3260.72k</td>
  <td>4725.70k</td>
  <td>4806.30k</td>
  <td>5166.51k</td>
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
  <td>4.75</td>
  <td>1.69</td>
  <td>8.69</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>3.96</td>
  <td>6.06</td>
  <td>6.78</td>
  <td>7.71</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.70</td>
  <td>0.56</td>
  <td>2.19</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.86</td>
  <td>0.93</td>
  <td>1.56</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.57</td>
  <td>3.16</td>
  <td>42.61</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>17.27</td>
  <td>17.76</td>
  <td>18.66</td>
</tr></table>