# Name: std serve serveDir 
  
  ### Version: 0.192.0

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
    <td>2.04k</td>
    <td>189.12k</td>
    <td>6.59k</td>
    <td>269.43 MiB</td>
    <td>42.49</td>
    <td>0.41</td>
    <td>55.54</td>
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
  <td>395.28k</td>
  <td>395.28k</td>
  <td>395.28k</td>
  <td>395.28k</td>
  <td>3671.43k</td>
  <td>4496.12k</td>
  <td>9584.49k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>44.56</td>
  <td>45.00</td>
  <td>45.99</td>
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
  <td>2.04k</td>
  <td>189.12k</td>
  <td>6.59k</td>
  <td>269.43</td>
  <td>395.28k</td>
  <td>395.28k</td>
  <td>395.28k</td>
  <td>395.28k</td>
  <td>3671.43k</td>
  <td>4496.12k</td>
  <td>9584.49k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.63k</td>
  <td>9.17k</td>
  <td>971.76</td>
  <td>0.08</td>
  <td>665.87k</td>
  <td>665.87k</td>
  <td>665.87k</td>
  <td>665.87k</td>
  <td>2699.00k</td>
  <td>3107.84k</td>
  <td>5422.39k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.48k</td>
  <td>369.69k</td>
  <td>12.33k</td>
  <td>536.27</td>
  <td>124.22k</td>
  <td>124.22k</td>
  <td>124.22k</td>
  <td>124.22k</td>
  <td>4716.93k</td>
  <td>6006.06k</td>
  <td>14790.67k</td>
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
  <td>42.49</td>
  <td>0.41</td>
  <td>55.54</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>44.56</td>
  <td>45.00</td>
  <td>45.99</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.35</td>
  <td>0.36</td>
  <td>48.56</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.04</td>
  <td>43.01</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>43.55</td>
  <td>0.23</td>
  <td>52.95</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>47.10</td>
  <td>47.95</td>
  <td>48.97</td>
</tr></table>