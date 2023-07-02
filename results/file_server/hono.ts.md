# Name: Hono 
  
  ### Version: 3.2.7
  ### Deno version: 1.34.3

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
    <td>12.09k</td>
    <td>13.88k</td>
    <td>1.42k</td>
    <td>64.03 MiB</td>
    <td>5.27</td>
    <td>1.43</td>
    <td>8.69</td>
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
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>13146.71k</td>
  <td>13293.48k</td>
  <td>13876.85k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>6.70</td>
  <td>7.39</td>
  <td>8.03</td>
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
  <td>12.09k</td>
  <td>13.88k</td>
  <td>1.42k</td>
  <td>64.03</td>
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>9532.49k</td>
  <td>13146.71k</td>
  <td>13293.48k</td>
  <td>13876.85k</td>
</tr><tr>
  <td>text.txt</td>
  <td>63.69k</td>
  <td>69.02k</td>
  <td>4.81k</td>
  <td>1.94</td>
  <td>56738.72k</td>
  <td>56738.72k</td>
  <td>56738.72k</td>
  <td>56738.72k</td>
  <td>68675.56k</td>
  <td>69019.13k</td>
  <td>69019.13k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.97k</td>
  <td>5.04k</td>
  <td>452.85</td>
  <td>1.45k</td>
  <td>3319.52k</td>
  <td>3319.52k</td>
  <td>3319.52k</td>
  <td>3319.52k</td>
  <td>4469.58k</td>
  <td>4633.94k</td>
  <td>4883.15k</td>
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
  <td>5.27</td>
  <td>1.43</td>
  <td>8.69</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>4.58</td>
  <td>6.70</td>
  <td>7.39</td>
  <td>8.03</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.00</td>
  <td>0.65</td>
  <td>2.18</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.14</td>
  <td>1.37</td>
  <td>1.74</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>16.08</td>
  <td>1.75</td>
  <td>23.58</td>
  <td>14.64</td>
  <td>14.64</td>
  <td>14.64</td>
  <td>14.64</td>
  <td>17.94</td>
  <td>18.56</td>
  <td>21.02</td>
</tr></table>