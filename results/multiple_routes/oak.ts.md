# Name: Oak 
  
  ### Version: 12.6.0
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
    <td>38.23k</td>
    <td>42.32k</td>
    <td>3.19k</td>
    <td>0.67 MiB</td>
    <td>1.67</td>
    <td>0.92</td>
    <td>4.95</td>
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
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>41020.50k</td>
  <td>41195.76k</td>
  <td>42315.55k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>2.09</td>
  <td>2.25</td>
  <td>2.83</td>
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
  <td>38.23k</td>
  <td>42.32k</td>
  <td>3.19k</td>
  <td>0.67</td>
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>36104.71k</td>
  <td>41020.50k</td>
  <td>41195.76k</td>
  <td>42315.55k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>40.70k</td>
  <td>45.04k</td>
  <td>3.50k</td>
  <td>0.43</td>
  <td>36455.89k</td>
  <td>36455.89k</td>
  <td>36455.89k</td>
  <td>36455.89k</td>
  <td>43628.01k</td>
  <td>43801.27k</td>
  <td>45037.31k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>40.22k</td>
  <td>43.23k</td>
  <td>3.30k</td>
  <td>0.08</td>
  <td>35901.39k</td>
  <td>35901.39k</td>
  <td>35901.39k</td>
  <td>35901.39k</td>
  <td>43096.16k</td>
  <td>43215.95k</td>
  <td>43234.17k</td>
</tr><tr>
  <td>/count</td>
  <td>40.94k</td>
  <td>45.97k</td>
  <td>3.35k</td>
  <td>0.04</td>
  <td>36908.59k</td>
  <td>36908.59k</td>
  <td>36908.59k</td>
  <td>36908.59k</td>
  <td>43862.49k</td>
  <td>43937.05k</td>
  <td>45972.08k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>40.45k</td>
  <td>43.74k</td>
  <td>3.33k</td>
  <td>0.08</td>
  <td>36368.17k</td>
  <td>36368.17k</td>
  <td>36368.17k</td>
  <td>36368.17k</td>
  <td>43081.80k</td>
  <td>43282.98k</td>
  <td>43737.40k</td>
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
  <td>1.67</td>
  <td>0.92</td>
  <td>4.95</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>1.43</td>
  <td>2.09</td>
  <td>2.25</td>
  <td>2.83</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.55</td>
  <td>0.75</td>
  <td>4.24</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.94</td>
  <td>2.08</td>
  <td>2.65</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.58</td>
  <td>0.76</td>
  <td>4.78</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.99</td>
  <td>2.13</td>
  <td>2.69</td>
</tr><tr>
  <td>/count</td>
  <td>1.55</td>
  <td>0.65</td>
  <td>4.89</td>
  <td>1.33</td>
  <td>1.33</td>
  <td>1.33</td>
  <td>1.33</td>
  <td>1.94</td>
  <td>2.06</td>
  <td>2.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.57</td>
  <td>0.68</td>
  <td>5.14</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.97</td>
  <td>2.11</td>
  <td>2.69</td>
</tr></table>