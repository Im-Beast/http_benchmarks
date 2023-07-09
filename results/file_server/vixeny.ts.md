# Name: Vixeny 
  
  ### Version: 0.0.63
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
    <td>13.84k</td>
    <td>15.77k</td>
    <td>1.51k</td>
    <td>73.26 MiB</td>
    <td>4.61</td>
    <td>1.85</td>
    <td>7.80</td>
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
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>15173.48k</td>
  <td>15309.32k</td>
  <td>15768.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>5.49</td>
  <td>6.36</td>
  <td>7.02</td>
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
  <td>13.84k</td>
  <td>15.77k</td>
  <td>1.51k</td>
  <td>73.26</td>
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>11285.03k</td>
  <td>15173.48k</td>
  <td>15309.32k</td>
  <td>15768.07k</td>
</tr><tr>
  <td>text.txt</td>
  <td>93.50k</td>
  <td>100.41k</td>
  <td>5.48k</td>
  <td>2.85</td>
  <td>92607.88k</td>
  <td>92607.88k</td>
  <td>92607.88k</td>
  <td>92607.88k</td>
  <td>99832.62k</td>
  <td>100409.84k</td>
  <td>100409.84k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.45k</td>
  <td>5.00k</td>
  <td>244.39</td>
  <td>1.62k</td>
  <td>4231.12k</td>
  <td>4231.12k</td>
  <td>4231.12k</td>
  <td>4231.12k</td>
  <td>4705.96k</td>
  <td>4744.73k</td>
  <td>4831.26k</td>
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
  <td>4.61</td>
  <td>1.85</td>
  <td>7.80</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>3.95</td>
  <td>5.49</td>
  <td>6.36</td>
  <td>7.02</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.68</td>
  <td>0.56</td>
  <td>1.68</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.79</td>
  <td>0.88</td>
  <td>0.97</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.37</td>
  <td>2.12</td>
  <td>40.60</td>
  <td>13.38</td>
  <td>13.38</td>
  <td>13.38</td>
  <td>13.38</td>
  <td>15.75</td>
  <td>15.98</td>
  <td>16.63</td>
</tr></table>