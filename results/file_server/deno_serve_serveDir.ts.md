# File server
## Name: Deno.serve + serveDir from std 

### Version: std 0.198.0
### Deno version: 1.36.0

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
    <td>1.60k</td>
    <td>6.14k</td>
    <td>953.28</td>
    <td>8.13 MiB</td>
    <td>41.50</td>
    <td>4.12</td>
    <td>58.60</td>
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
  <td>553.67k</td>
  <td>553.67k</td>
  <td>553.67k</td>
  <td>553.67k</td>
  <td>2902.63k</td>
  <td>3327.77k</td>
  <td>4208.63k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.84</td>
  <td>43.02</td>
  <td>46.04</td>
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
  <td>1.60k</td>
  <td>6.14k</td>
  <td>953.28</td>
  <td>8.13</td>
  <td>553.67k</td>
  <td>553.67k</td>
  <td>553.67k</td>
  <td>553.67k</td>
  <td>2902.63k</td>
  <td>3327.77k</td>
  <td>4208.63k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.27k</td>
  <td>5.99k</td>
  <td>952.98</td>
  <td>1.56k</td>
  <td>3311.06k</td>
  <td>3311.06k</td>
  <td>3311.06k</td>
  <td>3311.06k</td>
  <td>5260.49k</td>
  <td>5482.81k</td>
  <td>5701.77k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.64k</td>
  <td>8.07k</td>
  <td>1.25k</td>
  <td>0.07</td>
  <td>329.94k</td>
  <td>329.94k</td>
  <td>329.94k</td>
  <td>329.94k</td>
  <td>3016.58k</td>
  <td>3735.75k</td>
  <td>5079.97k</td>
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
  <td>41.50</td>
  <td>4.12</td>
  <td>58.60</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.84</td>
  <td>43.02</td>
  <td>46.04</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.82</td>
  <td>0.29</td>
  <td>63.99</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>44.54</td>
  <td>46.14</td>
  <td>50.56</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.39</td>
  <td>2.56</td>
  <td>52.33</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>40.97</td>
  <td>42.11</td>
  <td>42.98</td>
  <td>44.47</td>
</tr></table>