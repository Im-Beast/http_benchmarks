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
    <td>498.26</td>
    <td>498.26</td>
    <td>0.00</td>
    <td>1.61 MiB</td>
    <td>1.85</td>
    <td>1.85</td>
    <td>1.85</td>
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
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
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
  <td>498.26</td>
  <td>498.26</td>
  <td>0.00</td>
  <td>1.61</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
  <td>498.26k</td>
</tr><tr>
  <td>text.txt</td>
  <td>482.74</td>
  <td>482.74</td>
  <td>0.00</td>
  <td>0.03</td>
  <td>482.74k</td>
  <td>482.74k</td>
  <td>482.74k</td>
  <td>482.74k</td>
  <td>482.74k</td>
  <td>482.74k</td>
  <td>482.74k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>629.12</td>
  <td>629.12</td>
  <td>0.00</td>
  <td>224.36</td>
  <td>629.12k</td>
  <td>629.12k</td>
  <td>629.12k</td>
  <td>629.12k</td>
  <td>629.12k</td>
  <td>629.12k</td>
  <td>629.12k</td>
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
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
</tr></table>