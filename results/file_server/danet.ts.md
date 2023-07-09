# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>5.00k</td>
    <td>10.07k</td>
    <td>1.41k</td>
    <td>26.47 MiB</td>
    <td>12.77</td>
    <td>6.77</td>
    <td>19.97</td>
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
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>6419.86k</td>
  <td>6731.19k</td>
  <td>7529.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>15.48</td>
  <td>15.78</td>
  <td>16.58</td>
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
  <td>5.00k</td>
  <td>10.07k</td>
  <td>1.41k</td>
  <td>26.47</td>
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>2881.75k</td>
  <td>6419.86k</td>
  <td>6731.19k</td>
  <td>7529.04k</td>
</tr><tr>
  <td>text.txt</td>
  <td>9.69k</td>
  <td>14.17k</td>
  <td>2.33k</td>
  <td>0.46</td>
  <td>6707.18k</td>
  <td>6707.18k</td>
  <td>6707.18k</td>
  <td>6707.18k</td>
  <td>13360.01k</td>
  <td>13574.90k</td>
  <td>14134.66k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>1.56k</td>
  <td>7.48k</td>
  <td>781.49</td>
  <td>546.98</td>
  <td>711.43k</td>
  <td>711.43k</td>
  <td>711.43k</td>
  <td>711.43k</td>
  <td>2429.76k</td>
  <td>2752.14k</td>
  <td>4585.27k</td>
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
  <td>12.77</td>
  <td>6.77</td>
  <td>19.97</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>10.99</td>
  <td>15.48</td>
  <td>15.78</td>
  <td>16.58</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.63</td>
  <td>3.33</td>
  <td>10.69</td>
  <td>5.74</td>
  <td>5.74</td>
  <td>5.74</td>
  <td>5.74</td>
  <td>7.38</td>
  <td>7.66</td>
  <td>10.22</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>42.69</td>
  <td>6.55</td>
  <td>245.63</td>
  <td>19.50</td>
  <td>19.50</td>
  <td>19.50</td>
  <td>19.50</td>
  <td>86.01</td>
  <td>112.44</td>
  <td>166.84</td>
</tr></table>