# Name: Oak 
  
  ### Version: 12.6.0
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
    <td>38.54k</td>
    <td>42.41k</td>
    <td>3.02k</td>
    <td>0.67 MiB</td>
    <td>1.65</td>
    <td>0.92</td>
    <td>4.85</td>
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
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>41180.54k</td>
  <td>41622.00k</td>
  <td>42407.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>2.10</td>
  <td>2.23</td>
  <td>2.93</td>
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
  <td>38.54k</td>
  <td>42.41k</td>
  <td>3.02k</td>
  <td>0.67</td>
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>35396.49k</td>
  <td>41180.54k</td>
  <td>41622.00k</td>
  <td>42407.26k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>40.51k</td>
  <td>43.59k</td>
  <td>3.19k</td>
  <td>0.42</td>
  <td>36725.17k</td>
  <td>36725.17k</td>
  <td>36725.17k</td>
  <td>36725.17k</td>
  <td>43369.26k</td>
  <td>43492.40k</td>
  <td>43590.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>39.70k</td>
  <td>43.16k</td>
  <td>3.60k</td>
  <td>0.08</td>
  <td>35975.12k</td>
  <td>35975.12k</td>
  <td>35975.12k</td>
  <td>35975.12k</td>
  <td>42806.55k</td>
  <td>42911.90k</td>
  <td>43163.45k</td>
</tr><tr>
  <td>/count</td>
  <td>40.80k</td>
  <td>43.99k</td>
  <td>3.56k</td>
  <td>0.04</td>
  <td>36767.06k</td>
  <td>36767.06k</td>
  <td>36767.06k</td>
  <td>36767.06k</td>
  <td>43749.30k</td>
  <td>43882.07k</td>
  <td>43991.27k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>39.92k</td>
  <td>43.30k</td>
  <td>3.23k</td>
  <td>0.08</td>
  <td>37808.96k</td>
  <td>37808.96k</td>
  <td>37808.96k</td>
  <td>37808.96k</td>
  <td>42781.36k</td>
  <td>42977.98k</td>
  <td>43304.93k</td>
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
  <td>1.65</td>
  <td>0.92</td>
  <td>4.85</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>2.10</td>
  <td>2.23</td>
  <td>2.93</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.57</td>
  <td>0.73</td>
  <td>4.56</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.95</td>
  <td>2.08</td>
  <td>2.66</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.60</td>
  <td>0.66</td>
  <td>4.71</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>2.02</td>
  <td>2.12</td>
  <td>2.72</td>
</tr><tr>
  <td>/count</td>
  <td>1.55</td>
  <td>0.74</td>
  <td>4.90</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.95</td>
  <td>2.08</td>
  <td>2.61</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.59</td>
  <td>0.77</td>
  <td>4.52</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.97</td>
  <td>2.10</td>
  <td>2.62</td>
</tr></table>