# Name: std serve + serveDir 
  
  ### Version: 0.194.0
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
    <td>1.64k</td>
    <td>6.84k</td>
    <td>863.65</td>
    <td>5.11 MiB</td>
    <td>41.41</td>
    <td>11.41</td>
    <td>61.35</td>
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
  <td>702.15k</td>
  <td>702.15k</td>
  <td>702.15k</td>
  <td>702.15k</td>
  <td>2815.82k</td>
  <td>3261.68k</td>
  <td>4119.84k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.94</td>
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
  <td>1.64k</td>
  <td>6.84k</td>
  <td>863.65</td>
  <td>5.11</td>
  <td>702.15k</td>
  <td>702.15k</td>
  <td>702.15k</td>
  <td>702.15k</td>
  <td>2815.82k</td>
  <td>3261.68k</td>
  <td>4119.84k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.11k</td>
  <td>214.96k</td>
  <td>8.29k</td>
  <td>0.08</td>
  <td>502.40k</td>
  <td>502.40k</td>
  <td>502.40k</td>
  <td>502.40k</td>
  <td>3015.90k</td>
  <td>4494.01k</td>
  <td>9256.73k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.76k</td>
  <td>68.33k</td>
  <td>3.37k</td>
  <td>543.08</td>
  <td>126.91k</td>
  <td>126.91k</td>
  <td>126.91k</td>
  <td>126.91k</td>
  <td>4133.81k</td>
  <td>5401.76k</td>
  <td>9550.50k</td>
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
  <td>11.41</td>
  <td>61.35</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.94</td>
  <td>43.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.25</td>
  <td>6.39</td>
  <td>48.28</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.03</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.97</td>
  <td>0.21</td>
  <td>52.33</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>46.96</td>
  <td>47.21</td>
  <td>49.22</td>
</tr></table>