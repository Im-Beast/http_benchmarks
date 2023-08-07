# Multiple routes
## Name: Danet 

### Version: 1.8.0
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
    <td>19.92k</td>
    <td>25.79k</td>
    <td>3.85k</td>
    <td>0.21 MiB</td>
    <td>3.18</td>
    <td>1.92</td>
    <td>8.32</td>
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
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>23834.85k</td>
  <td>25145.63k</td>
  <td>25789.23k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>4.30</td>
  <td>5.19</td>
  <td>7.13</td>
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
  <td>19.92k</td>
  <td>25.79k</td>
  <td>3.85k</td>
  <td>0.21</td>
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>12832.11k</td>
  <td>23834.85k</td>
  <td>25145.63k</td>
  <td>25789.23k</td>
</tr><tr>
  <td>/random_number</td>
  <td>19.49k</td>
  <td>25.38k</td>
  <td>3.67k</td>
  <td>0.34</td>
  <td>14965.85k</td>
  <td>14965.85k</td>
  <td>14965.85k</td>
  <td>14965.85k</td>
  <td>24506.54k</td>
  <td>25000.77k</td>
  <td>25383.40k</td>
</tr><tr>
  <td>/count</td>
  <td>19.58k</td>
  <td>25.73k</td>
  <td>4.05k</td>
  <td>0.02</td>
  <td>14898.21k</td>
  <td>14898.21k</td>
  <td>14898.21k</td>
  <td>14898.21k</td>
  <td>24114.19k</td>
  <td>25156.87k</td>
  <td>25732.56k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>19.51k</td>
  <td>25.92k</td>
  <td>4.25k</td>
  <td>0.04</td>
  <td>14150.99k</td>
  <td>14150.99k</td>
  <td>14150.99k</td>
  <td>14150.99k</td>
  <td>23955.62k</td>
  <td>25408.63k</td>
  <td>25916.81k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>19.24k</td>
  <td>27.41k</td>
  <td>3.83k</td>
  <td>0.04</td>
  <td>13263.76k</td>
  <td>13263.76k</td>
  <td>13263.76k</td>
  <td>13263.76k</td>
  <td>23384.79k</td>
  <td>25562.78k</td>
  <td>27408.27k</td>
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
  <td>3.18</td>
  <td>1.92</td>
  <td>8.32</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>2.40</td>
  <td>4.30</td>
  <td>5.19</td>
  <td>7.13</td>
</tr><tr>
  <td>/random_number</td>
  <td>3.26</td>
  <td>1.42</td>
  <td>9.55</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>2.47</td>
  <td>4.29</td>
  <td>4.95</td>
  <td>6.92</td>
</tr><tr>
  <td>/count</td>
  <td>3.24</td>
  <td>1.25</td>
  <td>9.57</td>
  <td>2.45</td>
  <td>2.45</td>
  <td>2.45</td>
  <td>2.45</td>
  <td>4.10</td>
  <td>4.80</td>
  <td>7.07</td>
</tr><tr>
  <td>/plus_1</td>
  <td>3.27</td>
  <td>1.33</td>
  <td>10.04</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>2.42</td>
  <td>4.25</td>
  <td>5.01</td>
  <td>7.85</td>
</tr><tr>
  <td>/minus_1</td>
  <td>3.33</td>
  <td>1.28</td>
  <td>8.76</td>
  <td>2.41</td>
  <td>2.41</td>
  <td>2.41</td>
  <td>2.41</td>
  <td>4.35</td>
  <td>5.32</td>
  <td>7.37</td>
</tr></table>