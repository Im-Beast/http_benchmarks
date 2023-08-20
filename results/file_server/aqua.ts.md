# File server
## Name: Aqua 

### Version: 1.3.5
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
    <td>10.03k</td>
    <td>14.23k</td>
    <td>1.44k</td>
    <td>52.87 MiB</td>
    <td>6.39</td>
    <td>3.55</td>
    <td>10.88</td>
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
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>11590.90k</td>
  <td>11936.23k</td>
  <td>12152.14k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>8.07</td>
  <td>8.27</td>
  <td>9.04</td>
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
  <td>10.03k</td>
  <td>14.23k</td>
  <td>1.44k</td>
  <td>52.87</td>
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>7755.83k</td>
  <td>11590.90k</td>
  <td>11936.23k</td>
  <td>12152.14k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.63k</td>
  <td>7.67k</td>
  <td>958.18</td>
  <td>1.31k</td>
  <td>2602.05k</td>
  <td>2602.05k</td>
  <td>2602.05k</td>
  <td>2602.05k</td>
  <td>4882.27k</td>
  <td>5276.14k</td>
  <td>6376.73k</td>
</tr><tr>
  <td>text.txt</td>
  <td>24.76k</td>
  <td>29.40k</td>
  <td>2.57k</td>
  <td>1.17</td>
  <td>22306.76k</td>
  <td>22306.76k</td>
  <td>22306.76k</td>
  <td>22306.76k</td>
  <td>27320.59k</td>
  <td>27526.62k</td>
  <td>29398.05k</td>
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
  <td>6.39</td>
  <td>3.55</td>
  <td>10.88</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>5.31</td>
  <td>8.07</td>
  <td>8.27</td>
  <td>9.04</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>17.74</td>
  <td>8.26</td>
  <td>41.59</td>
  <td>14.75</td>
  <td>14.75</td>
  <td>14.75</td>
  <td>14.75</td>
  <td>20.51</td>
  <td>21.59</td>
  <td>24.23</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.59</td>
  <td>1.65</td>
  <td>5.76</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>2.11</td>
  <td>3.16</td>
  <td>3.42</td>
  <td>5.38</td>
</tr></table>