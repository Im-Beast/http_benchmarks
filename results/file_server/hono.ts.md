# Name: Hono 
  
  ### Version: 3.2.7
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
    <td>13.22k</td>
    <td>14.80k</td>
    <td>1.55k</td>
    <td>69.93 MiB</td>
    <td>4.83</td>
    <td>1.71</td>
    <td>7.88</td>
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
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>14590.90k</td>
  <td>14662.28k</td>
  <td>14795.40k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>6.32</td>
  <td>6.81</td>
  <td>7.21</td>
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
  <td>13.22k</td>
  <td>14.80k</td>
  <td>1.55k</td>
  <td>69.93</td>
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>11067.30k</td>
  <td>14590.90k</td>
  <td>14662.28k</td>
  <td>14795.40k</td>
</tr><tr>
  <td>text.txt</td>
  <td>66.13k</td>
  <td>71.61k</td>
  <td>4.85k</td>
  <td>2.02</td>
  <td>62155.92k</td>
  <td>62155.92k</td>
  <td>62155.92k</td>
  <td>62155.92k</td>
  <td>70713.84k</td>
  <td>71614.31k</td>
  <td>71614.31k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.23k</td>
  <td>5.75k</td>
  <td>469.00</td>
  <td>1.54k</td>
  <td>3621.90k</td>
  <td>3621.90k</td>
  <td>3621.90k</td>
  <td>3621.90k</td>
  <td>4802.64k</td>
  <td>5097.44k</td>
  <td>5576.26k</td>
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
  <td>4.83</td>
  <td>1.71</td>
  <td>7.88</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>4.11</td>
  <td>6.32</td>
  <td>6.81</td>
  <td>7.21</td>
</tr><tr>
  <td>text.txt</td>
  <td>0.96</td>
  <td>0.81</td>
  <td>1.92</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.07</td>
  <td>1.25</td>
  <td>1.70</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.12</td>
  <td>1.54</td>
  <td>19.96</td>
  <td>13.44</td>
  <td>13.44</td>
  <td>13.44</td>
  <td>13.44</td>
  <td>17.06</td>
  <td>17.42</td>
  <td>17.97</td>
</tr></table>