# File server
## Name: Hydra 

### Version: 0.1.1
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
    <td>15.26k</td>
    <td>16.53k</td>
    <td>939.26</td>
    <td>80.78 MiB</td>
    <td>4.18</td>
    <td>1.56</td>
    <td>6.57</td>
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
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>16088.59k</td>
  <td>16174.88k</td>
  <td>16527.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>4.63</td>
  <td>4.95</td>
  <td>5.51</td>
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
  <td>15.26k</td>
  <td>16.53k</td>
  <td>939.26</td>
  <td>80.78</td>
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>13822.64k</td>
  <td>16088.59k</td>
  <td>16174.88k</td>
  <td>16527.04k</td>
</tr><tr>
  <td>text.txt</td>
  <td>121.39k</td>
  <td>130.93k</td>
  <td>8.77k</td>
  <td>3.75</td>
  <td>107896.70k</td>
  <td>107896.70k</td>
  <td>107896.70k</td>
  <td>107896.70k</td>
  <td>130930.20k</td>
  <td>130930.20k</td>
  <td>130930.20k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.26k</td>
  <td>6.23k</td>
  <td>822.84</td>
  <td>1.56k</td>
  <td>3326.19k</td>
  <td>3326.19k</td>
  <td>3326.19k</td>
  <td>3326.19k</td>
  <td>5384.50k</td>
  <td>5747.04k</td>
  <td>6062.43k</td>
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
  <td>4.18</td>
  <td>1.56</td>
  <td>6.57</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>3.55</td>
  <td>4.63</td>
  <td>4.95</td>
  <td>5.51</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.51</td>
  <td>0.39</td>
  <td>1.38</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.61</td>
  <td>0.65</td>
  <td>1.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.99</td>
  <td>2.94</td>
  <td>20.71</td>
  <td>12.66</td>
  <td>12.66</td>
  <td>12.66</td>
  <td>12.66</td>
  <td>17.28</td>
  <td>17.81</td>
  <td>19.60</td>
</tr></table>