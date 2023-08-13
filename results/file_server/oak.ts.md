# File server
## Name: Oak 

### Version: 12.6.0
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
    <td>3.77k</td>
    <td>8.98k</td>
    <td>1.34k</td>
    <td>19.83 MiB</td>
    <td>17.04</td>
    <td>7.48</td>
    <td>25.44</td>
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
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>5029.09k</td>
  <td>5406.95k</td>
  <td>7716.17k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>20.44</td>
  <td>21.93</td>
  <td>24.17</td>
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
  <td>3.77k</td>
  <td>8.98k</td>
  <td>1.34k</td>
  <td>19.83</td>
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>2066.43k</td>
  <td>5029.09k</td>
  <td>5406.95k</td>
  <td>7716.17k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>960.96</td>
  <td>4.39k</td>
  <td>405.49</td>
  <td>343.95</td>
  <td>519.90k</td>
  <td>519.90k</td>
  <td>519.90k</td>
  <td>519.90k</td>
  <td>1389.36k</td>
  <td>1564.00k</td>
  <td>2126.78k</td>
</tr><tr>
  <td>text.txt</td>
  <td>5.69k</td>
  <td>11.38k</td>
  <td>1.27k</td>
  <td>0.27</td>
  <td>3808.66k</td>
  <td>3808.66k</td>
  <td>3808.66k</td>
  <td>3808.66k</td>
  <td>6777.53k</td>
  <td>7156.23k</td>
  <td>8745.01k</td>
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
  <td>17.04</td>
  <td>7.48</td>
  <td>25.44</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>13.99</td>
  <td>20.44</td>
  <td>21.93</td>
  <td>24.17</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>67.87</td>
  <td>6.58</td>
  <td>214.46</td>
  <td>32.97</td>
  <td>32.97</td>
  <td>32.97</td>
  <td>32.97</td>
  <td>94.83</td>
  <td>101.54</td>
  <td>119.89</td>
</tr><tr>
  <td>text.txt</td>
  <td>11.30</td>
  <td>6.60</td>
  <td>18.99</td>
  <td>9.44</td>
  <td>9.44</td>
  <td>9.44</td>
  <td>9.44</td>
  <td>14.40</td>
  <td>15.85</td>
  <td>17.50</td>
</tr></table>