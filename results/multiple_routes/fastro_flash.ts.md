# Name: Fastro (flash) 
  
  ### Version: 0.70.5
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
    <td>135.23k</td>
    <td>144.29k</td>
    <td>8.43k</td>
    <td>2.35 MiB</td>
    <td>0.47</td>
    <td>0.36</td>
    <td>1.45</td>
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
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>144293.24k</td>
  <td>144293.24k</td>
  <td>144293.24k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.50</td>
  <td>0.61</td>
  <td>0.76</td>
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
  <td>135.23k</td>
  <td>144.29k</td>
  <td>8.43k</td>
  <td>2.35</td>
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>118634.34k</td>
  <td>144293.24k</td>
  <td>144293.24k</td>
  <td>144293.24k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>150.74k</td>
  <td>155.51k</td>
  <td>8.36k</td>
  <td>1.58</td>
  <td>132144.57k</td>
  <td>132144.57k</td>
  <td>132144.57k</td>
  <td>132144.57k</td>
  <td>155509.14k</td>
  <td>155509.14k</td>
  <td>155509.14k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>150.99k</td>
  <td>157.00k</td>
  <td>7.86k</td>
  <td>0.29</td>
  <td>134517.88k</td>
  <td>134517.88k</td>
  <td>134517.88k</td>
  <td>134517.88k</td>
  <td>157004.36k</td>
  <td>157004.36k</td>
  <td>157004.36k</td>
</tr><tr>
  <td>/count</td>
  <td>151.49k</td>
  <td>158.02k</td>
  <td>8.15k</td>
  <td>0.14</td>
  <td>133741.50k</td>
  <td>133741.50k</td>
  <td>133741.50k</td>
  <td>133741.50k</td>
  <td>158023.06k</td>
  <td>158023.06k</td>
  <td>158023.06k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>151.95k</td>
  <td>157.99k</td>
  <td>8.41k</td>
  <td>0.29</td>
  <td>134119.85k</td>
  <td>134119.85k</td>
  <td>134119.85k</td>
  <td>134119.85k</td>
  <td>157994.58k</td>
  <td>157994.58k</td>
  <td>157994.58k</td>
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
  <td>0.47</td>
  <td>0.36</td>
  <td>1.45</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.50</td>
  <td>0.61</td>
  <td>0.76</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.29</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.44</td>
  <td>0.48</td>
  <td>0.62</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.15</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.48</td>
  <td>0.59</td>
</tr><tr>
  <td>/count</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.26</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.60</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.33</td>
  <td>1.27</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.47</td>
  <td>0.59</td>
</tr></table>