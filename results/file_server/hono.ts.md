# Name: Hono 
  
  ### Version: 3.2.6
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
    <td>11.45k</td>
    <td>13.34k</td>
    <td>1.29k</td>
    <td>60.59 MiB</td>
    <td>5.57</td>
    <td>1.66</td>
    <td>9.54</td>
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
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>12520.93k</td>
  <td>12701.00k</td>
  <td>13340.85k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>6.71</td>
  <td>7.72</td>
  <td>8.77</td>
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
  <td>11.45k</td>
  <td>13.34k</td>
  <td>1.29k</td>
  <td>60.59</td>
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>9247.89k</td>
  <td>12520.93k</td>
  <td>12701.00k</td>
  <td>13340.85k</td>
</tr><tr>
  <td>text.txt</td>
  <td>61.33k</td>
  <td>68.89k</td>
  <td>6.36k</td>
  <td>1.88</td>
  <td>52713.05k</td>
  <td>52713.05k</td>
  <td>52713.05k</td>
  <td>52713.05k</td>
  <td>68122.87k</td>
  <td>68890.52k</td>
  <td>68890.52k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.35k</td>
  <td>5.04k</td>
  <td>514.12</td>
  <td>1.22k</td>
  <td>2649.79k</td>
  <td>2649.79k</td>
  <td>2649.79k</td>
  <td>2649.79k</td>
  <td>4007.26k</td>
  <td>4369.73k</td>
  <td>4767.65k</td>
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
  <td>5.57</td>
  <td>1.66</td>
  <td>9.54</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>4.74</td>
  <td>6.71</td>
  <td>7.72</td>
  <td>8.77</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.03</td>
  <td>0.76</td>
  <td>3.90</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.34</td>
  <td>1.59</td>
  <td>2.33</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>19.18</td>
  <td>1.73</td>
  <td>25.17</td>
  <td>17.40</td>
  <td>17.40</td>
  <td>17.40</td>
  <td>17.40</td>
  <td>21.27</td>
  <td>21.98</td>
  <td>22.92</td>
</tr></table>