# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>46.92k</td>
    <td>51.13k</td>
    <td>3.63k</td>
    <td>0.82 MiB</td>
    <td>1.36</td>
    <td>0.78</td>
    <td>3.95</td>
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
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>49517.55k</td>
  <td>50631.30k</td>
  <td>51125.01k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.69</td>
  <td>1.83</td>
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
  <td>46.92k</td>
  <td>51.13k</td>
  <td>3.63k</td>
  <td>0.82</td>
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>43016.29k</td>
  <td>49517.55k</td>
  <td>50631.30k</td>
  <td>51125.01k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>48.03k</td>
  <td>51.97k</td>
  <td>4.09k</td>
  <td>0.51</td>
  <td>44023.60k</td>
  <td>44023.60k</td>
  <td>44023.60k</td>
  <td>44023.60k</td>
  <td>50698.21k</td>
  <td>51191.58k</td>
  <td>51971.03k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>44.52k</td>
  <td>47.93k</td>
  <td>4.16k</td>
  <td>0.08</td>
  <td>37400.59k</td>
  <td>37400.59k</td>
  <td>37400.59k</td>
  <td>37400.59k</td>
  <td>46972.68k</td>
  <td>47120.10k</td>
  <td>47926.98k</td>
</tr><tr>
  <td>/count</td>
  <td>48.28k</td>
  <td>52.06k</td>
  <td>3.85k</td>
  <td>0.05</td>
  <td>43351.93k</td>
  <td>43351.93k</td>
  <td>43351.93k</td>
  <td>43351.93k</td>
  <td>50832.17k</td>
  <td>51391.20k</td>
  <td>52057.03k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>44.57k</td>
  <td>47.34k</td>
  <td>3.57k</td>
  <td>0.08</td>
  <td>38776.68k</td>
  <td>38776.68k</td>
  <td>38776.68k</td>
  <td>38776.68k</td>
  <td>46695.87k</td>
  <td>47037.90k</td>
  <td>47338.60k</td>
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
  <td>1.36</td>
  <td>0.78</td>
  <td>3.95</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.15</td>
  <td>1.69</td>
  <td>1.83</td>
  <td>2.47</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.32</td>
  <td>0.64</td>
  <td>4.00</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.13</td>
  <td>1.66</td>
  <td>1.77</td>
  <td>2.25</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.43</td>
  <td>0.66</td>
  <td>4.12</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.79</td>
  <td>1.93</td>
  <td>2.54</td>
</tr><tr>
  <td>/count</td>
  <td>1.31</td>
  <td>0.60</td>
  <td>3.96</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.64</td>
  <td>1.75</td>
  <td>2.17</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.43</td>
  <td>0.64</td>
  <td>3.97</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.80</td>
  <td>1.89</td>
  <td>2.43</td>
</tr></table>