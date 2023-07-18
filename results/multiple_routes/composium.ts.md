# Multiple routes
## Name: Composium 

### Version: 0.1.1
### Deno version: 1.35.1

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
    <td>20.18k</td>
    <td>21.95k</td>
    <td>1.44k</td>
    <td>0.21 MiB</td>
    <td>3.15</td>
    <td>1.16</td>
    <td>5.67</td>
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
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>21323.61k</td>
  <td>21579.33k</td>
  <td>21945.83k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>3.61</td>
  <td>3.90</td>
  <td>4.74</td>
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
  <td>20.18k</td>
  <td>21.95k</td>
  <td>1.44k</td>
  <td>0.21</td>
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>18287.96k</td>
  <td>21323.61k</td>
  <td>21579.33k</td>
  <td>21945.83k</td>
</tr><tr>
  <td>/random_number</td>
  <td>19.67k</td>
  <td>21.43k</td>
  <td>1.48k</td>
  <td>0.34</td>
  <td>18124.76k</td>
  <td>18124.76k</td>
  <td>18124.76k</td>
  <td>18124.76k</td>
  <td>20947.53k</td>
  <td>21065.57k</td>
  <td>21431.92k</td>
</tr><tr>
  <td>/count</td>
  <td>20.38k</td>
  <td>22.32k</td>
  <td>1.22k</td>
  <td>0.02</td>
  <td>18801.13k</td>
  <td>18801.13k</td>
  <td>18801.13k</td>
  <td>18801.13k</td>
  <td>21681.42k</td>
  <td>21785.35k</td>
  <td>22316.17k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>26.42k</td>
  <td>28.52k</td>
  <td>1.71k</td>
  <td>0.05</td>
  <td>23735.71k</td>
  <td>23735.71k</td>
  <td>23735.71k</td>
  <td>23735.71k</td>
  <td>28124.08k</td>
  <td>28297.10k</td>
  <td>28517.64k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>26.30k</td>
  <td>28.66k</td>
  <td>1.78k</td>
  <td>0.05</td>
  <td>23642.96k</td>
  <td>23642.96k</td>
  <td>23642.96k</td>
  <td>23642.96k</td>
  <td>27879.19k</td>
  <td>28115.50k</td>
  <td>28656.34k</td>
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
  <td>3.15</td>
  <td>1.16</td>
  <td>5.67</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>3.61</td>
  <td>3.90</td>
  <td>4.74</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.23</td>
  <td>1.13</td>
  <td>5.61</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>2.84</td>
  <td>3.70</td>
  <td>4.01</td>
  <td>4.89</td>
</tr><tr>
  <td>/count</td>
  <td>3.13</td>
  <td>1.17</td>
  <td>5.64</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>2.76</td>
  <td>3.59</td>
  <td>3.80</td>
  <td>4.78</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.40</td>
  <td>1.01</td>
  <td>4.53</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.81</td>
  <td>3.01</td>
  <td>3.62</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.42</td>
  <td>1.06</td>
  <td>4.93</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.13</td>
  <td>2.80</td>
  <td>3.04</td>
  <td>3.67</td>
</tr></table>