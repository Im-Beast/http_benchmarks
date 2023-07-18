# Multiple routes
## Name: Fastro 

### Version: 0.70.5
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
    <td>84.27k</td>
    <td>95.56k</td>
    <td>9.27k</td>
    <td>0.89 MiB</td>
    <td>0.75</td>
    <td>0.49</td>
    <td>3.60</td>
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
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>91733.36k</td>
  <td>95555.37k</td>
  <td>95555.37k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.92</td>
  <td>1.32</td>
  <td>1.80</td>
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
  <td>84.27k</td>
  <td>95.56k</td>
  <td>9.27k</td>
  <td>0.89</td>
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>72600.29k</td>
  <td>91733.36k</td>
  <td>95555.37k</td>
  <td>95555.37k</td>
</tr><tr>
  <td>/random_number</td>
  <td>78.75k</td>
  <td>90.03k</td>
  <td>11.53k</td>
  <td>1.38</td>
  <td>65496.97k</td>
  <td>65496.97k</td>
  <td>65496.97k</td>
  <td>65496.97k</td>
  <td>88606.91k</td>
  <td>90028.55k</td>
  <td>90028.55k</td>
</tr><tr>
  <td>/count</td>
  <td>83.59k</td>
  <td>95.24k</td>
  <td>13.29k</td>
  <td>0.08</td>
  <td>65153.86k</td>
  <td>65153.86k</td>
  <td>65153.86k</td>
  <td>65153.86k</td>
  <td>92224.36k</td>
  <td>95243.18k</td>
  <td>95243.18k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>80.71k</td>
  <td>89.93k</td>
  <td>8.67k</td>
  <td>0.15</td>
  <td>73645.10k</td>
  <td>73645.10k</td>
  <td>73645.10k</td>
  <td>73645.10k</td>
  <td>88619.95k</td>
  <td>89928.70k</td>
  <td>89928.70k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>78.74k</td>
  <td>92.94k</td>
  <td>10.74k</td>
  <td>0.15</td>
  <td>63733.43k</td>
  <td>63733.43k</td>
  <td>63733.43k</td>
  <td>63733.43k</td>
  <td>89497.08k</td>
  <td>92944.47k</td>
  <td>92944.47k</td>
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
  <td>0.75</td>
  <td>0.49</td>
  <td>3.60</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.92</td>
  <td>1.32</td>
  <td>1.80</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.81</td>
  <td>0.44</td>
  <td>3.74</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.98</td>
  <td>1.40</td>
  <td>1.87</td>
</tr><tr>
  <td>/count</td>
  <td>0.76</td>
  <td>0.51</td>
  <td>3.23</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.93</td>
  <td>1.28</td>
  <td>1.86</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.79</td>
  <td>0.46</td>
  <td>3.57</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.00</td>
  <td>1.29</td>
  <td>2.06</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.81</td>
  <td>0.41</td>
  <td>3.38</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.02</td>
  <td>1.36</td>
  <td>2.31</td>
</tr></table>