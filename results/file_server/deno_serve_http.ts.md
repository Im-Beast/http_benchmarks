# Name: Deno.serveHttp 
  
  ### Version: Deno 1.34.3
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
    <td>205.47k</td>
    <td>6.10k</td>
    <td>284.42 MiB</td>
    <td>41.24</td>
    <td>0.30</td>
    <td>47.61</td>
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
  <td>678.46k</td>
  <td>678.46k</td>
  <td>678.46k</td>
  <td>678.46k</td>
  <td>2614.00k</td>
  <td>2966.08k</td>
  <td>6255.88k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.47</td>
  <td>43.63</td>
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
  <td>205.47k</td>
  <td>6.10k</td>
  <td>284.42</td>
  <td>678.46k</td>
  <td>678.46k</td>
  <td>678.46k</td>
  <td>678.46k</td>
  <td>2614.00k</td>
  <td>2966.08k</td>
  <td>6255.88k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.28k</td>
  <td>385.10k</td>
  <td>13.22k</td>
  <td>0.08</td>
  <td>560.53k</td>
  <td>560.53k</td>
  <td>560.53k</td>
  <td>560.53k</td>
  <td>2654.57k</td>
  <td>2998.25k</td>
  <td>10944.57k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.71k</td>
  <td>92.40k</td>
  <td>2.69k</td>
  <td>566.24</td>
  <td>700.12k</td>
  <td>700.12k</td>
  <td>700.12k</td>
  <td>700.12k</td>
  <td>2625.66k</td>
  <td>3008.27k</td>
  <td>5299.77k</td>
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
  <td>41.24</td>
  <td>0.30</td>
  <td>47.61</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.47</td>
  <td>43.63</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.19</td>
  <td>0.26</td>
  <td>45.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.08</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.24</td>
  <td>0.15</td>
  <td>48.81</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.02</td>
  <td>42.92</td>
  <td>44.73</td>
</tr></table>