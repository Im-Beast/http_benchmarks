# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>11.16k</td>
    <td>14.31k</td>
    <td>1.49k</td>
    <td>59.03 MiB</td>
    <td>5.72</td>
    <td>2.84</td>
    <td>10.11</td>
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
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>12609.38k</td>
  <td>12692.54k</td>
  <td>14305.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>7.29</td>
  <td>7.57</td>
  <td>8.44</td>
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
  <td>11.16k</td>
  <td>14.31k</td>
  <td>1.49k</td>
  <td>59.03</td>
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>8871.68k</td>
  <td>12609.38k</td>
  <td>12692.54k</td>
  <td>14305.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>30.58k</td>
  <td>34.56k</td>
  <td>1.84k</td>
  <td>1.46</td>
  <td>28796.55k</td>
  <td>28796.55k</td>
  <td>28796.55k</td>
  <td>28796.55k</td>
  <td>32313.70k</td>
  <td>33318.87k</td>
  <td>34557.20k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.15k</td>
  <td>7.85k</td>
  <td>968.69</td>
  <td>1.51k</td>
  <td>3040.43k</td>
  <td>3040.43k</td>
  <td>3040.43k</td>
  <td>3040.43k</td>
  <td>5300.79k</td>
  <td>5618.07k</td>
  <td>6760.23k</td>
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
  <td>5.72</td>
  <td>2.84</td>
  <td>10.11</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>4.75</td>
  <td>7.29</td>
  <td>7.57</td>
  <td>8.44</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.09</td>
  <td>1.34</td>
  <td>4.41</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>1.77</td>
  <td>2.46</td>
  <td>2.58</td>
  <td>2.96</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.48</td>
  <td>8.16</td>
  <td>34.60</td>
  <td>12.93</td>
  <td>12.93</td>
  <td>12.93</td>
  <td>12.93</td>
  <td>17.93</td>
  <td>18.64</td>
  <td>21.51</td>
</tr></table>