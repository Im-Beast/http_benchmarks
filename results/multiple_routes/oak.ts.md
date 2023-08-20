# Multiple routes
## Name: Oak 

### Version: 12.6.0
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
    <td>32.43k</td>
    <td>37.52k</td>
    <td>3.99k</td>
    <td>0.34 MiB</td>
    <td>1.97</td>
    <td>1.20</td>
    <td>4.78</td>
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
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>36682.29k</td>
  <td>37514.71k</td>
  <td>37517.64k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.29</td>
  <td>2.44</td>
  <td>2.87</td>
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
  <td>32.43k</td>
  <td>37.52k</td>
  <td>3.99k</td>
  <td>0.34</td>
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>29473.04k</td>
  <td>36682.29k</td>
  <td>37514.71k</td>
  <td>37517.64k</td>
</tr><tr>
  <td>/random_number</td>
  <td>30.12k</td>
  <td>33.57k</td>
  <td>2.54k</td>
  <td>0.53</td>
  <td>27104.51k</td>
  <td>27104.51k</td>
  <td>27104.51k</td>
  <td>27104.51k</td>
  <td>32611.60k</td>
  <td>33102.03k</td>
  <td>33567.34k</td>
</tr><tr>
  <td>/count</td>
  <td>32.34k</td>
  <td>36.35k</td>
  <td>2.31k</td>
  <td>0.03</td>
  <td>30019.55k</td>
  <td>30019.55k</td>
  <td>30019.55k</td>
  <td>30019.55k</td>
  <td>34604.35k</td>
  <td>35124.35k</td>
  <td>36349.39k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>31.54k</td>
  <td>34.88k</td>
  <td>2.66k</td>
  <td>0.06</td>
  <td>28663.07k</td>
  <td>28663.07k</td>
  <td>28663.07k</td>
  <td>28663.07k</td>
  <td>33770.29k</td>
  <td>34160.72k</td>
  <td>34876.67k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>31.48k</td>
  <td>37.77k</td>
  <td>3.73k</td>
  <td>0.06</td>
  <td>27855.62k</td>
  <td>27855.62k</td>
  <td>27855.62k</td>
  <td>27855.62k</td>
  <td>34527.34k</td>
  <td>37710.30k</td>
  <td>37765.87k</td>
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
  <td>1.97</td>
  <td>1.20</td>
  <td>4.78</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>1.71</td>
  <td>2.29</td>
  <td>2.44</td>
  <td>2.87</td>
</tr><tr>
  <td>/random_number</td>
  <td>2.12</td>
  <td>1.37</td>
  <td>4.69</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>1.79</td>
  <td>2.44</td>
  <td>2.61</td>
  <td>3.23</td>
</tr><tr>
  <td>/count</td>
  <td>1.97</td>
  <td>1.31</td>
  <td>4.76</td>
  <td>1.72</td>
  <td>1.72</td>
  <td>1.72</td>
  <td>1.72</td>
  <td>2.27</td>
  <td>2.42</td>
  <td>2.89</td>
</tr><tr>
  <td>/plus_1</td>
  <td>2.01</td>
  <td>1.38</td>
  <td>4.81</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>1.83</td>
  <td>2.31</td>
  <td>2.42</td>
  <td>2.81</td>
</tr><tr>
  <td>/minus_1</td>
  <td>2.03</td>
  <td>1.23</td>
  <td>4.54</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>1.70</td>
  <td>2.34</td>
  <td>2.54</td>
  <td>3.25</td>
</tr></table>