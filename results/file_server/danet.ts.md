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
    <td>4.31k</td>
    <td>11.12k</td>
    <td>1.32k</td>
    <td>288.03 MiB</td>
    <td>25.85</td>
    <td>6.49</td>
    <td>141.49</td>
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
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>6083.44k</td>
  <td>6535.09k</td>
  <td>7772.62k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>45.32</td>
  <td>61.26</td>
  <td>93.73</td>
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
  <td>4.31k</td>
  <td>11.12k</td>
  <td>1.32k</td>
  <td>288.03</td>
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>2787.29k</td>
  <td>6083.44k</td>
  <td>6535.09k</td>
  <td>7772.62k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.27k</td>
  <td>15.33k</td>
  <td>2.31k</td>
  <td>0.44</td>
  <td>6807.04k</td>
  <td>6807.04k</td>
  <td>6807.04k</td>
  <td>6807.04k</td>
  <td>13343.91k</td>
  <td>14067.13k</td>
  <td>15138.50k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.59k</td>
  <td>7.53k</td>
  <td>729.64</td>
  <td>563.26</td>
  <td>791.23k</td>
  <td>791.23k</td>
  <td>791.23k</td>
  <td>791.23k</td>
  <td>2434.37k</td>
  <td>2779.74k</td>
  <td>3668.98k</td>
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
  <td>25.85</td>
  <td>6.49</td>
  <td>141.49</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>15.52</td>
  <td>45.32</td>
  <td>61.26</td>
  <td>93.73</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.97</td>
  <td>4.15</td>
  <td>12.39</td>
  <td>5.88</td>
  <td>5.88</td>
  <td>5.88</td>
  <td>5.88</td>
  <td>8.06</td>
  <td>8.30</td>
  <td>10.38</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.49</td>
  <td>6.67</td>
  <td>263.79</td>
  <td>22.31</td>
  <td>22.31</td>
  <td>22.31</td>
  <td>22.31</td>
  <td>78.66</td>
  <td>110.22</td>
  <td>173.00</td>
</tr></table>