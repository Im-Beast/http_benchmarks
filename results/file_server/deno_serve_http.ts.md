# File server
## Name: Deno.serveHttp 

### Version: Deno 1.35.2
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
    <td>1.64k</td>
    <td>4.73k</td>
    <td>901.42</td>
    <td>5.11 MiB</td>
    <td>41.38</td>
    <td>10.69</td>
    <td>49.03</td>
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
  <td>570.48k</td>
  <td>570.48k</td>
  <td>570.48k</td>
  <td>570.48k</td>
  <td>2780.07k</td>
  <td>3122.27k</td>
  <td>3991.29k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.94</td>
  <td>43.98</td>
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
  <td>1.64k</td>
  <td>4.73k</td>
  <td>901.42</td>
  <td>5.11</td>
  <td>570.48k</td>
  <td>570.48k</td>
  <td>570.48k</td>
  <td>570.48k</td>
  <td>2780.07k</td>
  <td>3122.27k</td>
  <td>3991.29k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.67k</td>
  <td>24.35k</td>
  <td>1.27k</td>
  <td>578.32</td>
  <td>600.33k</td>
  <td>600.33k</td>
  <td>600.33k</td>
  <td>600.33k</td>
  <td>2692.71k</td>
  <td>3243.15k</td>
  <td>5061.79k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.30k</td>
  <td>204.02k</td>
  <td>10.86k</td>
  <td>0.08</td>
  <td>444.42k</td>
  <td>444.42k</td>
  <td>444.42k</td>
  <td>444.42k</td>
  <td>3301.60k</td>
  <td>4160.44k</td>
  <td>9214.46k</td>
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
  <td>41.38</td>
  <td>10.69</td>
  <td>49.03</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.05</td>
  <td>42.94</td>
  <td>43.98</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.30</td>
  <td>0.22</td>
  <td>53.92</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.96</td>
  <td>43.99</td>
  <td>49.99</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.19</td>
  <td>0.24</td>
  <td>46.20</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.04</td>
  <td>42.22</td>
  <td>43.03</td>
</tr></table>