# Name: Danet 
  
  ### Version: 1.7.4
  ### Deno version: 1.34.3

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
    <td>4.27k</td>
    <td>11.01k</td>
    <td>1.28k</td>
    <td>262.23 MiB</td>
    <td>27.95</td>
    <td>6.50</td>
    <td>160.94</td>
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
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>5877.13k</td>
  <td>6426.92k</td>
  <td>7470.51k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>50.01</td>
  <td>67.21</td>
  <td>99.67</td>
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
  <td>4.27k</td>
  <td>11.01k</td>
  <td>1.28k</td>
  <td>262.23</td>
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>2540.11k</td>
  <td>5877.13k</td>
  <td>6426.92k</td>
  <td>7470.51k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.47k</td>
  <td>15.05k</td>
  <td>1.90k</td>
  <td>0.45</td>
  <td>6915.31k</td>
  <td>6915.31k</td>
  <td>6915.31k</td>
  <td>6915.31k</td>
  <td>12249.26k</td>
  <td>13126.38k</td>
  <td>14330.97k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.43k</td>
  <td>7.05k</td>
  <td>686.97</td>
  <td>511.84</td>
  <td>620.83k</td>
  <td>620.83k</td>
  <td>620.83k</td>
  <td>620.83k</td>
  <td>2268.12k</td>
  <td>2562.95k</td>
  <td>3283.84k</td>
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
  <td>27.95</td>
  <td>6.50</td>
  <td>160.94</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>16.20</td>
  <td>50.01</td>
  <td>67.21</td>
  <td>99.67</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.79</td>
  <td>4.15</td>
  <td>11.11</td>
  <td>5.86</td>
  <td>5.86</td>
  <td>5.86</td>
  <td>5.86</td>
  <td>7.59</td>
  <td>8.02</td>
  <td>10.22</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>45.67</td>
  <td>7.94</td>
  <td>303.35</td>
  <td>23.82</td>
  <td>23.82</td>
  <td>23.82</td>
  <td>23.82</td>
  <td>88.03</td>
  <td>121.92</td>
  <td>184.82</td>
</tr></table>