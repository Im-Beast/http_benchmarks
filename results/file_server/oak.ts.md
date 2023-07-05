# Name: Oak 
  
  ### Version: 12.5.0
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
    <td>5.33k</td>
    <td>13.46k</td>
    <td>2.74k</td>
    <td>26.39 MiB</td>
    <td>12.81</td>
    <td>4.60</td>
    <td>20.01</td>
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
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>8642.42k</td>
  <td>9938.55k</td>
  <td>12128.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>15.40</td>
  <td>15.77</td>
  <td>16.42</td>
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
  <td>5.33k</td>
  <td>13.46k</td>
  <td>2.74k</td>
  <td>26.39</td>
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>1367.86k</td>
  <td>8642.42k</td>
  <td>9938.55k</td>
  <td>12128.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.48k</td>
  <td>14.70k</td>
  <td>1.70k</td>
  <td>0.45</td>
  <td>6892.08k</td>
  <td>6892.08k</td>
  <td>6892.08k</td>
  <td>6892.08k</td>
  <td>11094.88k</td>
  <td>12318.41k</td>
  <td>13868.14k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.52k</td>
  <td>7.28k</td>
  <td>689.56</td>
  <td>547.37</td>
  <td>736.99k</td>
  <td>736.99k</td>
  <td>736.99k</td>
  <td>736.99k</td>
  <td>2271.03k</td>
  <td>2587.04k</td>
  <td>3480.58k</td>
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
  <td>12.81</td>
  <td>4.60</td>
  <td>20.01</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>9.98</td>
  <td>15.40</td>
  <td>15.77</td>
  <td>16.42</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.81</td>
  <td>4.01</td>
  <td>10.66</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>7.90</td>
  <td>8.30</td>
  <td>10.18</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.64</td>
  <td>5.22</td>
  <td>284.61</td>
  <td>19.86</td>
  <td>19.86</td>
  <td>19.86</td>
  <td>19.86</td>
  <td>83.08</td>
  <td>116.22</td>
  <td>171.77</td>
</tr></table>