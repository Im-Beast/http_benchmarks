# Name: Deno.serveHttp 
  
  ### Version: Deno 1.35.1
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
    <td>76.06k</td>
    <td>82.91k</td>
    <td>6.48k</td>
    <td>1.33 MiB</td>
    <td>0.83</td>
    <td>0.51</td>
    <td>3.43</td>
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
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>82530.98k</td>
  <td>82907.55k</td>
  <td>82907.55k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.04</td>
  <td>1.22</td>
  <td>1.71</td>
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
  <td>76.06k</td>
  <td>82.91k</td>
  <td>6.48k</td>
  <td>1.33</td>
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>65642.30k</td>
  <td>82530.98k</td>
  <td>82907.55k</td>
  <td>82907.55k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>78.89k</td>
  <td>86.40k</td>
  <td>6.56k</td>
  <td>0.83</td>
  <td>67939.80k</td>
  <td>67939.80k</td>
  <td>67939.80k</td>
  <td>67939.80k</td>
  <td>85850.35k</td>
  <td>86397.57k</td>
  <td>86397.57k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>75.58k</td>
  <td>85.16k</td>
  <td>9.12k</td>
  <td>0.15</td>
  <td>60721.72k</td>
  <td>60721.72k</td>
  <td>60721.72k</td>
  <td>60721.72k</td>
  <td>83150.78k</td>
  <td>85164.44k</td>
  <td>85164.44k</td>
</tr><tr>
  <td>/count</td>
  <td>79.31k</td>
  <td>87.18k</td>
  <td>7.00k</td>
  <td>0.08</td>
  <td>68732.34k</td>
  <td>68732.34k</td>
  <td>68732.34k</td>
  <td>68732.34k</td>
  <td>86660.72k</td>
  <td>87176.30k</td>
  <td>87176.30k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>77.79k</td>
  <td>84.10k</td>
  <td>7.12k</td>
  <td>0.15</td>
  <td>66193.44k</td>
  <td>66193.44k</td>
  <td>66193.44k</td>
  <td>66193.44k</td>
  <td>83725.94k</td>
  <td>84101.88k</td>
  <td>84101.88k</td>
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
  <td>0.83</td>
  <td>0.51</td>
  <td>3.43</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.04</td>
  <td>1.22</td>
  <td>1.71</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.81</td>
  <td>0.44</td>
  <td>2.92</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.99</td>
  <td>1.16</td>
  <td>1.69</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.83</td>
  <td>0.51</td>
  <td>3.01</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.02</td>
  <td>1.19</td>
  <td>1.68</td>
</tr><tr>
  <td>/count</td>
  <td>0.80</td>
  <td>0.51</td>
  <td>2.87</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.69</td>
  <td>0.99</td>
  <td>1.10</td>
  <td>1.63</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.82</td>
  <td>0.47</td>
  <td>3.10</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>0.71</td>
  <td>1.03</td>
  <td>1.19</td>
  <td>1.70</td>
</tr></table>