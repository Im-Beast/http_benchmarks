# Name: Oak 
  
  ### Version: 12.5.0
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
    <td>35.72k</td>
    <td>40.63k</td>
    <td>3.75k</td>
    <td>0.62 MiB</td>
    <td>1.78</td>
    <td>0.85</td>
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
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>39115.83k</td>
  <td>39326.81k</td>
  <td>40628.32k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>2.26</td>
  <td>2.55</td>
  <td>3.52</td>
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
  <td>35.72k</td>
  <td>40.63k</td>
  <td>3.75k</td>
  <td>0.62</td>
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>31974.83k</td>
  <td>39115.83k</td>
  <td>39326.81k</td>
  <td>40628.32k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>38.45k</td>
  <td>42.42k</td>
  <td>3.05k</td>
  <td>0.40</td>
  <td>35702.37k</td>
  <td>35702.37k</td>
  <td>35702.37k</td>
  <td>35702.37k</td>
  <td>41312.24k</td>
  <td>41873.10k</td>
  <td>42415.78k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>38.32k</td>
  <td>43.47k</td>
  <td>3.94k</td>
  <td>0.07</td>
  <td>35000.42k</td>
  <td>35000.42k</td>
  <td>35000.42k</td>
  <td>35000.42k</td>
  <td>42651.29k</td>
  <td>42661.96k</td>
  <td>43473.22k</td>
</tr><tr>
  <td>/count</td>
  <td>39.29k</td>
  <td>43.87k</td>
  <td>3.53k</td>
  <td>0.04</td>
  <td>35507.67k</td>
  <td>35507.67k</td>
  <td>35507.67k</td>
  <td>35507.67k</td>
  <td>43018.67k</td>
  <td>43553.10k</td>
  <td>43874.75k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>38.16k</td>
  <td>42.75k</td>
  <td>3.44k</td>
  <td>0.07</td>
  <td>32953.45k</td>
  <td>32953.45k</td>
  <td>32953.45k</td>
  <td>32953.45k</td>
  <td>41283.48k</td>
  <td>41871.51k</td>
  <td>42748.80k</td>
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
  <td>1.78</td>
  <td>0.85</td>
  <td>4.95</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>1.46</td>
  <td>2.26</td>
  <td>2.55</td>
  <td>3.52</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.66</td>
  <td>0.79</td>
  <td>5.41</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>1.37</td>
  <td>2.09</td>
  <td>2.25</td>
  <td>2.89</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.66</td>
  <td>0.77</td>
  <td>4.79</td>
  <td>1.36</td>
  <td>1.36</td>
  <td>1.36</td>
  <td>1.36</td>
  <td>2.13</td>
  <td>2.38</td>
  <td>3.12</td>
</tr><tr>
  <td>/count</td>
  <td>1.62</td>
  <td>0.92</td>
  <td>4.50</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>1.35</td>
  <td>2.01</td>
  <td>2.21</td>
  <td>2.87</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.67</td>
  <td>0.67</td>
  <td>4.51</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>2.12</td>
  <td>2.34</td>
  <td>3.11</td>
</tr></table>