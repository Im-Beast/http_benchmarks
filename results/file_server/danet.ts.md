# Name: Danet 
  
  ### Version: 1.7.4

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
    <td>4.54k</td>
    <td>11.20k</td>
    <td>1.49k</td>
    <td>289.31 MiB</td>
    <td>25.58</td>
    <td>5.69</td>
    <td>146.53</td>
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
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>6326.56k</td>
  <td>6647.07k</td>
  <td>7430.41k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>47.05</td>
  <td>60.00</td>
  <td>85.92</td>
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
  <td>4.54k</td>
  <td>11.20k</td>
  <td>1.49k</td>
  <td>289.31</td>
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>2782.76k</td>
  <td>6326.56k</td>
  <td>6647.07k</td>
  <td>7430.41k</td>
</tr><tr>
  <td>text.txt</td>
  <td>10.21k</td>
  <td>15.40k</td>
  <td>3.11k</td>
  <td>0.48</td>
  <td>6735.17k</td>
  <td>6735.17k</td>
  <td>6735.17k</td>
  <td>6735.17k</td>
  <td>14486.82k</td>
  <td>14829.01k</td>
  <td>15371.10k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>1.58k</td>
  <td>7.29k</td>
  <td>673.99</td>
  <td>565.69</td>
  <td>796.40k</td>
  <td>796.40k</td>
  <td>796.40k</td>
  <td>796.40k</td>
  <td>2409.12k</td>
  <td>2707.84k</td>
  <td>3381.75k</td>
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
  <td>25.58</td>
  <td>5.69</td>
  <td>146.53</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>14.39</td>
  <td>47.05</td>
  <td>60.00</td>
  <td>85.92</td>
</tr><tr>
  <td>text.txt</td>
  <td>6.33</td>
  <td>4.02</td>
  <td>9.91</td>
  <td>5.55</td>
  <td>5.55</td>
  <td>5.55</td>
  <td>5.55</td>
  <td>7.04</td>
  <td>7.25</td>
  <td>9.36</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>41.32</td>
  <td>5.48</td>
  <td>275.11</td>
  <td>20.22</td>
  <td>20.22</td>
  <td>20.22</td>
  <td>20.22</td>
  <td>82.78</td>
  <td>108.38</td>
  <td>158.24</td>
</tr></table>