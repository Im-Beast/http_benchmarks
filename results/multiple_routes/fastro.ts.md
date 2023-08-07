# Multiple routes
## Name: Fastro 

### Version: 0.70.5
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
    <td>46.95k</td>
    <td>60.54k</td>
    <td>9.90k</td>
    <td>0.50 MiB</td>
    <td>1.34</td>
    <td>0.80</td>
    <td>5.36</td>
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
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>58756.94k</td>
  <td>59910.63k</td>
  <td>60540.34k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.72</td>
  <td>2.36</td>
  <td>3.06</td>
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
  <td>46.95k</td>
  <td>60.54k</td>
  <td>9.90k</td>
  <td>0.50</td>
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>34107.41k</td>
  <td>58756.94k</td>
  <td>59910.63k</td>
  <td>60540.34k</td>
</tr><tr>
  <td>/random_number</td>
  <td>45.39k</td>
  <td>58.19k</td>
  <td>9.08k</td>
  <td>0.80</td>
  <td>35479.64k</td>
  <td>35479.64k</td>
  <td>35479.64k</td>
  <td>35479.64k</td>
  <td>55525.10k</td>
  <td>57286.83k</td>
  <td>58192.14k</td>
</tr><tr>
  <td>/count</td>
  <td>51.02k</td>
  <td>59.30k</td>
  <td>8.60k</td>
  <td>0.05</td>
  <td>38602.55k</td>
  <td>38602.55k</td>
  <td>38602.55k</td>
  <td>38602.55k</td>
  <td>58987.45k</td>
  <td>59298.52k</td>
  <td>59298.52k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>47.78k</td>
  <td>59.33k</td>
  <td>8.43k</td>
  <td>0.09</td>
  <td>35865.79k</td>
  <td>35865.79k</td>
  <td>35865.79k</td>
  <td>35865.79k</td>
  <td>56577.75k</td>
  <td>57733.23k</td>
  <td>59329.02k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>43.28k</td>
  <td>53.24k</td>
  <td>7.99k</td>
  <td>0.08</td>
  <td>37172.97k</td>
  <td>37172.97k</td>
  <td>37172.97k</td>
  <td>37172.97k</td>
  <td>51215.68k</td>
  <td>52342.92k</td>
  <td>53244.77k</td>
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
  <td>1.34</td>
  <td>0.80</td>
  <td>5.36</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.02</td>
  <td>1.72</td>
  <td>2.36</td>
  <td>3.06</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.39</td>
  <td>0.84</td>
  <td>4.88</td>
  <td>1.06</td>
  <td>1.06</td>
  <td>1.06</td>
  <td>1.06</td>
  <td>1.84</td>
  <td>2.23</td>
  <td>3.10</td>
</tr><tr>
  <td>/count</td>
  <td>1.24</td>
  <td>0.76</td>
  <td>4.32</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.01</td>
  <td>1.63</td>
  <td>1.87</td>
  <td>2.97</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.31</td>
  <td>0.78</td>
  <td>4.02</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.04</td>
  <td>1.83</td>
  <td>2.04</td>
  <td>2.79</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.47</td>
  <td>0.83</td>
  <td>5.31</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.09</td>
  <td>1.85</td>
  <td>2.03</td>
  <td>3.07</td>
</tr></table>