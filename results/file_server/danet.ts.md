# File server
## Name: Danet 

### Version: 1.8.0
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
    <td>4.84k</td>
    <td>8.18k</td>
    <td>1.40k</td>
    <td>25.64 MiB</td>
    <td>13.18</td>
    <td>6.38</td>
    <td>20.80</td>
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
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>6259.98k</td>
  <td>6633.31k</td>
  <td>7489.77k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>15.98</td>
  <td>16.50</td>
  <td>17.55</td>
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
  <td>4.84k</td>
  <td>8.18k</td>
  <td>1.40k</td>
  <td>25.64</td>
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>2539.61k</td>
  <td>6259.98k</td>
  <td>6633.31k</td>
  <td>7489.77k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.40k</td>
  <td>17.27k</td>
  <td>2.20k</td>
  <td>0.44</td>
  <td>6771.57k</td>
  <td>6771.57k</td>
  <td>6771.57k</td>
  <td>6771.57k</td>
  <td>12540.63k</td>
  <td>13298.20k</td>
  <td>14538.90k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.47k</td>
  <td>8.12k</td>
  <td>738.70</td>
  <td>519.76</td>
  <td>614.76k</td>
  <td>614.76k</td>
  <td>614.76k</td>
  <td>614.76k</td>
  <td>2246.60k</td>
  <td>2565.30k</td>
  <td>3769.66k</td>
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
  <td>13.18</td>
  <td>6.38</td>
  <td>20.80</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>11.27</td>
  <td>15.98</td>
  <td>16.50</td>
  <td>17.55</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.87</td>
  <td>3.05</td>
  <td>11.98</td>
  <td>5.84</td>
  <td>5.84</td>
  <td>5.84</td>
  <td>5.84</td>
  <td>7.98</td>
  <td>8.61</td>
  <td>10.29</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>44.92</td>
  <td>8.25</td>
  <td>264.66</td>
  <td>20.57</td>
  <td>20.57</td>
  <td>20.57</td>
  <td>20.57</td>
  <td>94.47</td>
  <td>118.74</td>
  <td>168.99</td>
</tr></table>