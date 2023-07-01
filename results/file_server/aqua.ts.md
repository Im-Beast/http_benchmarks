# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>9.97k</td>
    <td>12.69k</td>
    <td>1.71k</td>
    <td>52.85 MiB</td>
    <td>6.85</td>
    <td>3.91</td>
    <td>14.89</td>
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
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>11543.43k</td>
  <td>11861.83k</td>
  <td>12606.75k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>8.47</td>
  <td>9.17</td>
  <td>10.62</td>
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
  <td>9.97k</td>
  <td>12.69k</td>
  <td>1.71k</td>
  <td>52.85</td>
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>7902.56k</td>
  <td>11543.43k</td>
  <td>11861.83k</td>
  <td>12606.75k</td>
</tr><tr>
  <td>text.txt</td>
  <td>29.13k</td>
  <td>33.87k</td>
  <td>3.11k</td>
  <td>1.39</td>
  <td>26510.70k</td>
  <td>26510.70k</td>
  <td>26510.70k</td>
  <td>26510.70k</td>
  <td>31980.27k</td>
  <td>33634.85k</td>
  <td>33873.84k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.87k</td>
  <td>12.67k</td>
  <td>1.13k</td>
  <td>1.40k</td>
  <td>2933.14k</td>
  <td>2933.14k</td>
  <td>2933.14k</td>
  <td>2933.14k</td>
  <td>5053.25k</td>
  <td>5592.34k</td>
  <td>6867.26k</td>
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
  <td>6.85</td>
  <td>3.91</td>
  <td>14.89</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>5.60</td>
  <td>8.47</td>
  <td>9.17</td>
  <td>10.62</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.22</td>
  <td>1.35</td>
  <td>5.81</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>1.80</td>
  <td>2.81</td>
  <td>3.20</td>
  <td>4.11</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>17.08</td>
  <td>9.82</td>
  <td>36.93</td>
  <td>14.52</td>
  <td>14.52</td>
  <td>14.52</td>
  <td>14.52</td>
  <td>19.68</td>
  <td>20.75</td>
  <td>24.44</td>
</tr></table>