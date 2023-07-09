# Name: Deno.serve 
  
  ### Version: std 0.192.0
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
    <td>2.23k</td>
    <td>272.53k</td>
    <td>10.25k</td>
    <td>8.21 MiB</td>
    <td>41.12</td>
    <td>6.64</td>
    <td>45.79</td>
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
  <td>331.95k</td>
  <td>331.95k</td>
  <td>331.95k</td>
  <td>331.95k</td>
  <td>3701.97k</td>
  <td>5505.97k</td>
  <td>10315.88k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.90</td>
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
  <td>2.23k</td>
  <td>272.53k</td>
  <td>10.25k</td>
  <td>8.21</td>
  <td>331.95k</td>
  <td>331.95k</td>
  <td>331.95k</td>
  <td>331.95k</td>
  <td>3701.97k</td>
  <td>5505.97k</td>
  <td>10315.88k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.81k</td>
  <td>236.67k</td>
  <td>12.70k</td>
  <td>0.07</td>
  <td>75.75k</td>
  <td>75.75k</td>
  <td>75.75k</td>
  <td>75.75k</td>
  <td>3732.84k</td>
  <td>5452.87k</td>
  <td>16022.80k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.97k</td>
  <td>183.82k</td>
  <td>6.96k</td>
  <td>572.16</td>
  <td>569.30k</td>
  <td>569.30k</td>
  <td>569.30k</td>
  <td>569.30k</td>
  <td>3225.29k</td>
  <td>4018.10k</td>
  <td>6360.83k</td>
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
  <td>41.12</td>
  <td>6.64</td>
  <td>45.79</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.90</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.03</td>
  <td>1.65</td>
  <td>45.37</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.00</td>
  <td>42.02</td>
  <td>42.12</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>40.73</td>
  <td>0.15</td>
  <td>49.39</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.01</td>
  <td>42.03</td>
  <td>42.99</td>
</tr></table>