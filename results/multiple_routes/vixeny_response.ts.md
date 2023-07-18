# Name: Vixeny – Response 
  ### Description: Using type: 'response'
  ### Version: 0.0.675
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
    <td>1.04k</td>
    <td>1.04k</td>
    <td>0.00</td>
    <td>0.02 MiB</td>
    <td>0.80</td>
    <td>0.80</td>
    <td>0.80</td>
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
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
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
  <td>/random_number</td>
  <td>1.04k</td>
  <td>1.04k</td>
  <td>0.00</td>
  <td>0.02</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
  <td>1041.83k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>907.35</td>
  <td>907.35</td>
  <td>0.00</td>
  <td>0.01</td>
  <td>907.35k</td>
  <td>907.35k</td>
  <td>907.35k</td>
  <td>907.35k</td>
  <td>907.35k</td>
  <td>907.35k</td>
  <td>907.35k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>982.07</td>
  <td>982.07</td>
  <td>0.00</td>
  <td>0.00</td>
  <td>982.07k</td>
  <td>982.07k</td>
  <td>982.07k</td>
  <td>982.07k</td>
  <td>982.07k</td>
  <td>982.07k</td>
  <td>982.07k</td>
</tr><tr>
  <td>/count</td>
  <td>841.88</td>
  <td>841.88</td>
  <td>0.00</td>
  <td>0.00</td>
  <td>841.88k</td>
  <td>841.88k</td>
  <td>841.88k</td>
  <td>841.88k</td>
  <td>841.88k</td>
  <td>841.88k</td>
  <td>841.88k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>865.27</td>
  <td>865.27</td>
  <td>0.00</td>
  <td>0.00</td>
  <td>865.27k</td>
  <td>865.27k</td>
  <td>865.27k</td>
  <td>865.27k</td>
  <td>865.27k</td>
  <td>865.27k</td>
  <td>865.27k</td>
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
  <td>/random_number</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
  <td>0.80</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
  <td>0.93</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
  <td>0.77</td>
</tr><tr>
  <td>/count</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
</tr></table>