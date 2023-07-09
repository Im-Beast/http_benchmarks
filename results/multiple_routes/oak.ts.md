# Name: Oak 
  
  ### Version: 12.5.0
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
    <td>39.81k</td>
    <td>43.25k</td>
    <td>3.88k</td>
    <td>0.69 MiB</td>
    <td>1.60</td>
    <td>0.68</td>
    <td>4.93</td>
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
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>42365.30k</td>
  <td>43024.52k</td>
  <td>43250.51k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>2.00</td>
  <td>2.15</td>
  <td>2.72</td>
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
  <td>39.81k</td>
  <td>43.25k</td>
  <td>3.88k</td>
  <td>0.69</td>
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>37244.65k</td>
  <td>42365.30k</td>
  <td>43024.52k</td>
  <td>43250.51k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>42.78k</td>
  <td>46.00k</td>
  <td>3.16k</td>
  <td>0.45</td>
  <td>38107.53k</td>
  <td>38107.53k</td>
  <td>38107.53k</td>
  <td>38107.53k</td>
  <td>45510.41k</td>
  <td>45861.94k</td>
  <td>46002.18k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>42.24k</td>
  <td>45.69k</td>
  <td>3.45k</td>
  <td>0.08</td>
  <td>40232.01k</td>
  <td>40232.01k</td>
  <td>40232.01k</td>
  <td>40232.01k</td>
  <td>45076.29k</td>
  <td>45233.64k</td>
  <td>45692.72k</td>
</tr><tr>
  <td>/count</td>
  <td>43.58k</td>
  <td>47.02k</td>
  <td>3.56k</td>
  <td>0.04</td>
  <td>40614.01k</td>
  <td>40614.01k</td>
  <td>40614.01k</td>
  <td>40614.01k</td>
  <td>46508.17k</td>
  <td>46817.60k</td>
  <td>47021.43k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>42.05k</td>
  <td>46.10k</td>
  <td>3.23k</td>
  <td>0.08</td>
  <td>37531.66k</td>
  <td>37531.66k</td>
  <td>37531.66k</td>
  <td>37531.66k</td>
  <td>45202.80k</td>
  <td>45360.50k</td>
  <td>46096.85k</td>
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
  <td>1.60</td>
  <td>0.68</td>
  <td>4.93</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>2.00</td>
  <td>2.15</td>
  <td>2.72</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.49</td>
  <td>0.85</td>
  <td>3.66</td>
  <td>1.27</td>
  <td>1.27</td>
  <td>1.27</td>
  <td>1.27</td>
  <td>1.88</td>
  <td>2.01</td>
  <td>2.56</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.51</td>
  <td>0.73</td>
  <td>4.48</td>
  <td>1.29</td>
  <td>1.29</td>
  <td>1.29</td>
  <td>1.29</td>
  <td>1.90</td>
  <td>2.02</td>
  <td>2.66</td>
</tr><tr>
  <td>/count</td>
  <td>1.46</td>
  <td>0.73</td>
  <td>4.11</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.25</td>
  <td>1.86</td>
  <td>1.94</td>
  <td>2.52</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.51</td>
  <td>0.86</td>
  <td>4.48</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.89</td>
  <td>2.01</td>
  <td>2.50</td>
</tr></table>