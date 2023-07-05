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
    <td>10.56k</td>
    <td>13.31k</td>
    <td>1.64k</td>
    <td>55.95 MiB</td>
    <td>6.04</td>
    <td>2.94</td>
    <td>11.16</td>
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
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>12152.47k</td>
  <td>12511.74k</td>
  <td>13107.93k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>7.82</td>
  <td>8.26</td>
  <td>9.24</td>
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
  <td>10.56k</td>
  <td>13.31k</td>
  <td>1.64k</td>
  <td>55.95</td>
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>7985.41k</td>
  <td>12152.47k</td>
  <td>12511.74k</td>
  <td>13107.93k</td>
</tr><tr>
  <td>text.txt</td>
  <td>27.55k</td>
  <td>32.27k</td>
  <td>3.08k</td>
  <td>1.32</td>
  <td>23878.14k</td>
  <td>23878.14k</td>
  <td>23878.14k</td>
  <td>23878.14k</td>
  <td>30844.29k</td>
  <td>31910.50k</td>
  <td>32272.91k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.88k</td>
  <td>12.95k</td>
  <td>1.21k</td>
  <td>1.39k</td>
  <td>2603.45k</td>
  <td>2603.45k</td>
  <td>2603.45k</td>
  <td>2603.45k</td>
  <td>5148.46k</td>
  <td>5730.55k</td>
  <td>6878.11k</td>
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
  <td>6.04</td>
  <td>2.94</td>
  <td>11.16</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>4.90</td>
  <td>7.82</td>
  <td>8.26</td>
  <td>9.24</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.30</td>
  <td>1.34</td>
  <td>5.88</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>1.88</td>
  <td>2.77</td>
  <td>2.99</td>
  <td>3.68</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>16.82</td>
  <td>8.70</td>
  <td>36.36</td>
  <td>14.03</td>
  <td>14.03</td>
  <td>14.03</td>
  <td>14.03</td>
  <td>19.41</td>
  <td>20.44</td>
  <td>23.48</td>
</tr></table>