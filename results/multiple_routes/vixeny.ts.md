# Multiple routes
## Name: Vixeny 

### Version: 0.0.682
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
    <td>56.77k</td>
    <td>69.53k</td>
    <td>7.10k</td>
    <td>0.59 MiB</td>
    <td>1.12</td>
    <td>0.62</td>
    <td>2.32</td>
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
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>69162.10k</td>
  <td>69528.94k</td>
  <td>69528.94k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.31</td>
  <td>1.40</td>
  <td>1.75</td>
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
  <td>56.77k</td>
  <td>69.53k</td>
  <td>7.10k</td>
  <td>0.59</td>
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>46461.62k</td>
  <td>69162.10k</td>
  <td>69528.94k</td>
  <td>69528.94k</td>
</tr><tr>
  <td>/random_number</td>
  <td>57.69k</td>
  <td>69.80k</td>
  <td>8.33k</td>
  <td>1.01</td>
  <td>49819.34k</td>
  <td>49819.34k</td>
  <td>49819.34k</td>
  <td>49819.34k</td>
  <td>69555.49k</td>
  <td>69800.77k</td>
  <td>69800.77k</td>
</tr><tr>
  <td>/count</td>
  <td>59.18k</td>
  <td>72.76k</td>
  <td>6.23k</td>
  <td>0.06</td>
  <td>53712.22k</td>
  <td>53712.22k</td>
  <td>53712.22k</td>
  <td>53712.22k</td>
  <td>68947.95k</td>
  <td>72755.69k</td>
  <td>72755.69k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.74k</td>
  <td>73.39k</td>
  <td>6.53k</td>
  <td>0.12</td>
  <td>51755.04k</td>
  <td>51755.04k</td>
  <td>51755.04k</td>
  <td>51755.04k</td>
  <td>73052.85k</td>
  <td>73390.88k</td>
  <td>73390.88k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>59.76k</td>
  <td>71.72k</td>
  <td>6.15k</td>
  <td>0.11</td>
  <td>52653.96k</td>
  <td>52653.96k</td>
  <td>52653.96k</td>
  <td>52653.96k</td>
  <td>71529.76k</td>
  <td>71719.77k</td>
  <td>71719.77k</td>
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
  <td>1.12</td>
  <td>0.62</td>
  <td>2.32</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.31</td>
  <td>1.40</td>
  <td>1.75</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.09</td>
  <td>0.33</td>
  <td>2.61</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.35</td>
  <td>1.50</td>
  <td>1.74</td>
</tr><tr>
  <td>/count</td>
  <td>1.07</td>
  <td>0.48</td>
  <td>2.17</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.24</td>
  <td>1.28</td>
  <td>1.56</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.97</td>
  <td>0.29</td>
  <td>2.41</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.19</td>
  <td>1.28</td>
  <td>1.51</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.06</td>
  <td>0.24</td>
  <td>2.86</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.26</td>
  <td>1.34</td>
  <td>1.79</td>
</tr></table>