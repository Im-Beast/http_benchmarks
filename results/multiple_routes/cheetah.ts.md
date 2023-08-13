# Multiple routes
## Name: cheetah 

### Version: 0.0.6821.2.0
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
    <td>44.64k</td>
    <td>55.97k</td>
    <td>5.19k</td>
    <td>0.47 MiB</td>
    <td>1.43</td>
    <td>0.95</td>
    <td>3.47</td>
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
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>53597.28k</td>
  <td>54240.39k</td>
  <td>55968.24k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.73</td>
  <td>1.98</td>
  <td>2.34</td>
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
  <td>44.64k</td>
  <td>55.97k</td>
  <td>5.19k</td>
  <td>0.47</td>
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>37454.03k</td>
  <td>53597.28k</td>
  <td>54240.39k</td>
  <td>55968.24k</td>
</tr><tr>
  <td>/random_number</td>
  <td>42.82k</td>
  <td>54.14k</td>
  <td>5.72k</td>
  <td>0.76</td>
  <td>37846.94k</td>
  <td>37846.94k</td>
  <td>37846.94k</td>
  <td>37846.94k</td>
  <td>52512.94k</td>
  <td>53090.31k</td>
  <td>54143.91k</td>
</tr><tr>
  <td>/count</td>
  <td>48.88k</td>
  <td>56.41k</td>
  <td>6.02k</td>
  <td>0.05</td>
  <td>41685.81k</td>
  <td>41685.81k</td>
  <td>41685.81k</td>
  <td>41685.81k</td>
  <td>55820.09k</td>
  <td>55941.43k</td>
  <td>56412.78k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>47.00k</td>
  <td>56.52k</td>
  <td>4.96k</td>
  <td>0.09</td>
  <td>41713.28k</td>
  <td>41713.28k</td>
  <td>41713.28k</td>
  <td>41713.28k</td>
  <td>54457.74k</td>
  <td>55233.61k</td>
  <td>56517.59k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>48.69k</td>
  <td>56.76k</td>
  <td>7.96k</td>
  <td>0.10</td>
  <td>39350.73k</td>
  <td>39350.73k</td>
  <td>39350.73k</td>
  <td>39350.73k</td>
  <td>56328.94k</td>
  <td>56419.48k</td>
  <td>56756.01k</td>
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
  <td>1.43</td>
  <td>0.95</td>
  <td>3.47</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.10</td>
  <td>1.73</td>
  <td>1.98</td>
  <td>2.34</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.47</td>
  <td>0.72</td>
  <td>2.79</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.75</td>
  <td>1.90</td>
  <td>2.34</td>
</tr><tr>
  <td>/count</td>
  <td>1.29</td>
  <td>0.45</td>
  <td>2.45</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.56</td>
  <td>1.69</td>
  <td>2.00</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.34</td>
  <td>0.71</td>
  <td>2.60</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.07</td>
  <td>1.63</td>
  <td>1.75</td>
  <td>2.09</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.27</td>
  <td>0.61</td>
  <td>2.56</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.05</td>
  <td>1.57</td>
  <td>1.74</td>
  <td>2.12</td>
</tr></table>