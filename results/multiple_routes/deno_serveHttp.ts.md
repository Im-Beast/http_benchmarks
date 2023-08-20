# Multiple routes
## Name: Deno.serveHttp 

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
    <td>54.83k</td>
    <td>73.59k</td>
    <td>10.30k</td>
    <td>0.59 MiB</td>
    <td>1.14</td>
    <td>0.66</td>
    <td>3.43</td>
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
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>73252.79k</td>
  <td>73587.01k</td>
  <td>73587.01k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.25</td>
  <td>1.51</td>
  <td>1.91</td>
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
  <td>54.83k</td>
  <td>73.59k</td>
  <td>10.30k</td>
  <td>0.59</td>
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>47920.13k</td>
  <td>73252.79k</td>
  <td>73587.01k</td>
  <td>73587.01k</td>
</tr><tr>
  <td>/random_number</td>
  <td>54.34k</td>
  <td>59.74k</td>
  <td>5.11k</td>
  <td>0.95</td>
  <td>45069.14k</td>
  <td>45069.14k</td>
  <td>45069.14k</td>
  <td>45069.14k</td>
  <td>58513.62k</td>
  <td>59735.46k</td>
  <td>59735.46k</td>
</tr><tr>
  <td>/count</td>
  <td>60.20k</td>
  <td>76.25k</td>
  <td>8.86k</td>
  <td>0.06</td>
  <td>50739.95k</td>
  <td>50739.95k</td>
  <td>50739.95k</td>
  <td>50739.95k</td>
  <td>74905.65k</td>
  <td>76253.16k</td>
  <td>76253.16k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>54.49k</td>
  <td>60.01k</td>
  <td>8.55k</td>
  <td>0.10</td>
  <td>44924.77k</td>
  <td>44924.77k</td>
  <td>44924.77k</td>
  <td>44924.77k</td>
  <td>59625.81k</td>
  <td>60005.03k</td>
  <td>60005.03k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>55.48k</td>
  <td>58.88k</td>
  <td>3.86k</td>
  <td>0.11</td>
  <td>53317.32k</td>
  <td>53317.32k</td>
  <td>53317.32k</td>
  <td>53317.32k</td>
  <td>58343.18k</td>
  <td>58876.60k</td>
  <td>58876.60k</td>
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
  <td>1.14</td>
  <td>0.66</td>
  <td>3.43</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.25</td>
  <td>1.51</td>
  <td>1.91</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.17</td>
  <td>0.78</td>
  <td>3.62</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.27</td>
  <td>1.50</td>
  <td>2.00</td>
</tr><tr>
  <td>/count</td>
  <td>1.06</td>
  <td>0.66</td>
  <td>2.74</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.20</td>
  <td>1.38</td>
  <td>1.77</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.17</td>
  <td>0.81</td>
  <td>3.45</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.27</td>
  <td>1.50</td>
  <td>1.80</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.15</td>
  <td>0.76</td>
  <td>3.16</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.27</td>
  <td>1.46</td>
  <td>1.76</td>
</tr></table>