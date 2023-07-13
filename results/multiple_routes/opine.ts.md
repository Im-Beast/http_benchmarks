# Name: Opine 
  
  ### Version: 2.3.4
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
    <td>24.26k</td>
    <td>27.46k</td>
    <td>2.07k</td>
    <td>0.42 MiB</td>
    <td>2.63</td>
    <td>1.15</td>
    <td>7.06</td>
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
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>25439.22k</td>
  <td>25972.52k</td>
  <td>27460.27k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>3.22</td>
  <td>3.51</td>
  <td>4.15</td>
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
  <td>24.26k</td>
  <td>27.46k</td>
  <td>2.07k</td>
  <td>0.42</td>
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>22608.01k</td>
  <td>25439.22k</td>
  <td>25972.52k</td>
  <td>27460.27k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>18.49k</td>
  <td>21.38k</td>
  <td>1.28k</td>
  <td>0.19</td>
  <td>17540.28k</td>
  <td>17540.28k</td>
  <td>17540.28k</td>
  <td>17540.28k</td>
  <td>19482.50k</td>
  <td>19516.85k</td>
  <td>21380.46k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>20.17k</td>
  <td>23.59k</td>
  <td>1.43k</td>
  <td>0.04</td>
  <td>18877.55k</td>
  <td>18877.55k</td>
  <td>18877.55k</td>
  <td>18877.55k</td>
  <td>21300.66k</td>
  <td>21362.97k</td>
  <td>23592.97k</td>
</tr><tr>
  <td>/count</td>
  <td>25.11k</td>
  <td>26.70k</td>
  <td>1.85k</td>
  <td>0.02</td>
  <td>24058.83k</td>
  <td>24058.83k</td>
  <td>24058.83k</td>
  <td>24058.83k</td>
  <td>26095.54k</td>
  <td>26453.01k</td>
  <td>26695.15k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>20.17k</td>
  <td>23.24k</td>
  <td>1.48k</td>
  <td>0.04</td>
  <td>19093.61k</td>
  <td>19093.61k</td>
  <td>19093.61k</td>
  <td>19093.61k</td>
  <td>21241.26k</td>
  <td>21840.59k</td>
  <td>23242.33k</td>
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
  <td>2.63</td>
  <td>1.15</td>
  <td>7.06</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>2.24</td>
  <td>3.22</td>
  <td>3.51</td>
  <td>4.15</td>
</tr><tr>
  <td>/hello_world</td>
  <td>3.45</td>
  <td>1.28</td>
  <td>8.04</td>
  <td>2.99</td>
  <td>2.99</td>
  <td>2.99</td>
  <td>2.99</td>
  <td>4.25</td>
  <td>4.67</td>
  <td>5.30</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.16</td>
  <td>1.31</td>
  <td>7.40</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>2.73</td>
  <td>3.92</td>
  <td>4.31</td>
  <td>4.86</td>
</tr><tr>
  <td>/count</td>
  <td>2.53</td>
  <td>1.04</td>
  <td>5.84</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>2.19</td>
  <td>3.17</td>
  <td>3.46</td>
  <td>4.04</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.17</td>
  <td>1.48</td>
  <td>7.89</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>2.75</td>
  <td>4.01</td>
  <td>4.34</td>
  <td>4.90</td>
</tr></table>