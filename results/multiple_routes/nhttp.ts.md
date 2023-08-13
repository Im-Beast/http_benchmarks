# Multiple routes
## Name: NHttp 

### Version: 1.3.6
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
    <td>57.98k</td>
    <td>71.07k</td>
    <td>7.30k</td>
    <td>0.61 MiB</td>
    <td>1.09</td>
    <td>0.48</td>
    <td>2.20</td>
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
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>70190.98k</td>
  <td>71072.16k</td>
  <td>71072.16k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.29</td>
  <td>1.37</td>
  <td>1.69</td>
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
  <td>57.98k</td>
  <td>71.07k</td>
  <td>7.30k</td>
  <td>0.61</td>
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>51688.04k</td>
  <td>70190.98k</td>
  <td>71072.16k</td>
  <td>71072.16k</td>
</tr><tr>
  <td>/random_number</td>
  <td>56.06k</td>
  <td>71.07k</td>
  <td>5.26k</td>
  <td>0.98</td>
  <td>46915.92k</td>
  <td>46915.92k</td>
  <td>46915.92k</td>
  <td>46915.92k</td>
  <td>63205.52k</td>
  <td>71068.31k</td>
  <td>71068.31k</td>
</tr><tr>
  <td>/count</td>
  <td>64.45k</td>
  <td>73.96k</td>
  <td>8.90k</td>
  <td>0.06</td>
  <td>50966.36k</td>
  <td>50966.36k</td>
  <td>50966.36k</td>
  <td>50966.36k</td>
  <td>73224.53k</td>
  <td>73964.36k</td>
  <td>73964.36k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.10k</td>
  <td>73.44k</td>
  <td>8.70k</td>
  <td>0.12</td>
  <td>49827.63k</td>
  <td>49827.63k</td>
  <td>49827.63k</td>
  <td>49827.63k</td>
  <td>73091.16k</td>
  <td>73440.81k</td>
  <td>73440.81k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>57.68k</td>
  <td>72.04k</td>
  <td>8.15k</td>
  <td>0.11</td>
  <td>48278.08k</td>
  <td>48278.08k</td>
  <td>48278.08k</td>
  <td>48278.08k</td>
  <td>70304.21k</td>
  <td>72038.53k</td>
  <td>72038.53k</td>
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
  <td>1.09</td>
  <td>0.48</td>
  <td>2.20</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.29</td>
  <td>1.37</td>
  <td>1.69</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.13</td>
  <td>0.61</td>
  <td>2.33</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.35</td>
  <td>1.48</td>
  <td>1.73</td>
</tr><tr>
  <td>/count</td>
  <td>0.98</td>
  <td>0.19</td>
  <td>2.83</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>0.82</td>
  <td>1.21</td>
  <td>1.32</td>
  <td>1.64</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.98</td>
  <td>0.28</td>
  <td>2.24</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>1.22</td>
  <td>1.33</td>
  <td>1.66</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.09</td>
  <td>0.66</td>
  <td>2.44</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.32</td>
  <td>1.43</td>
  <td>1.61</td>
</tr></table>