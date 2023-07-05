# Name: Acorn 
  
  ### Version: 0.3.0
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
    <td>5.90k</td>
    <td>15.52k</td>
    <td>2.73k</td>
    <td>0.10 MiB</td>
    <td>10.84</td>
    <td>5.04</td>
    <td>19.76</td>
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
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>7068.83k</td>
  <td>13624.29k</td>
  <td>15204.17k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>12.81</td>
  <td>14.03</td>
  <td>17.13</td>
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
  <td>5.90k</td>
  <td>15.52k</td>
  <td>2.73k</td>
  <td>0.10</td>
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>4746.93k</td>
  <td>7068.83k</td>
  <td>13624.29k</td>
  <td>15204.17k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>9.00k</td>
  <td>229.53k</td>
  <td>27.58k</td>
  <td>0.03</td>
  <td>73.21k</td>
  <td>73.21k</td>
  <td>73.21k</td>
  <td>73.21k</td>
  <td>13588.76k</td>
  <td>19400.08k</td>
  <td>185020.29k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>34.21k</td>
  <td>268.70k</td>
  <td>63.55k</td>
  <td>0.00</td>
  <td>52.60k</td>
  <td>52.60k</td>
  <td>52.60k</td>
  <td>52.60k</td>
  <td>157599.24k</td>
  <td>177403.47k</td>
  <td>207333.90k</td>
</tr><tr>
  <td>/count</td>
  <td>57.60k</td>
  <td>267.18k</td>
  <td>72.91k</td>
  <td>0.00</td>
  <td>31.18k</td>
  <td>31.18k</td>
  <td>31.18k</td>
  <td>31.18k</td>
  <td>167571.35k</td>
  <td>187688.86k</td>
  <td>220853.91k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>51.38k</td>
  <td>257.51k</td>
  <td>72.19k</td>
  <td>0.00</td>
  <td>35.91k</td>
  <td>35.91k</td>
  <td>35.91k</td>
  <td>35.91k</td>
  <td>167300.24k</td>
  <td>190639.60k</td>
  <td>220288.58k</td>
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
  <td>10.84</td>
  <td>5.04</td>
  <td>19.76</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>8.58</td>
  <td>12.81</td>
  <td>14.03</td>
  <td>17.13</td>
</tr><tr>
  <td>/hello_world</td>
  <td>19.71</td>
  <td>8.22</td>
  <td>35.29</td>
  <td>16.69</td>
  <td>16.69</td>
  <td>16.69</td>
  <td>16.69</td>
  <td>22.47</td>
  <td>27.39</td>
  <td>32.24</td>
</tr><tr>
  <td>/plus_1</td>
  <td>30.16</td>
  <td>11.30</td>
  <td>59.77</td>
  <td>25.76</td>
  <td>25.76</td>
  <td>25.76</td>
  <td>25.76</td>
  <td>33.56</td>
  <td>39.47</td>
  <td>48.29</td>
</tr><tr>
  <td>/count</td>
  <td>62.83</td>
  <td>26.64</td>
  <td>115.34</td>
  <td>56.75</td>
  <td>56.75</td>
  <td>56.75</td>
  <td>56.75</td>
  <td>68.23</td>
  <td>76.42</td>
  <td>97.10</td>
</tr><tr>
  <td>/minus_1</td>
  <td>51.74</td>
  <td>21.45</td>
  <td>92.92</td>
  <td>43.69</td>
  <td>43.69</td>
  <td>43.69</td>
  <td>43.69</td>
  <td>57.10</td>
  <td>64.49</td>
  <td>79.52</td>
</tr></table>