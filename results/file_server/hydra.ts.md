# File server
## Name: Hydra 

### Version: 0.1.1
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
    <td>12.28k</td>
    <td>14.42k</td>
    <td>1.28k</td>
    <td>65.06 MiB</td>
    <td>5.19</td>
    <td>1.63</td>
    <td>15.20</td>
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
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>14006.59k</td>
  <td>14086.87k</td>
  <td>14419.79k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>6.06</td>
  <td>6.49</td>
  <td>7.95</td>
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
  <td>12.28k</td>
  <td>14.42k</td>
  <td>1.28k</td>
  <td>65.06</td>
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>10516.52k</td>
  <td>14006.59k</td>
  <td>14086.87k</td>
  <td>14419.79k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.76k</td>
  <td>5.62k</td>
  <td>910.30</td>
  <td>1.37k</td>
  <td>2521.70k</td>
  <td>2521.70k</td>
  <td>2521.70k</td>
  <td>2521.70k</td>
  <td>4903.21k</td>
  <td>5147.61k</td>
  <td>5468.34k</td>
</tr><tr>
  <td>text.txt</td>
  <td>53.07k</td>
  <td>66.15k</td>
  <td>8.65k</td>
  <td>1.62</td>
  <td>48573.48k</td>
  <td>48573.48k</td>
  <td>48573.48k</td>
  <td>48573.48k</td>
  <td>64328.21k</td>
  <td>66151.25k</td>
  <td>66151.25k</td>
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
  <td>5.19</td>
  <td>1.63</td>
  <td>15.20</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>4.38</td>
  <td>6.06</td>
  <td>6.49</td>
  <td>7.95</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>16.96</td>
  <td>2.34</td>
  <td>38.10</td>
  <td>13.71</td>
  <td>13.71</td>
  <td>13.71</td>
  <td>13.71</td>
  <td>20.70</td>
  <td>22.63</td>
  <td>24.58</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.20</td>
  <td>0.48</td>
  <td>20.01</td>
  <td>0.94</td>
  <td>0.94</td>
  <td>0.94</td>
  <td>0.94</td>
  <td>1.39</td>
  <td>1.52</td>
  <td>2.02</td>
</tr></table>