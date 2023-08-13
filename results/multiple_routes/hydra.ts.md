# Multiple routes
## Name: Hydra 

### Version: 0.1.1
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
    <td>63.47k</td>
    <td>69.73k</td>
    <td>8.46k</td>
    <td>0.67 MiB</td>
    <td>1.00</td>
    <td>0.51</td>
    <td>2.14</td>
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
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>69455.29k</td>
  <td>69730.48k</td>
  <td>69730.48k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.23</td>
  <td>1.31</td>
  <td>1.56</td>
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
  <td>63.47k</td>
  <td>69.73k</td>
  <td>8.46k</td>
  <td>0.67</td>
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>49118.04k</td>
  <td>69455.29k</td>
  <td>69730.48k</td>
  <td>69730.48k</td>
</tr><tr>
  <td>/random_number</td>
  <td>54.12k</td>
  <td>68.16k</td>
  <td>6.25k</td>
  <td>0.95</td>
  <td>45594.73k</td>
  <td>45594.73k</td>
  <td>45594.73k</td>
  <td>45594.73k</td>
  <td>67324.25k</td>
  <td>68158.76k</td>
  <td>68158.76k</td>
</tr><tr>
  <td>/count</td>
  <td>63.63k</td>
  <td>72.18k</td>
  <td>7.07k</td>
  <td>0.06</td>
  <td>54637.88k</td>
  <td>54637.88k</td>
  <td>54637.88k</td>
  <td>54637.88k</td>
  <td>71735.36k</td>
  <td>72176.91k</td>
  <td>72176.91k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>64.11k</td>
  <td>72.06k</td>
  <td>7.45k</td>
  <td>0.12</td>
  <td>50016.97k</td>
  <td>50016.97k</td>
  <td>50016.97k</td>
  <td>50016.97k</td>
  <td>71189.66k</td>
  <td>72057.45k</td>
  <td>72057.45k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>60.74k</td>
  <td>72.27k</td>
  <td>8.69k</td>
  <td>0.12</td>
  <td>47777.85k</td>
  <td>47777.85k</td>
  <td>47777.85k</td>
  <td>47777.85k</td>
  <td>71195.20k</td>
  <td>72268.30k</td>
  <td>72268.30k</td>
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
  <td>1.00</td>
  <td>0.51</td>
  <td>2.14</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>0.85</td>
  <td>1.23</td>
  <td>1.31</td>
  <td>1.56</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.16</td>
  <td>0.54</td>
  <td>2.40</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>0.91</td>
  <td>1.37</td>
  <td>1.53</td>
  <td>1.77</td>
</tr><tr>
  <td>/count</td>
  <td>0.99</td>
  <td>0.39</td>
  <td>1.92</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.20</td>
  <td>1.27</td>
  <td>1.48</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.99</td>
  <td>0.24</td>
  <td>3.22</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.23</td>
  <td>1.36</td>
  <td>1.88</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.02</td>
  <td>0.18</td>
  <td>2.29</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>0.84</td>
  <td>1.29</td>
  <td>1.41</td>
  <td>1.65</td>
</tr></table>