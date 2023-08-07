# Multiple routes
## Name: Composium 

### Version: 0.1.1
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
    <td>14.02k</td>
    <td>16.12k</td>
    <td>1.74k</td>
    <td>0.15 MiB</td>
    <td>4.55</td>
    <td>1.85</td>
    <td>10.02</td>
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
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>15413.84k</td>
  <td>15662.37k</td>
  <td>16116.99k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>5.36</td>
  <td>6.14</td>
  <td>7.68</td>
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
  <td>14.02k</td>
  <td>16.12k</td>
  <td>1.74k</td>
  <td>0.15</td>
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>11506.99k</td>
  <td>15413.84k</td>
  <td>15662.37k</td>
  <td>16116.99k</td>
</tr><tr>
  <td>/random_number</td>
  <td>14.31k</td>
  <td>16.39k</td>
  <td>1.49k</td>
  <td>0.25</td>
  <td>12263.13k</td>
  <td>12263.13k</td>
  <td>12263.13k</td>
  <td>12263.13k</td>
  <td>15522.57k</td>
  <td>15852.70k</td>
  <td>16391.37k</td>
</tr><tr>
  <td>/count</td>
  <td>14.40k</td>
  <td>16.25k</td>
  <td>1.31k</td>
  <td>0.01</td>
  <td>12715.63k</td>
  <td>12715.63k</td>
  <td>12715.63k</td>
  <td>12715.63k</td>
  <td>15691.89k</td>
  <td>15927.19k</td>
  <td>16248.64k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>17.62k</td>
  <td>19.84k</td>
  <td>1.73k</td>
  <td>0.03</td>
  <td>14712.84k</td>
  <td>14712.84k</td>
  <td>14712.84k</td>
  <td>14712.84k</td>
  <td>19585.34k</td>
  <td>19699.93k</td>
  <td>19835.89k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>17.49k</td>
  <td>19.65k</td>
  <td>2.02k</td>
  <td>0.03</td>
  <td>14916.90k</td>
  <td>14916.90k</td>
  <td>14916.90k</td>
  <td>14916.90k</td>
  <td>19467.89k</td>
  <td>19561.68k</td>
  <td>19645.45k</td>
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
  <td>4.55</td>
  <td>1.85</td>
  <td>10.02</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>3.82</td>
  <td>5.36</td>
  <td>6.14</td>
  <td>7.68</td>
</tr><tr>
  <td>/random_number</td>
  <td>4.45</td>
  <td>1.43</td>
  <td>9.26</td>
  <td>3.88</td>
  <td>3.88</td>
  <td>3.88</td>
  <td>3.88</td>
  <td>5.09</td>
  <td>5.57</td>
  <td>7.85</td>
</tr><tr>
  <td>/count</td>
  <td>4.42</td>
  <td>1.46</td>
  <td>8.48</td>
  <td>3.80</td>
  <td>3.80</td>
  <td>3.80</td>
  <td>3.80</td>
  <td>5.03</td>
  <td>5.52</td>
  <td>6.85</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.60</td>
  <td>1.23</td>
  <td>6.84</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>3.08</td>
  <td>4.23</td>
  <td>4.61</td>
  <td>5.49</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.64</td>
  <td>1.43</td>
  <td>7.54</td>
  <td>3.09</td>
  <td>3.09</td>
  <td>3.09</td>
  <td>3.09</td>
  <td>4.30</td>
  <td>4.87</td>
  <td>6.14</td>
</tr></table>