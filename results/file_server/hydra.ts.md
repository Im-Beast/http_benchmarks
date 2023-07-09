# Name: Hydra 
  
  ### Version: 0.1.0
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
    <td>15.78k</td>
    <td>16.99k</td>
    <td>783.75</td>
    <td>83.60 MiB</td>
    <td>4.04</td>
    <td>1.44</td>
    <td>6.41</td>
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
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>16489.57k</td>
  <td>16581.69k</td>
  <td>16991.30k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>4.36</td>
  <td>4.46</td>
  <td>4.69</td>
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
  <td>15.78k</td>
  <td>16.99k</td>
  <td>783.75</td>
  <td>83.60</td>
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>15000.42k</td>
  <td>16489.57k</td>
  <td>16581.69k</td>
  <td>16991.30k</td>
</tr><tr>
  <td>text.txt</td>
  <td>128.37k</td>
  <td>133.76k</td>
  <td>7.78k</td>
  <td>3.92</td>
  <td>110176.65k</td>
  <td>110176.65k</td>
  <td>110176.65k</td>
  <td>110176.65k</td>
  <td>133764.10k</td>
  <td>133764.10k</td>
  <td>133764.10k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.26k</td>
  <td>6.93k</td>
  <td>614.75</td>
  <td>1.55k</td>
  <td>3674.41k</td>
  <td>3674.41k</td>
  <td>3674.41k</td>
  <td>3674.41k</td>
  <td>5287.53k</td>
  <td>5356.00k</td>
  <td>5572.63k</td>
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
  <td>4.04</td>
  <td>1.44</td>
  <td>6.41</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>3.49</td>
  <td>4.36</td>
  <td>4.46</td>
  <td>4.69</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.49</td>
  <td>0.38</td>
  <td>1.28</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.58</td>
  <td>0.61</td>
  <td>0.67</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.08</td>
  <td>1.86</td>
  <td>18.64</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>13.63</td>
  <td>17.33</td>
  <td>17.51</td>
  <td>17.81</td>
</tr></table>