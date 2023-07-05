# Name: Hono 
  
  ### Version: 3.2.7
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
    <td>12.30k</td>
    <td>14.77k</td>
    <td>1.50k</td>
    <td>65.05 MiB</td>
    <td>5.19</td>
    <td>1.56</td>
    <td>9.15</td>
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
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>13807.09k</td>
  <td>14001.53k</td>
  <td>14774.08k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>6.44</td>
  <td>7.28</td>
  <td>8.20</td>
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
  <td>12.30k</td>
  <td>14.77k</td>
  <td>1.50k</td>
  <td>65.05</td>
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>9635.23k</td>
  <td>13807.09k</td>
  <td>14001.53k</td>
  <td>14774.08k</td>
</tr><tr>
  <td>text.txt</td>
  <td>64.49k</td>
  <td>69.00k</td>
  <td>5.39k</td>
  <td>1.96</td>
  <td>58015.77k</td>
  <td>58015.77k</td>
  <td>58015.77k</td>
  <td>58015.77k</td>
  <td>67484.25k</td>
  <td>68998.87k</td>
  <td>68998.87k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.44k</td>
  <td>5.26k</td>
  <td>458.95</td>
  <td>1.25k</td>
  <td>3012.07k</td>
  <td>3012.07k</td>
  <td>3012.07k</td>
  <td>3012.07k</td>
  <td>4090.94k</td>
  <td>4352.92k</td>
  <td>4732.70k</td>
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
  <td>1.56</td>
  <td>9.15</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>4.32</td>
  <td>6.44</td>
  <td>7.28</td>
  <td>8.20</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.99</td>
  <td>0.81</td>
  <td>2.28</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.17</td>
  <td>1.42</td>
  <td>1.98</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>18.70</td>
  <td>2.00</td>
  <td>25.13</td>
  <td>17.17</td>
  <td>17.17</td>
  <td>17.17</td>
  <td>17.17</td>
  <td>20.65</td>
  <td>21.07</td>
  <td>22.02</td>
</tr></table>