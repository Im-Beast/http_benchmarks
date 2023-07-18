# File server
## Name: Oak 

### Version: 12.6.0
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
    <td>5.66k</td>
    <td>44.70k</td>
    <td>3.82k</td>
    <td>28.45 MiB</td>
    <td>11.88</td>
    <td>5.73</td>
    <td>17.27</td>
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
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>9850.71k</td>
  <td>10821.21k</td>
  <td>14548.84k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>14.48</td>
  <td>14.98</td>
  <td>15.81</td>
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
  <td>5.66k</td>
  <td>44.70k</td>
  <td>3.82k</td>
  <td>28.45</td>
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>1194.11k</td>
  <td>9850.71k</td>
  <td>10821.21k</td>
  <td>14548.84k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.47k</td>
  <td>15.29k</td>
  <td>2.12k</td>
  <td>0.43</td>
  <td>6761.13k</td>
  <td>6761.13k</td>
  <td>6761.13k</td>
  <td>6761.13k</td>
  <td>11922.38k</td>
  <td>13223.78k</td>
  <td>14426.37k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.45k</td>
  <td>6.58k</td>
  <td>690.62</td>
  <td>516.80</td>
  <td>682.01k</td>
  <td>682.01k</td>
  <td>682.01k</td>
  <td>682.01k</td>
  <td>2219.28k</td>
  <td>2488.10k</td>
  <td>3587.01k</td>
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
  <td>11.88</td>
  <td>5.73</td>
  <td>17.27</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>9.65</td>
  <td>14.48</td>
  <td>14.98</td>
  <td>15.81</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.08</td>
  <td>4.29</td>
  <td>11.22</td>
  <td>6.02</td>
  <td>6.02</td>
  <td>6.02</td>
  <td>6.02</td>
  <td>8.44</td>
  <td>9.48</td>
  <td>10.58</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>45.17</td>
  <td>5.83</td>
  <td>276.20</td>
  <td>17.57</td>
  <td>17.57</td>
  <td>17.57</td>
  <td>17.57</td>
  <td>89.85</td>
  <td>115.36</td>
  <td>167.41</td>
</tr></table>