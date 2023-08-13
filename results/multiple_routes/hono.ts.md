# Multiple routes
## Name: Hono 

### Version: 3.4.1
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
    <td>56.09k</td>
    <td>67.75k</td>
    <td>7.87k</td>
    <td>0.59 MiB</td>
    <td>1.13</td>
    <td>0.14</td>
    <td>3.74</td>
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
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>66981.67k</td>
  <td>67750.58k</td>
  <td>67750.58k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.37</td>
  <td>1.53</td>
  <td>2.90</td>
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
  <td>56.09k</td>
  <td>67.75k</td>
  <td>7.87k</td>
  <td>0.59</td>
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>46286.72k</td>
  <td>66981.67k</td>
  <td>67750.58k</td>
  <td>67750.58k</td>
</tr><tr>
  <td>/random_number</td>
  <td>50.70k</td>
  <td>59.00k</td>
  <td>4.88k</td>
  <td>0.88</td>
  <td>46113.71k</td>
  <td>46113.71k</td>
  <td>46113.71k</td>
  <td>46113.71k</td>
  <td>55842.89k</td>
  <td>58995.30k</td>
  <td>58995.30k</td>
</tr><tr>
  <td>/count</td>
  <td>54.27k</td>
  <td>67.40k</td>
  <td>11.48k</td>
  <td>0.05</td>
  <td>42351.00k</td>
  <td>42351.00k</td>
  <td>42351.00k</td>
  <td>42351.00k</td>
  <td>66654.82k</td>
  <td>67398.03k</td>
  <td>67398.03k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>54.52k</td>
  <td>66.60k</td>
  <td>10.42k</td>
  <td>0.11</td>
  <td>38518.72k</td>
  <td>38518.72k</td>
  <td>38518.72k</td>
  <td>38518.72k</td>
  <td>66027.96k</td>
  <td>66596.08k</td>
  <td>66596.08k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>51.78k</td>
  <td>65.30k</td>
  <td>7.08k</td>
  <td>0.10</td>
  <td>46437.16k</td>
  <td>46437.16k</td>
  <td>46437.16k</td>
  <td>46437.16k</td>
  <td>64589.85k</td>
  <td>65295.32k</td>
  <td>65295.32k</td>
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
  <td>1.13</td>
  <td>0.14</td>
  <td>3.74</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.37</td>
  <td>1.53</td>
  <td>2.90</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.25</td>
  <td>0.16</td>
  <td>3.67</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.39</td>
  <td>1.50</td>
  <td>2.40</td>
</tr><tr>
  <td>/count</td>
  <td>1.14</td>
  <td>0.60</td>
  <td>5.13</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.39</td>
  <td>1.62</td>
  <td>2.11</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.14</td>
  <td>0.67</td>
  <td>4.62</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.39</td>
  <td>1.62</td>
  <td>2.66</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.23</td>
  <td>0.29</td>
  <td>2.95</td>
  <td>0.96</td>
  <td>0.96</td>
  <td>0.96</td>
  <td>0.96</td>
  <td>1.43</td>
  <td>1.57</td>
  <td>2.44</td>
</tr></table>