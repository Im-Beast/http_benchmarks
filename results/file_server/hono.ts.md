# File server
## Name: Hono 

### Version: 3.3.4
### Deno version: 1.35.2

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
    <td>2.10k</td>
    <td>159.72k</td>
    <td>5.98k</td>
    <td>8.18 MiB</td>
    <td>41.27</td>
    <td>8.05</td>
    <td>49.10</td>
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
  <td>288.86k</td>
  <td>288.86k</td>
  <td>288.86k</td>
  <td>288.86k</td>
  <td>3478.55k</td>
  <td>4351.10k</td>
  <td>5913.33k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.33</td>
  <td>44.06</td>
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
  <td>2.10k</td>
  <td>159.72k</td>
  <td>5.98k</td>
  <td>8.18</td>
  <td>288.86k</td>
  <td>288.86k</td>
  <td>288.86k</td>
  <td>288.86k</td>
  <td>3478.55k</td>
  <td>4351.10k</td>
  <td>5913.33k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.74k</td>
  <td>8.38k</td>
  <td>925.77</td>
  <td>616.58</td>
  <td>885.39k</td>
  <td>885.39k</td>
  <td>885.39k</td>
  <td>885.39k</td>
  <td>2835.82k</td>
  <td>3257.23k</td>
  <td>4248.08k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.11k</td>
  <td>161.89k</td>
  <td>7.28k</td>
  <td>0.07</td>
  <td>99.56k</td>
  <td>99.56k</td>
  <td>99.56k</td>
  <td>99.56k</td>
  <td>3140.64k</td>
  <td>4104.13k</td>
  <td>6018.63k</td>
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
  <td>41.27</td>
  <td>8.05</td>
  <td>49.10</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>40.96</td>
  <td>42.03</td>
  <td>42.33</td>
  <td>44.06</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>37.80</td>
  <td>0.22</td>
  <td>54.09</td>
  <td>40.47</td>
  <td>40.47</td>
  <td>40.47</td>
  <td>40.47</td>
  <td>42.06</td>
  <td>42.95</td>
  <td>45.92</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.16</td>
  <td>2.84</td>
  <td>49.13</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>40.95</td>
  <td>42.04</td>
  <td>42.12</td>
  <td>43.05</td>
</tr></table>