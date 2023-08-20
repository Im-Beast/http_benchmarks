# File server
## Name: Danet 

### Version: 1.8.0
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
    <td>4.59k</td>
    <td>7.28k</td>
    <td>1.32k</td>
    <td>24.24 MiB</td>
    <td>13.93</td>
    <td>8.35</td>
    <td>22.01</td>
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
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>5873.32k</td>
  <td>6223.24k</td>
  <td>7178.44k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>16.40</td>
  <td>16.62</td>
  <td>17.10</td>
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
  <td>4.59k</td>
  <td>7.28k</td>
  <td>1.32k</td>
  <td>24.24</td>
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>2651.55k</td>
  <td>5873.32k</td>
  <td>6223.24k</td>
  <td>7178.44k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.45k</td>
  <td>7.29k</td>
  <td>779.76</td>
  <td>508.74</td>
  <td>553.61k</td>
  <td>553.61k</td>
  <td>553.61k</td>
  <td>553.61k</td>
  <td>2248.72k</td>
  <td>2542.36k</td>
  <td>3710.32k</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.85k</td>
  <td>13.46k</td>
  <td>1.45k</td>
  <td>0.42</td>
  <td>7845.61k</td>
  <td>7845.61k</td>
  <td>7845.61k</td>
  <td>7845.61k</td>
  <td>9943.48k</td>
  <td>10204.56k</td>
  <td>13038.57k</td>
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
  <td>13.93</td>
  <td>8.35</td>
  <td>22.01</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>12.12</td>
  <td>16.40</td>
  <td>16.62</td>
  <td>17.10</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>45.89</td>
  <td>8.88</td>
  <td>249.31</td>
  <td>19.59</td>
  <td>19.59</td>
  <td>19.59</td>
  <td>19.59</td>
  <td>97.12</td>
  <td>124.91</td>
  <td>175.46</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.26</td>
  <td>3.47</td>
  <td>11.69</td>
  <td>6.32</td>
  <td>6.32</td>
  <td>6.32</td>
  <td>6.32</td>
  <td>8.04</td>
  <td>8.25</td>
  <td>11.18</td>
</tr></table>