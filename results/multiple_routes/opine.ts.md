# Multiple routes
## Name: Opine 

### Version: 2.3.4
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
    <td>17.26k</td>
    <td>20.01k</td>
    <td>1.55k</td>
    <td>0.18 MiB</td>
    <td>3.70</td>
    <td>1.62</td>
    <td>8.48</td>
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
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>18363.11k</td>
  <td>18604.79k</td>
  <td>20012.90k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>4.29</td>
  <td>4.99</td>
  <td>5.57</td>
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
  <td>17.26k</td>
  <td>20.01k</td>
  <td>1.55k</td>
  <td>0.18</td>
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>16187.48k</td>
  <td>18363.11k</td>
  <td>18604.79k</td>
  <td>20012.90k</td>
</tr><tr>
  <td>/random_number</td>
  <td>21.31k</td>
  <td>24.60k</td>
  <td>1.89k</td>
  <td>0.37</td>
  <td>19272.43k</td>
  <td>19272.43k</td>
  <td>19272.43k</td>
  <td>19272.43k</td>
  <td>22459.88k</td>
  <td>23252.19k</td>
  <td>24597.08k</td>
</tr><tr>
  <td>/count</td>
  <td>21.56k</td>
  <td>25.46k</td>
  <td>2.16k</td>
  <td>0.02</td>
  <td>19509.76k</td>
  <td>19509.76k</td>
  <td>19509.76k</td>
  <td>19509.76k</td>
  <td>24303.29k</td>
  <td>24546.14k</td>
  <td>25458.62k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>17.80k</td>
  <td>21.87k</td>
  <td>1.31k</td>
  <td>0.03</td>
  <td>17040.69k</td>
  <td>17040.69k</td>
  <td>17040.69k</td>
  <td>17040.69k</td>
  <td>19019.55k</td>
  <td>19473.44k</td>
  <td>21866.42k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>18.30k</td>
  <td>21.52k</td>
  <td>1.77k</td>
  <td>0.03</td>
  <td>16868.35k</td>
  <td>16868.35k</td>
  <td>16868.35k</td>
  <td>16868.35k</td>
  <td>20185.54k</td>
  <td>20425.63k</td>
  <td>21518.37k</td>
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
  <td>3.70</td>
  <td>1.62</td>
  <td>8.48</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>3.24</td>
  <td>4.29</td>
  <td>4.99</td>
  <td>5.57</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.00</td>
  <td>1.17</td>
  <td>6.71</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>2.69</td>
  <td>3.47</td>
  <td>3.97</td>
  <td>4.69</td>
</tr><tr>
  <td>/count</td>
  <td>2.96</td>
  <td>1.26</td>
  <td>6.58</td>
  <td>2.48</td>
  <td>2.48</td>
  <td>2.48</td>
  <td>2.48</td>
  <td>3.33</td>
  <td>3.89</td>
  <td>4.32</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.59</td>
  <td>1.75</td>
  <td>6.67</td>
  <td>3.15</td>
  <td>3.15</td>
  <td>3.15</td>
  <td>3.15</td>
  <td>4.08</td>
  <td>4.76</td>
  <td>5.33</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.48</td>
  <td>1.31</td>
  <td>8.29</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>3.02</td>
  <td>4.03</td>
  <td>4.62</td>
  <td>5.15</td>
</tr></table>