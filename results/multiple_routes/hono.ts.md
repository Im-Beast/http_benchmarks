# Multiple routes
## Name: Hono 

### Version: 3.3.1
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
    <td>121.69k</td>
    <td>142.39k</td>
    <td>21.65k</td>
    <td>1.27 MiB</td>
    <td>0.52</td>
    <td>0.38</td>
    <td>3.06</td>
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
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>142386.47k</td>
  <td>142386.47k</td>
  <td>142386.47k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.57</td>
  <td>0.81</td>
  <td>1.52</td>
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
  <td>121.69k</td>
  <td>142.39k</td>
  <td>21.65k</td>
  <td>1.27</td>
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>74770.10k</td>
  <td>142386.47k</td>
  <td>142386.47k</td>
  <td>142386.47k</td>
</tr><tr>
  <td>/random_number</td>
  <td>125.90k</td>
  <td>140.78k</td>
  <td>16.58k</td>
  <td>2.19</td>
  <td>90531.98k</td>
  <td>90531.98k</td>
  <td>90531.98k</td>
  <td>90531.98k</td>
  <td>140776.93k</td>
  <td>140776.93k</td>
  <td>140776.93k</td>
</tr><tr>
  <td>/count</td>
  <td>132.82k</td>
  <td>144.63k</td>
  <td>11.77k</td>
  <td>0.13</td>
  <td>118310.85k</td>
  <td>118310.85k</td>
  <td>118310.85k</td>
  <td>118310.85k</td>
  <td>144628.91k</td>
  <td>144628.91k</td>
  <td>144628.91k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>130.50k</td>
  <td>144.12k</td>
  <td>9.88k</td>
  <td>0.25</td>
  <td>117354.79k</td>
  <td>117354.79k</td>
  <td>117354.79k</td>
  <td>117354.79k</td>
  <td>144118.06k</td>
  <td>144118.06k</td>
  <td>144118.06k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>129.18k</td>
  <td>142.85k</td>
  <td>11.61k</td>
  <td>0.25</td>
  <td>112152.81k</td>
  <td>112152.81k</td>
  <td>112152.81k</td>
  <td>112152.81k</td>
  <td>142845.32k</td>
  <td>142845.32k</td>
  <td>142845.32k</td>
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
  <td>0.52</td>
  <td>0.38</td>
  <td>3.06</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.57</td>
  <td>0.81</td>
  <td>1.52</td>
</tr><tr>
  <td>/random_number</td>
  <td>0.50</td>
  <td>0.39</td>
  <td>1.95</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.43</td>
  <td>0.53</td>
  <td>0.67</td>
  <td>1.41</td>
</tr><tr>
  <td>/count</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.75</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.51</td>
  <td>0.61</td>
  <td>1.20</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.95</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.51</td>
  <td>0.66</td>
  <td>1.28</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.49</td>
  <td>0.37</td>
  <td>2.68</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.51</td>
  <td>0.61</td>
  <td>1.17</td>
</tr></table>