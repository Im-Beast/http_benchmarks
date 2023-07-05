# Name: std serve + serveDir 
  
  ### Version: 0.192.0
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
    <td>1.60k</td>
    <td>5.75k</td>
    <td>679.62</td>
    <td>5.10 MiB</td>
    <td>41.46</td>
    <td>2.42</td>
    <td>62.98</td>
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
  <td>778.29k</td>
  <td>778.29k</td>
  <td>778.29k</td>
  <td>778.29k</td>
  <td>2483.43k</td>
  <td>2738.06k</td>
  <td>3598.97k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.04</td>
  <td>42.99</td>
  <td>43.05</td>
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
  <td>5.75k</td>
  <td>679.62</td>
  <td>5.10</td>
  <td>778.29k</td>
  <td>778.29k</td>
  <td>778.29k</td>
  <td>778.29k</td>
  <td>2483.43k</td>
  <td>2738.06k</td>
  <td>3598.97k</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.21k</td>
  <td>276.29k</td>
  <td>10.18k</td>
  <td>0.08</td>
  <td>502.99k</td>
  <td>502.99k</td>
  <td>502.99k</td>
  <td>502.99k</td>
  <td>2850.94k</td>
  <td>3486.18k</td>
  <td>7079.17k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.96k</td>
  <td>108.61k</td>
  <td>5.14k</td>
  <td>527.55</td>
  <td>99.87k</td>
  <td>99.87k</td>
  <td>99.87k</td>
  <td>99.87k</td>
  <td>4880.44k</td>
  <td>6023.16k</td>
  <td>16031.85k</td>
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
  <td>41.46</td>
  <td>2.42</td>
  <td>62.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.04</td>
  <td>42.99</td>
  <td>43.05</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.34</td>
  <td>0.44</td>
  <td>49.14</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.06</td>
  <td>42.98</td>
  <td>43.93</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>44.21</td>
  <td>0.23</td>
  <td>52.74</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>48.96</td>
  <td>49.53</td>
  <td>50.92</td>
</tr></table>