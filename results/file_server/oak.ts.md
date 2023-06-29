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
    <td>3.93k</td>
    <td>13.45k</td>
    <td>1.32k</td>
    <td>271.33 MiB</td>
    <td>27.58</td>
    <td>6.18</td>
    <td>156.12</td>
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
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>5333.64k</td>
  <td>5848.83k</td>
  <td>7369.83k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>50.98</td>
  <td>66.19</td>
  <td>96.78</td>
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
  <td>3.93k</td>
  <td>13.45k</td>
  <td>1.32k</td>
  <td>271.33</td>
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>2486.75k</td>
  <td>5333.64k</td>
  <td>5848.83k</td>
  <td>7369.83k</td>
</tr><tr>
  <td>text.txt</td>
  <td>8.13k</td>
  <td>14.22k</td>
  <td>1.78k</td>
  <td>0.38</td>
  <td>6543.75k</td>
  <td>6543.75k</td>
  <td>6543.75k</td>
  <td>6543.75k</td>
  <td>10149.32k</td>
  <td>11055.92k</td>
  <td>12961.94k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.50k</td>
  <td>7.47k</td>
  <td>734.89</td>
  <td>530.56</td>
  <td>626.37k</td>
  <td>626.37k</td>
  <td>626.37k</td>
  <td>626.37k</td>
  <td>2376.91k</td>
  <td>2697.76k</td>
  <td>3474.44k</td>
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
  <td>27.58</td>
  <td>6.18</td>
  <td>156.12</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>15.29</td>
  <td>50.98</td>
  <td>66.19</td>
  <td>96.78</td>
</tr><tr>
  <td>text.txt</td>
  <td>7.98</td>
  <td>4.08</td>
  <td>15.99</td>
  <td>6.44</td>
  <td>6.44</td>
  <td>6.44</td>
  <td>6.44</td>
  <td>9.74</td>
  <td>10.47</td>
  <td>12.43</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>44.06</td>
  <td>7.37</td>
  <td>290.77</td>
  <td>21.40</td>
  <td>21.40</td>
  <td>21.40</td>
  <td>21.40</td>
  <td>88.89</td>
  <td>118.61</td>
  <td>177.77</td>
</tr></table>