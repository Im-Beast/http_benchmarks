# Multiple routes
## Name: Hono 

### Version: 3.3.4
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
    <td>52.09k</td>
    <td>66.14k</td>
    <td>8.21k</td>
    <td>0.55 MiB</td>
    <td>1.22</td>
    <td>0.37</td>
    <td>3.80</td>
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
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>63249.66k</td>
  <td>66143.85k</td>
  <td>66143.85k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.50</td>
  <td>1.68</td>
  <td>2.81</td>
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
  <td>52.09k</td>
  <td>66.14k</td>
  <td>8.21k</td>
  <td>0.55</td>
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>38119.91k</td>
  <td>63249.66k</td>
  <td>66143.85k</td>
  <td>66143.85k</td>
</tr><tr>
  <td>/random_number</td>
  <td>56.20k</td>
  <td>67.12k</td>
  <td>6.52k</td>
  <td>0.98</td>
  <td>41659.18k</td>
  <td>41659.18k</td>
  <td>41659.18k</td>
  <td>41659.18k</td>
  <td>65444.00k</td>
  <td>67122.55k</td>
  <td>67122.55k</td>
</tr><tr>
  <td>/count</td>
  <td>57.16k</td>
  <td>68.22k</td>
  <td>7.69k</td>
  <td>0.05</td>
  <td>47222.99k</td>
  <td>47222.99k</td>
  <td>47222.99k</td>
  <td>47222.99k</td>
  <td>67940.53k</td>
  <td>68217.34k</td>
  <td>68217.34k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>62.66k</td>
  <td>69.87k</td>
  <td>6.82k</td>
  <td>0.12</td>
  <td>50496.71k</td>
  <td>50496.71k</td>
  <td>50496.71k</td>
  <td>50496.71k</td>
  <td>68217.39k</td>
  <td>69872.94k</td>
  <td>69872.94k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>56.40k</td>
  <td>69.55k</td>
  <td>7.56k</td>
  <td>0.11</td>
  <td>44179.73k</td>
  <td>44179.73k</td>
  <td>44179.73k</td>
  <td>44179.73k</td>
  <td>64712.38k</td>
  <td>69550.12k</td>
  <td>69550.12k</td>
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
  <td>1.22</td>
  <td>0.37</td>
  <td>3.80</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.50</td>
  <td>1.68</td>
  <td>2.81</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.13</td>
  <td>0.16</td>
  <td>2.69</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.36</td>
  <td>1.59</td>
  <td>2.26</td>
</tr><tr>
  <td>/count</td>
  <td>1.11</td>
  <td>0.53</td>
  <td>3.74</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.31</td>
  <td>1.42</td>
  <td>2.52</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.01</td>
  <td>0.53</td>
  <td>3.42</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.21</td>
  <td>1.39</td>
  <td>2.42</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.12</td>
  <td>0.75</td>
  <td>3.73</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.30</td>
  <td>1.44</td>
  <td>2.41</td>
</tr></table>