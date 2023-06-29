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
    <td>20.45k</td>
    <td>23.57k</td>
    <td>1.83k</td>
    <td>616.14 MiB</td>
    <td>11.36</td>
    <td>2.67</td>
    <td>24.68</td>
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
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>22661.28k</td>
  <td>22988.88k</td>
  <td>23455.49k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>13.01</td>
  <td>13.62</td>
  <td>14.98</td>
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
  <td>20.45k</td>
  <td>23.57k</td>
  <td>1.83k</td>
  <td>616.14</td>
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>18224.83k</td>
  <td>22661.28k</td>
  <td>22988.88k</td>
  <td>23455.49k</td>
</tr><tr>
  <td>text.txt</td>
  <td>63.73k</td>
  <td>71.38k</td>
  <td>4.82k</td>
  <td>1.94</td>
  <td>58394.31k</td>
  <td>58394.31k</td>
  <td>58394.31k</td>
  <td>58394.31k</td>
  <td>69800.28k</td>
  <td>70448.53k</td>
  <td>71383.69k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.30k</td>
  <td>4.66k</td>
  <td>510.16</td>
  <td>1.20k</td>
  <td>2587.53k</td>
  <td>2587.53k</td>
  <td>2587.53k</td>
  <td>2587.53k</td>
  <td>3927.26k</td>
  <td>4176.48k</td>
  <td>4471.26k</td>
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
  <td>11.36</td>
  <td>2.67</td>
  <td>24.68</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>9.93</td>
  <td>13.01</td>
  <td>13.62</td>
  <td>14.98</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.00</td>
  <td>0.80</td>
  <td>3.94</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.14</td>
  <td>1.40</td>
  <td>1.83</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>19.44</td>
  <td>2.78</td>
  <td>41.31</td>
  <td>17.12</td>
  <td>17.12</td>
  <td>17.12</td>
  <td>17.12</td>
  <td>21.98</td>
  <td>22.77</td>
  <td>24.77</td>
</tr></table>