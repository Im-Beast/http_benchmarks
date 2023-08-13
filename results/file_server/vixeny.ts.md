# File server
## Name: Vixeny 

### Version: 0.0.682
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
    <td>10.78k</td>
    <td>13.44k</td>
    <td>1.52k</td>
    <td>57.00 MiB</td>
    <td>5.92</td>
    <td>2.19</td>
    <td>11.95</td>
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
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>12244.27k</td>
  <td>12469.18k</td>
  <td>12736.03k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>7.64</td>
  <td>8.37</td>
  <td>9.53</td>
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
  <td>10.78k</td>
  <td>13.44k</td>
  <td>1.52k</td>
  <td>57.00</td>
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>8468.83k</td>
  <td>12244.27k</td>
  <td>12469.18k</td>
  <td>12736.03k</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>3.23k</td>
  <td>4.73k</td>
  <td>641.52</td>
  <td>1.18k</td>
  <td>2302.47k</td>
  <td>2302.47k</td>
  <td>2302.47k</td>
  <td>2302.47k</td>
  <td>3973.37k</td>
  <td>4146.13k</td>
  <td>4478.97k</td>
</tr><tr>
  <td>text.txt</td>
  <td>40.35k</td>
  <td>47.04k</td>
  <td>4.70k</td>
  <td>1.23</td>
  <td>32003.46k</td>
  <td>32003.46k</td>
  <td>32003.46k</td>
  <td>32003.46k</td>
  <td>46500.30k</td>
  <td>47038.27k</td>
  <td>47043.20k</td>
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
  <td>5.92</td>
  <td>2.19</td>
  <td>11.95</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>4.94</td>
  <td>7.64</td>
  <td>8.37</td>
  <td>9.53</td>
</tr><tr>
  <td>doggy.jpeg</td>
  <td>19.74</td>
  <td>2.65</td>
  <td>37.01</td>
  <td>16.70</td>
  <td>16.70</td>
  <td>16.70</td>
  <td>16.70</td>
  <td>23.72</td>
  <td>25.47</td>
  <td>27.88</td>
</tr><tr>
  <td>text.txt</td>
  <td>1.57</td>
  <td>1.09</td>
  <td>3.64</td>
  <td>1.32</td>
  <td>1.32</td>
  <td>1.32</td>
  <td>1.32</td>
  <td>1.85</td>
  <td>2.08</td>
  <td>2.80</td>
</tr></table>