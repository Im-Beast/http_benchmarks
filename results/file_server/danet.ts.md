# File server
## Name: Danet 

### Version: 1.8.0
### Deno version: 1.35.2

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
    <td>3.82k</td>
    <td>11.30k</td>
    <td>1.40k</td>
    <td>20.13 MiB</td>
    <td>16.79</td>
    <td>7.99</td>
    <td>32.13</td>
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
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>5310.59k</td>
  <td>5723.24k</td>
  <td>7394.13k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>20.77</td>
  <td>22.47</td>
  <td>24.50</td>
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
  <td>3.82k</td>
  <td>11.30k</td>
  <td>1.40k</td>
  <td>20.13</td>
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>1940.87k</td>
  <td>5310.59k</td>
  <td>5723.24k</td>
  <td>7394.13k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.12k</td>
  <td>6.53k</td>
  <td>742.25</td>
  <td>376.46</td>
  <td>340.91k</td>
  <td>340.91k</td>
  <td>340.91k</td>
  <td>340.91k</td>
  <td>1880.96k</td>
  <td>2212.35k</td>
  <td>4217.47k</td>
</tr><tr>
  <td>text.txt</td>
  <td>5.85k</td>
  <td>9.03k</td>
  <td>1.27k</td>
  <td>0.28</td>
  <td>4006.36k</td>
  <td>4006.36k</td>
  <td>4006.36k</td>
  <td>4006.36k</td>
  <td>6960.77k</td>
  <td>7145.13k</td>
  <td>8199.81k</td>
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
  <td>16.79</td>
  <td>7.99</td>
  <td>32.13</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>13.57</td>
  <td>20.77</td>
  <td>22.47</td>
  <td>24.50</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>62.02</td>
  <td>7.42</td>
  <td>326.18</td>
  <td>20.69</td>
  <td>20.69</td>
  <td>20.69</td>
  <td>20.69</td>
  <td>113.33</td>
  <td>134.88</td>
  <td>191.91</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.92</td>
  <td>5.54</td>
  <td>24.58</td>
  <td>9.02</td>
  <td>9.02</td>
  <td>9.02</td>
  <td>9.02</td>
  <td>13.93</td>
  <td>15.73</td>
  <td>17.36</td>
</tr></table>