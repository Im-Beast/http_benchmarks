# Name: Fastro 
  
  ### Version: 0.70.5
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
    <td>71.11k</td>
    <td>82.52k</td>
    <td>7.91k</td>
    <td>1.26 MiB</td>
    <td>0.88</td>
    <td>0.49</td>
    <td>3.65</td>
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
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>79900.26k</td>
  <td>82520.10k</td>
  <td>82520.10k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>1.22</td>
  <td>1.55</td>
  <td>2.11</td>
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
  <td>71.11k</td>
  <td>82.52k</td>
  <td>7.91k</td>
  <td>1.26</td>
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>61602.25k</td>
  <td>79900.26k</td>
  <td>82520.10k</td>
  <td>82520.10k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>76.87k</td>
  <td>92.61k</td>
  <td>13.41k</td>
  <td>0.81</td>
  <td>63383.49k</td>
  <td>63383.49k</td>
  <td>63383.49k</td>
  <td>63383.49k</td>
  <td>91375.83k</td>
  <td>92612.63k</td>
  <td>92612.63k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>70.11k</td>
  <td>86.43k</td>
  <td>12.88k</td>
  <td>0.13</td>
  <td>48356.60k</td>
  <td>48356.60k</td>
  <td>48356.60k</td>
  <td>48356.60k</td>
  <td>85707.69k</td>
  <td>86426.56k</td>
  <td>86426.56k</td>
</tr><tr>
  <td>/count</td>
  <td>80.27k</td>
  <td>90.57k</td>
  <td>7.55k</td>
  <td>0.08</td>
  <td>68700.01k</td>
  <td>68700.01k</td>
  <td>68700.01k</td>
  <td>68700.01k</td>
  <td>88514.38k</td>
  <td>90565.42k</td>
  <td>90565.42k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>76.13k</td>
  <td>87.46k</td>
  <td>10.11k</td>
  <td>0.15</td>
  <td>59923.48k</td>
  <td>59923.48k</td>
  <td>59923.48k</td>
  <td>59923.48k</td>
  <td>85871.68k</td>
  <td>87464.21k</td>
  <td>87464.21k</td>
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
  <td>0.88</td>
  <td>0.49</td>
  <td>3.65</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>0.68</td>
  <td>1.22</td>
  <td>1.55</td>
  <td>2.11</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.82</td>
  <td>0.46</td>
  <td>3.84</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.06</td>
  <td>1.54</td>
  <td>2.80</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.90</td>
  <td>0.52</td>
  <td>4.27</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>0.66</td>
  <td>1.26</td>
  <td>1.55</td>
  <td>3.07</td>
</tr><tr>
  <td>/count</td>
  <td>0.80</td>
  <td>0.39</td>
  <td>3.35</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>1.07</td>
  <td>1.37</td>
  <td>1.98</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.83</td>
  <td>0.42</td>
  <td>4.31</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>0.64</td>
  <td>1.13</td>
  <td>1.46</td>
  <td>2.63</td>
</tr></table>