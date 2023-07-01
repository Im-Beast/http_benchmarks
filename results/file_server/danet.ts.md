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
    <td>4.48k</td>
    <td>9.46k</td>
    <td>1.69k</td>
    <td>23.58 MiB</td>
    <td>14.33</td>
    <td>7.84</td>
    <td>25.67</td>
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
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>6284.30k</td>
  <td>7153.51k</td>
  <td>9183.48k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>17.34</td>
  <td>17.64</td>
  <td>18.71</td>
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
  <td>4.48k</td>
  <td>9.46k</td>
  <td>1.69k</td>
  <td>23.58</td>
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>1885.74k</td>
  <td>6284.30k</td>
  <td>7153.51k</td>
  <td>9183.48k</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.92k</td>
  <td>13.05k</td>
  <td>1.61k</td>
  <td>0.42</td>
  <td>6790.88k</td>
  <td>6790.88k</td>
  <td>6790.88k</td>
  <td>6790.88k</td>
  <td>11093.21k</td>
  <td>12154.13k</td>
  <td>12717.64k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.37k</td>
  <td>8.00k</td>
  <td>822.30</td>
  <td>480.65</td>
  <td>505.88k</td>
  <td>505.88k</td>
  <td>505.88k</td>
  <td>505.88k</td>
  <td>2274.88k</td>
  <td>2599.78k</td>
  <td>3909.11k</td>
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
  <td>14.33</td>
  <td>7.84</td>
  <td>25.67</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>17.34</td>
  <td>17.64</td>
  <td>18.71</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.22</td>
  <td>4.09</td>
  <td>11.99</td>
  <td>6.08</td>
  <td>6.08</td>
  <td>6.08</td>
  <td>6.08</td>
  <td>8.37</td>
  <td>8.76</td>
  <td>11.08</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>48.58</td>
  <td>7.56</td>
  <td>337.62</td>
  <td>21.48</td>
  <td>21.48</td>
  <td>21.48</td>
  <td>21.48</td>
  <td>104.29</td>
  <td>136.54</td>
  <td>190.34</td>
</tr></table>