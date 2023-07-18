# Multiple routes
## Name: Acorn 

### Version: 0.4.0
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
    <td>5.78k</td>
    <td>24.86k</td>
    <td>2.97k</td>
    <td>0.06 MiB</td>
    <td>11.41</td>
    <td>4.64</td>
    <td>21.57</td>
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
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>6955.41k</td>
  <td>10371.07k</td>
  <td>17336.08k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>13.86</td>
  <td>14.94</td>
  <td>18.07</td>
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
  <td>5.78k</td>
  <td>24.86k</td>
  <td>2.97k</td>
  <td>0.06</td>
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>4300.23k</td>
  <td>6955.41k</td>
  <td>10371.07k</td>
  <td>17336.08k</td>
</tr><tr>
  <td>/random_number</td>
  <td>17.73k</td>
  <td>351.00k</td>
  <td>46.97k</td>
  <td>0.05</td>
  <td>69.26k</td>
  <td>69.26k</td>
  <td>69.26k</td>
  <td>69.26k</td>
  <td>28614.02k</td>
  <td>168502.77k</td>
  <td>199647.68k</td>
</tr><tr>
  <td>/count</td>
  <td>42.88k</td>
  <td>237.66k</td>
  <td>72.51k</td>
  <td>0.00</td>
  <td>46.98k</td>
  <td>46.98k</td>
  <td>46.98k</td>
  <td>46.98k</td>
  <td>174138.21k</td>
  <td>190758.32k</td>
  <td>212255.76k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>50.49k</td>
  <td>272.01k</td>
  <td>72.95k</td>
  <td>0.00</td>
  <td>40.97k</td>
  <td>40.97k</td>
  <td>40.97k</td>
  <td>40.97k</td>
  <td>170277.73k</td>
  <td>188943.05k</td>
  <td>216961.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>58.13k</td>
  <td>284.40k</td>
  <td>77.29k</td>
  <td>0.00</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>174986.29k</td>
  <td>194978.72k</td>
  <td>224323.38k</td>
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
  <td>11.41</td>
  <td>4.64</td>
  <td>21.57</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>9.07</td>
  <td>13.86</td>
  <td>14.94</td>
  <td>18.07</td>
</tr><tr>
  <td>/random_number</td>
  <td>22.23</td>
  <td>10.41</td>
  <td>44.86</td>
  <td>18.62</td>
  <td>18.62</td>
  <td>18.62</td>
  <td>18.62</td>
  <td>25.01</td>
  <td>30.49</td>
  <td>35.51</td>
</tr><tr>
  <td>/count</td>
  <td>33.41</td>
  <td>13.63</td>
  <td>58.67</td>
  <td>28.45</td>
  <td>28.45</td>
  <td>28.45</td>
  <td>28.45</td>
  <td>36.78</td>
  <td>46.32</td>
  <td>53.02</td>
</tr><tr>
  <td>/plus_1</td>
  <td>43.75</td>
  <td>18.03</td>
  <td>93.34</td>
  <td>36.53</td>
  <td>36.53</td>
  <td>36.53</td>
  <td>36.53</td>
  <td>49.55</td>
  <td>55.53</td>
  <td>70.58</td>
</tr><tr>
  <td>/minus_1</td>
  <td>60.31</td>
  <td>25.82</td>
  <td>117.86</td>
  <td>52.72</td>
  <td>52.72</td>
  <td>52.72</td>
  <td>52.72</td>
  <td>64.01</td>
  <td>72.98</td>
  <td>98.55</td>
</tr></table>