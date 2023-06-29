# Name: std serve serveDir 
  
  ### Version: 0.192.0
  ### Deno version: 1.34.3

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
    <td>1.87k</td>
    <td>155.30k</td>
    <td>5.33k</td>
    <td>269.56 MiB</td>
    <td>42.50</td>
    <td>7.05</td>
    <td>55.10</td>
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
  <td>378.19k</td>
  <td>378.19k</td>
  <td>378.19k</td>
  <td>378.19k</td>
  <td>3735.34k</td>
  <td>4503.00k</td>
  <td>8044.61k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>44.58</td>
  <td>45.26</td>
  <td>46.36</td>
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
  <td>lorem-20.txt</td>
  <td>1.87k</td>
  <td>155.30k</td>
  <td>5.33k</td>
  <td>269.56</td>
  <td>378.19k</td>
  <td>378.19k</td>
  <td>378.19k</td>
  <td>378.19k</td>
  <td>3735.34k</td>
  <td>4503.00k</td>
  <td>8044.61k</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.83k</td>
  <td>218.21k</td>
  <td>6.61k</td>
  <td>0.08</td>
  <td>599.79k</td>
  <td>599.79k</td>
  <td>599.79k</td>
  <td>599.79k</td>
  <td>2791.40k</td>
  <td>3366.73k</td>
  <td>4951.01k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>2.04k</td>
  <td>199.08k</td>
  <td>6.98k</td>
  <td>536.53</td>
  <td>100.21k</td>
  <td>100.21k</td>
  <td>100.21k</td>
  <td>100.21k</td>
  <td>4786.62k</td>
  <td>5823.07k</td>
  <td>11739.15k</td>
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
  <td>lorem-20.txt</td>
  <td>42.50</td>
  <td>7.05</td>
  <td>55.10</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>44.58</td>
  <td>45.26</td>
  <td>46.36</td>
</tr><tr>
  <td>text.txt</td>
  <td>41.39</td>
  <td>1.12</td>
  <td>48.54</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>40.98</td>
  <td>42.02</td>
  <td>42.05</td>
  <td>43.02</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>43.53</td>
  <td>0.23</td>
  <td>53.15</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>40.99</td>
  <td>47.14</td>
  <td>48.02</td>
  <td>49.69</td>
</tr></table>