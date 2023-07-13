# Name: Danet 
  
  ### Version: 1.8.0
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
    <td>30.07k</td>
    <td>33.77k</td>
    <td>2.71k</td>
    <td>0.53 MiB</td>
    <td>2.11</td>
    <td>0.90</td>
    <td>6.03</td>
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
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>31743.98k</td>
  <td>32939.40k</td>
  <td>33766.84k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>2.66</td>
  <td>2.88</td>
  <td>3.38</td>
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
  <td>30.07k</td>
  <td>33.77k</td>
  <td>2.71k</td>
  <td>0.53</td>
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>27429.34k</td>
  <td>31743.98k</td>
  <td>32939.40k</td>
  <td>33766.84k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>31.49k</td>
  <td>33.62k</td>
  <td>2.31k</td>
  <td>0.33</td>
  <td>29317.60k</td>
  <td>29317.60k</td>
  <td>29317.60k</td>
  <td>29317.60k</td>
  <td>33101.71k</td>
  <td>33214.66k</td>
  <td>33621.79k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>31.12k</td>
  <td>34.06k</td>
  <td>2.69k</td>
  <td>0.06</td>
  <td>28942.53k</td>
  <td>28942.53k</td>
  <td>28942.53k</td>
  <td>28942.53k</td>
  <td>32949.58k</td>
  <td>33226.28k</td>
  <td>34062.73k</td>
</tr><tr>
  <td>/count</td>
  <td>31.93k</td>
  <td>35.30k</td>
  <td>2.65k</td>
  <td>0.03</td>
  <td>29921.68k</td>
  <td>29921.68k</td>
  <td>29921.68k</td>
  <td>29921.68k</td>
  <td>33690.21k</td>
  <td>34287.33k</td>
  <td>35302.89k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>31.18k</td>
  <td>34.71k</td>
  <td>2.61k</td>
  <td>0.06</td>
  <td>28347.62k</td>
  <td>28347.62k</td>
  <td>28347.62k</td>
  <td>28347.62k</td>
  <td>33121.82k</td>
  <td>33589.76k</td>
  <td>34710.24k</td>
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
  <td>2.11</td>
  <td>0.90</td>
  <td>6.03</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>1.85</td>
  <td>2.66</td>
  <td>2.88</td>
  <td>3.38</td>
</tr><tr>
  <td>/hello_world</td>
  <td>2.02</td>
  <td>0.92</td>
  <td>5.49</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>1.74</td>
  <td>2.51</td>
  <td>2.72</td>
  <td>3.19</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.05</td>
  <td>0.86</td>
  <td>5.26</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.59</td>
  <td>2.78</td>
  <td>3.33</td>
</tr><tr>
  <td>/count</td>
  <td>2.00</td>
  <td>0.88</td>
  <td>5.51</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.47</td>
  <td>2.70</td>
  <td>3.23</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.04</td>
  <td>0.99</td>
  <td>6.24</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>1.75</td>
  <td>2.53</td>
  <td>2.75</td>
  <td>3.29</td>
</tr></table>