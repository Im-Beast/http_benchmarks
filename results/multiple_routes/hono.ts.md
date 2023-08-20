# Multiple routes
## Name: Hono 

### Version: 3.4.3
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
    <td>79.55k</td>
    <td>93.38k</td>
    <td>7.99k</td>
    <td>0.84 MiB</td>
    <td>0.79</td>
    <td>0.50</td>
    <td>3.16</td>
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
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>83327.45k</td>
  <td>93375.33k</td>
  <td>93375.33k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.87</td>
  <td>0.93</td>
  <td>1.54</td>
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
  <td>79.55k</td>
  <td>93.38k</td>
  <td>7.99k</td>
  <td>0.84</td>
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>75462.56k</td>
  <td>83327.45k</td>
  <td>93375.33k</td>
  <td>93375.33k</td>
</tr><tr>
  <td>/random_number</td>
  <td>87.65k</td>
  <td>113.06k</td>
  <td>13.09k</td>
  <td>1.51</td>
  <td>76226.06k</td>
  <td>76226.06k</td>
  <td>76226.06k</td>
  <td>76226.06k</td>
  <td>105491.58k</td>
  <td>113056.10k</td>
  <td>113056.10k</td>
</tr><tr>
  <td>/count</td>
  <td>80.72k</td>
  <td>90.48k</td>
  <td>8.54k</td>
  <td>0.08</td>
  <td>75249.67k</td>
  <td>75249.67k</td>
  <td>75249.67k</td>
  <td>75249.67k</td>
  <td>85617.26k</td>
  <td>90476.21k</td>
  <td>90476.21k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>105.22k</td>
  <td>122.20k</td>
  <td>11.25k</td>
  <td>0.20</td>
  <td>88139.50k</td>
  <td>88139.50k</td>
  <td>88139.50k</td>
  <td>88139.50k</td>
  <td>122199.08k</td>
  <td>122199.08k</td>
  <td>122199.08k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>105.34k</td>
  <td>122.27k</td>
  <td>8.76k</td>
  <td>0.21</td>
  <td>84447.33k</td>
  <td>84447.33k</td>
  <td>84447.33k</td>
  <td>84447.33k</td>
  <td>122271.74k</td>
  <td>122271.74k</td>
  <td>122271.74k</td>
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
  <td>0.79</td>
  <td>0.50</td>
  <td>3.16</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.87</td>
  <td>0.93</td>
  <td>1.54</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.73</td>
  <td>0.49</td>
  <td>1.76</td>
  <td>0.54</td>
  <td>0.54</td>
  <td>0.54</td>
  <td>0.54</td>
  <td>0.85</td>
  <td>0.89</td>
  <td>1.55</td>
</tr><tr>
  <td>/count</td>
  <td>0.78</td>
  <td>0.48</td>
  <td>2.91</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.67</td>
  <td>0.84</td>
  <td>0.87</td>
  <td>1.48</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.60</td>
  <td>0.45</td>
  <td>1.70</td>
  <td>0.49</td>
  <td>0.49</td>
  <td>0.49</td>
  <td>0.49</td>
  <td>0.80</td>
  <td>0.87</td>
  <td>1.55</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.58</td>
  <td>0.45</td>
  <td>1.71</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.50</td>
  <td>0.65</td>
  <td>0.73</td>
  <td>1.38</td>
</tr></table>