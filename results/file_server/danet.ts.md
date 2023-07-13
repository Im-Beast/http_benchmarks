# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>5.06k</td>
    <td>8.27k</td>
    <td>1.22k</td>
    <td>26.73 MiB</td>
    <td>12.64</td>
    <td>6.99</td>
    <td>20.44</td>
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
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>6127.14k</td>
  <td>6415.10k</td>
  <td>7136.42k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>15.26</td>
  <td>15.60</td>
  <td>16.10</td>
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
  <td>5.06k</td>
  <td>8.27k</td>
  <td>1.22k</td>
  <td>26.73</td>
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>3096.37k</td>
  <td>6127.14k</td>
  <td>6415.10k</td>
  <td>7136.42k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.80k</td>
  <td>14.84k</td>
  <td>2.56k</td>
  <td>0.46</td>
  <td>6766.01k</td>
  <td>6766.01k</td>
  <td>6766.01k</td>
  <td>6766.01k</td>
  <td>13536.54k</td>
  <td>13948.85k</td>
  <td>14709.06k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.55k</td>
  <td>6.95k</td>
  <td>745.99</td>
  <td>549.16</td>
  <td>708.48k</td>
  <td>708.48k</td>
  <td>708.48k</td>
  <td>708.48k</td>
  <td>2384.60k</td>
  <td>2650.83k</td>
  <td>3902.04k</td>
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
  <td>12.64</td>
  <td>6.99</td>
  <td>20.44</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>10.92</td>
  <td>15.26</td>
  <td>15.60</td>
  <td>16.10</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.58</td>
  <td>2.90</td>
  <td>10.76</td>
  <td>5.73</td>
  <td>5.73</td>
  <td>5.73</td>
  <td>5.73</td>
  <td>7.32</td>
  <td>7.59</td>
  <td>9.84</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.51</td>
  <td>8.00</td>
  <td>265.18</td>
  <td>19.76</td>
  <td>19.76</td>
  <td>19.76</td>
  <td>19.76</td>
  <td>86.01</td>
  <td>113.99</td>
  <td>167.73</td>
</tr></table>