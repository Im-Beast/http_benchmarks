# Name: Hono 
  
  ### Version: 3.2.6
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
    <td>11.67k</td>
    <td>13.69k</td>
    <td>2.07k</td>
    <td>61.65 MiB</td>
    <td>5.92</td>
    <td>3.96</td>
    <td>16.70</td>
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
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>13068.91k</td>
  <td>13135.50k</td>
  <td>13688.69k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>7.39</td>
  <td>8.22</td>
  <td>12.84</td>
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
  <td>11.67k</td>
  <td>13.69k</td>
  <td>2.07k</td>
  <td>61.65</td>
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>9597.17k</td>
  <td>13068.91k</td>
  <td>13135.50k</td>
  <td>13688.69k</td>
</tr><tr>
  <td>text.txt</td>
  <td>62.39k</td>
  <td>70.42k</td>
  <td>9.38k</td>
  <td>1.91</td>
  <td>54100.00k</td>
  <td>54100.00k</td>
  <td>54100.00k</td>
  <td>54100.00k</td>
  <td>69766.99k</td>
  <td>70419.07k</td>
  <td>70419.07k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>4.07k</td>
  <td>6.30k</td>
  <td>461.13</td>
  <td>1.48k</td>
  <td>3400.27k</td>
  <td>3400.27k</td>
  <td>3400.27k</td>
  <td>3400.27k</td>
  <td>4628.38k</td>
  <td>4769.02k</td>
  <td>4950.05k</td>
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
  <td>5.92</td>
  <td>3.96</td>
  <td>16.70</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>4.80</td>
  <td>7.39</td>
  <td>8.22</td>
  <td>12.84</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.12</td>
  <td>0.82</td>
  <td>4.11</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.44</td>
  <td>1.93</td>
  <td>2.68</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>18.93</td>
  <td>2.76</td>
  <td>25.78</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>17.38</td>
  <td>20.88</td>
  <td>21.41</td>
  <td>22.53</td>
</tr></table>