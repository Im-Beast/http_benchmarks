# Name: Oak 
  
  ### Version: 12.5.0
  ### Deno version: 1.34.3

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
    <td>37.22k</td>
    <td>40.25k</td>
    <td>4.28k</td>
    <td>0.65 MiB</td>
    <td>1.71</td>
    <td>0.93</td>
    <td>4.91</td>
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
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>39734.75k</td>
  <td>40062.49k</td>
  <td>40245.96k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>2.14</td>
  <td>2.28</td>
  <td>2.82</td>
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
  <td>37.22k</td>
  <td>40.25k</td>
  <td>4.28k</td>
  <td>0.65</td>
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>29276.10k</td>
  <td>39734.75k</td>
  <td>40062.49k</td>
  <td>40245.96k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>39.56k</td>
  <td>44.28k</td>
  <td>3.66k</td>
  <td>0.41</td>
  <td>35317.08k</td>
  <td>35317.08k</td>
  <td>35317.08k</td>
  <td>35317.08k</td>
  <td>42989.41k</td>
  <td>43070.43k</td>
  <td>44276.03k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>39.29k</td>
  <td>43.79k</td>
  <td>4.25k</td>
  <td>0.07</td>
  <td>34534.14k</td>
  <td>34534.14k</td>
  <td>34534.14k</td>
  <td>34534.14k</td>
  <td>42484.93k</td>
  <td>42644.67k</td>
  <td>43787.63k</td>
</tr><tr>
  <td>/count</td>
  <td>39.59k</td>
  <td>42.17k</td>
  <td>2.59k</td>
  <td>0.04</td>
  <td>35809.56k</td>
  <td>35809.56k</td>
  <td>35809.56k</td>
  <td>35809.56k</td>
  <td>41722.50k</td>
  <td>41793.45k</td>
  <td>42166.03k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>38.48k</td>
  <td>43.53k</td>
  <td>3.45k</td>
  <td>0.07</td>
  <td>33283.83k</td>
  <td>33283.83k</td>
  <td>33283.83k</td>
  <td>33283.83k</td>
  <td>41534.44k</td>
  <td>41763.04k</td>
  <td>43526.01k</td>
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
  <td>1.71</td>
  <td>0.93</td>
  <td>4.91</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>2.14</td>
  <td>2.28</td>
  <td>2.82</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.61</td>
  <td>0.89</td>
  <td>4.80</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>2.01</td>
  <td>2.14</td>
  <td>2.69</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.62</td>
  <td>0.74</td>
  <td>4.80</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>2.03</td>
  <td>2.20</td>
  <td>3.11</td>
</tr><tr>
  <td>/count</td>
  <td>1.61</td>
  <td>0.82</td>
  <td>4.65</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>2.03</td>
  <td>2.16</td>
  <td>2.69</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.65</td>
  <td>0.75</td>
  <td>5.04</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>1.41</td>
  <td>2.05</td>
  <td>2.20</td>
  <td>2.75</td>
</tr></table>