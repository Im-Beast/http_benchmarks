# Multiple routes
## Name: Aqua 

### Version: 1.3.5
### Deno version: 1.36.0

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
    <td>38.68k</td>
    <td>42.65k</td>
    <td>2.08k</td>
    <td>0.40 MiB</td>
    <td>1.65</td>
    <td>0.90</td>
    <td>4.09</td>
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
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>41906.81k</td>
  <td>42514.92k</td>
  <td>42645.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>2.01</td>
  <td>2.09</td>
  <td>2.58</td>
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
  <td>/hello_world</td>
  <td>38.68k</td>
  <td>42.65k</td>
  <td>2.08k</td>
  <td>0.40</td>
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>37207.91k</td>
  <td>41906.81k</td>
  <td>42514.92k</td>
  <td>42645.07k</td>
</tr><tr>
  <td>/random_number</td>
  <td>38.70k</td>
  <td>42.58k</td>
  <td>2.99k</td>
  <td>0.68</td>
  <td>36525.55k</td>
  <td>36525.55k</td>
  <td>36525.55k</td>
  <td>36525.55k</td>
  <td>41457.58k</td>
  <td>42028.27k</td>
  <td>42582.80k</td>
</tr><tr>
  <td>/count</td>
  <td>39.86k</td>
  <td>43.54k</td>
  <td>2.61k</td>
  <td>0.04</td>
  <td>37519.74k</td>
  <td>37519.74k</td>
  <td>37519.74k</td>
  <td>37519.74k</td>
  <td>42216.33k</td>
  <td>42827.30k</td>
  <td>43541.36k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>38.10k</td>
  <td>45.57k</td>
  <td>4.42k</td>
  <td>0.07</td>
  <td>31366.25k</td>
  <td>31366.25k</td>
  <td>31366.25k</td>
  <td>31366.25k</td>
  <td>43910.78k</td>
  <td>44221.32k</td>
  <td>45573.69k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>38.40k</td>
  <td>43.86k</td>
  <td>3.04k</td>
  <td>0.07</td>
  <td>33502.72k</td>
  <td>33502.72k</td>
  <td>33502.72k</td>
  <td>33502.72k</td>
  <td>43064.27k</td>
  <td>43439.59k</td>
  <td>43864.22k</td>
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
  <td>/hello_world</td>
  <td>1.65</td>
  <td>0.90</td>
  <td>4.09</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>2.01</td>
  <td>2.09</td>
  <td>2.58</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.64</td>
  <td>0.87</td>
  <td>4.07</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.98</td>
  <td>2.05</td>
  <td>2.53</td>
</tr><tr>
  <td>/count</td>
  <td>1.60</td>
  <td>0.84</td>
  <td>3.87</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.40</td>
  <td>1.88</td>
  <td>2.02</td>
  <td>2.48</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.67</td>
  <td>0.93</td>
  <td>4.26</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>2.03</td>
  <td>2.30</td>
  <td>2.79</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.66</td>
  <td>0.79</td>
  <td>4.26</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.93</td>
  <td>2.10</td>
  <td>2.56</td>
</tr></table>