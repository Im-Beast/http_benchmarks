# Multiple routes
## Name: cheetah 

### Version: 0.0.6821.1.0
### Deno version: 1.35.2

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
    <td>45.87k</td>
    <td>54.46k</td>
    <td>7.32k</td>
    <td>0.48 MiB</td>
    <td>1.39</td>
    <td>0.81</td>
    <td>3.64</td>
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
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>53715.52k</td>
  <td>54326.69k</td>
  <td>54461.13k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.72</td>
  <td>1.89</td>
  <td>2.57</td>
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
  <td>45.87k</td>
  <td>54.46k</td>
  <td>7.32k</td>
  <td>0.48</td>
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>36491.30k</td>
  <td>53715.52k</td>
  <td>54326.69k</td>
  <td>54461.13k</td>
</tr><tr>
  <td>/random_number</td>
  <td>47.92k</td>
  <td>55.24k</td>
  <td>7.25k</td>
  <td>0.83</td>
  <td>39718.41k</td>
  <td>39718.41k</td>
  <td>39718.41k</td>
  <td>39718.41k</td>
  <td>53665.64k</td>
  <td>54200.38k</td>
  <td>55242.82k</td>
</tr><tr>
  <td>/count</td>
  <td>50.57k</td>
  <td>56.45k</td>
  <td>4.63k</td>
  <td>0.05</td>
  <td>39573.17k</td>
  <td>39573.17k</td>
  <td>39573.17k</td>
  <td>39573.17k</td>
  <td>56246.05k</td>
  <td>56446.28k</td>
  <td>56446.28k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>48.83k</td>
  <td>56.45k</td>
  <td>7.18k</td>
  <td>0.09</td>
  <td>43723.53k</td>
  <td>43723.53k</td>
  <td>43723.53k</td>
  <td>43723.53k</td>
  <td>55060.90k</td>
  <td>55891.48k</td>
  <td>56447.21k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>48.36k</td>
  <td>56.04k</td>
  <td>6.36k</td>
  <td>0.09</td>
  <td>41382.18k</td>
  <td>41382.18k</td>
  <td>41382.18k</td>
  <td>41382.18k</td>
  <td>54632.18k</td>
  <td>55295.57k</td>
  <td>56036.54k</td>
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
  <td>1.39</td>
  <td>0.81</td>
  <td>3.64</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.72</td>
  <td>1.89</td>
  <td>2.57</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.33</td>
  <td>0.84</td>
  <td>3.04</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.64</td>
  <td>1.82</td>
  <td>2.40</td>
</tr><tr>
  <td>/count</td>
  <td>1.26</td>
  <td>0.85</td>
  <td>2.70</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.55</td>
  <td>1.81</td>
  <td>2.14</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.30</td>
  <td>0.70</td>
  <td>4.10</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.57</td>
  <td>1.68</td>
  <td>2.47</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.31</td>
  <td>0.15</td>
  <td>3.26</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.60</td>
  <td>1.79</td>
  <td>2.24</td>
</tr></table>