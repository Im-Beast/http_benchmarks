# Multiple routes
## Name: Opine 

### Version: 2.3.4
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
    <td>13.56k</td>
    <td>18.43k</td>
    <td>2.52k</td>
    <td>0.14 MiB</td>
    <td>4.66</td>
    <td>2.70</td>
    <td>15.19</td>
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
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>16084.32k</td>
  <td>16363.85k</td>
  <td>18425.20k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>6.00</td>
  <td>6.74</td>
  <td>8.55</td>
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
  <td>/hello_world</td>
  <td>13.56k</td>
  <td>18.43k</td>
  <td>2.52k</td>
  <td>0.14</td>
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>10442.15k</td>
  <td>16084.32k</td>
  <td>16363.85k</td>
  <td>18425.20k</td>
</tr><tr>
  <td>/random_number</td>
  <td>17.41k</td>
  <td>22.03k</td>
  <td>2.78k</td>
  <td>0.30</td>
  <td>13586.35k</td>
  <td>13586.35k</td>
  <td>13586.35k</td>
  <td>13586.35k</td>
  <td>20300.17k</td>
  <td>20640.69k</td>
  <td>22027.96k</td>
</tr><tr>
  <td>/count</td>
  <td>18.14k</td>
  <td>22.48k</td>
  <td>2.77k</td>
  <td>0.02</td>
  <td>13799.08k</td>
  <td>13799.08k</td>
  <td>13799.08k</td>
  <td>13799.08k</td>
  <td>21373.85k</td>
  <td>21601.79k</td>
  <td>22484.93k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>15.00k</td>
  <td>18.78k</td>
  <td>2.51k</td>
  <td>0.03</td>
  <td>12202.27k</td>
  <td>12202.27k</td>
  <td>12202.27k</td>
  <td>12202.27k</td>
  <td>17573.70k</td>
  <td>17881.28k</td>
  <td>18777.65k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>15.48k</td>
  <td>19.82k</td>
  <td>2.28k</td>
  <td>0.03</td>
  <td>12670.49k</td>
  <td>12670.49k</td>
  <td>12670.49k</td>
  <td>12670.49k</td>
  <td>17840.50k</td>
  <td>18403.12k</td>
  <td>19817.15k</td>
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
  <td>/hello_world</td>
  <td>4.66</td>
  <td>2.70</td>
  <td>15.19</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>3.72</td>
  <td>6.00</td>
  <td>6.74</td>
  <td>8.55</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.66</td>
  <td>2.42</td>
  <td>9.93</td>
  <td>2.93</td>
  <td>2.93</td>
  <td>2.93</td>
  <td>2.93</td>
  <td>4.74</td>
  <td>5.16</td>
  <td>6.93</td>
</tr><tr>
  <td>/count</td>
  <td>3.51</td>
  <td>1.90</td>
  <td>9.87</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>2.82</td>
  <td>4.40</td>
  <td>4.94</td>
  <td>6.29</td>
</tr><tr>
  <td>/plus_1</td>
  <td>4.24</td>
  <td>1.55</td>
  <td>11.88</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>3.43</td>
  <td>5.43</td>
  <td>5.97</td>
  <td>7.92</td>
</tr><tr>
  <td>/minus_1</td>
  <td>4.11</td>
  <td>1.62</td>
  <td>10.05</td>
  <td>3.33</td>
  <td>3.33</td>
  <td>3.33</td>
  <td>3.33</td>
  <td>5.19</td>
  <td>5.66</td>
  <td>7.72</td>
</tr></table>