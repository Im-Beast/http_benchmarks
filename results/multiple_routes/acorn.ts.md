# Name: Acorn 
  
  ### Version: 0.3.0
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
    <td>5.50k</td>
    <td>41.25k</td>
    <td>4.82k</td>
    <td>0.07 MiB</td>
    <td>15.56</td>
    <td>5.78</td>
    <td>27.95</td>
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
  <td>300.10k</td>
  <td>300.10k</td>
  <td>300.10k</td>
  <td>300.10k</td>
  <td>9935.41k</td>
  <td>15007.80k</td>
  <td>24876.07k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>17.91</td>
  <td>20.72</td>
  <td>24.61</td>
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
  <td>5.50k</td>
  <td>41.25k</td>
  <td>4.82k</td>
  <td>0.07</td>
  <td>300.10k</td>
  <td>300.10k</td>
  <td>300.10k</td>
  <td>300.10k</td>
  <td>9935.41k</td>
  <td>15007.80k</td>
  <td>24876.07k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>47.37k</td>
  <td>259.74k</td>
  <td>76.02k</td>
  <td>0.02</td>
  <td>51.89k</td>
  <td>51.89k</td>
  <td>51.89k</td>
  <td>51.89k</td>
  <td>183736.11k</td>
  <td>201651.42k</td>
  <td>230259.56k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>65.42k</td>
  <td>287.23k</td>
  <td>85.42k</td>
  <td>0.00</td>
  <td>37.49k</td>
  <td>37.49k</td>
  <td>37.49k</td>
  <td>37.49k</td>
  <td>193144.84k</td>
  <td>220346.29k</td>
  <td>255788.18k</td>
</tr><tr>
  <td>/count</td>
  <td>75.22k</td>
  <td>277.26k</td>
  <td>89.10k</td>
  <td>0.00</td>
  <td>18.76k</td>
  <td>18.76k</td>
  <td>18.76k</td>
  <td>18.76k</td>
  <td>204268.39k</td>
  <td>226501.85k</td>
  <td>255354.94k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>72.35k</td>
  <td>303.77k</td>
  <td>89.31k</td>
  <td>0.00</td>
  <td>22.82k</td>
  <td>22.82k</td>
  <td>22.82k</td>
  <td>22.82k</td>
  <td>206244.45k</td>
  <td>227257.08k</td>
  <td>260685.70k</td>
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
  <td>15.56</td>
  <td>5.78</td>
  <td>27.95</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>12.79</td>
  <td>17.91</td>
  <td>20.72</td>
  <td>24.61</td>
</tr><tr>
  <td>/hello_world</td>
  <td>32.09</td>
  <td>13.22</td>
  <td>57.27</td>
  <td>27.59</td>
  <td>27.59</td>
  <td>27.59</td>
  <td>27.59</td>
  <td>36.29</td>
  <td>43.48</td>
  <td>51.05</td>
</tr><tr>
  <td>/plus_1</td>
  <td>50.81</td>
  <td>20.07</td>
  <td>86.47</td>
  <td>45.30</td>
  <td>45.30</td>
  <td>45.30</td>
  <td>45.30</td>
  <td>55.23</td>
  <td>62.61</td>
  <td>76.85</td>
</tr><tr>
  <td>/count</td>
  <td>110.28</td>
  <td>43.36</td>
  <td>195.31</td>
  <td>97.61</td>
  <td>97.61</td>
  <td>97.61</td>
  <td>97.61</td>
  <td>122.67</td>
  <td>139.11</td>
  <td>167.34</td>
</tr><tr>
  <td>/minus_1</td>
  <td>91.46</td>
  <td>26.80</td>
  <td>158.18</td>
  <td>77.43</td>
  <td>77.43</td>
  <td>77.43</td>
  <td>77.43</td>
  <td>101.90</td>
  <td>112.52</td>
  <td>138.25</td>
</tr></table>