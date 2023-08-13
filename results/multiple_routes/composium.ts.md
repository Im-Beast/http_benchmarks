# Multiple routes
## Name: Composium 

### Version: 0.1.1
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
    <td>14.64k</td>
    <td>16.77k</td>
    <td>1.49k</td>
    <td>0.15 MiB</td>
    <td>4.35</td>
    <td>1.63</td>
    <td>8.84</td>
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
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>16339.11k</td>
  <td>16610.87k</td>
  <td>16770.17k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>5.10</td>
  <td>5.48</td>
  <td>7.14</td>
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
  <td>14.64k</td>
  <td>16.77k</td>
  <td>1.49k</td>
  <td>0.15</td>
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>12731.22k</td>
  <td>16339.11k</td>
  <td>16610.87k</td>
  <td>16770.17k</td>
</tr><tr>
  <td>/random_number</td>
  <td>14.50k</td>
  <td>16.40k</td>
  <td>1.34k</td>
  <td>0.25</td>
  <td>12578.74k</td>
  <td>12578.74k</td>
  <td>12578.74k</td>
  <td>12578.74k</td>
  <td>15967.44k</td>
  <td>16150.88k</td>
  <td>16396.17k</td>
</tr><tr>
  <td>/count</td>
  <td>14.57k</td>
  <td>16.85k</td>
  <td>1.52k</td>
  <td>0.01</td>
  <td>12577.08k</td>
  <td>12577.08k</td>
  <td>12577.08k</td>
  <td>12577.08k</td>
  <td>16126.44k</td>
  <td>16371.79k</td>
  <td>16846.77k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>18.02k</td>
  <td>20.75k</td>
  <td>1.99k</td>
  <td>0.03</td>
  <td>14416.21k</td>
  <td>14416.21k</td>
  <td>14416.21k</td>
  <td>14416.21k</td>
  <td>20208.97k</td>
  <td>20282.26k</td>
  <td>20754.17k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>18.29k</td>
  <td>20.57k</td>
  <td>1.90k</td>
  <td>0.03</td>
  <td>15549.92k</td>
  <td>15549.92k</td>
  <td>15549.92k</td>
  <td>15549.92k</td>
  <td>20219.96k</td>
  <td>20316.65k</td>
  <td>20571.78k</td>
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
  <td>4.35</td>
  <td>1.63</td>
  <td>8.84</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>3.68</td>
  <td>5.10</td>
  <td>5.48</td>
  <td>7.14</td>
</tr><tr>
  <td>/random_number</td>
  <td>4.38</td>
  <td>1.38</td>
  <td>8.69</td>
  <td>3.77</td>
  <td>3.77</td>
  <td>3.77</td>
  <td>3.77</td>
  <td>5.09</td>
  <td>5.58</td>
  <td>6.55</td>
</tr><tr>
  <td>/count</td>
  <td>4.39</td>
  <td>1.61</td>
  <td>9.16</td>
  <td>3.74</td>
  <td>3.74</td>
  <td>3.74</td>
  <td>3.74</td>
  <td>5.10</td>
  <td>5.66</td>
  <td>6.88</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.53</td>
  <td>1.62</td>
  <td>7.38</td>
  <td>3.01</td>
  <td>3.01</td>
  <td>3.01</td>
  <td>3.01</td>
  <td>4.18</td>
  <td>4.67</td>
  <td>5.82</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.48</td>
  <td>1.20</td>
  <td>7.23</td>
  <td>2.98</td>
  <td>2.98</td>
  <td>2.98</td>
  <td>2.98</td>
  <td>4.19</td>
  <td>4.63</td>
  <td>5.59</td>
</tr></table>