# Name: Vixeny 
  
  ### Version: 0.0.63
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
    <td>135.12k</td>
    <td>144.59k</td>
    <td>10.44k</td>
    <td>2.36 MiB</td>
    <td>0.46</td>
    <td>0.35</td>
    <td>1.72</td>
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
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>144589.26k</td>
  <td>144589.26k</td>
  <td>144589.26k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.66</td>
  <td>0.89</td>
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
  <td>135.12k</td>
  <td>144.59k</td>
  <td>10.44k</td>
  <td>2.36</td>
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>113310.30k</td>
  <td>144589.26k</td>
  <td>144589.26k</td>
  <td>144589.26k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>152.81k</td>
  <td>162.34k</td>
  <td>10.64k</td>
  <td>1.60</td>
  <td>132167.74k</td>
  <td>132167.74k</td>
  <td>132167.74k</td>
  <td>132167.74k</td>
  <td>162343.11k</td>
  <td>162343.11k</td>
  <td>162343.11k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>148.55k</td>
  <td>160.93k</td>
  <td>9.71k</td>
  <td>0.28</td>
  <td>133172.79k</td>
  <td>133172.79k</td>
  <td>133172.79k</td>
  <td>133172.79k</td>
  <td>160928.13k</td>
  <td>160928.13k</td>
  <td>160928.13k</td>
</tr><tr>
  <td>/count</td>
  <td>142.76k</td>
  <td>158.54k</td>
  <td>14.00k</td>
  <td>0.14</td>
  <td>115670.11k</td>
  <td>115670.11k</td>
  <td>115670.11k</td>
  <td>115670.11k</td>
  <td>158544.92k</td>
  <td>158544.92k</td>
  <td>158544.92k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>146.82k</td>
  <td>155.31k</td>
  <td>9.84k</td>
  <td>0.28</td>
  <td>126296.45k</td>
  <td>126296.45k</td>
  <td>126296.45k</td>
  <td>126296.45k</td>
  <td>155314.73k</td>
  <td>155314.73k</td>
  <td>155314.73k</td>
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
  <td>0.46</td>
  <td>0.35</td>
  <td>1.72</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.56</td>
  <td>0.66</td>
  <td>0.89</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.14</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.47</td>
  <td>0.54</td>
  <td>0.70</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.27</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.49</td>
  <td>0.56</td>
  <td>0.79</td>
</tr><tr>
  <td>/count</td>
  <td>0.44</td>
  <td>0.33</td>
  <td>1.20</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.54</td>
  <td>0.59</td>
  <td>0.72</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.43</td>
  <td>0.33</td>
  <td>1.31</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.51</td>
  <td>0.56</td>
  <td>0.72</td>
</tr></table>