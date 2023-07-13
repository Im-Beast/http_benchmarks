# Name: Oak 
  
  ### Version: 12.6.0
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
    <td>5.82k</td>
    <td>15.83k</td>
    <td>3.12k</td>
    <td>29.70 MiB</td>
    <td>11.38</td>
    <td>5.28</td>
    <td>17.55</td>
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
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>9416.58k</td>
  <td>10946.87k</td>
  <td>12208.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>13.99</td>
  <td>14.51</td>
  <td>15.36</td>
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
  <td>5.82k</td>
  <td>15.83k</td>
  <td>3.12k</td>
  <td>29.70</td>
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>1411.90k</td>
  <td>9416.58k</td>
  <td>10946.87k</td>
  <td>12208.95k</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.01k</td>
  <td>15.52k</td>
  <td>2.94k</td>
  <td>0.47</td>
  <td>6727.85k</td>
  <td>6727.85k</td>
  <td>6727.85k</td>
  <td>6727.85k</td>
  <td>14119.36k</td>
  <td>14537.56k</td>
  <td>15327.38k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.65k</td>
  <td>6.63k</td>
  <td>659.75</td>
  <td>594.28</td>
  <td>909.39k</td>
  <td>909.39k</td>
  <td>909.39k</td>
  <td>909.39k</td>
  <td>2373.54k</td>
  <td>2633.77k</td>
  <td>3414.88k</td>
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
  <td>11.38</td>
  <td>5.28</td>
  <td>17.55</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>9.30</td>
  <td>13.99</td>
  <td>14.51</td>
  <td>15.36</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.46</td>
  <td>3.61</td>
  <td>10.01</td>
  <td>5.62</td>
  <td>5.62</td>
  <td>5.62</td>
  <td>5.62</td>
  <td>7.12</td>
  <td>7.55</td>
  <td>9.55</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>39.28</td>
  <td>5.75</td>
  <td>245.01</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>17.55</td>
  <td>81.73</td>
  <td>108.37</td>
  <td>157.23</td>
</tr></table>