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
    <td>82.79k</td>
    <td>92.48k</td>
    <td>9.05k</td>
    <td>1.44 MiB</td>
    <td>0.77</td>
    <td>0.40</td>
    <td>3.67</td>
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
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>89689.43k</td>
  <td>92475.87k</td>
  <td>92475.87k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.93</td>
  <td>1.30</td>
  <td>1.70</td>
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
  <td>82.79k</td>
  <td>92.48k</td>
  <td>9.05k</td>
  <td>1.44</td>
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>67013.44k</td>
  <td>89689.43k</td>
  <td>92475.87k</td>
  <td>92475.87k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>86.28k</td>
  <td>95.67k</td>
  <td>12.87k</td>
  <td>0.90</td>
  <td>82527.26k</td>
  <td>82527.26k</td>
  <td>82527.26k</td>
  <td>82527.26k</td>
  <td>93942.26k</td>
  <td>95665.23k</td>
  <td>95665.23k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>84.01k</td>
  <td>92.72k</td>
  <td>8.09k</td>
  <td>0.16</td>
  <td>69609.36k</td>
  <td>69609.36k</td>
  <td>69609.36k</td>
  <td>69609.36k</td>
  <td>89519.31k</td>
  <td>92718.51k</td>
  <td>92718.51k</td>
</tr><tr>
  <td>/count</td>
  <td>88.34k</td>
  <td>99.36k</td>
  <td>8.83k</td>
  <td>0.08</td>
  <td>74358.80k</td>
  <td>74358.80k</td>
  <td>74358.80k</td>
  <td>74358.80k</td>
  <td>97348.50k</td>
  <td>99357.06k</td>
  <td>99357.06k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>81.33k</td>
  <td>95.18k</td>
  <td>11.56k</td>
  <td>0.16</td>
  <td>68521.04k</td>
  <td>68521.04k</td>
  <td>68521.04k</td>
  <td>68521.04k</td>
  <td>89519.30k</td>
  <td>95182.77k</td>
  <td>95182.77k</td>
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
  <td>0.77</td>
  <td>0.40</td>
  <td>3.67</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.65</td>
  <td>0.93</td>
  <td>1.30</td>
  <td>1.70</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.74</td>
  <td>0.38</td>
  <td>3.60</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.89</td>
  <td>1.16</td>
  <td>1.51</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.76</td>
  <td>0.49</td>
  <td>3.65</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.93</td>
  <td>1.22</td>
  <td>1.54</td>
</tr><tr>
  <td>/count</td>
  <td>0.72</td>
  <td>0.39</td>
  <td>3.50</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.86</td>
  <td>1.18</td>
  <td>1.65</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.75</td>
  <td>0.51</td>
  <td>3.38</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.92</td>
  <td>1.16</td>
  <td>1.58</td>
</tr></table>