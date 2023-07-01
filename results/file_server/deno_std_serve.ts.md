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
    <td>1.80k</td>
    <td>181.48k</td>
    <td>6.68k</td>
    <td>5.10 MiB</td>
    <td>41.65</td>
    <td>13.29</td>
    <td>67.67</td>
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
  <td>667.94k</td>
  <td>667.94k</td>
  <td>667.94k</td>
  <td>667.94k</td>
  <td>2704.45k</td>
  <td>3108.25k</td>
  <td>3708.51k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>42.94</td>
  <td>43.00</td>
  <td>44.01</td>
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
  <td>1.80k</td>
  <td>181.48k</td>
  <td>6.68k</td>
  <td>5.10</td>
  <td>667.94k</td>
  <td>667.94k</td>
  <td>667.94k</td>
  <td>667.94k</td>
  <td>2704.45k</td>
  <td>3108.25k</td>
  <td>3708.51k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.87k</td>
  <td>95.49k</td>
  <td>3.73k</td>
  <td>0.08</td>
  <td>750.34k</td>
  <td>750.34k</td>
  <td>750.34k</td>
  <td>750.34k</td>
  <td>2990.75k</td>
  <td>3851.62k</td>
  <td>9507.36k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>64.60k</td>
  <td>50000.00k</td>
  <td>1757.98k</td>
  <td>545.53</td>
  <td>210.48k</td>
  <td>210.48k</td>
  <td>210.48k</td>
  <td>210.48k</td>
  <td>4572.87k</td>
  <td>5750.88k</td>
  <td>11458.38k</td>
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
  <td>41.65</td>
  <td>13.29</td>
  <td>67.67</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>42.94</td>
  <td>43.00</td>
  <td>44.01</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.38</td>
  <td>9.01</td>
  <td>51.51</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.07</td>
  <td>42.99</td>
  <td>44.01</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>43.60</td>
  <td>0.24</td>
  <td>55.14</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>48.13</td>
  <td>49.06</td>
  <td>50.97</td>
</tr></table>