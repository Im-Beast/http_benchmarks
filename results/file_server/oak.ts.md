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
    <td>4.62k</td>
    <td>10.24k</td>
    <td>1.46k</td>
    <td>24.22 MiB</td>
    <td>13.95</td>
    <td>8.67</td>
    <td>18.19</td>
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
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>5693.01k</td>
  <td>5994.02k</td>
  <td>8089.37k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>16.06</td>
  <td>16.43</td>
  <td>17.44</td>
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
  <td>4.62k</td>
  <td>10.24k</td>
  <td>1.46k</td>
  <td>24.22</td>
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>2900.14k</td>
  <td>5693.01k</td>
  <td>5994.02k</td>
  <td>8089.37k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.30k</td>
  <td>4.69k</td>
  <td>411.19</td>
  <td>466.80</td>
  <td>825.03k</td>
  <td>825.03k</td>
  <td>825.03k</td>
  <td>825.03k</td>
  <td>1766.57k</td>
  <td>1921.74k</td>
  <td>2556.64k</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.62k</td>
  <td>11.06k</td>
  <td>1.02k</td>
  <td>0.36</td>
  <td>6800.56k</td>
  <td>6800.56k</td>
  <td>6800.56k</td>
  <td>6800.56k</td>
  <td>8625.52k</td>
  <td>8905.59k</td>
  <td>10097.19k</td>
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
  <td>13.95</td>
  <td>8.67</td>
  <td>18.19</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>12.37</td>
  <td>16.06</td>
  <td>16.43</td>
  <td>17.44</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>50.02</td>
  <td>5.99</td>
  <td>180.64</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>76.34</td>
  <td>84.10</td>
  <td>108.74</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.47</td>
  <td>5.48</td>
  <td>12.24</td>
  <td>7.62</td>
  <td>7.62</td>
  <td>7.62</td>
  <td>7.62</td>
  <td>9.22</td>
  <td>10.42</td>
  <td>11.86</td>
</tr></table>