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
    <td>1.98k</td>
    <td>213.82k</td>
    <td>9.78k</td>
    <td>5.11 MiB</td>
    <td>41.41</td>
    <td>11.34</td>
    <td>61.57</td>
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
  <td>623.02k</td>
  <td>623.02k</td>
  <td>623.02k</td>
  <td>623.02k</td>
  <td>2801.46k</td>
  <td>3300.31k</td>
  <td>4108.47k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.02</td>
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
  <td>1.98k</td>
  <td>213.82k</td>
  <td>9.78k</td>
  <td>5.11</td>
  <td>623.02k</td>
  <td>623.02k</td>
  <td>623.02k</td>
  <td>623.02k</td>
  <td>2801.46k</td>
  <td>3300.31k</td>
  <td>4108.47k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.17k</td>
  <td>206.80k</td>
  <td>9.80k</td>
  <td>0.08</td>
  <td>443.39k</td>
  <td>443.39k</td>
  <td>443.39k</td>
  <td>443.39k</td>
  <td>3436.72k</td>
  <td>4430.25k</td>
  <td>8086.22k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.97k</td>
  <td>121.70k</td>
  <td>6.03k</td>
  <td>548.20</td>
  <td>272.67k</td>
  <td>272.67k</td>
  <td>272.67k</td>
  <td>272.67k</td>
  <td>3769.09k</td>
  <td>5000.65k</td>
  <td>8684.43k</td>
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
  <td>41.41</td>
  <td>11.34</td>
  <td>61.57</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.06</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.28</td>
  <td>1.39</td>
  <td>48.61</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.02</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.50</td>
  <td>0.21</td>
  <td>51.29</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>46.20</td>
  <td>47.09</td>
  <td>48.92</td>
</tr></table>