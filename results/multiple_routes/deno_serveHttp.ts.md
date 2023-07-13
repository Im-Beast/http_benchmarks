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
    <td>75.24k</td>
    <td>82.76k</td>
    <td>6.89k</td>
    <td>1.31 MiB</td>
    <td>0.85</td>
    <td>0.45</td>
    <td>3.40</td>
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
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>81856.82k</td>
  <td>82757.67k</td>
  <td>82757.67k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.05</td>
  <td>1.18</td>
  <td>1.78</td>
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
  <td>75.24k</td>
  <td>82.76k</td>
  <td>6.89k</td>
  <td>1.31</td>
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>61675.78k</td>
  <td>81856.82k</td>
  <td>82757.67k</td>
  <td>82757.67k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>78.39k</td>
  <td>86.49k</td>
  <td>7.42k</td>
  <td>0.82</td>
  <td>65592.04k</td>
  <td>65592.04k</td>
  <td>65592.04k</td>
  <td>65592.04k</td>
  <td>85578.73k</td>
  <td>86485.91k</td>
  <td>86485.91k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>76.98k</td>
  <td>86.67k</td>
  <td>7.68k</td>
  <td>0.15</td>
  <td>66284.91k</td>
  <td>66284.91k</td>
  <td>66284.91k</td>
  <td>66284.91k</td>
  <td>83791.95k</td>
  <td>86665.26k</td>
  <td>86665.26k</td>
</tr><tr>
  <td>/count</td>
  <td>79.53k</td>
  <td>87.37k</td>
  <td>7.59k</td>
  <td>0.08</td>
  <td>67214.89k</td>
  <td>67214.89k</td>
  <td>67214.89k</td>
  <td>67214.89k</td>
  <td>86531.48k</td>
  <td>87369.73k</td>
  <td>87369.73k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>77.87k</td>
  <td>83.69k</td>
  <td>7.27k</td>
  <td>0.15</td>
  <td>64919.38k</td>
  <td>64919.38k</td>
  <td>64919.38k</td>
  <td>64919.38k</td>
  <td>83488.52k</td>
  <td>83685.43k</td>
  <td>83685.43k</td>
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
  <td>0.45</td>
  <td>3.40</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>0.72</td>
  <td>1.05</td>
  <td>1.18</td>
  <td>1.78</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.81</td>
  <td>0.45</td>
  <td>3.12</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.99</td>
  <td>1.13</td>
  <td>1.77</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.82</td>
  <td>0.42</td>
  <td>3.11</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>0.70</td>
  <td>1.02</td>
  <td>1.14</td>
  <td>1.59</td>
</tr><tr>
  <td>/count</td>
  <td>0.80</td>
  <td>0.41</td>
  <td>3.12</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.99</td>
  <td>1.14</td>
  <td>1.63</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.82</td>
  <td>0.44</td>
  <td>3.31</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.02</td>
  <td>1.20</td>
  <td>1.68</td>
</tr></table>