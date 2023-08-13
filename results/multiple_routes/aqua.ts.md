# Multiple routes
## Name: Aqua 

### Version: 1.3.5
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
    <td>29.08k</td>
    <td>37.73k</td>
    <td>4.46k</td>
    <td>0.31 MiB</td>
    <td>2.18</td>
    <td>1.30</td>
    <td>6.66</td>
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
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>35393.13k</td>
  <td>36866.77k</td>
  <td>37729.79k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>2.83</td>
  <td>3.26</td>
  <td>4.52</td>
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
  <td>29.08k</td>
  <td>37.73k</td>
  <td>4.46k</td>
  <td>0.31</td>
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>22976.80k</td>
  <td>35393.13k</td>
  <td>36866.77k</td>
  <td>37729.79k</td>
</tr><tr>
  <td>/random_number</td>
  <td>29.88k</td>
  <td>37.15k</td>
  <td>4.75k</td>
  <td>0.53</td>
  <td>22854.83k</td>
  <td>22854.83k</td>
  <td>22854.83k</td>
  <td>22854.83k</td>
  <td>35107.25k</td>
  <td>35907.42k</td>
  <td>37149.08k</td>
</tr><tr>
  <td>/count</td>
  <td>29.11k</td>
  <td>36.37k</td>
  <td>5.21k</td>
  <td>0.03</td>
  <td>24433.88k</td>
  <td>24433.88k</td>
  <td>24433.88k</td>
  <td>24433.88k</td>
  <td>34322.02k</td>
  <td>34714.64k</td>
  <td>36374.59k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>28.56k</td>
  <td>35.94k</td>
  <td>4.42k</td>
  <td>0.05</td>
  <td>22566.39k</td>
  <td>22566.39k</td>
  <td>22566.39k</td>
  <td>22566.39k</td>
  <td>32524.59k</td>
  <td>33937.92k</td>
  <td>35940.68k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>29.72k</td>
  <td>35.72k</td>
  <td>4.36k</td>
  <td>0.06</td>
  <td>22901.21k</td>
  <td>22901.21k</td>
  <td>22901.21k</td>
  <td>22901.21k</td>
  <td>34430.30k</td>
  <td>34750.06k</td>
  <td>35724.35k</td>
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
  <td>2.18</td>
  <td>1.30</td>
  <td>6.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>2.83</td>
  <td>3.26</td>
  <td>4.52</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.12</td>
  <td>1.25</td>
  <td>6.14</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>1.66</td>
  <td>2.76</td>
  <td>3.06</td>
  <td>4.02</td>
</tr><tr>
  <td>/count</td>
  <td>2.19</td>
  <td>1.17</td>
  <td>7.46</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.71</td>
  <td>3.15</td>
  <td>5.06</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.23</td>
  <td>1.28</td>
  <td>5.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>1.81</td>
  <td>2.74</td>
  <td>3.14</td>
  <td>4.54</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.14</td>
  <td>1.42</td>
  <td>6.11</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>2.81</td>
  <td>3.18</td>
  <td>4.28</td>
</tr></table>