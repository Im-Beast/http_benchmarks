# Name: Aqua 
  
  ### Version: 1.3.5
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
    <td>45.69k</td>
    <td>50.03k</td>
    <td>4.18k</td>
    <td>0.80 MiB</td>
    <td>1.38</td>
    <td>0.64</td>
    <td>4.54</td>
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
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>49166.01k</td>
  <td>49398.96k</td>
  <td>50031.85k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.73</td>
  <td>1.83</td>
  <td>2.41</td>
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
  <td>45.69k</td>
  <td>50.03k</td>
  <td>4.18k</td>
  <td>0.80</td>
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>36832.34k</td>
  <td>49166.01k</td>
  <td>49398.96k</td>
  <td>50031.85k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>48.05k</td>
  <td>52.84k</td>
  <td>4.10k</td>
  <td>0.51</td>
  <td>45785.43k</td>
  <td>45785.43k</td>
  <td>45785.43k</td>
  <td>45785.43k</td>
  <td>51050.04k</td>
  <td>51974.80k</td>
  <td>52844.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>44.96k</td>
  <td>48.45k</td>
  <td>3.18k</td>
  <td>0.09</td>
  <td>41305.10k</td>
  <td>41305.10k</td>
  <td>41305.10k</td>
  <td>41305.10k</td>
  <td>46804.04k</td>
  <td>47801.65k</td>
  <td>48449.98k</td>
</tr><tr>
  <td>/count</td>
  <td>47.81k</td>
  <td>53.01k</td>
  <td>4.49k</td>
  <td>0.05</td>
  <td>46090.21k</td>
  <td>46090.21k</td>
  <td>46090.21k</td>
  <td>46090.21k</td>
  <td>51385.29k</td>
  <td>52049.36k</td>
  <td>53007.70k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>45.13k</td>
  <td>49.41k</td>
  <td>3.51k</td>
  <td>0.09</td>
  <td>42302.89k</td>
  <td>42302.89k</td>
  <td>42302.89k</td>
  <td>42302.89k</td>
  <td>47597.58k</td>
  <td>47930.25k</td>
  <td>49411.79k</td>
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
  <td>1.38</td>
  <td>0.64</td>
  <td>4.54</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.17</td>
  <td>1.73</td>
  <td>1.83</td>
  <td>2.41</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.32</td>
  <td>0.56</td>
  <td>3.97</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.12</td>
  <td>1.66</td>
  <td>1.75</td>
  <td>2.37</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.42</td>
  <td>0.83</td>
  <td>3.96</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.22</td>
  <td>1.79</td>
  <td>1.90</td>
  <td>2.70</td>
</tr><tr>
  <td>/count</td>
  <td>1.30</td>
  <td>0.75</td>
  <td>3.89</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.11</td>
  <td>1.65</td>
  <td>1.74</td>
  <td>2.31</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.41</td>
  <td>0.82</td>
  <td>3.74</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.77</td>
  <td>1.89</td>
  <td>2.51</td>
</tr></table>