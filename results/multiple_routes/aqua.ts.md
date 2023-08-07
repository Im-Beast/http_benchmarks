# Multiple routes
## Name: Aqua 

### Version: 1.3.5
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
    <td>29.39k</td>
    <td>37.50k</td>
    <td>6.51k</td>
    <td>0.31 MiB</td>
    <td>2.11</td>
    <td>1.23</td>
    <td>7.37</td>
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
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>34781.31k</td>
  <td>35733.04k</td>
  <td>37503.77k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>2.68</td>
  <td>3.24</td>
  <td>4.99</td>
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
  <td>29.39k</td>
  <td>37.50k</td>
  <td>6.51k</td>
  <td>0.31</td>
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>18308.87k</td>
  <td>34781.31k</td>
  <td>35733.04k</td>
  <td>37503.77k</td>
</tr><tr>
  <td>/random_number</td>
  <td>29.38k</td>
  <td>37.27k</td>
  <td>4.55k</td>
  <td>0.52</td>
  <td>21721.75k</td>
  <td>21721.75k</td>
  <td>21721.75k</td>
  <td>21721.75k</td>
  <td>34432.29k</td>
  <td>35406.07k</td>
  <td>37269.26k</td>
</tr><tr>
  <td>/count</td>
  <td>31.51k</td>
  <td>37.85k</td>
  <td>5.13k</td>
  <td>0.03</td>
  <td>27011.01k</td>
  <td>27011.01k</td>
  <td>27011.01k</td>
  <td>27011.01k</td>
  <td>36698.87k</td>
  <td>37455.63k</td>
  <td>37852.09k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>28.76k</td>
  <td>35.65k</td>
  <td>5.66k</td>
  <td>0.05</td>
  <td>19939.70k</td>
  <td>19939.70k</td>
  <td>19939.70k</td>
  <td>19939.70k</td>
  <td>33356.28k</td>
  <td>35477.02k</td>
  <td>35645.78k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>28.10k</td>
  <td>35.30k</td>
  <td>4.50k</td>
  <td>0.05</td>
  <td>21789.19k</td>
  <td>21789.19k</td>
  <td>21789.19k</td>
  <td>21789.19k</td>
  <td>33203.04k</td>
  <td>34577.31k</td>
  <td>35298.82k</td>
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
  <td>2.11</td>
  <td>1.23</td>
  <td>7.37</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>1.68</td>
  <td>2.68</td>
  <td>3.24</td>
  <td>4.99</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.15</td>
  <td>1.29</td>
  <td>7.04</td>
  <td>1.69</td>
  <td>1.69</td>
  <td>1.69</td>
  <td>1.69</td>
  <td>2.67</td>
  <td>3.18</td>
  <td>4.68</td>
</tr><tr>
  <td>/count</td>
  <td>2.03</td>
  <td>0.93</td>
  <td>6.06</td>
  <td>1.58</td>
  <td>1.58</td>
  <td>1.58</td>
  <td>1.58</td>
  <td>2.49</td>
  <td>2.90</td>
  <td>5.09</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.21</td>
  <td>1.35</td>
  <td>6.69</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>2.97</td>
  <td>3.40</td>
  <td>5.20</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.26</td>
  <td>1.46</td>
  <td>7.07</td>
  <td>1.73</td>
  <td>1.73</td>
  <td>1.73</td>
  <td>1.73</td>
  <td>2.84</td>
  <td>3.25</td>
  <td>4.91</td>
</tr></table>