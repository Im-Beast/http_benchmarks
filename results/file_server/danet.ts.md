# File server
## Name: Danet 

### Version: 1.8.0
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
    <td>3.76k</td>
    <td>13.93k</td>
    <td>1.51k</td>
    <td>19.68 MiB</td>
    <td>17.17</td>
    <td>7.35</td>
    <td>25.84</td>
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
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>5406.69k</td>
  <td>6166.66k</td>
  <td>7400.09k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>20.78</td>
  <td>22.03</td>
  <td>24.42</td>
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
  <td>3.76k</td>
  <td>13.93k</td>
  <td>1.51k</td>
  <td>19.68</td>
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>1817.47k</td>
  <td>5406.69k</td>
  <td>6166.66k</td>
  <td>7400.09k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.04k</td>
  <td>6.67k</td>
  <td>655.48</td>
  <td>356.19</td>
  <td>323.22k</td>
  <td>323.22k</td>
  <td>323.22k</td>
  <td>323.22k</td>
  <td>1741.14k</td>
  <td>2118.82k</td>
  <td>3281.70k</td>
</tr><tr>
  <td>text.txt</td>
  <td>5.81k</td>
  <td>10.51k</td>
  <td>1.34k</td>
  <td>0.27</td>
  <td>4207.15k</td>
  <td>4207.15k</td>
  <td>4207.15k</td>
  <td>4207.15k</td>
  <td>6845.40k</td>
  <td>7200.87k</td>
  <td>9204.56k</td>
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
  <td>17.17</td>
  <td>7.35</td>
  <td>25.84</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>14.16</td>
  <td>20.78</td>
  <td>22.03</td>
  <td>24.42</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>65.53</td>
  <td>8.74</td>
  <td>320.75</td>
  <td>21.84</td>
  <td>21.84</td>
  <td>21.84</td>
  <td>21.84</td>
  <td>119.94</td>
  <td>142.52</td>
  <td>199.95</td>
</tr><tr>
  <td>text.txt</td>
  <td>11.09</td>
  <td>6.43</td>
  <td>20.46</td>
  <td>9.26</td>
  <td>9.26</td>
  <td>9.26</td>
  <td>9.26</td>
  <td>13.84</td>
  <td>15.28</td>
  <td>16.93</td>
</tr></table>