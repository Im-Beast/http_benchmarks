# Name: Deno.serveHttp 
  
  ### Version: Deno 1.35.0
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
    <td>74.86k</td>
    <td>83.43k</td>
    <td>8.30k</td>
    <td>1.31 MiB</td>
    <td>0.85</td>
    <td>0.54</td>
    <td>3.47</td>
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
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>81234.93k</td>
  <td>83433.95k</td>
  <td>83433.95k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.04</td>
  <td>1.23</td>
  <td>1.88</td>
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
  <td>74.86k</td>
  <td>83.43k</td>
  <td>8.30k</td>
  <td>1.31</td>
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>59739.57k</td>
  <td>81234.93k</td>
  <td>83433.95k</td>
  <td>83433.95k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>79.10k</td>
  <td>89.96k</td>
  <td>8.75k</td>
  <td>0.83</td>
  <td>68141.62k</td>
  <td>68141.62k</td>
  <td>68141.62k</td>
  <td>68141.62k</td>
  <td>87412.37k</td>
  <td>89961.36k</td>
  <td>89961.36k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>75.69k</td>
  <td>86.12k</td>
  <td>9.86k</td>
  <td>0.15</td>
  <td>64926.56k</td>
  <td>64926.56k</td>
  <td>64926.56k</td>
  <td>64926.56k</td>
  <td>84206.86k</td>
  <td>86123.94k</td>
  <td>86123.94k</td>
</tr><tr>
  <td>/count</td>
  <td>78.92k</td>
  <td>85.83k</td>
  <td>5.96k</td>
  <td>0.08</td>
  <td>68478.37k</td>
  <td>68478.37k</td>
  <td>68478.37k</td>
  <td>68478.37k</td>
  <td>85312.31k</td>
  <td>85825.95k</td>
  <td>85825.95k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>76.21k</td>
  <td>83.58k</td>
  <td>7.29k</td>
  <td>0.14</td>
  <td>62097.69k</td>
  <td>62097.69k</td>
  <td>62097.69k</td>
  <td>62097.69k</td>
  <td>82782.69k</td>
  <td>83578.62k</td>
  <td>83578.62k</td>
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
  <td>0.85</td>
  <td>0.54</td>
  <td>3.47</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.04</td>
  <td>1.23</td>
  <td>1.88</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.80</td>
  <td>0.45</td>
  <td>3.41</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.97</td>
  <td>1.20</td>
  <td>1.74</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.83</td>
  <td>0.43</td>
  <td>3.17</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.03</td>
  <td>1.19</td>
  <td>1.64</td>
</tr><tr>
  <td>/count</td>
  <td>0.80</td>
  <td>0.39</td>
  <td>3.04</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.99</td>
  <td>1.15</td>
  <td>1.65</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.84</td>
  <td>0.43</td>
  <td>3.19</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.02</td>
  <td>1.24</td>
  <td>1.87</td>
</tr></table>