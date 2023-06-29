# Name: std serve serveDir 
  
  ### Version: 0.192.0
  ### Deno version: 1.34.3

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
    <td>1.86k</td>
    <td>193.63k</td>
    <td>5.89k</td>
    <td>269.85 MiB</td>
    <td>42.52</td>
    <td>0.33</td>
    <td>55.29</td>
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
  <td>440.09k</td>
  <td>440.09k</td>
  <td>440.09k</td>
  <td>440.09k</td>
  <td>3555.87k</td>
  <td>4324.15k</td>
  <td>7623.60k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>44.99</td>
  <td>45.58</td>
  <td>46.68</td>
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
  <td>1.86k</td>
  <td>193.63k</td>
  <td>5.89k</td>
  <td>269.85</td>
  <td>440.09k</td>
  <td>440.09k</td>
  <td>440.09k</td>
  <td>440.09k</td>
  <td>3555.87k</td>
  <td>4324.15k</td>
  <td>7623.60k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.74k</td>
  <td>154.30k</td>
  <td>3.68k</td>
  <td>0.08</td>
  <td>665.14k</td>
  <td>665.14k</td>
  <td>665.14k</td>
  <td>665.14k</td>
  <td>2801.60k</td>
  <td>3537.59k</td>
  <td>5503.58k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.99k</td>
  <td>223.76k</td>
  <td>7.50k</td>
  <td>537.11</td>
  <td>110.57k</td>
  <td>110.57k</td>
  <td>110.57k</td>
  <td>110.57k</td>
  <td>4539.68k</td>
  <td>5579.22k</td>
  <td>10891.00k</td>
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
  <td>42.52</td>
  <td>0.33</td>
  <td>55.29</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>44.99</td>
  <td>45.58</td>
  <td>46.68</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.50</td>
  <td>0.43</td>
  <td>49.55</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.09</td>
  <td>42.99</td>
  <td>43.87</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>43.50</td>
  <td>0.23</td>
  <td>52.56</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>47.92</td>
  <td>48.17</td>
  <td>49.89</td>
</tr></table>