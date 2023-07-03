# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>4.56k</td>
    <td>11.22k</td>
    <td>1.64k</td>
    <td>23.83 MiB</td>
    <td>14.19</td>
    <td>7.26</td>
    <td>23.67</td>
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
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>6356.17k</td>
  <td>6721.93k</td>
  <td>10451.60k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>17.12</td>
  <td>17.58</td>
  <td>18.51</td>
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
  <td>4.56k</td>
  <td>11.22k</td>
  <td>1.64k</td>
  <td>23.83</td>
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>2286.35k</td>
  <td>6356.17k</td>
  <td>6721.93k</td>
  <td>10451.60k</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.86k</td>
  <td>14.12k</td>
  <td>2.14k</td>
  <td>0.42</td>
  <td>6910.92k</td>
  <td>6910.92k</td>
  <td>6910.92k</td>
  <td>6910.92k</td>
  <td>10275.08k</td>
  <td>11403.32k</td>
  <td>12845.01k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.39k</td>
  <td>7.12k</td>
  <td>747.14</td>
  <td>489.78</td>
  <td>520.92k</td>
  <td>520.92k</td>
  <td>520.92k</td>
  <td>520.92k</td>
  <td>2257.10k</td>
  <td>2569.06k</td>
  <td>3736.26k</td>
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
  <td>14.19</td>
  <td>7.26</td>
  <td>23.67</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>11.71</td>
  <td>17.12</td>
  <td>17.58</td>
  <td>18.51</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.27</td>
  <td>3.06</td>
  <td>12.23</td>
  <td>6.16</td>
  <td>6.16</td>
  <td>6.16</td>
  <td>6.16</td>
  <td>8.56</td>
  <td>9.23</td>
  <td>11.44</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>47.71</td>
  <td>8.04</td>
  <td>291.62</td>
  <td>20.90</td>
  <td>20.90</td>
  <td>20.90</td>
  <td>20.90</td>
  <td>98.65</td>
  <td>130.36</td>
  <td>182.73</td>
</tr></table>