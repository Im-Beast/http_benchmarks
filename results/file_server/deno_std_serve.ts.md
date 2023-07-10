# Name: std serve + serveDir 
  
  ### Version: 0.193.0
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
    <td>2.03k</td>
    <td>184.07k</td>
    <td>8.52k</td>
    <td>5.11 MiB</td>
    <td>41.39</td>
    <td>11.32</td>
    <td>61.21</td>
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
  <td>667.82k</td>
  <td>667.82k</td>
  <td>667.82k</td>
  <td>667.82k</td>
  <td>2564.19k</td>
  <td>3400.94k</td>
  <td>4146.64k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.94</td>
  <td>43.03</td>
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
  <td>2.03k</td>
  <td>184.07k</td>
  <td>8.52k</td>
  <td>5.11</td>
  <td>667.82k</td>
  <td>667.82k</td>
  <td>667.82k</td>
  <td>667.82k</td>
  <td>2564.19k</td>
  <td>3400.94k</td>
  <td>4146.64k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.16k</td>
  <td>300.03k</td>
  <td>11.20k</td>
  <td>0.08</td>
  <td>444.85k</td>
  <td>444.85k</td>
  <td>444.85k</td>
  <td>444.85k</td>
  <td>3175.56k</td>
  <td>3847.99k</td>
  <td>9243.04k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.88k</td>
  <td>90.29k</td>
  <td>4.65k</td>
  <td>548.24</td>
  <td>167.52k</td>
  <td>167.52k</td>
  <td>167.52k</td>
  <td>167.52k</td>
  <td>3864.14k</td>
  <td>5397.01k</td>
  <td>13458.64k</td>
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
  <td>41.39</td>
  <td>11.32</td>
  <td>61.21</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.94</td>
  <td>43.03</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.26</td>
  <td>6.35</td>
  <td>48.35</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.54</td>
  <td>0.21</td>
  <td>52.80</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>46.82</td>
  <td>47.22</td>
  <td>49.04</td>
</tr></table>