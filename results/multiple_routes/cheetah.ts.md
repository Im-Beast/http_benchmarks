# Name: Cheetah 
  
  ### Version: 0.13.0
  ### Deno version: 1.34.3

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
    <td>59.73k</td>
    <td>65.34k</td>
    <td>5.78k</td>
    <td>1.04 MiB</td>
    <td>1.06</td>
    <td>0.77</td>
    <td>3.35</td>
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
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>65141.75k</td>
  <td>65340.32k</td>
  <td>65340.32k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.23</td>
  <td>1.52</td>
  <td>2.20</td>
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
  <td>59.73k</td>
  <td>65.34k</td>
  <td>5.78k</td>
  <td>1.04</td>
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>53938.49k</td>
  <td>65141.75k</td>
  <td>65340.32k</td>
  <td>65340.32k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>64.95k</td>
  <td>70.84k</td>
  <td>4.61k</td>
  <td>0.68</td>
  <td>58467.83k</td>
  <td>58467.83k</td>
  <td>58467.83k</td>
  <td>58467.83k</td>
  <td>69985.20k</td>
  <td>70836.91k</td>
  <td>70836.91k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>65.79k</td>
  <td>73.03k</td>
  <td>4.39k</td>
  <td>0.13</td>
  <td>60736.84k</td>
  <td>60736.84k</td>
  <td>60736.84k</td>
  <td>60736.84k</td>
  <td>71833.83k</td>
  <td>73030.24k</td>
  <td>73030.24k</td>
</tr><tr>
  <td>/count</td>
  <td>65.15k</td>
  <td>69.70k</td>
  <td>4.35k</td>
  <td>0.06</td>
  <td>57008.07k</td>
  <td>57008.07k</td>
  <td>57008.07k</td>
  <td>57008.07k</td>
  <td>69690.03k</td>
  <td>69703.71k</td>
  <td>69703.71k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>66.08k</td>
  <td>72.99k</td>
  <td>5.90k</td>
  <td>0.13</td>
  <td>57886.09k</td>
  <td>57886.09k</td>
  <td>57886.09k</td>
  <td>57886.09k</td>
  <td>72135.49k</td>
  <td>72994.48k</td>
  <td>72994.48k</td>
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
  <td>1.06</td>
  <td>0.77</td>
  <td>3.35</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>0.86</td>
  <td>1.23</td>
  <td>1.52</td>
  <td>2.20</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.98</td>
  <td>0.63</td>
  <td>2.13</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>1.14</td>
  <td>1.39</td>
  <td>1.87</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.97</td>
  <td>0.71</td>
  <td>2.51</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>1.09</td>
  <td>1.44</td>
  <td>1.97</td>
</tr><tr>
  <td>/count</td>
  <td>0.98</td>
  <td>0.60</td>
  <td>2.47</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>0.81</td>
  <td>1.09</td>
  <td>1.32</td>
  <td>2.01</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.95</td>
  <td>0.67</td>
  <td>2.14</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>0.79</td>
  <td>1.10</td>
  <td>1.36</td>
  <td>1.88</td>
</tr></table>