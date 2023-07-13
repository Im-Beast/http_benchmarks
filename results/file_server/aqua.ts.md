# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>11.01k</td>
    <td>13.88k</td>
    <td>1.52k</td>
    <td>58.39 MiB</td>
    <td>5.79</td>
    <td>2.95</td>
    <td>10.31</td>
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
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>12427.84k</td>
  <td>12575.21k</td>
  <td>13878.36k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>7.43</td>
  <td>7.79</td>
  <td>8.89</td>
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
  <td>11.01k</td>
  <td>13.88k</td>
  <td>1.52k</td>
  <td>58.39</td>
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>8558.16k</td>
  <td>12427.84k</td>
  <td>12575.21k</td>
  <td>13878.36k</td>
</tr><tr>
  <td>text.txt</td>
  <td>29.80k</td>
  <td>32.68k</td>
  <td>2.07k</td>
  <td>1.42</td>
  <td>27845.08k</td>
  <td>27845.08k</td>
  <td>27845.08k</td>
  <td>27845.08k</td>
  <td>31545.32k</td>
  <td>31926.73k</td>
  <td>32680.76k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>4.21k</td>
  <td>8.31k</td>
  <td>987.81</td>
  <td>1.53k</td>
  <td>3112.06k</td>
  <td>3112.06k</td>
  <td>3112.06k</td>
  <td>3112.06k</td>
  <td>5381.45k</td>
  <td>5704.73k</td>
  <td>6950.47k</td>
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
  <td>5.79</td>
  <td>2.95</td>
  <td>10.31</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>4.82</td>
  <td>7.43</td>
  <td>7.79</td>
  <td>8.89</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.14</td>
  <td>1.35</td>
  <td>4.50</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>1.82</td>
  <td>2.51</td>
  <td>2.63</td>
  <td>3.01</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>15.28</td>
  <td>7.48</td>
  <td>34.13</td>
  <td>12.86</td>
  <td>12.86</td>
  <td>12.86</td>
  <td>12.86</td>
  <td>17.46</td>
  <td>18.26</td>
  <td>20.91</td>
</tr></table>