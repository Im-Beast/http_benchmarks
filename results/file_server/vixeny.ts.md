# File server
## Name: Vixeny 

### Version: 0.0.682
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
    <td>12.76k</td>
    <td>14.84k</td>
    <td>1.37k</td>
    <td>67.54 MiB</td>
    <td>5.00</td>
    <td>1.70</td>
    <td>8.00</td>
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
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>13839.69k</td>
  <td>14102.34k</td>
  <td>14836.03k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>5.73</td>
  <td>6.90</td>
  <td>7.64</td>
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
  <td>12.76k</td>
  <td>14.84k</td>
  <td>1.37k</td>
  <td>67.54</td>
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>10344.52k</td>
  <td>13839.69k</td>
  <td>14102.34k</td>
  <td>14836.03k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.35k</td>
  <td>4.93k</td>
  <td>299.02</td>
  <td>1.59k</td>
  <td>4070.50k</td>
  <td>4070.50k</td>
  <td>4070.50k</td>
  <td>4070.50k</td>
  <td>4664.92k</td>
  <td>4702.94k</td>
  <td>4780.88k</td>
</tr><tr>
  <td>text.txt</td>
  <td>63.82k</td>
  <td>74.31k</td>
  <td>7.12k</td>
  <td>1.95</td>
  <td>59651.02k</td>
  <td>59651.02k</td>
  <td>59651.02k</td>
  <td>59651.02k</td>
  <td>74001.87k</td>
  <td>74311.18k</td>
  <td>74311.18k</td>
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
  <td>5.00</td>
  <td>1.70</td>
  <td>8.00</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>4.33</td>
  <td>5.73</td>
  <td>6.90</td>
  <td>7.64</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.66</td>
  <td>2.03</td>
  <td>21.53</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>15.99</td>
  <td>16.32</td>
  <td>17.00</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.00</td>
  <td>0.72</td>
  <td>2.03</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.10</td>
  <td>1.15</td>
  <td>1.54</td>
</tr></table>