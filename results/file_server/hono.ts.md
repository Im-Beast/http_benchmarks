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
    <td>20.03k</td>
    <td>24.52k</td>
    <td>3.81k</td>
    <td>700.15 MiB</td>
    <td>10.12</td>
    <td>2.35</td>
    <td>20.37</td>
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
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>23431.25k</td>
  <td>23665.71k</td>
  <td>24188.08k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>11.76</td>
  <td>12.21</td>
  <td>13.64</td>
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
  <td>20.03k</td>
  <td>24.52k</td>
  <td>3.81k</td>
  <td>700.15</td>
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>14628.94k</td>
  <td>23431.25k</td>
  <td>23665.71k</td>
  <td>24188.08k</td>
</tr><tr>
  <td>text.txt</td>
  <td>60.41k</td>
  <td>73.22k</td>
  <td>12.81k</td>
  <td>1.84</td>
  <td>42024.02k</td>
  <td>42024.02k</td>
  <td>42024.02k</td>
  <td>42024.02k</td>
  <td>71520.67k</td>
  <td>72152.63k</td>
  <td>73218.91k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.74k</td>
  <td>5.33k</td>
  <td>449.67</td>
  <td>1.37k</td>
  <td>3213.07k</td>
  <td>3213.07k</td>
  <td>3213.07k</td>
  <td>3213.07k</td>
  <td>4279.48k</td>
  <td>4398.79k</td>
  <td>4836.88k</td>
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
  <td>10.12</td>
  <td>2.35</td>
  <td>20.37</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>8.83</td>
  <td>11.76</td>
  <td>12.21</td>
  <td>13.64</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.06</td>
  <td>0.74</td>
  <td>4.01</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.51</td>
  <td>1.77</td>
  <td>2.62</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>17.09</td>
  <td>2.20</td>
  <td>32.89</td>
  <td>15.05</td>
  <td>15.05</td>
  <td>15.05</td>
  <td>15.05</td>
  <td>19.44</td>
  <td>19.97</td>
  <td>22.03</td>
</tr></table>