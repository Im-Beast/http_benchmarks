# File server
## Name: Aqua 

### Version: 1.3.5
### Deno version: 1.35.2

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
    <td>8.24k</td>
    <td>11.96k</td>
    <td>1.67k</td>
    <td>43.54 MiB</td>
    <td>7.75</td>
    <td>3.77</td>
    <td>25.09</td>
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
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>10105.05k</td>
  <td>10509.29k</td>
  <td>11418.15k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>10.24</td>
  <td>11.39</td>
  <td>12.92</td>
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
  <td>8.24k</td>
  <td>11.96k</td>
  <td>1.67k</td>
  <td>43.54</td>
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>6332.33k</td>
  <td>10105.05k</td>
  <td>10509.29k</td>
  <td>11418.15k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.08k</td>
  <td>12.44k</td>
  <td>1.46k</td>
  <td>1.09k</td>
  <td>1327.30k</td>
  <td>1327.30k</td>
  <td>1327.30k</td>
  <td>1327.30k</td>
  <td>4694.85k</td>
  <td>5304.61k</td>
  <td>7094.64k</td>
</tr><tr>
  <td>text.txt</td>
  <td>19.36k</td>
  <td>24.39k</td>
  <td>3.06k</td>
  <td>0.92</td>
  <td>15911.36k</td>
  <td>15911.36k</td>
  <td>15911.36k</td>
  <td>15911.36k</td>
  <td>22810.59k</td>
  <td>23205.75k</td>
  <td>24387.60k</td>
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
  <td>7.75</td>
  <td>3.77</td>
  <td>25.09</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>6.14</td>
  <td>10.24</td>
  <td>11.39</td>
  <td>12.92</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>21.36</td>
  <td>6.94</td>
  <td>44.04</td>
  <td>16.83</td>
  <td>16.83</td>
  <td>16.83</td>
  <td>16.83</td>
  <td>26.21</td>
  <td>27.66</td>
  <td>30.56</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.30</td>
  <td>1.80</td>
  <td>23.77</td>
  <td>2.63</td>
  <td>2.63</td>
  <td>2.63</td>
  <td>2.63</td>
  <td>3.94</td>
  <td>4.53</td>
  <td>6.48</td>
</tr></table>