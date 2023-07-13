# Name: Hydra 
  
  ### Version: 0.1.1
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
    <td>15.36k</td>
    <td>16.83k</td>
    <td>806.61</td>
    <td>81.45 MiB</td>
    <td>4.14</td>
    <td>1.48</td>
    <td>5.69</td>
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
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>16170.04k</td>
  <td>16266.58k</td>
  <td>16825.93k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>4.51</td>
  <td>4.68</td>
  <td>5.14</td>
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
  <td>15.36k</td>
  <td>16.83k</td>
  <td>806.61</td>
  <td>81.45</td>
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>14358.69k</td>
  <td>16170.04k</td>
  <td>16266.58k</td>
  <td>16825.93k</td>
</tr><tr>
  <td>text.txt</td>
  <td>128.55k</td>
  <td>132.53k</td>
  <td>7.22k</td>
  <td>3.92</td>
  <td>111254.67k</td>
  <td>111254.67k</td>
  <td>111254.67k</td>
  <td>111254.67k</td>
  <td>132532.74k</td>
  <td>132532.74k</td>
  <td>132532.74k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.56k</td>
  <td>6.62k</td>
  <td>704.64</td>
  <td>1.66k</td>
  <td>3667.13k</td>
  <td>3667.13k</td>
  <td>3667.13k</td>
  <td>3667.13k</td>
  <td>5522.16k</td>
  <td>5607.06k</td>
  <td>5820.42k</td>
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
  <td>4.14</td>
  <td>1.48</td>
  <td>5.69</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>3.57</td>
  <td>4.51</td>
  <td>4.68</td>
  <td>5.14</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.49</td>
  <td>0.39</td>
  <td>1.44</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.58</td>
  <td>0.61</td>
  <td>0.68</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>14.01</td>
  <td>1.63</td>
  <td>17.35</td>
  <td>12.23</td>
  <td>12.23</td>
  <td>12.23</td>
  <td>12.23</td>
  <td>16.03</td>
  <td>16.23</td>
  <td>16.70</td>
</tr></table>