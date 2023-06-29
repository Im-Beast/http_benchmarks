# Name: Oak 
  
  ### Version: 11.1.0

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
    <td>4.40k</td>
    <td>11.81k</td>
    <td>1.24k</td>
    <td>298.86 MiB</td>
    <td>25.03</td>
    <td>6.47</td>
    <td>139.42</td>
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
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>6057.50k</td>
  <td>6405.16k</td>
  <td>7719.28k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>43.53</td>
  <td>57.99</td>
  <td>87.56</td>
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
  <td>4.40k</td>
  <td>11.81k</td>
  <td>1.24k</td>
  <td>298.86</td>
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>2930.01k</td>
  <td>6057.50k</td>
  <td>6405.16k</td>
  <td>7719.28k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.53k</td>
  <td>15.02k</td>
  <td>2.29k</td>
  <td>0.45</td>
  <td>6801.69k</td>
  <td>6801.69k</td>
  <td>6801.69k</td>
  <td>6801.69k</td>
  <td>13315.20k</td>
  <td>13955.08k</td>
  <td>14735.50k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.63k</td>
  <td>8.34k</td>
  <td>666.85</td>
  <td>584.85</td>
  <td>841.40k</td>
  <td>841.40k</td>
  <td>841.40k</td>
  <td>841.40k</td>
  <td>2434.58k</td>
  <td>2655.84k</td>
  <td>3502.11k</td>
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
  <td>25.03</td>
  <td>6.47</td>
  <td>139.42</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>15.21</td>
  <td>43.53</td>
  <td>57.99</td>
  <td>87.56</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.78</td>
  <td>4.00</td>
  <td>11.03</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>5.80</td>
  <td>7.76</td>
  <td>8.21</td>
  <td>9.83</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>39.97</td>
  <td>7.14</td>
  <td>260.11</td>
  <td>21.74</td>
  <td>21.74</td>
  <td>21.74</td>
  <td>21.74</td>
  <td>75.45</td>
  <td>103.86</td>
  <td>161.46</td>
</tr></table>