# Name: Oak 
  
  ### Version: 12.5.0
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
    <td>5.71k</td>
    <td>15.09k</td>
    <td>2.58k</td>
    <td>29.15 MiB</td>
    <td>11.59</td>
    <td>5.51</td>
    <td>17.78</td>
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
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>8779.00k</td>
  <td>10586.24k</td>
  <td>11778.59k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>13.84</td>
  <td>14.28</td>
  <td>14.91</td>
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
  <td>5.71k</td>
  <td>15.09k</td>
  <td>2.58k</td>
  <td>29.15</td>
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>2134.79k</td>
  <td>8779.00k</td>
  <td>10586.24k</td>
  <td>11778.59k</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.51k</td>
  <td>16.08k</td>
  <td>3.27k</td>
  <td>0.49</td>
  <td>6735.64k</td>
  <td>6735.64k</td>
  <td>6735.64k</td>
  <td>6735.64k</td>
  <td>15111.17k</td>
  <td>15489.15k</td>
  <td>16002.66k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.73k</td>
  <td>7.41k</td>
  <td>679.47</td>
  <td>622.42</td>
  <td>991.95k</td>
  <td>991.95k</td>
  <td>991.95k</td>
  <td>991.95k</td>
  <td>2411.14k</td>
  <td>2663.05k</td>
  <td>3474.63k</td>
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
  <td>11.59</td>
  <td>5.51</td>
  <td>17.78</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>9.33</td>
  <td>13.84</td>
  <td>14.28</td>
  <td>14.91</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.18</td>
  <td>2.73</td>
  <td>9.59</td>
  <td>5.37</td>
  <td>5.37</td>
  <td>5.37</td>
  <td>5.37</td>
  <td>6.85</td>
  <td>7.09</td>
  <td>8.96</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>37.50</td>
  <td>5.28</td>
  <td>227.38</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>17.09</td>
  <td>76.62</td>
  <td>101.93</td>
  <td>148.54</td>
</tr></table>