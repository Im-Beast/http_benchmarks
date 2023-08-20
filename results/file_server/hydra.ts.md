# File server
## Name: Hydra 

### Version: 0.1.1
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
    <td>13.81k</td>
    <td>15.20k</td>
    <td>1.01k</td>
    <td>73.19 MiB</td>
    <td>4.61</td>
    <td>1.39</td>
    <td>7.39</td>
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
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>14662.76k</td>
  <td>14825.88k</td>
  <td>15197.02k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>5.18</td>
  <td>5.40</td>
  <td>6.03</td>
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
  <td>13.81k</td>
  <td>15.20k</td>
  <td>1.01k</td>
  <td>73.19</td>
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>12411.10k</td>
  <td>14662.76k</td>
  <td>14825.88k</td>
  <td>15197.02k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.81k</td>
  <td>6.24k</td>
  <td>715.22</td>
  <td>1.76k</td>
  <td>3622.07k</td>
  <td>3622.07k</td>
  <td>3622.07k</td>
  <td>3622.07k</td>
  <td>5735.58k</td>
  <td>5844.33k</td>
  <td>6103.08k</td>
</tr><tr>
  <td>text.txt</td>
  <td>114.90k</td>
  <td>119.19k</td>
  <td>5.33k</td>
  <td>3.51</td>
  <td>103271.31k</td>
  <td>103271.31k</td>
  <td>103271.31k</td>
  <td>103271.31k</td>
  <td>119190.57k</td>
  <td>119190.57k</td>
  <td>119190.57k</td>
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
  <td>1.39</td>
  <td>7.39</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>4.09</td>
  <td>5.18</td>
  <td>5.40</td>
  <td>6.03</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>13.24</td>
  <td>2.01</td>
  <td>17.22</td>
  <td>11.32</td>
  <td>11.32</td>
  <td>11.32</td>
  <td>11.32</td>
  <td>15.27</td>
  <td>15.59</td>
  <td>16.05</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.55</td>
  <td>0.45</td>
  <td>1.31</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.59</td>
  <td>0.64</td>
  <td>0.84</td>
</tr></table>