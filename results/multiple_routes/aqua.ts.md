# Multiple routes
## Name: Aqua 

### Version: 1.3.5
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
    <td>41.86k</td>
    <td>47.20k</td>
    <td>4.07k</td>
    <td>0.44 MiB</td>
    <td>1.52</td>
    <td>0.82</td>
    <td>4.72</td>
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
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>45607.95k</td>
  <td>46853.71k</td>
  <td>47200.11k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.95</td>
  <td>2.20</td>
  <td>3.34</td>
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
  <td>41.86k</td>
  <td>47.20k</td>
  <td>4.07k</td>
  <td>0.44</td>
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>36600.94k</td>
  <td>45607.95k</td>
  <td>46853.71k</td>
  <td>47200.11k</td>
</tr><tr>
  <td>/random_number</td>
  <td>41.51k</td>
  <td>47.05k</td>
  <td>4.31k</td>
  <td>0.73</td>
  <td>37320.32k</td>
  <td>37320.32k</td>
  <td>37320.32k</td>
  <td>37320.32k</td>
  <td>45357.91k</td>
  <td>46946.71k</td>
  <td>47045.34k</td>
</tr><tr>
  <td>/count</td>
  <td>43.05k</td>
  <td>48.90k</td>
  <td>4.70k</td>
  <td>0.04</td>
  <td>38202.47k</td>
  <td>38202.47k</td>
  <td>38202.47k</td>
  <td>38202.47k</td>
  <td>47199.87k</td>
  <td>47241.89k</td>
  <td>48897.45k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>39.64k</td>
  <td>44.65k</td>
  <td>3.86k</td>
  <td>0.08</td>
  <td>33982.98k</td>
  <td>33982.98k</td>
  <td>33982.98k</td>
  <td>33982.98k</td>
  <td>43300.41k</td>
  <td>44503.57k</td>
  <td>44646.47k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>40.06k</td>
  <td>44.41k</td>
  <td>3.63k</td>
  <td>0.08</td>
  <td>33375.35k</td>
  <td>33375.35k</td>
  <td>33375.35k</td>
  <td>33375.35k</td>
  <td>43369.74k</td>
  <td>44226.94k</td>
  <td>44408.99k</td>
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
  <td>1.52</td>
  <td>0.82</td>
  <td>4.72</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.95</td>
  <td>2.20</td>
  <td>3.34</td>
</tr><tr>
  <td>/random_number</td>
  <td>1.53</td>
  <td>0.73</td>
  <td>3.94</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.24</td>
  <td>1.94</td>
  <td>2.26</td>
  <td>3.22</td>
</tr><tr>
  <td>/count</td>
  <td>1.48</td>
  <td>0.66</td>
  <td>3.86</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.20</td>
  <td>1.90</td>
  <td>2.15</td>
  <td>3.04</td>
</tr><tr>
  <td>/plus_1</td>
  <td>1.60</td>
  <td>0.91</td>
  <td>4.28</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>1.31</td>
  <td>2.04</td>
  <td>2.33</td>
  <td>3.20</td>
</tr><tr>
  <td>/minus_1</td>
  <td>1.59</td>
  <td>0.72</td>
  <td>4.27</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>1.30</td>
  <td>2.03</td>
  <td>2.37</td>
  <td>3.50</td>
</tr></table>