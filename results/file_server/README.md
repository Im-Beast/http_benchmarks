<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Baseline</td>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <!-- still Name -->
    <td align="center">Throughput</td>
    <td align="center">Latency</td>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr><tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>100.00%</td>
    <td>94.05%</td>
    <td>21.58k</td>
    <td>24.08k</td>
    <td>1.95k</td>
    <td>698.48 MiB</td>
    <td>10.13</td>
    <td>2.98</td>
    <td>14.95</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>58.70%</td>
    <td>100.00%</td>
    <td>12.67k</td>
    <td>17.54k</td>
    <td>1.37k</td>
    <td>792.58 MiB</td>
    <td>9.53</td>
    <td>4.67</td>
    <td>24.51</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>21.06%</td>
    <td>37.25%</td>
    <td>4.54k</td>
    <td>11.20k</td>
    <td>1.49k</td>
    <td>289.31 MiB</td>
    <td>25.58</td>
    <td>5.69</td>
    <td>146.53</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>20.39%</td>
    <td>38.08%</td>
    <td>4.40k</td>
    <td>11.81k</td>
    <td>1.24k</td>
    <td>298.86 MiB</td>
    <td>25.03</td>
    <td>6.47</td>
    <td>139.42</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve serveDir</a></td>
    <td>9.45%</td>
    <td>22.43%</td>
    <td>2.04k</td>
    <td>189.12k</td>
    <td>6.59k</td>
    <td>269.43 MiB</td>
    <td>42.49</td>
    <td>0.41</td>
    <td>55.54</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve + serveDir from std</a></td>
    <td>8.36%</td>
    <td>23.54%</td>
    <td>1.80k</td>
    <td>77.42k</td>
    <td>3.31k</td>
    <td>297.15 MiB</td>
    <td>40.48</td>
    <td>1.18</td>
    <td>55.50</td>
</tr>
</table>