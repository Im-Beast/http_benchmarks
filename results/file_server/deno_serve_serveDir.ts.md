# File server
## Name: Deno.serve + serveDir from std 

### Version: std 0.194.0
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
    <td>8.45k</td>
    <td>1.01k</td>
    <td>8.17 MiB</td>
    <td>41.33</td>
    <td>3.48</td>
    <td>50.39</td>
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
  <td>500.02k</td>
  <td>500.02k</td>
  <td>500.02k</td>
  <td>500.02k</td>
  <td>2803.71k</td>
  <td>3550.98k</td>
  <td>4684.77k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.03</td>
  <td>42.94</td>
  <td>43.95</td>
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
  <td>8.45k</td>
  <td>1.01k</td>
  <td>8.17</td>
  <td>500.02k</td>
  <td>500.02k</td>
  <td>500.02k</td>
  <td>500.02k</td>
  <td>2803.71k</td>
  <td>3550.98k</td>
  <td>4684.77k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.63k</td>
  <td>270.49k</td>
  <td>13.60k</td>
  <td>0.07</td>
  <td>427.05k</td>
  <td>427.05k</td>
  <td>427.05k</td>
  <td>427.05k</td>
  <td>3185.01k</td>
  <td>5326.10k</td>
  <td>8946.85k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.93k</td>
  <td>140.18k</td>
  <td>5.36k</td>
  <td>597.82</td>
  <td>620.34k</td>
  <td>620.34k</td>
  <td>620.34k</td>
  <td>620.34k</td>
  <td>2892.81k</td>
  <td>3490.83k</td>
  <td>4821.74k</td>
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
  <td>41.33</td>
  <td>3.48</td>
  <td>50.39</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.03</td>
  <td>42.94</td>
  <td>43.95</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.25</td>
  <td>4.42</td>
  <td>46.59</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.03</td>
  <td>42.79</td>
  <td>43.06</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.00</td>
  <td>0.20</td>
  <td>54.26</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.04</td>
  <td>42.92</td>
  <td>43.88</td>
</tr></table>