# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>41.22k</td>
    <td>48.76k</td>
    <td>6.04k</td>
    <td>0.72 MiB</td>
    <td>1.55</td>
    <td>0.76</td>
    <td>6.04</td>
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
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>46865.40k</td>
  <td>47567.16k</td>
  <td>48755.06k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>2.07</td>
  <td>2.59</td>
  <td>3.97</td>
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
  <td>41.22k</td>
  <td>48.76k</td>
  <td>6.04k</td>
  <td>0.72</td>
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>34284.76k</td>
  <td>46865.40k</td>
  <td>47567.16k</td>
  <td>48755.06k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>43.60k</td>
  <td>50.48k</td>
  <td>4.86k</td>
  <td>0.46</td>
  <td>37436.77k</td>
  <td>37436.77k</td>
  <td>37436.77k</td>
  <td>37436.77k</td>
  <td>48945.07k</td>
  <td>49174.90k</td>
  <td>50477.11k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>39.64k</td>
  <td>46.14k</td>
  <td>4.19k</td>
  <td>0.08</td>
  <td>34288.48k</td>
  <td>34288.48k</td>
  <td>34288.48k</td>
  <td>34288.48k</td>
  <td>45209.61k</td>
  <td>45373.52k</td>
  <td>46139.20k</td>
</tr><tr>
  <td>/count</td>
  <td>43.64k</td>
  <td>52.37k</td>
  <td>5.60k</td>
  <td>0.04</td>
  <td>37550.82k</td>
  <td>37550.82k</td>
  <td>37550.82k</td>
  <td>37550.82k</td>
  <td>49910.16k</td>
  <td>51408.04k</td>
  <td>52372.86k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>40.20k</td>
  <td>46.72k</td>
  <td>4.03k</td>
  <td>0.08</td>
  <td>34196.85k</td>
  <td>34196.85k</td>
  <td>34196.85k</td>
  <td>34196.85k</td>
  <td>45978.19k</td>
  <td>46510.27k</td>
  <td>46717.13k</td>
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
  <td>1.55</td>
  <td>0.76</td>
  <td>6.04</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>1.21</td>
  <td>2.07</td>
  <td>2.59</td>
  <td>3.97</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.46</td>
  <td>0.65</td>
  <td>4.19</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.16</td>
  <td>1.93</td>
  <td>2.34</td>
  <td>3.26</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.61</td>
  <td>0.63</td>
  <td>4.01</td>
  <td>1.26</td>
  <td>1.26</td>
  <td>1.26</td>
  <td>1.26</td>
  <td>2.17</td>
  <td>2.68</td>
  <td>3.38</td>
</tr><tr>
  <td>/count</td>
  <td>1.44</td>
  <td>0.63</td>
  <td>4.10</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.14</td>
  <td>1.91</td>
  <td>2.28</td>
  <td>3.16</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.58</td>
  <td>0.75</td>
  <td>4.26</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>2.05</td>
  <td>2.51</td>
  <td>3.35</td>
</tr></table>