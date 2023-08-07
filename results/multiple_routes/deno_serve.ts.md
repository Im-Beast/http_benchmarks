# Multiple routes
## Name: Deno.serve 

### Version: Deno 1.35.2
### Deno version: 1.35.2

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
    <td>56.30k</td>
    <td>66.12k</td>
    <td>6.56k</td>
    <td>0.59 MiB</td>
    <td>1.12</td>
    <td>0.21</td>
    <td>2.50</td>
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
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>65928.26k</td>
  <td>66124.66k</td>
  <td>66124.66k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.33</td>
  <td>1.47</td>
  <td>2.01</td>
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
  <td>56.30k</td>
  <td>66.12k</td>
  <td>6.56k</td>
  <td>0.59</td>
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>49319.65k</td>
  <td>65928.26k</td>
  <td>66124.66k</td>
  <td>66124.66k</td>
</tr><tr>
  <td>/random_number</td>
  <td>59.81k</td>
  <td>66.40k</td>
  <td>5.89k</td>
  <td>1.04</td>
  <td>50986.67k</td>
  <td>50986.67k</td>
  <td>50986.67k</td>
  <td>50986.67k</td>
  <td>65325.47k</td>
  <td>66402.50k</td>
  <td>66402.50k</td>
</tr><tr>
  <td>/count</td>
  <td>57.49k</td>
  <td>68.64k</td>
  <td>7.03k</td>
  <td>0.06</td>
  <td>48079.71k</td>
  <td>48079.71k</td>
  <td>48079.71k</td>
  <td>48079.71k</td>
  <td>68621.30k</td>
  <td>68639.69k</td>
  <td>68639.69k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.19k</td>
  <td>69.69k</td>
  <td>6.29k</td>
  <td>0.12</td>
  <td>53742.03k</td>
  <td>53742.03k</td>
  <td>53742.03k</td>
  <td>53742.03k</td>
  <td>69437.53k</td>
  <td>69694.13k</td>
  <td>69694.13k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>57.85k</td>
  <td>69.80k</td>
  <td>7.31k</td>
  <td>0.11</td>
  <td>51122.63k</td>
  <td>51122.63k</td>
  <td>51122.63k</td>
  <td>51122.63k</td>
  <td>68815.08k</td>
  <td>69804.11k</td>
  <td>69804.11k</td>
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
  <td>1.12</td>
  <td>0.21</td>
  <td>2.50</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.33</td>
  <td>1.47</td>
  <td>2.01</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.06</td>
  <td>0.68</td>
  <td>2.50</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.31</td>
  <td>1.44</td>
  <td>1.91</td>
</tr><tr>
  <td>/count</td>
  <td>1.10</td>
  <td>0.48</td>
  <td>2.22</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.31</td>
  <td>1.42</td>
  <td>1.66</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.98</td>
  <td>0.28</td>
  <td>2.23</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.13</td>
  <td>1.32</td>
  <td>1.79</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.10</td>
  <td>0.57</td>
  <td>2.34</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.30</td>
  <td>1.46</td>
  <td>1.81</td>
</tr></table>