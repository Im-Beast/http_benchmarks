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
    <td>42.92k</td>
    <td>47.37k</td>
    <td>4.24k</td>
    <td>0.75 MiB</td>
    <td>1.48</td>
    <td>0.65</td>
    <td>5.01</td>
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
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>46637.78k</td>
  <td>46915.27k</td>
  <td>47368.05k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.86</td>
  <td>2.18</td>
  <td>3.17</td>
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
  <td>42.92k</td>
  <td>47.37k</td>
  <td>4.24k</td>
  <td>0.75</td>
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>37305.60k</td>
  <td>46637.78k</td>
  <td>46915.27k</td>
  <td>47368.05k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>44.96k</td>
  <td>51.08k</td>
  <td>3.85k</td>
  <td>0.47</td>
  <td>41535.06k</td>
  <td>41535.06k</td>
  <td>41535.06k</td>
  <td>41535.06k</td>
  <td>49464.25k</td>
  <td>49598.50k</td>
  <td>51077.76k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>43.26k</td>
  <td>47.66k</td>
  <td>3.73k</td>
  <td>0.08</td>
  <td>37213.37k</td>
  <td>37213.37k</td>
  <td>37213.37k</td>
  <td>37213.37k</td>
  <td>46616.15k</td>
  <td>47207.53k</td>
  <td>47664.86k</td>
</tr><tr>
  <td>/count</td>
  <td>46.73k</td>
  <td>51.27k</td>
  <td>3.63k</td>
  <td>0.04</td>
  <td>44602.51k</td>
  <td>44602.51k</td>
  <td>44602.51k</td>
  <td>44602.51k</td>
  <td>49896.22k</td>
  <td>50438.66k</td>
  <td>51270.80k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>42.06k</td>
  <td>47.75k</td>
  <td>4.07k</td>
  <td>0.08</td>
  <td>37638.03k</td>
  <td>37638.03k</td>
  <td>37638.03k</td>
  <td>37638.03k</td>
  <td>45737.61k</td>
  <td>47477.21k</td>
  <td>47752.13k</td>
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
  <td>1.48</td>
  <td>0.65</td>
  <td>5.01</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.19</td>
  <td>1.86</td>
  <td>2.18</td>
  <td>3.17</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.41</td>
  <td>0.64</td>
  <td>3.75</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.77</td>
  <td>1.96</td>
  <td>2.38</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.47</td>
  <td>0.98</td>
  <td>4.17</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.89</td>
  <td>2.13</td>
  <td>2.97</td>
</tr><tr>
  <td>/count</td>
  <td>1.36</td>
  <td>0.75</td>
  <td>3.76</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.72</td>
  <td>1.88</td>
  <td>2.55</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.52</td>
  <td>0.67</td>
  <td>5.09</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.92</td>
  <td>2.10</td>
  <td>2.92</td>
</tr></table>