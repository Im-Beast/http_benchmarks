# Multiple routes
## Name: Hydra 

### Version: 0.1.1
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
    <td>87.76k</td>
    <td>97.35k</td>
    <td>9.79k</td>
    <td>0.94 MiB</td>
    <td>0.70</td>
    <td>0.43</td>
    <td>1.35</td>
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
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>93262.02k</td>
  <td>97347.82k</td>
  <td>97347.82k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.79</td>
  <td>0.82</td>
  <td>0.89</td>
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
  <td>87.76k</td>
  <td>97.35k</td>
  <td>9.79k</td>
  <td>0.94</td>
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>81506.86k</td>
  <td>93262.02k</td>
  <td>97347.82k</td>
  <td>97347.82k</td>
</tr><tr>
  <td>/random_number</td>
  <td>116.59k</td>
  <td>128.62k</td>
  <td>8.02k</td>
  <td>2.04</td>
  <td>100566.99k</td>
  <td>100566.99k</td>
  <td>100566.99k</td>
  <td>100566.99k</td>
  <td>128620.91k</td>
  <td>128620.91k</td>
  <td>128620.91k</td>
</tr><tr>
  <td>/count</td>
  <td>87.89k</td>
  <td>92.81k</td>
  <td>4.53k</td>
  <td>0.08</td>
  <td>80961.59k</td>
  <td>80961.59k</td>
  <td>80961.59k</td>
  <td>80961.59k</td>
  <td>92041.70k</td>
  <td>92811.28k</td>
  <td>92811.28k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>128.42k</td>
  <td>137.29k</td>
  <td>12.53k</td>
  <td>0.24</td>
  <td>98464.24k</td>
  <td>98464.24k</td>
  <td>98464.24k</td>
  <td>98464.24k</td>
  <td>137288.46k</td>
  <td>137288.46k</td>
  <td>137288.46k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>93.07k</td>
  <td>114.36k</td>
  <td>8.34k</td>
  <td>0.18</td>
  <td>78746.89k</td>
  <td>78746.89k</td>
  <td>78746.89k</td>
  <td>78746.89k</td>
  <td>100277.75k</td>
  <td>114361.09k</td>
  <td>114361.09k</td>
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
  <td>0.70</td>
  <td>0.43</td>
  <td>1.35</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.79</td>
  <td>0.82</td>
  <td>0.89</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.54</td>
  <td>0.42</td>
  <td>1.25</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.47</td>
  <td>0.68</td>
  <td>0.74</td>
  <td>0.92</td>
</tr><tr>
  <td>/count</td>
  <td>0.72</td>
  <td>0.46</td>
  <td>1.52</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.78</td>
  <td>0.80</td>
  <td>0.90</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.49</td>
  <td>0.40</td>
  <td>1.51</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.56</td>
  <td>0.65</td>
  <td>0.83</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.68</td>
  <td>0.42</td>
  <td>1.38</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.78</td>
  <td>0.80</td>
  <td>0.91</td>
</tr></table>