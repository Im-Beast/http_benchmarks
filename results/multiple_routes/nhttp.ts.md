# Name: NHttp 
  ### Description: NHttp with `flash` option set to `true`
  ### Version: 1.3.0
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
    <td>145.07k</td>
    <td>149.61k</td>
    <td>8.09k</td>
    <td>2.53 MiB</td>
    <td>0.44</td>
    <td>0.35</td>
    <td>1.21</td>
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
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>149614.99k</td>
  <td>149614.99k</td>
  <td>149614.99k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.47</td>
  <td>0.59</td>
  <td>0.69</td>
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
  <td>145.07k</td>
  <td>149.61k</td>
  <td>8.09k</td>
  <td>2.53</td>
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>126268.76k</td>
  <td>149614.99k</td>
  <td>149614.99k</td>
  <td>149614.99k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>154.12k</td>
  <td>160.77k</td>
  <td>8.05k</td>
  <td>1.62</td>
  <td>138810.66k</td>
  <td>138810.66k</td>
  <td>138810.66k</td>
  <td>138810.66k</td>
  <td>160766.44k</td>
  <td>160766.44k</td>
  <td>160766.44k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>154.46k</td>
  <td>163.65k</td>
  <td>9.41k</td>
  <td>0.30</td>
  <td>140409.70k</td>
  <td>140409.70k</td>
  <td>140409.70k</td>
  <td>140409.70k</td>
  <td>163652.25k</td>
  <td>163652.25k</td>
  <td>163652.25k</td>
</tr><tr>
  <td>/count</td>
  <td>155.78k</td>
  <td>162.62k</td>
  <td>8.76k</td>
  <td>0.15</td>
  <td>141469.02k</td>
  <td>141469.02k</td>
  <td>141469.02k</td>
  <td>141469.02k</td>
  <td>162624.10k</td>
  <td>162624.10k</td>
  <td>162624.10k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>156.85k</td>
  <td>163.50k</td>
  <td>9.15k</td>
  <td>0.30</td>
  <td>140470.12k</td>
  <td>140470.12k</td>
  <td>140470.12k</td>
  <td>140470.12k</td>
  <td>163499.26k</td>
  <td>163499.26k</td>
  <td>163499.26k</td>
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
  <td>0.44</td>
  <td>0.35</td>
  <td>1.21</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.39</td>
  <td>0.47</td>
  <td>0.59</td>
  <td>0.69</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.41</td>
  <td>0.33</td>
  <td>1.18</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.57</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.41</td>
  <td>0.32</td>
  <td>1.12</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.37</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.55</td>
</tr><tr>
  <td>/count</td>
  <td>0.40</td>
  <td>0.33</td>
  <td>1.14</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.44</td>
  <td>0.49</td>
  <td>0.56</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.40</td>
  <td>0.32</td>
  <td>1.10</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.36</td>
  <td>0.43</td>
  <td>0.48</td>
  <td>0.55</td>
</tr></table>