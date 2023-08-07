# Multiple routes
## Name: Deno.serveHttp 

### Version: Deno 1.35.2
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
    <td>43.06k</td>
    <td>55.74k</td>
    <td>6.63k</td>
    <td>0.45 MiB</td>
    <td>1.47</td>
    <td>0.88</td>
    <td>4.21</td>
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
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>49458.66k</td>
  <td>50009.20k</td>
  <td>55737.49k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.91</td>
  <td>2.22</td>
  <td>2.71</td>
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
  <td>/hello_world</td>
  <td>43.06k</td>
  <td>55.74k</td>
  <td>6.63k</td>
  <td>0.45</td>
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>37472.72k</td>
  <td>49458.66k</td>
  <td>50009.20k</td>
  <td>55737.49k</td>
</tr><tr>
  <td>/random_number</td>
  <td>44.97k</td>
  <td>54.97k</td>
  <td>7.93k</td>
  <td>0.79</td>
  <td>33424.12k</td>
  <td>33424.12k</td>
  <td>33424.12k</td>
  <td>33424.12k</td>
  <td>54521.07k</td>
  <td>54575.48k</td>
  <td>54972.42k</td>
</tr><tr>
  <td>/count</td>
  <td>43.71k</td>
  <td>53.57k</td>
  <td>7.87k</td>
  <td>0.04</td>
  <td>36900.08k</td>
  <td>36900.08k</td>
  <td>36900.08k</td>
  <td>36900.08k</td>
  <td>49316.53k</td>
  <td>52812.61k</td>
  <td>53565.57k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>43.66k</td>
  <td>53.82k</td>
  <td>6.80k</td>
  <td>0.08</td>
  <td>33190.58k</td>
  <td>33190.58k</td>
  <td>33190.58k</td>
  <td>33190.58k</td>
  <td>52013.94k</td>
  <td>52370.17k</td>
  <td>53817.11k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>46.61k</td>
  <td>55.01k</td>
  <td>6.66k</td>
  <td>0.09</td>
  <td>38062.62k</td>
  <td>38062.62k</td>
  <td>38062.62k</td>
  <td>38062.62k</td>
  <td>53581.95k</td>
  <td>53736.90k</td>
  <td>55013.43k</td>
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
  <td>/hello_world</td>
  <td>1.47</td>
  <td>0.88</td>
  <td>4.21</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.91</td>
  <td>2.22</td>
  <td>2.71</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.41</td>
  <td>0.80</td>
  <td>4.82</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.86</td>
  <td>2.27</td>
  <td>3.37</td>
</tr><tr>
  <td>/count</td>
  <td>1.46</td>
  <td>0.89</td>
  <td>7.29</td>
  <td>1.18</td>
  <td>1.18</td>
  <td>1.18</td>
  <td>1.18</td>
  <td>1.71</td>
  <td>2.03</td>
  <td>2.78</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.46</td>
  <td>0.99</td>
  <td>4.34</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.77</td>
  <td>2.12</td>
  <td>3.54</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.36</td>
  <td>0.96</td>
  <td>4.30</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.84</td>
  <td>2.07</td>
  <td>3.20</td>
</tr></table>