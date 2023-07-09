# Name: Hono 
  
  ### Version: 3.2.7
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
    <td>115.33k</td>
    <td>128.58k</td>
    <td>14.32k</td>
    <td>2.00 MiB</td>
    <td>0.55</td>
    <td>0.42</td>
    <td>3.17</td>
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
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>126077.97k</td>
  <td>128579.04k</td>
  <td>128579.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.60</td>
  <td>0.82</td>
  <td>1.17</td>
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
  <td>115.33k</td>
  <td>128.58k</td>
  <td>14.32k</td>
  <td>2.00</td>
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>80372.85k</td>
  <td>126077.97k</td>
  <td>128579.04k</td>
  <td>128579.04k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>136.74k</td>
  <td>148.46k</td>
  <td>17.63k</td>
  <td>1.44</td>
  <td>96721.14k</td>
  <td>96721.14k</td>
  <td>96721.14k</td>
  <td>96721.14k</td>
  <td>148463.00k</td>
  <td>148463.00k</td>
  <td>148463.00k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>132.83k</td>
  <td>146.49k</td>
  <td>15.81k</td>
  <td>0.25</td>
  <td>104019.72k</td>
  <td>104019.72k</td>
  <td>104019.72k</td>
  <td>104019.72k</td>
  <td>146490.03k</td>
  <td>146490.03k</td>
  <td>146490.03k</td>
</tr><tr>
  <td>/count</td>
  <td>133.88k</td>
  <td>149.51k</td>
  <td>21.04k</td>
  <td>0.13</td>
  <td>90824.24k</td>
  <td>90824.24k</td>
  <td>90824.24k</td>
  <td>90824.24k</td>
  <td>149511.12k</td>
  <td>149511.12k</td>
  <td>149511.12k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>137.13k</td>
  <td>147.95k</td>
  <td>10.75k</td>
  <td>0.26</td>
  <td>120730.15k</td>
  <td>120730.15k</td>
  <td>120730.15k</td>
  <td>120730.15k</td>
  <td>147950.87k</td>
  <td>147950.87k</td>
  <td>147950.87k</td>
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
  <td>0.55</td>
  <td>0.42</td>
  <td>3.17</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.46</td>
  <td>0.60</td>
  <td>0.82</td>
  <td>1.17</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.62</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.47</td>
  <td>0.49</td>
  <td>1.22</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>2.23</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.51</td>
  <td>0.52</td>
  <td>1.21</td>
</tr><tr>
  <td>/count</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>2.86</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.40</td>
  <td>0.48</td>
  <td>0.49</td>
  <td>1.24</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.39</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.48</td>
  <td>0.50</td>
  <td>1.18</td>
</tr></table>