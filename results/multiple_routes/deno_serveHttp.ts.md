# Name: Deno.serveHttp 
  
  ### Version: Deno 1.34.3
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
    <td>64.08k</td>
    <td>76.55k</td>
    <td>10.21k</td>
    <td>1.12 MiB</td>
    <td>0.99</td>
    <td>0.56</td>
    <td>3.54</td>
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
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>75971.50k</td>
  <td>76553.41k</td>
  <td>76553.41k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>1.40</td>
  <td>1.73</td>
  <td>2.75</td>
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
  <td>64.08k</td>
  <td>76.55k</td>
  <td>10.21k</td>
  <td>1.12</td>
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>52332.18k</td>
  <td>75971.50k</td>
  <td>76553.41k</td>
  <td>76553.41k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>69.95k</td>
  <td>80.34k</td>
  <td>8.00k</td>
  <td>0.73</td>
  <td>61777.25k</td>
  <td>61777.25k</td>
  <td>61777.25k</td>
  <td>61777.25k</td>
  <td>78806.89k</td>
  <td>80342.79k</td>
  <td>80342.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>68.46k</td>
  <td>77.44k</td>
  <td>9.81k</td>
  <td>0.13</td>
  <td>53628.43k</td>
  <td>53628.43k</td>
  <td>53628.43k</td>
  <td>53628.43k</td>
  <td>77418.82k</td>
  <td>77439.68k</td>
  <td>77439.68k</td>
</tr><tr>
  <td>/count</td>
  <td>72.46k</td>
  <td>85.96k</td>
  <td>10.13k</td>
  <td>0.07</td>
  <td>61632.69k</td>
  <td>61632.69k</td>
  <td>61632.69k</td>
  <td>61632.69k</td>
  <td>83060.26k</td>
  <td>85956.77k</td>
  <td>85956.77k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>69.24k</td>
  <td>80.66k</td>
  <td>7.71k</td>
  <td>0.13</td>
  <td>59410.84k</td>
  <td>59410.84k</td>
  <td>59410.84k</td>
  <td>59410.84k</td>
  <td>76553.18k</td>
  <td>80664.14k</td>
  <td>80664.14k</td>
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
  <td>0.99</td>
  <td>0.56</td>
  <td>3.54</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>0.76</td>
  <td>1.40</td>
  <td>1.73</td>
  <td>2.75</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.91</td>
  <td>0.48</td>
  <td>4.27</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.22</td>
  <td>1.55</td>
  <td>2.30</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.93</td>
  <td>0.42</td>
  <td>4.13</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>1.33</td>
  <td>1.54</td>
  <td>2.18</td>
</tr><tr>
  <td>/count</td>
  <td>0.89</td>
  <td>0.44</td>
  <td>4.66</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.19</td>
  <td>1.52</td>
  <td>2.18</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.92</td>
  <td>0.45</td>
  <td>3.25</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>0.73</td>
  <td>1.29</td>
  <td>1.59</td>
  <td>2.39</td>
</tr></table>