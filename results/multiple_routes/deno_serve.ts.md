# Name: Deno.serve 
  
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
    <td>127.80k</td>
    <td>132.12k</td>
    <td>8.03k</td>
    <td>2.23 MiB</td>
    <td>0.50</td>
    <td>0.41</td>
    <td>1.29</td>
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
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>132120.86k</td>
  <td>132120.86k</td>
  <td>132120.86k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.54</td>
  <td>0.64</td>
  <td>0.75</td>
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
  <td>127.80k</td>
  <td>132.12k</td>
  <td>8.03k</td>
  <td>2.23</td>
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>105314.58k</td>
  <td>132120.86k</td>
  <td>132120.86k</td>
  <td>132120.86k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>137.45k</td>
  <td>143.60k</td>
  <td>8.94k</td>
  <td>1.46</td>
  <td>120313.69k</td>
  <td>120313.69k</td>
  <td>120313.69k</td>
  <td>120313.69k</td>
  <td>143599.80k</td>
  <td>143599.80k</td>
  <td>143599.80k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>137.61k</td>
  <td>144.29k</td>
  <td>10.30k</td>
  <td>0.27</td>
  <td>117180.30k</td>
  <td>117180.30k</td>
  <td>117180.30k</td>
  <td>117180.30k</td>
  <td>144287.57k</td>
  <td>144287.57k</td>
  <td>144287.57k</td>
</tr><tr>
  <td>/count</td>
  <td>137.50k</td>
  <td>144.02k</td>
  <td>9.39k</td>
  <td>0.13</td>
  <td>118231.28k</td>
  <td>118231.28k</td>
  <td>118231.28k</td>
  <td>118231.28k</td>
  <td>144024.11k</td>
  <td>144024.11k</td>
  <td>144024.11k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>136.86k</td>
  <td>143.72k</td>
  <td>7.76k</td>
  <td>0.26</td>
  <td>118265.64k</td>
  <td>118265.64k</td>
  <td>118265.64k</td>
  <td>118265.64k</td>
  <td>143717.20k</td>
  <td>143717.20k</td>
  <td>143717.20k</td>
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
  <td>0.50</td>
  <td>0.41</td>
  <td>1.29</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.54</td>
  <td>0.64</td>
  <td>0.75</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.45</td>
  <td>0.37</td>
  <td>1.14</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.54</td>
  <td>0.61</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.45</td>
  <td>0.37</td>
  <td>1.19</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.53</td>
  <td>0.61</td>
</tr><tr>
  <td>/count</td>
  <td>0.45</td>
  <td>0.38</td>
  <td>1.25</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.55</td>
  <td>0.63</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.38</td>
  <td>1.22</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.50</td>
  <td>0.55</td>
  <td>0.62</td>
</tr></table>