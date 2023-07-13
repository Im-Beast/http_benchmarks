# Name: Hono 
  
  ### Version: 3.3.0
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
    <td>121.17k</td>
    <td>137.58k</td>
    <td>13.85k</td>
    <td>2.17 MiB</td>
    <td>0.51</td>
    <td>0.40</td>
    <td>2.79</td>
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
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>137583.04k</td>
  <td>137583.04k</td>
  <td>137583.04k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.55</td>
  <td>0.58</td>
  <td>1.27</td>
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
  <td>121.17k</td>
  <td>137.58k</td>
  <td>13.85k</td>
  <td>2.17</td>
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>99693.46k</td>
  <td>137583.04k</td>
  <td>137583.04k</td>
  <td>137583.04k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>134.02k</td>
  <td>146.62k</td>
  <td>13.51k</td>
  <td>1.41</td>
  <td>105212.90k</td>
  <td>105212.90k</td>
  <td>105212.90k</td>
  <td>105212.90k</td>
  <td>146623.02k</td>
  <td>146623.02k</td>
  <td>146623.02k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>133.28k</td>
  <td>144.83k</td>
  <td>8.41k</td>
  <td>0.25</td>
  <td>117274.33k</td>
  <td>117274.33k</td>
  <td>117274.33k</td>
  <td>117274.33k</td>
  <td>144829.61k</td>
  <td>144829.61k</td>
  <td>144829.61k</td>
</tr><tr>
  <td>/count</td>
  <td>137.40k</td>
  <td>146.92k</td>
  <td>10.07k</td>
  <td>0.13</td>
  <td>116220.69k</td>
  <td>116220.69k</td>
  <td>116220.69k</td>
  <td>116220.69k</td>
  <td>146918.66k</td>
  <td>146918.66k</td>
  <td>146918.66k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>136.41k</td>
  <td>147.16k</td>
  <td>8.40k</td>
  <td>0.26</td>
  <td>120515.79k</td>
  <td>120515.79k</td>
  <td>120515.79k</td>
  <td>120515.79k</td>
  <td>147159.62k</td>
  <td>147159.62k</td>
  <td>147159.62k</td>
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
  <td>0.51</td>
  <td>0.40</td>
  <td>2.79</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.44</td>
  <td>0.55</td>
  <td>0.58</td>
  <td>1.27</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.47</td>
  <td>0.37</td>
  <td>1.56</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.52</td>
  <td>1.20</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.48</td>
  <td>0.37</td>
  <td>1.50</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.42</td>
  <td>0.49</td>
  <td>0.51</td>
  <td>1.24</td>
</tr><tr>
  <td>/count</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.40</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.48</td>
  <td>0.50</td>
  <td>1.15</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.46</td>
  <td>0.37</td>
  <td>1.42</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.41</td>
  <td>0.49</td>
  <td>0.50</td>
  <td>1.21</td>
</tr></table>