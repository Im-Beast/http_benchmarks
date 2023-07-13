# Name: Vixeny 
  
  ### Version: 0.0.66
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
    <td>13.85k</td>
    <td>15.83k</td>
    <td>1.45k</td>
    <td>73.30 MiB</td>
    <td>4.61</td>
    <td>1.51</td>
    <td>7.69</td>
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
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>15120.22k</td>
  <td>15347.63k</td>
  <td>15828.87k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>5.41</td>
  <td>6.40</td>
  <td>7.09</td>
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
  <td>13.85k</td>
  <td>15.83k</td>
  <td>1.45k</td>
  <td>73.30</td>
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>11241.54k</td>
  <td>15120.22k</td>
  <td>15347.63k</td>
  <td>15828.87k</td>
</tr><tr>
  <td>text.txt</td>
  <td>95.21k</td>
  <td>100.87k</td>
  <td>4.71k</td>
  <td>2.91</td>
  <td>92940.41k</td>
  <td>92940.41k</td>
  <td>92940.41k</td>
  <td>92940.41k</td>
  <td>99900.61k</td>
  <td>100867.41k</td>
  <td>100867.41k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.33k</td>
  <td>5.15k</td>
  <td>277.56</td>
  <td>1.58k</td>
  <td>4066.35k</td>
  <td>4066.35k</td>
  <td>4066.35k</td>
  <td>4066.35k</td>
  <td>4619.63k</td>
  <td>4671.61k</td>
  <td>4870.13k</td>
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
  <td>4.61</td>
  <td>1.51</td>
  <td>7.69</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>5.41</td>
  <td>6.40</td>
  <td>7.09</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.67</td>
  <td>0.56</td>
  <td>1.54</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.76</td>
  <td>0.84</td>
  <td>1.05</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.77</td>
  <td>2.18</td>
  <td>35.26</td>
  <td>13.68</td>
  <td>13.68</td>
  <td>13.68</td>
  <td>13.68</td>
  <td>16.20</td>
  <td>16.45</td>
  <td>17.00</td>
</tr></table>