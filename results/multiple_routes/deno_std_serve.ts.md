# Name: std serve 
  
  ### Version: 0.192.0
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
    <td>75.59k</td>
    <td>92.49k</td>
    <td>9.77k</td>
    <td>1.31 MiB</td>
    <td>0.85</td>
    <td>0.49</td>
    <td>3.46</td>
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
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>86553.73k</td>
  <td>92491.52k</td>
  <td>92491.52k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>1.07</td>
  <td>1.48</td>
  <td>3.06</td>
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
  <td>/random_number</td>
  <td>75.59k</td>
  <td>92.49k</td>
  <td>9.77k</td>
  <td>1.31</td>
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>61689.14k</td>
  <td>86553.73k</td>
  <td>92491.52k</td>
  <td>92491.52k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>85.07k</td>
  <td>99.07k</td>
  <td>13.04k</td>
  <td>0.89</td>
  <td>68223.38k</td>
  <td>68223.38k</td>
  <td>68223.38k</td>
  <td>68223.38k</td>
  <td>97331.85k</td>
  <td>99072.69k</td>
  <td>99072.69k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>75.27k</td>
  <td>91.66k</td>
  <td>11.66k</td>
  <td>0.14</td>
  <td>54381.57k</td>
  <td>54381.57k</td>
  <td>54381.57k</td>
  <td>54381.57k</td>
  <td>84414.90k</td>
  <td>91663.43k</td>
  <td>91663.43k</td>
</tr><tr>
  <td>/count</td>
  <td>79.33k</td>
  <td>99.68k</td>
  <td>12.41k</td>
  <td>0.08</td>
  <td>62764.63k</td>
  <td>62764.63k</td>
  <td>62764.63k</td>
  <td>62764.63k</td>
  <td>91809.78k</td>
  <td>99678.50k</td>
  <td>99678.50k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>77.19k</td>
  <td>88.72k</td>
  <td>10.44k</td>
  <td>0.15</td>
  <td>67165.46k</td>
  <td>67165.46k</td>
  <td>67165.46k</td>
  <td>67165.46k</td>
  <td>87625.82k</td>
  <td>88722.18k</td>
  <td>88722.18k</td>
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
  <td>/random_number</td>
  <td>0.85</td>
  <td>0.49</td>
  <td>3.46</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>1.07</td>
  <td>1.48</td>
  <td>3.06</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.75</td>
  <td>0.43</td>
  <td>3.08</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.95</td>
  <td>1.39</td>
  <td>2.19</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.85</td>
  <td>0.41</td>
  <td>3.88</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.22</td>
  <td>1.53</td>
  <td>2.43</td>
</tr><tr>
  <td>/count</td>
  <td>0.80</td>
  <td>0.38</td>
  <td>3.59</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>1.11</td>
  <td>1.52</td>
  <td>2.31</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.82</td>
  <td>0.39</td>
  <td>3.08</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>1.11</td>
  <td>1.48</td>
  <td>2.24</td>
</tr></table>