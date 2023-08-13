# Multiple routes
## Name: Fastro 

### Version: 0.78.2
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
    <td>52.11k</td>
    <td>62.08k</td>
    <td>6.60k</td>
    <td>0.55 MiB</td>
    <td>1.21</td>
    <td>0.36</td>
    <td>4.40</td>
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
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>58801.88k</td>
  <td>61866.79k</td>
  <td>62083.50k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>1.38</td>
  <td>1.61</td>
  <td>2.52</td>
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
  <td>52.11k</td>
  <td>62.08k</td>
  <td>6.60k</td>
  <td>0.55</td>
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>44711.22k</td>
  <td>58801.88k</td>
  <td>61866.79k</td>
  <td>62083.50k</td>
</tr><tr>
  <td>/random_number</td>
  <td>57.68k</td>
  <td>66.73k</td>
  <td>8.85k</td>
  <td>1.00</td>
  <td>42645.52k</td>
  <td>42645.52k</td>
  <td>42645.52k</td>
  <td>42645.52k</td>
  <td>66328.99k</td>
  <td>66729.64k</td>
  <td>66729.64k</td>
</tr><tr>
  <td>/count</td>
  <td>56.35k</td>
  <td>69.44k</td>
  <td>8.04k</td>
  <td>0.05</td>
  <td>49009.09k</td>
  <td>49009.09k</td>
  <td>49009.09k</td>
  <td>49009.09k</td>
  <td>67124.97k</td>
  <td>69440.15k</td>
  <td>69440.15k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>57.79k</td>
  <td>69.59k</td>
  <td>9.53k</td>
  <td>0.11</td>
  <td>40892.88k</td>
  <td>40892.88k</td>
  <td>40892.88k</td>
  <td>40892.88k</td>
  <td>68441.38k</td>
  <td>69592.64k</td>
  <td>69592.64k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>61.41k</td>
  <td>69.87k</td>
  <td>7.40k</td>
  <td>0.11</td>
  <td>44635.89k</td>
  <td>44635.89k</td>
  <td>44635.89k</td>
  <td>44635.89k</td>
  <td>69437.13k</td>
  <td>69873.82k</td>
  <td>69873.82k</td>
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
  <td>1.21</td>
  <td>0.36</td>
  <td>4.40</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>0.97</td>
  <td>1.38</td>
  <td>1.61</td>
  <td>2.52</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.10</td>
  <td>0.32</td>
  <td>3.60</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>0.90</td>
  <td>1.30</td>
  <td>1.49</td>
  <td>2.16</td>
</tr><tr>
  <td>/count</td>
  <td>1.13</td>
  <td>0.42</td>
  <td>3.15</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>0.89</td>
  <td>1.32</td>
  <td>1.48</td>
  <td>2.30</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.10</td>
  <td>0.34</td>
  <td>3.62</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>0.87</td>
  <td>1.27</td>
  <td>1.38</td>
  <td>2.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.14</td>
  <td>0.28</td>
  <td>2.90</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>0.88</td>
  <td>1.33</td>
  <td>1.51</td>
  <td>2.35</td>
</tr></table>