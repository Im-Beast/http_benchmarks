# Name: NHttp 
  
  ### Version: 1.2.22
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
    <td>84.44k</td>
    <td>101.89k</td>
    <td>18.09k</td>
    <td>1.38 MiB</td>
    <td>0.80</td>
    <td>0.56</td>
    <td>3.51</td>
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
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>94108.35k</td>
  <td>101890.94k</td>
  <td>101890.94k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>1.11</td>
  <td>1.45</td>
  <td>2.59</td>
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
  <td>84.44k</td>
  <td>101.89k</td>
  <td>18.09k</td>
  <td>1.38</td>
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>65175.47k</td>
  <td>94108.35k</td>
  <td>101890.94k</td>
  <td>101890.94k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>86.35k</td>
  <td>98.70k</td>
  <td>9.86k</td>
  <td>0.91</td>
  <td>72000.08k</td>
  <td>72000.08k</td>
  <td>72000.08k</td>
  <td>72000.08k</td>
  <td>97215.19k</td>
  <td>98701.42k</td>
  <td>98701.42k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>85.54k</td>
  <td>99.62k</td>
  <td>10.32k</td>
  <td>0.16</td>
  <td>72083.78k</td>
  <td>72083.78k</td>
  <td>72083.78k</td>
  <td>72083.78k</td>
  <td>94717.85k</td>
  <td>99615.63k</td>
  <td>99615.63k</td>
</tr><tr>
  <td>/count</td>
  <td>85.55k</td>
  <td>102.39k</td>
  <td>11.09k</td>
  <td>0.08</td>
  <td>75069.07k</td>
  <td>75069.07k</td>
  <td>75069.07k</td>
  <td>75069.07k</td>
  <td>96385.29k</td>
  <td>102385.73k</td>
  <td>102385.73k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>84.73k</td>
  <td>99.21k</td>
  <td>12.69k</td>
  <td>0.16</td>
  <td>70714.31k</td>
  <td>70714.31k</td>
  <td>70714.31k</td>
  <td>70714.31k</td>
  <td>96401.26k</td>
  <td>99208.10k</td>
  <td>99208.10k</td>
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
  <td>0.80</td>
  <td>0.56</td>
  <td>3.51</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>0.63</td>
  <td>1.11</td>
  <td>1.45</td>
  <td>2.59</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.73</td>
  <td>0.52</td>
  <td>2.67</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.95</td>
  <td>1.21</td>
  <td>1.80</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.74</td>
  <td>0.53</td>
  <td>2.99</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>1.03</td>
  <td>1.26</td>
  <td>2.17</td>
</tr><tr>
  <td>/count</td>
  <td>0.74</td>
  <td>0.51</td>
  <td>3.35</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.99</td>
  <td>1.32</td>
  <td>2.09</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.75</td>
  <td>0.54</td>
  <td>3.62</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>1.07</td>
  <td>1.27</td>
  <td>1.86</td>
</tr></table>