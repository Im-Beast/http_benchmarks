# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>47.00k</td>
    <td>51.12k</td>
    <td>3.86k</td>
    <td>0.82 MiB</td>
    <td>1.35</td>
    <td>0.75</td>
    <td>3.97</td>
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
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>50068.10k</td>
  <td>50783.04k</td>
  <td>51124.10k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.71</td>
  <td>1.84</td>
  <td>2.47</td>
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
  <td>47.00k</td>
  <td>51.12k</td>
  <td>3.86k</td>
  <td>0.82</td>
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>41557.43k</td>
  <td>50068.10k</td>
  <td>50783.04k</td>
  <td>51124.10k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>48.02k</td>
  <td>51.73k</td>
  <td>3.56k</td>
  <td>0.51</td>
  <td>43731.98k</td>
  <td>43731.98k</td>
  <td>43731.98k</td>
  <td>43731.98k</td>
  <td>50519.57k</td>
  <td>50880.82k</td>
  <td>51727.68k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>45.04k</td>
  <td>49.27k</td>
  <td>3.63k</td>
  <td>0.09</td>
  <td>40454.14k</td>
  <td>40454.14k</td>
  <td>40454.14k</td>
  <td>40454.14k</td>
  <td>47934.09k</td>
  <td>48190.83k</td>
  <td>49271.07k</td>
</tr><tr>
  <td>/count</td>
  <td>48.14k</td>
  <td>52.14k</td>
  <td>3.57k</td>
  <td>0.05</td>
  <td>42706.61k</td>
  <td>42706.61k</td>
  <td>42706.61k</td>
  <td>42706.61k</td>
  <td>50666.94k</td>
  <td>51213.19k</td>
  <td>52137.61k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>44.94k</td>
  <td>48.73k</td>
  <td>3.89k</td>
  <td>0.09</td>
  <td>40513.71k</td>
  <td>40513.71k</td>
  <td>40513.71k</td>
  <td>40513.71k</td>
  <td>47703.71k</td>
  <td>48001.83k</td>
  <td>48725.65k</td>
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
  <td>1.35</td>
  <td>0.75</td>
  <td>3.97</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.71</td>
  <td>1.84</td>
  <td>2.47</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.32</td>
  <td>0.78</td>
  <td>3.79</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.66</td>
  <td>1.77</td>
  <td>2.29</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.41</td>
  <td>0.70</td>
  <td>4.15</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.75</td>
  <td>1.88</td>
  <td>2.44</td>
</tr><tr>
  <td>/count</td>
  <td>1.32</td>
  <td>0.63</td>
  <td>3.94</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.65</td>
  <td>1.74</td>
  <td>2.29</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.42</td>
  <td>0.65</td>
  <td>3.92</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.78</td>
  <td>1.90</td>
  <td>2.40</td>
</tr></table>