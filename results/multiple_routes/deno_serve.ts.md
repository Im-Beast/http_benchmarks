# Multiple routes
## Name: Deno.serve 

### Version: Deno 1.36.0
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
    <td>57.23k</td>
    <td>66.81k</td>
    <td>7.14k</td>
    <td>0.60 MiB</td>
    <td>1.11</td>
    <td>0.14</td>
    <td>2.71</td>
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
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>66636.16k</td>
  <td>66808.42k</td>
  <td>66808.42k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.37</td>
  <td>1.56</td>
  <td>1.88</td>
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
  <td>57.23k</td>
  <td>66.81k</td>
  <td>7.14k</td>
  <td>0.60</td>
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>47647.10k</td>
  <td>66636.16k</td>
  <td>66808.42k</td>
  <td>66808.42k</td>
</tr><tr>
  <td>/random_number</td>
  <td>56.16k</td>
  <td>65.16k</td>
  <td>6.73k</td>
  <td>0.98</td>
  <td>48325.65k</td>
  <td>48325.65k</td>
  <td>48325.65k</td>
  <td>48325.65k</td>
  <td>63824.33k</td>
  <td>65164.10k</td>
  <td>65164.10k</td>
</tr><tr>
  <td>/count</td>
  <td>57.50k</td>
  <td>68.89k</td>
  <td>8.09k</td>
  <td>0.06</td>
  <td>47735.86k</td>
  <td>47735.86k</td>
  <td>47735.86k</td>
  <td>47735.86k</td>
  <td>68146.86k</td>
  <td>68887.91k</td>
  <td>68887.91k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>60.65k</td>
  <td>69.43k</td>
  <td>8.05k</td>
  <td>0.12</td>
  <td>46128.85k</td>
  <td>46128.85k</td>
  <td>46128.85k</td>
  <td>46128.85k</td>
  <td>68210.28k</td>
  <td>69429.80k</td>
  <td>69429.80k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>61.46k</td>
  <td>67.86k</td>
  <td>6.72k</td>
  <td>0.12</td>
  <td>48757.88k</td>
  <td>48757.88k</td>
  <td>48757.88k</td>
  <td>48757.88k</td>
  <td>67774.19k</td>
  <td>67863.85k</td>
  <td>67863.85k</td>
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
  <td>1.11</td>
  <td>0.14</td>
  <td>2.71</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.37</td>
  <td>1.56</td>
  <td>1.88</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.12</td>
  <td>0.59</td>
  <td>2.39</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>0.92</td>
  <td>1.43</td>
  <td>1.56</td>
  <td>1.86</td>
</tr><tr>
  <td>/count</td>
  <td>1.10</td>
  <td>0.55</td>
  <td>2.16</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.34</td>
  <td>1.45</td>
  <td>1.72</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.04</td>
  <td>0.12</td>
  <td>2.42</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.28</td>
  <td>1.38</td>
  <td>1.75</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.02</td>
  <td>0.17</td>
  <td>2.32</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.23</td>
  <td>1.37</td>
  <td>1.70</td>
</tr></table>