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
    <td>12.18k</td>
    <td>14.60k</td>
    <td>1.24k</td>
    <td>64.47 MiB</td>
    <td>5.23</td>
    <td>1.57</td>
    <td>9.35</td>
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
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>13565.87k</td>
  <td>13706.84k</td>
  <td>14602.11k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>6.05</td>
  <td>6.75</td>
  <td>7.81</td>
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
  <td>12.18k</td>
  <td>14.60k</td>
  <td>1.24k</td>
  <td>64.47</td>
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>10255.38k</td>
  <td>13565.87k</td>
  <td>13706.84k</td>
  <td>14602.11k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.08k</td>
  <td>5.60k</td>
  <td>806.27</td>
  <td>1.49k</td>
  <td>3018.88k</td>
  <td>3018.88k</td>
  <td>3018.88k</td>
  <td>3018.88k</td>
  <td>5010.69k</td>
  <td>5145.55k</td>
  <td>5321.15k</td>
</tr><tr>
  <td>text.txt</td>
  <td>54.42k</td>
  <td>66.54k</td>
  <td>6.55k</td>
  <td>1.66</td>
  <td>45091.16k</td>
  <td>45091.16k</td>
  <td>45091.16k</td>
  <td>45091.16k</td>
  <td>65624.47k</td>
  <td>66539.76k</td>
  <td>66539.76k</td>
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
  <td>5.23</td>
  <td>1.57</td>
  <td>9.35</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>4.47</td>
  <td>6.05</td>
  <td>6.75</td>
  <td>7.81</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.60</td>
  <td>2.18</td>
  <td>26.66</td>
  <td>13.07</td>
  <td>13.07</td>
  <td>13.07</td>
  <td>13.07</td>
  <td>18.76</td>
  <td>21.46</td>
  <td>23.52</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.17</td>
  <td>0.76</td>
  <td>2.18</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>1.39</td>
  <td>1.53</td>
  <td>1.77</td>
</tr></table>