# Multiple routes
## Name: Deno.serveHttp 

### Version: Deno 1.36.0
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
    <td>40.93k</td>
    <td>50.91k</td>
    <td>6.75k</td>
    <td>0.43 MiB</td>
    <td>1.55</td>
    <td>1.02</td>
    <td>4.61</td>
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
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>47402.16k</td>
  <td>48549.36k</td>
  <td>50905.97k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.83</td>
  <td>2.32</td>
  <td>3.30</td>
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
  <td>40.93k</td>
  <td>50.91k</td>
  <td>6.75k</td>
  <td>0.43</td>
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>35197.33k</td>
  <td>47402.16k</td>
  <td>48549.36k</td>
  <td>50905.97k</td>
</tr><tr>
  <td>/random_number</td>
  <td>41.19k</td>
  <td>50.96k</td>
  <td>7.13k</td>
  <td>0.72</td>
  <td>28982.71k</td>
  <td>28982.71k</td>
  <td>28982.71k</td>
  <td>28982.71k</td>
  <td>49617.59k</td>
  <td>49969.17k</td>
  <td>50961.21k</td>
</tr><tr>
  <td>/count</td>
  <td>41.55k</td>
  <td>52.75k</td>
  <td>8.40k</td>
  <td>0.04</td>
  <td>28722.78k</td>
  <td>28722.78k</td>
  <td>28722.78k</td>
  <td>28722.78k</td>
  <td>51914.71k</td>
  <td>52525.26k</td>
  <td>52751.16k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>40.52k</td>
  <td>51.11k</td>
  <td>7.58k</td>
  <td>0.08</td>
  <td>30823.16k</td>
  <td>30823.16k</td>
  <td>30823.16k</td>
  <td>30823.16k</td>
  <td>49566.20k</td>
  <td>50337.60k</td>
  <td>51107.84k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>39.65k</td>
  <td>49.13k</td>
  <td>6.23k</td>
  <td>0.08</td>
  <td>30731.89k</td>
  <td>30731.89k</td>
  <td>30731.89k</td>
  <td>30731.89k</td>
  <td>44554.01k</td>
  <td>46816.21k</td>
  <td>49130.69k</td>
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
  <td>1.55</td>
  <td>1.02</td>
  <td>4.61</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.83</td>
  <td>2.32</td>
  <td>3.30</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.54</td>
  <td>0.93</td>
  <td>6.54</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>2.04</td>
  <td>2.49</td>
  <td>3.05</td>
</tr><tr>
  <td>/count</td>
  <td>1.52</td>
  <td>0.97</td>
  <td>5.58</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.92</td>
  <td>2.37</td>
  <td>3.26</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.56</td>
  <td>1.01</td>
  <td>4.00</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>2.07</td>
  <td>2.24</td>
  <td>3.32</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.60</td>
  <td>0.99</td>
  <td>4.93</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>2.06</td>
  <td>2.29</td>
  <td>3.30</td>
</tr></table>