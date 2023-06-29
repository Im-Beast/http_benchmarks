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
    <td>10.98k</td>
    <td>16.09k</td>
    <td>2.01k</td>
    <td>725.65 MiB</td>
    <td>10.46</td>
    <td>5.07</td>
    <td>25.43</td>
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
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>12938.22k</td>
  <td>13508.53k</td>
  <td>14911.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>12.43</td>
  <td>13.05</td>
  <td>14.98</td>
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
  <td>10.98k</td>
  <td>16.09k</td>
  <td>2.01k</td>
  <td>725.65</td>
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>8749.32k</td>
  <td>12938.22k</td>
  <td>13508.53k</td>
  <td>14911.07k</td>
</tr><tr>
  <td>text.txt</td>
  <td>26.41k</td>
  <td>32.99k</td>
  <td>4.39k</td>
  <td>1.26</td>
  <td>21982.13k</td>
  <td>21982.13k</td>
  <td>21982.13k</td>
  <td>21982.13k</td>
  <td>30051.97k</td>
  <td>31117.36k</td>
  <td>32993.19k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.95k</td>
  <td>8.72k</td>
  <td>1.03k</td>
  <td>1.43k</td>
  <td>2803.94k</td>
  <td>2803.94k</td>
  <td>2803.94k</td>
  <td>2803.94k</td>
  <td>5164.06k</td>
  <td>5643.83k</td>
  <td>7127.36k</td>
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
  <td>10.46</td>
  <td>5.07</td>
  <td>25.43</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>8.64</td>
  <td>12.43</td>
  <td>13.05</td>
  <td>14.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.41</td>
  <td>1.33</td>
  <td>8.85</td>
  <td>1.94</td>
  <td>1.94</td>
  <td>1.94</td>
  <td>1.94</td>
  <td>2.98</td>
  <td>3.29</td>
  <td>5.81</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>16.39</td>
  <td>7.91</td>
  <td>38.88</td>
  <td>13.59</td>
  <td>13.59</td>
  <td>13.59</td>
  <td>13.59</td>
  <td>19.17</td>
  <td>20.01</td>
  <td>21.82</td>
</tr></table>