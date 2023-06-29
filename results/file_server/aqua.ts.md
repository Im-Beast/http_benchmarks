# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>12.64k</td>
    <td>23.46k</td>
    <td>1.61k</td>
    <td>787.77 MiB</td>
    <td>9.59</td>
    <td>4.78</td>
    <td>21.20</td>
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
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>14230.48k</td>
  <td>14716.44k</td>
  <td>16155.51k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>11.33</td>
  <td>11.90</td>
  <td>13.24</td>
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
  <td>12.64k</td>
  <td>23.46k</td>
  <td>1.61k</td>
  <td>787.77</td>
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>10937.35k</td>
  <td>14230.48k</td>
  <td>14716.44k</td>
  <td>16155.51k</td>
</tr><tr>
  <td>text.txt</td>
  <td>31.50k</td>
  <td>35.45k</td>
  <td>2.07k</td>
  <td>1.51</td>
  <td>29833.43k</td>
  <td>29833.43k</td>
  <td>29833.43k</td>
  <td>29833.43k</td>
  <td>33522.30k</td>
  <td>33995.79k</td>
  <td>35451.26k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>4.31k</td>
  <td>22.35k</td>
  <td>1.35k</td>
  <td>1.55k</td>
  <td>3048.05k</td>
  <td>3048.05k</td>
  <td>3048.05k</td>
  <td>3048.05k</td>
  <td>5705.03k</td>
  <td>6288.95k</td>
  <td>8035.95k</td>
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
  <td>9.59</td>
  <td>4.78</td>
  <td>21.20</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>7.94</td>
  <td>11.33</td>
  <td>11.90</td>
  <td>13.24</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.02</td>
  <td>1.22</td>
  <td>4.78</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>2.38</td>
  <td>2.54</td>
  <td>2.84</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>15.10</td>
  <td>7.45</td>
  <td>33.00</td>
  <td>12.51</td>
  <td>12.51</td>
  <td>12.51</td>
  <td>12.51</td>
  <td>17.52</td>
  <td>18.40</td>
  <td>20.32</td>
</tr></table>