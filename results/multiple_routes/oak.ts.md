# Name: Oak 
  
  ### Version: 11.1.0
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
    <td>36.36k</td>
    <td>41.20k</td>
    <td>3.68k</td>
    <td>0.63 MiB</td>
    <td>1.75</td>
    <td>0.73</td>
    <td>4.65</td>
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
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>39919.66k</td>
  <td>40818.68k</td>
  <td>41204.48k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>2.28</td>
  <td>2.59</td>
  <td>3.56</td>
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
  <td>36.36k</td>
  <td>41.20k</td>
  <td>3.68k</td>
  <td>0.63</td>
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>31931.67k</td>
  <td>39919.66k</td>
  <td>40818.68k</td>
  <td>41204.48k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>39.23k</td>
  <td>46.42k</td>
  <td>3.82k</td>
  <td>0.41</td>
  <td>34999.21k</td>
  <td>34999.21k</td>
  <td>34999.21k</td>
  <td>34999.21k</td>
  <td>44493.80k</td>
  <td>45533.75k</td>
  <td>46415.99k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>38.51k</td>
  <td>44.86k</td>
  <td>3.80k</td>
  <td>0.07</td>
  <td>32609.02k</td>
  <td>32609.02k</td>
  <td>32609.02k</td>
  <td>32609.02k</td>
  <td>42777.98k</td>
  <td>43120.13k</td>
  <td>44861.76k</td>
</tr><tr>
  <td>/count</td>
  <td>37.24k</td>
  <td>44.08k</td>
  <td>4.16k</td>
  <td>0.04</td>
  <td>30917.88k</td>
  <td>30917.88k</td>
  <td>30917.88k</td>
  <td>30917.88k</td>
  <td>41910.57k</td>
  <td>42637.57k</td>
  <td>44084.82k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>36.10k</td>
  <td>42.01k</td>
  <td>4.20k</td>
  <td>0.07</td>
  <td>30886.90k</td>
  <td>30886.90k</td>
  <td>30886.90k</td>
  <td>30886.90k</td>
  <td>41014.94k</td>
  <td>41021.00k</td>
  <td>42011.58k</td>
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
  <td>1.75</td>
  <td>0.73</td>
  <td>4.65</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>1.39</td>
  <td>2.28</td>
  <td>2.59</td>
  <td>3.56</td>
</tr><tr>
  <td>/hello_world</td>
  <td>1.63</td>
  <td>0.58</td>
  <td>4.61</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>2.14</td>
  <td>2.57</td>
  <td>3.46</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.65</td>
  <td>0.70</td>
  <td>4.50</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>2.19</td>
  <td>2.53</td>
  <td>3.28</td>
</tr><tr>
  <td>/count</td>
  <td>1.71</td>
  <td>0.66</td>
  <td>4.74</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>1.34</td>
  <td>2.25</td>
  <td>2.71</td>
  <td>3.92</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.76</td>
  <td>0.70</td>
  <td>5.36</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>1.38</td>
  <td>2.32</td>
  <td>2.73</td>
  <td>3.34</td>
</tr></table>