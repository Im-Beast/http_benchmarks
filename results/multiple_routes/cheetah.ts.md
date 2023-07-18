# Multiple routes
## Name: cheetah 

### Version: 1.0.2
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
    <td>88.89k</td>
    <td>94.46k</td>
    <td>7.43k</td>
    <td>0.95 MiB</td>
    <td>0.70</td>
    <td>0.56</td>
    <td>1.69</td>
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
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>94045.18k</td>
  <td>94459.32k</td>
  <td>94459.32k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.80</td>
  <td>0.84</td>
  <td>1.22</td>
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
  <td>88.89k</td>
  <td>94.46k</td>
  <td>7.43k</td>
  <td>0.95</td>
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>81189.00k</td>
  <td>94045.18k</td>
  <td>94459.32k</td>
  <td>94459.32k</td>
</tr><tr>
  <td>/random_number</td>
  <td>87.51k</td>
  <td>94.05k</td>
  <td>5.94k</td>
  <td>1.53</td>
  <td>80225.60k</td>
  <td>80225.60k</td>
  <td>80225.60k</td>
  <td>80225.60k</td>
  <td>93095.19k</td>
  <td>94050.63k</td>
  <td>94050.63k</td>
</tr><tr>
  <td>/count</td>
  <td>92.04k</td>
  <td>99.21k</td>
  <td>6.10k</td>
  <td>0.09</td>
  <td>87269.26k</td>
  <td>87269.26k</td>
  <td>87269.26k</td>
  <td>87269.26k</td>
  <td>98754.67k</td>
  <td>99208.19k</td>
  <td>99208.19k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>92.92k</td>
  <td>100.13k</td>
  <td>8.01k</td>
  <td>0.18</td>
  <td>83183.64k</td>
  <td>83183.64k</td>
  <td>83183.64k</td>
  <td>83183.64k</td>
  <td>99251.38k</td>
  <td>100125.35k</td>
  <td>100125.35k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>93.34k</td>
  <td>99.52k</td>
  <td>5.40k</td>
  <td>0.18</td>
  <td>87057.61k</td>
  <td>87057.61k</td>
  <td>87057.61k</td>
  <td>87057.61k</td>
  <td>98613.28k</td>
  <td>99519.33k</td>
  <td>99519.33k</td>
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
  <td>0.56</td>
  <td>1.69</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.80</td>
  <td>0.84</td>
  <td>1.22</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.72</td>
  <td>0.57</td>
  <td>1.77</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.85</td>
  <td>0.90</td>
  <td>1.26</td>
</tr><tr>
  <td>/count</td>
  <td>0.69</td>
  <td>0.55</td>
  <td>1.80</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.78</td>
  <td>0.84</td>
  <td>1.19</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.68</td>
  <td>0.55</td>
  <td>1.57</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.78</td>
  <td>0.85</td>
  <td>1.33</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.68</td>
  <td>0.55</td>
  <td>1.64</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.78</td>
  <td>0.83</td>
  <td>1.24</td>
</tr></table>