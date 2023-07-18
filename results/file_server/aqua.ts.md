# File server
## Name: Aqua 

### Version: 1.3.5
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
    <td>10.09k</td>
    <td>12.55k</td>
    <td>1.47k</td>
    <td>53.36 MiB</td>
    <td>6.33</td>
    <td>3.14</td>
    <td>11.72</td>
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
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>11511.61k</td>
  <td>11780.07k</td>
  <td>12356.16k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>8.19</td>
  <td>8.69</td>
  <td>9.85</td>
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
  <td>10.09k</td>
  <td>12.55k</td>
  <td>1.47k</td>
  <td>53.36</td>
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>7643.53k</td>
  <td>11511.61k</td>
  <td>11780.07k</td>
  <td>12356.16k</td>
</tr><tr>
  <td>text.txt</td>
  <td>26.70k</td>
  <td>32.30k</td>
  <td>2.80k</td>
  <td>1.28</td>
  <td>22358.72k</td>
  <td>22358.72k</td>
  <td>22358.72k</td>
  <td>22358.72k</td>
  <td>29563.93k</td>
  <td>30356.77k</td>
  <td>32303.33k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.84k</td>
  <td>10.43k</td>
  <td>1.05k</td>
  <td>1.37k</td>
  <td>2532.69k</td>
  <td>2532.69k</td>
  <td>2532.69k</td>
  <td>2532.69k</td>
  <td>5018.66k</td>
  <td>5536.74k</td>
  <td>6638.66k</td>
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
  <td>6.33</td>
  <td>3.14</td>
  <td>11.72</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>5.27</td>
  <td>8.19</td>
  <td>8.69</td>
  <td>9.85</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.38</td>
  <td>1.45</td>
  <td>5.14</td>
  <td>1.99</td>
  <td>1.99</td>
  <td>1.99</td>
  <td>1.99</td>
  <td>2.87</td>
  <td>3.18</td>
  <td>4.48</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>17.01</td>
  <td>8.44</td>
  <td>40.16</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>14.08</td>
  <td>19.79</td>
  <td>20.57</td>
  <td>23.13</td>
</tr></table>