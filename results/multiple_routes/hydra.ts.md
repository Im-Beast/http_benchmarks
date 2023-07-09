# Name: Hydra 
  
  ### Version: 0.2.0
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
    <td>135.78k</td>
    <td>144.11k</td>
    <td>8.63k</td>
    <td>2.38 MiB</td>
    <td>0.46</td>
    <td>0.37</td>
    <td>1.17</td>
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
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>144111.66k</td>
  <td>144111.66k</td>
  <td>144111.66k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.62</td>
  <td>0.73</td>
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
  <td>135.78k</td>
  <td>144.11k</td>
  <td>8.63k</td>
  <td>2.38</td>
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>120602.09k</td>
  <td>144111.66k</td>
  <td>144111.66k</td>
  <td>144111.66k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>146.02k</td>
  <td>156.72k</td>
  <td>8.08k</td>
  <td>1.53</td>
  <td>130331.02k</td>
  <td>130331.02k</td>
  <td>130331.02k</td>
  <td>130331.02k</td>
  <td>156717.63k</td>
  <td>156717.63k</td>
  <td>156717.63k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>153.68k</td>
  <td>158.36k</td>
  <td>7.52k</td>
  <td>0.29</td>
  <td>137251.72k</td>
  <td>137251.72k</td>
  <td>137251.72k</td>
  <td>137251.72k</td>
  <td>158359.86k</td>
  <td>158359.86k</td>
  <td>158359.86k</td>
</tr><tr>
  <td>/count</td>
  <td>153.06k</td>
  <td>159.07k</td>
  <td>8.40k</td>
  <td>0.15</td>
  <td>135930.23k</td>
  <td>135930.23k</td>
  <td>135930.23k</td>
  <td>135930.23k</td>
  <td>159070.98k</td>
  <td>159070.98k</td>
  <td>159070.98k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>151.91k</td>
  <td>158.81k</td>
  <td>8.63k</td>
  <td>0.29</td>
  <td>129319.52k</td>
  <td>129319.52k</td>
  <td>129319.52k</td>
  <td>129319.52k</td>
  <td>158805.45k</td>
  <td>158805.45k</td>
  <td>158805.45k</td>
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
  <td>0.37</td>
  <td>1.17</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.52</td>
  <td>0.62</td>
  <td>0.73</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.43</td>
  <td>0.34</td>
  <td>1.13</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.38</td>
  <td>0.47</td>
  <td>0.50</td>
  <td>0.58</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.41</td>
  <td>0.34</td>
  <td>1.04</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.56</td>
</tr><tr>
  <td>/count</td>
  <td>0.41</td>
  <td>0.34</td>
  <td>1.08</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.42</td>
  <td>0.34</td>
  <td>1.22</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.46</td>
  <td>0.49</td>
  <td>0.59</td>
</tr></table>