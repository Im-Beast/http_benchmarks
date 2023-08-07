# Multiple routes
## Name: Hydra 

### Version: 0.1.1
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
    <td>56.89k</td>
    <td>67.38k</td>
    <td>6.66k</td>
    <td>0.59 MiB</td>
    <td>1.12</td>
    <td>0.72</td>
    <td>2.38</td>
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
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>64407.80k</td>
  <td>67381.10k</td>
  <td>67381.10k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.38</td>
  <td>1.51</td>
  <td>1.76</td>
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
  <td>56.89k</td>
  <td>67.38k</td>
  <td>6.66k</td>
  <td>0.59</td>
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>42628.68k</td>
  <td>64407.80k</td>
  <td>67381.10k</td>
  <td>67381.10k</td>
</tr><tr>
  <td>/random_number</td>
  <td>56.25k</td>
  <td>68.14k</td>
  <td>7.76k</td>
  <td>0.98</td>
  <td>46815.48k</td>
  <td>46815.48k</td>
  <td>46815.48k</td>
  <td>46815.48k</td>
  <td>67290.13k</td>
  <td>68141.09k</td>
  <td>68141.09k</td>
</tr><tr>
  <td>/count</td>
  <td>57.72k</td>
  <td>70.32k</td>
  <td>7.24k</td>
  <td>0.06</td>
  <td>48577.09k</td>
  <td>48577.09k</td>
  <td>48577.09k</td>
  <td>48577.09k</td>
  <td>70024.97k</td>
  <td>70324.72k</td>
  <td>70324.72k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>57.44k</td>
  <td>71.17k</td>
  <td>8.59k</td>
  <td>0.11</td>
  <td>44738.11k</td>
  <td>44738.11k</td>
  <td>44738.11k</td>
  <td>44738.11k</td>
  <td>71114.22k</td>
  <td>71166.77k</td>
  <td>71166.77k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>64.76k</td>
  <td>72.24k</td>
  <td>9.92k</td>
  <td>0.12</td>
  <td>52321.57k</td>
  <td>52321.57k</td>
  <td>52321.57k</td>
  <td>52321.57k</td>
  <td>71526.19k</td>
  <td>72242.95k</td>
  <td>72242.95k</td>
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
  <td>0.72</td>
  <td>2.38</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.38</td>
  <td>1.51</td>
  <td>1.76</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.13</td>
  <td>0.77</td>
  <td>2.27</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.36</td>
  <td>1.52</td>
  <td>1.82</td>
</tr><tr>
  <td>/count</td>
  <td>1.10</td>
  <td>0.38</td>
  <td>2.46</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.29</td>
  <td>1.42</td>
  <td>1.66</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.09</td>
  <td>0.33</td>
  <td>2.37</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.28</td>
  <td>1.39</td>
  <td>1.73</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.98</td>
  <td>0.60</td>
  <td>1.87</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.19</td>
  <td>1.32</td>
  <td>1.57</td>
</tr></table>