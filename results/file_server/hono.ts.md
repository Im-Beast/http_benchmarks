# Name: Hono 
  
  ### Version: 3.3.0
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
    <td>13.31k</td>
    <td>15.06k</td>
    <td>1.48k</td>
    <td>70.40 MiB</td>
    <td>4.79</td>
    <td>1.51</td>
    <td>7.79</td>
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
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>14647.46k</td>
  <td>14737.69k</td>
  <td>15061.78k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>6.15</td>
  <td>6.66</td>
  <td>6.95</td>
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
  <td>13.31k</td>
  <td>15.06k</td>
  <td>1.48k</td>
  <td>70.40</td>
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>11229.10k</td>
  <td>14647.46k</td>
  <td>14737.69k</td>
  <td>15061.78k</td>
</tr><tr>
  <td>text.txt</td>
  <td>68.81k</td>
  <td>73.79k</td>
  <td>4.75k</td>
  <td>2.10</td>
  <td>62096.65k</td>
  <td>62096.65k</td>
  <td>62096.65k</td>
  <td>62096.65k</td>
  <td>73102.58k</td>
  <td>73790.47k</td>
  <td>73790.47k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.11k</td>
  <td>4.84k</td>
  <td>362.00</td>
  <td>1.50k</td>
  <td>3608.29k</td>
  <td>3608.29k</td>
  <td>3608.29k</td>
  <td>3608.29k</td>
  <td>4476.39k</td>
  <td>4583.76k</td>
  <td>4794.37k</td>
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
  <td>4.79</td>
  <td>1.51</td>
  <td>7.79</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>6.15</td>
  <td>6.66</td>
  <td>6.95</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.92</td>
  <td>0.76</td>
  <td>1.91</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.98</td>
  <td>1.09</td>
  <td>1.67</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.57</td>
  <td>2.74</td>
  <td>21.11</td>
  <td>14.25</td>
  <td>14.25</td>
  <td>14.25</td>
  <td>14.25</td>
  <td>17.23</td>
  <td>17.53</td>
  <td>18.42</td>
</tr></table>