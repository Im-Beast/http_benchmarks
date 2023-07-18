# Multiple routes
## Name: Oak 

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
    <td>36.30k</td>
    <td>41.08k</td>
    <td>3.86k</td>
    <td>0.38 MiB</td>
    <td>1.75</td>
    <td>0.67</td>
    <td>4.75</td>
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
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>40274.95k</td>
  <td>40316.12k</td>
  <td>41075.42k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>2.21</td>
  <td>2.49</td>
  <td>3.35</td>
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
  <td>36.30k</td>
  <td>41.08k</td>
  <td>3.86k</td>
  <td>0.38</td>
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>28987.10k</td>
  <td>40274.95k</td>
  <td>40316.12k</td>
  <td>41075.42k</td>
</tr><tr>
  <td>/random_number</td>
  <td>34.93k</td>
  <td>38.93k</td>
  <td>3.30k</td>
  <td>0.61</td>
  <td>30071.20k</td>
  <td>30071.20k</td>
  <td>30071.20k</td>
  <td>30071.20k</td>
  <td>38463.02k</td>
  <td>38685.72k</td>
  <td>38931.10k</td>
</tr><tr>
  <td>/count</td>
  <td>35.90k</td>
  <td>41.18k</td>
  <td>4.26k</td>
  <td>0.03</td>
  <td>31041.23k</td>
  <td>31041.23k</td>
  <td>31041.23k</td>
  <td>31041.23k</td>
  <td>40072.24k</td>
  <td>40349.16k</td>
  <td>41175.65k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>36.16k</td>
  <td>40.49k</td>
  <td>3.93k</td>
  <td>0.07</td>
  <td>30075.26k</td>
  <td>30075.26k</td>
  <td>30075.26k</td>
  <td>30075.26k</td>
  <td>39849.54k</td>
  <td>40315.73k</td>
  <td>40493.58k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>35.99k</td>
  <td>40.56k</td>
  <td>3.71k</td>
  <td>0.07</td>
  <td>30822.39k</td>
  <td>30822.39k</td>
  <td>30822.39k</td>
  <td>30822.39k</td>
  <td>39717.37k</td>
  <td>40542.64k</td>
  <td>40558.20k</td>
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
  <td>1.75</td>
  <td>0.67</td>
  <td>4.75</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>1.42</td>
  <td>2.21</td>
  <td>2.49</td>
  <td>3.35</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.82</td>
  <td>0.72</td>
  <td>4.60</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>1.49</td>
  <td>2.32</td>
  <td>2.62</td>
  <td>3.36</td>
</tr><tr>
  <td>/count</td>
  <td>1.77</td>
  <td>0.96</td>
  <td>5.08</td>
  <td>1.44</td>
  <td>1.44</td>
  <td>1.44</td>
  <td>1.44</td>
  <td>2.22</td>
  <td>2.54</td>
  <td>3.53</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.76</td>
  <td>0.83</td>
  <td>5.37</td>
  <td>1.47</td>
  <td>1.47</td>
  <td>1.47</td>
  <td>1.47</td>
  <td>2.21</td>
  <td>2.45</td>
  <td>3.19</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.77</td>
  <td>0.82</td>
  <td>5.13</td>
  <td>1.45</td>
  <td>1.45</td>
  <td>1.45</td>
  <td>1.45</td>
  <td>2.22</td>
  <td>2.57</td>
  <td>3.50</td>
</tr></table>