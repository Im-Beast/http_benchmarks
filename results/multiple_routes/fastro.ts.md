# Name: Fastro 
  
  ### Version: 0.70.5
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
    <td>84.10k</td>
    <td>94.37k</td>
    <td>8.85k</td>
    <td>1.48 MiB</td>
    <td>0.75</td>
    <td>0.44</td>
    <td>3.50</td>
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
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>91980.18k</td>
  <td>94373.98k</td>
  <td>94373.98k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.91</td>
  <td>1.19</td>
  <td>1.67</td>
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
  <td>84.10k</td>
  <td>94.37k</td>
  <td>8.85k</td>
  <td>1.48</td>
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>70577.38k</td>
  <td>91980.18k</td>
  <td>94373.98k</td>
  <td>94373.98k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>86.36k</td>
  <td>96.44k</td>
  <td>8.59k</td>
  <td>0.90</td>
  <td>69411.04k</td>
  <td>69411.04k</td>
  <td>69411.04k</td>
  <td>69411.04k</td>
  <td>94933.12k</td>
  <td>96437.77k</td>
  <td>96437.77k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>82.20k</td>
  <td>92.20k</td>
  <td>9.57k</td>
  <td>0.16</td>
  <td>64602.31k</td>
  <td>64602.31k</td>
  <td>64602.31k</td>
  <td>64602.31k</td>
  <td>91106.54k</td>
  <td>92201.88k</td>
  <td>92201.88k</td>
</tr><tr>
  <td>/count</td>
  <td>87.94k</td>
  <td>98.31k</td>
  <td>8.28k</td>
  <td>0.08</td>
  <td>76594.38k</td>
  <td>76594.38k</td>
  <td>76594.38k</td>
  <td>76594.38k</td>
  <td>95045.69k</td>
  <td>98311.23k</td>
  <td>98311.23k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>83.16k</td>
  <td>92.80k</td>
  <td>8.99k</td>
  <td>0.16</td>
  <td>75137.51k</td>
  <td>75137.51k</td>
  <td>75137.51k</td>
  <td>75137.51k</td>
  <td>90821.45k</td>
  <td>92804.13k</td>
  <td>92804.13k</td>
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
  <td>0.75</td>
  <td>0.44</td>
  <td>3.50</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.91</td>
  <td>1.19</td>
  <td>1.67</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.73</td>
  <td>0.40</td>
  <td>3.44</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.89</td>
  <td>1.15</td>
  <td>1.60</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.76</td>
  <td>0.44</td>
  <td>2.94</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.93</td>
  <td>1.17</td>
  <td>1.58</td>
</tr><tr>
  <td>/count</td>
  <td>0.72</td>
  <td>0.41</td>
  <td>2.88</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.87</td>
  <td>1.16</td>
  <td>1.60</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.76</td>
  <td>0.43</td>
  <td>3.42</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.93</td>
  <td>1.16</td>
  <td>1.52</td>
</tr></table>