# Name: Oak 
  
  ### Version: 11.1.0
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
    <td>9.38k</td>
    <td>1.58k</td>
    <td>23.57 MiB</td>
    <td>14.34</td>
    <td>7.58</td>
    <td>22.06</td>
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
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>6398.51k</td>
  <td>7030.76k</td>
  <td>8602.28k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>16.37</td>
  <td>16.73</td>
  <td>17.35</td>
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
  <td>9.38k</td>
  <td>1.58k</td>
  <td>23.57</td>
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>2572.48k</td>
  <td>6398.51k</td>
  <td>7030.76k</td>
  <td>8602.28k</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.91k</td>
  <td>15.38k</td>
  <td>1.88k</td>
  <td>0.42</td>
  <td>6973.13k</td>
  <td>6973.13k</td>
  <td>6973.13k</td>
  <td>6973.13k</td>
  <td>11215.77k</td>
  <td>12192.55k</td>
  <td>14435.75k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.41k</td>
  <td>6.96k</td>
  <td>721.52</td>
  <td>495.32</td>
  <td>612.41k</td>
  <td>612.41k</td>
  <td>612.41k</td>
  <td>612.41k</td>
  <td>2294.53k</td>
  <td>2613.71k</td>
  <td>3343.91k</td>
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
  <td>14.34</td>
  <td>7.58</td>
  <td>22.06</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>12.05</td>
  <td>16.37</td>
  <td>16.73</td>
  <td>17.35</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.24</td>
  <td>4.20</td>
  <td>11.86</td>
  <td>6.18</td>
  <td>6.18</td>
  <td>6.18</td>
  <td>6.18</td>
  <td>8.22</td>
  <td>9.23</td>
  <td>10.81</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>47.13</td>
  <td>7.90</td>
  <td>291.13</td>
  <td>21.18</td>
  <td>21.18</td>
  <td>21.18</td>
  <td>21.18</td>
  <td>97.15</td>
  <td>128.12</td>
  <td>186.36</td>
</tr></table>