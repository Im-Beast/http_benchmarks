# Multiple routes
## Name: Fastro (flash) 

### Version: 0.78.2
### Deno version: 1.35.2

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
    <td>61.34k</td>
    <td>69.84k</td>
    <td>8.55k</td>
    <td>0.65 MiB</td>
    <td>1.02</td>
    <td>0.25</td>
    <td>2.77</td>
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
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>69701.60k</td>
  <td>69843.54k</td>
  <td>69843.54k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.26</td>
  <td>1.38</td>
  <td>2.10</td>
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
  <td>61.34k</td>
  <td>69.84k</td>
  <td>8.55k</td>
  <td>0.65</td>
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>48647.78k</td>
  <td>69701.60k</td>
  <td>69843.54k</td>
  <td>69843.54k</td>
</tr><tr>
  <td>/random_number</td>
  <td>56.61k</td>
  <td>66.10k</td>
  <td>6.58k</td>
  <td>0.98</td>
  <td>46123.92k</td>
  <td>46123.92k</td>
  <td>46123.92k</td>
  <td>46123.92k</td>
  <td>65593.38k</td>
  <td>66101.69k</td>
  <td>66101.69k</td>
</tr><tr>
  <td>/count</td>
  <td>63.57k</td>
  <td>72.26k</td>
  <td>7.56k</td>
  <td>0.06</td>
  <td>48062.89k</td>
  <td>48062.89k</td>
  <td>48062.89k</td>
  <td>48062.89k</td>
  <td>71934.67k</td>
  <td>72264.51k</td>
  <td>72264.51k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.58k</td>
  <td>70.50k</td>
  <td>7.61k</td>
  <td>0.12</td>
  <td>51903.10k</td>
  <td>51903.10k</td>
  <td>51903.10k</td>
  <td>51903.10k</td>
  <td>69824.37k</td>
  <td>70496.63k</td>
  <td>70496.63k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>57.44k</td>
  <td>70.00k</td>
  <td>9.20k</td>
  <td>0.11</td>
  <td>49203.53k</td>
  <td>49203.53k</td>
  <td>49203.53k</td>
  <td>49203.53k</td>
  <td>68489.04k</td>
  <td>69995.28k</td>
  <td>69995.28k</td>
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
  <td>1.02</td>
  <td>0.25</td>
  <td>2.77</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.26</td>
  <td>1.38</td>
  <td>2.10</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.12</td>
  <td>0.32</td>
  <td>2.23</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.37</td>
  <td>1.50</td>
  <td>1.84</td>
</tr><tr>
  <td>/count</td>
  <td>1.00</td>
  <td>0.54</td>
  <td>2.35</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.24</td>
  <td>1.43</td>
  <td>1.80</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.98</td>
  <td>0.40</td>
  <td>2.26</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.19</td>
  <td>1.32</td>
  <td>1.63</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.07</td>
  <td>0.15</td>
  <td>2.21</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.29</td>
  <td>1.42</td>
  <td>1.75</td>
</tr></table>