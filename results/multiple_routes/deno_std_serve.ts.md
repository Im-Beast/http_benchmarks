# Name: std serve 
  
  ### Version: 0.193.0
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
    <td>87.79k</td>
    <td>97.45k</td>
    <td>9.23k</td>
    <td>1.54 MiB</td>
    <td>0.72</td>
    <td>0.42</td>
    <td>3.12</td>
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
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>95205.94k</td>
  <td>97450.66k</td>
  <td>97450.66k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.87</td>
  <td>0.94</td>
  <td>1.57</td>
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
  <td>87.79k</td>
  <td>97.45k</td>
  <td>9.23k</td>
  <td>1.54</td>
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>75485.47k</td>
  <td>95205.94k</td>
  <td>97450.66k</td>
  <td>97450.66k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>92.91k</td>
  <td>103.26k</td>
  <td>8.56k</td>
  <td>0.98</td>
  <td>83009.09k</td>
  <td>83009.09k</td>
  <td>83009.09k</td>
  <td>83009.09k</td>
  <td>101483.54k</td>
  <td>103256.39k</td>
  <td>103256.39k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>88.82k</td>
  <td>97.85k</td>
  <td>9.25k</td>
  <td>0.17</td>
  <td>79403.39k</td>
  <td>79403.39k</td>
  <td>79403.39k</td>
  <td>79403.39k</td>
  <td>96201.71k</td>
  <td>97851.14k</td>
  <td>97851.14k</td>
</tr><tr>
  <td>/count</td>
  <td>94.11k</td>
  <td>104.88k</td>
  <td>11.36k</td>
  <td>0.09</td>
  <td>85214.26k</td>
  <td>85214.26k</td>
  <td>85214.26k</td>
  <td>85214.26k</td>
  <td>103633.46k</td>
  <td>104879.06k</td>
  <td>104879.06k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>88.85k</td>
  <td>99.07k</td>
  <td>8.36k</td>
  <td>0.17</td>
  <td>74900.61k</td>
  <td>74900.61k</td>
  <td>74900.61k</td>
  <td>74900.61k</td>
  <td>98103.68k</td>
  <td>99071.44k</td>
  <td>99071.44k</td>
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
  <td>0.72</td>
  <td>0.42</td>
  <td>3.12</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.87</td>
  <td>0.94</td>
  <td>1.57</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.68</td>
  <td>0.45</td>
  <td>3.03</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.82</td>
  <td>0.90</td>
  <td>1.53</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.71</td>
  <td>0.40</td>
  <td>3.11</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.87</td>
  <td>1.07</td>
  <td>1.53</td>
</tr><tr>
  <td>/count</td>
  <td>0.67</td>
  <td>0.42</td>
  <td>3.16</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.57</td>
  <td>0.80</td>
  <td>0.89</td>
  <td>1.45</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.71</td>
  <td>0.39</td>
  <td>2.89</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.61</td>
  <td>0.87</td>
  <td>1.06</td>
  <td>1.49</td>
</tr></table>