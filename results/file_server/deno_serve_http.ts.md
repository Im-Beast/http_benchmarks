# File server
## Name: Deno.serveHttp 

### Version: Deno 1.35.1
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
    <td>1.79k</td>
    <td>124.53k</td>
    <td>4.65k</td>
    <td>5.12 MiB</td>
    <td>41.29</td>
    <td>0.74</td>
    <td>46.24</td>
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
  <td>601.60k</td>
  <td>601.60k</td>
  <td>601.60k</td>
  <td>601.60k</td>
  <td>3009.56k</td>
  <td>3671.24k</td>
  <td>4860.17k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.01</td>
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
  <td>1.79k</td>
  <td>124.53k</td>
  <td>4.65k</td>
  <td>5.12</td>
  <td>601.60k</td>
  <td>601.60k</td>
  <td>601.60k</td>
  <td>601.60k</td>
  <td>3009.56k</td>
  <td>3671.24k</td>
  <td>4860.17k</td>
</tr><tr>
  <td>text.txt</td>
  <td>3.25k</td>
  <td>288.24k</td>
  <td>17.87k</td>
  <td>0.08</td>
  <td>110.73k</td>
  <td>110.73k</td>
  <td>110.73k</td>
  <td>110.73k</td>
  <td>4204.02k</td>
  <td>5556.81k</td>
  <td>15609.69k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.75k</td>
  <td>68.04k</td>
  <td>2.80k</td>
  <td>562.25</td>
  <td>498.44k</td>
  <td>498.44k</td>
  <td>498.44k</td>
  <td>498.44k</td>
  <td>2901.51k</td>
  <td>3557.83k</td>
  <td>6962.18k</td>
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
  <td>41.29</td>
  <td>0.74</td>
  <td>46.24</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.07</td>
  <td>43.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.14</td>
  <td>4.27</td>
  <td>45.07</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>42.98</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>41.48</td>
  <td>0.17</td>
  <td>49.76</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.96</td>
  <td>44.01</td>
  <td>47.13</td>
</tr></table>