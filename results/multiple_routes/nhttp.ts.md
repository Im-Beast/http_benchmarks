# Name: NHttp 
  
  ### Version: 1.2.23
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
    <td>83.15k</td>
    <td>92.09k</td>
    <td>8.76k</td>
    <td>1.45 MiB</td>
    <td>0.77</td>
    <td>0.57</td>
    <td>3.45</td>
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
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>90815.89k</td>
  <td>92085.69k</td>
  <td>92085.69k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>1.00</td>
  <td>1.23</td>
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
  <td>/random_number</td>
  <td>83.15k</td>
  <td>92.09k</td>
  <td>8.76k</td>
  <td>1.45</td>
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>73706.89k</td>
  <td>90815.89k</td>
  <td>92085.69k</td>
  <td>92085.69k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>82.14k</td>
  <td>99.28k</td>
  <td>8.86k</td>
  <td>0.86</td>
  <td>73132.37k</td>
  <td>73132.37k</td>
  <td>73132.37k</td>
  <td>73132.37k</td>
  <td>95176.51k</td>
  <td>99280.67k</td>
  <td>99280.67k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>77.94k</td>
  <td>98.82k</td>
  <td>14.30k</td>
  <td>0.15</td>
  <td>64673.07k</td>
  <td>64673.07k</td>
  <td>64673.07k</td>
  <td>64673.07k</td>
  <td>92325.41k</td>
  <td>98816.26k</td>
  <td>98816.26k</td>
</tr><tr>
  <td>/count</td>
  <td>80.78k</td>
  <td>96.88k</td>
  <td>10.90k</td>
  <td>0.08</td>
  <td>69459.55k</td>
  <td>69459.55k</td>
  <td>69459.55k</td>
  <td>69459.55k</td>
  <td>94407.16k</td>
  <td>96878.84k</td>
  <td>96878.84k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>80.46k</td>
  <td>95.31k</td>
  <td>11.00k</td>
  <td>0.15</td>
  <td>72508.83k</td>
  <td>72508.83k</td>
  <td>72508.83k</td>
  <td>72508.83k</td>
  <td>91524.93k</td>
  <td>95307.04k</td>
  <td>95307.04k</td>
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
  <td>0.77</td>
  <td>0.57</td>
  <td>3.45</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>1.00</td>
  <td>1.23</td>
  <td>2.01</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.78</td>
  <td>0.53</td>
  <td>3.18</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>1.00</td>
  <td>1.15</td>
  <td>2.15</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.82</td>
  <td>0.53</td>
  <td>3.29</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>1.15</td>
  <td>1.46</td>
  <td>2.19</td>
</tr><tr>
  <td>/count</td>
  <td>0.79</td>
  <td>0.51</td>
  <td>3.20</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>1.08</td>
  <td>1.22</td>
  <td>1.85</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.79</td>
  <td>0.52</td>
  <td>3.46</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>1.14</td>
  <td>1.29</td>
  <td>1.79</td>
</tr></table>