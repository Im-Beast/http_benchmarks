# File server
## Name: Vixeny 

### Version: 0.0.682
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
    <td>10.41k</td>
    <td>12.99k</td>
    <td>1.78k</td>
    <td>55.14 MiB</td>
    <td>6.12</td>
    <td>1.97</td>
    <td>21.15</td>
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
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>12007.50k</td>
  <td>12199.14k</td>
  <td>12709.05k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>7.76</td>
  <td>8.94</td>
  <td>11.33</td>
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
  <td>10.41k</td>
  <td>12.99k</td>
  <td>1.78k</td>
  <td>55.14</td>
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>7599.85k</td>
  <td>12007.50k</td>
  <td>12199.14k</td>
  <td>12709.05k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>2.87k</td>
  <td>4.52k</td>
  <td>601.23</td>
  <td>1.05k</td>
  <td>2115.22k</td>
  <td>2115.22k</td>
  <td>2115.22k</td>
  <td>2115.22k</td>
  <td>3578.41k</td>
  <td>3736.45k</td>
  <td>4019.93k</td>
</tr><tr>
  <td>text.txt</td>
  <td>39.69k</td>
  <td>47.91k</td>
  <td>5.29k</td>
  <td>1.22</td>
  <td>31890.53k</td>
  <td>31890.53k</td>
  <td>31890.53k</td>
  <td>31890.53k</td>
  <td>45979.01k</td>
  <td>46355.89k</td>
  <td>47914.14k</td>
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
  <td>6.12</td>
  <td>1.97</td>
  <td>21.15</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>4.99</td>
  <td>7.76</td>
  <td>8.94</td>
  <td>11.33</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>22.27</td>
  <td>2.74</td>
  <td>44.03</td>
  <td>18.58</td>
  <td>18.58</td>
  <td>18.58</td>
  <td>18.58</td>
  <td>26.75</td>
  <td>28.13</td>
  <td>30.23</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.59</td>
  <td>0.91</td>
  <td>12.54</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.82</td>
  <td>2.06</td>
  <td>3.19</td>
</tr></table>