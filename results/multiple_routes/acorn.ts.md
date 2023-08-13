# Multiple routes
## Name: Acorn 

### Version: 0.4.0
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
    <td>4.77k</td>
    <td>16.55k</td>
    <td>2.81k</td>
    <td>0.04 MiB</td>
    <td>16.33</td>
    <td>6.83</td>
    <td>31.79</td>
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
  <td>618.41k</td>
  <td>618.41k</td>
  <td>618.41k</td>
  <td>618.41k</td>
  <td>6625.08k</td>
  <td>10995.64k</td>
  <td>14996.22k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>20.14</td>
  <td>21.49</td>
  <td>24.90</td>
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
  <td>4.77k</td>
  <td>16.55k</td>
  <td>2.81k</td>
  <td>0.04</td>
  <td>618.41k</td>
  <td>618.41k</td>
  <td>618.41k</td>
  <td>618.41k</td>
  <td>6625.08k</td>
  <td>10995.64k</td>
  <td>14996.22k</td>
</tr><tr>
  <td>/random_number</td>
  <td>6.30k</td>
  <td>174.61k</td>
  <td>17.51k</td>
  <td>0.04</td>
  <td>65.38k</td>
  <td>65.38k</td>
  <td>65.38k</td>
  <td>65.38k</td>
  <td>8654.80k</td>
  <td>17410.53k</td>
  <td>99502.49k</td>
</tr><tr>
  <td>/count</td>
  <td>17.82k</td>
  <td>162.44k</td>
  <td>38.36k</td>
  <td>0.00</td>
  <td>47.01k</td>
  <td>47.01k</td>
  <td>47.01k</td>
  <td>47.01k</td>
  <td>99044.22k</td>
  <td>119998.91k</td>
  <td>143796.22k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>38.74k</td>
  <td>161.10k</td>
  <td>51.66k</td>
  <td>0.00</td>
  <td>42.94k</td>
  <td>42.94k</td>
  <td>42.94k</td>
  <td>42.94k</td>
  <td>116218.26k</td>
  <td>125754.53k</td>
  <td>145077.95k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>39.33k</td>
  <td>220.29k</td>
  <td>52.79k</td>
  <td>0.00</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>32.08k</td>
  <td>116686.11k</td>
  <td>129113.80k</td>
  <td>144536.08k</td>
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
  <td>16.33</td>
  <td>6.83</td>
  <td>31.79</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>13.04</td>
  <td>20.14</td>
  <td>21.49</td>
  <td>24.90</td>
</tr><tr>
  <td>/random_number</td>
  <td>30.43</td>
  <td>17.50</td>
  <td>50.74</td>
  <td>25.61</td>
  <td>25.61</td>
  <td>25.61</td>
  <td>25.61</td>
  <td>35.40</td>
  <td>37.46</td>
  <td>47.56</td>
</tr><tr>
  <td>/count</td>
  <td>45.06</td>
  <td>23.98</td>
  <td>79.05</td>
  <td>38.63</td>
  <td>38.63</td>
  <td>38.63</td>
  <td>38.63</td>
  <td>51.26</td>
  <td>56.01</td>
  <td>68.75</td>
</tr><tr>
  <td>/plus_1</td>
  <td>60.80</td>
  <td>31.67</td>
  <td>101.81</td>
  <td>53.24</td>
  <td>53.24</td>
  <td>53.24</td>
  <td>53.24</td>
  <td>66.79</td>
  <td>70.80</td>
  <td>94.19</td>
</tr><tr>
  <td>/minus_1</td>
  <td>78.31</td>
  <td>43.34</td>
  <td>131.07</td>
  <td>69.16</td>
  <td>69.16</td>
  <td>69.16</td>
  <td>69.16</td>
  <td>85.10</td>
  <td>94.09</td>
  <td>119.68</td>
</tr></table>