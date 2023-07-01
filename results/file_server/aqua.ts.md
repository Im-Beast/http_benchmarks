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
    <td>9.63k</td>
    <td>12.82k</td>
    <td>1.44k</td>
    <td>51.07 MiB</td>
    <td>6.62</td>
    <td>3.46</td>
    <td>11.83</td>
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
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>11080.63k</td>
  <td>11634.47k</td>
  <td>12344.44k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>8.33</td>
  <td>8.98</td>
  <td>9.90</td>
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
  <td>9.63k</td>
  <td>12.82k</td>
  <td>1.44k</td>
  <td>51.07</td>
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>7296.29k</td>
  <td>11080.63k</td>
  <td>11634.47k</td>
  <td>12344.44k</td>
</tr><tr>
  <td>text.txt</td>
  <td>28.66k</td>
  <td>32.37k</td>
  <td>2.32k</td>
  <td>1.37</td>
  <td>26021.62k</td>
  <td>26021.62k</td>
  <td>26021.62k</td>
  <td>26021.62k</td>
  <td>31214.31k</td>
  <td>31660.13k</td>
  <td>32365.40k</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>3.86k</td>
  <td>9.53k</td>
  <td>1.27k</td>
  <td>1.37k</td>
  <td>2608.76k</td>
  <td>2608.76k</td>
  <td>2608.76k</td>
  <td>2608.76k</td>
  <td>5118.57k</td>
  <td>5693.28k</td>
  <td>6903.41k</td>
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
  <td>6.62</td>
  <td>3.46</td>
  <td>11.83</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>5.50</td>
  <td>8.33</td>
  <td>8.98</td>
  <td>9.90</td>
</tr><tr>
  <td>text.txt</td>
  <td>2.23</td>
  <td>1.31</td>
  <td>4.36</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>2.76</td>
  <td>2.97</td>
  <td>3.52</td>
</tr><tr>
  <td>doggy.jpg</td>
  <td>16.98</td>
  <td>8.07</td>
  <td>35.37</td>
  <td>14.24</td>
  <td>14.24</td>
  <td>14.24</td>
  <td>14.24</td>
  <td>19.52</td>
  <td>20.60</td>
  <td>23.12</td>
</tr></table>