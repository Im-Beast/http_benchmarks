# File server
## Benchmarks groupped by headers they respond with

### `accept-ranges`,`cache-control`,`content-type`,`etag`,`last-modified`,`vary`


<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
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
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>3.77k</td>
    <td>8.98k</td>
    <td>1.34k</td>
    <td>19.83 MiB</td>
    <td>17.04</td>
    <td>7.48</td>
    <td>25.44</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>99.67%</td>
    <td>99.23%</td>
    <td>3.76k</td>
    <td>13.93k</td>
    <td>1.51k</td>
    <td>19.68 MiB</td>
    <td>17.17</td>
    <td>7.35</td>
    <td>25.84</td>
</tr>
</table>

### `accept-ranges`,`content-type`,`etag`,`last-modified`,`server`,`vary`


<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
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
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>1.60k</td>
    <td>6.14k</td>
    <td>953.28</td>
    <td>8.13 MiB</td>
    <td>41.50</td>
    <td>4.12</td>
    <td>58.60</td>
</tr>
</table>

### `content-type`,`vary`


<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
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
    <td><a href="./hydra.ts.md">Hydra</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>12.18k</td>
    <td>14.60k</td>
    <td>1.24k</td>
    <td>64.47 MiB</td>
    <td>5.23</td>
    <td>1.57</td>
    <td>9.35</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>88.46%</td>
    <td>88.36%</td>
    <td>10.78k</td>
    <td>13.44k</td>
    <td>1.52k</td>
    <td>57.00 MiB</td>
    <td>5.92</td>
    <td>2.19</td>
    <td>11.95</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>68.31%</td>
    <td>68.36%</td>
    <td>8.32k</td>
    <td>11.87k</td>
    <td>1.60k</td>
    <td>44.11 MiB</td>
    <td>7.65</td>
    <td>4.23</td>
    <td>15.85</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>14.86%</td>
    <td>12.71%</td>
    <td>1.81k</td>
    <td>104.51k</td>
    <td>4.05k</td>
    <td>8.21 MiB</td>
    <td>41.17</td>
    <td>4.30</td>
    <td>47.23</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>14.47%</td>
    <td>12.67%</td>
    <td>1.76k</td>
    <td>44.61k</td>
    <td>1.95k</td>
    <td>8.17 MiB</td>
    <td>41.30</td>
    <td>9.17</td>
    <td>47.93</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>13.36%</td>
    <td>12.63%</td>
    <td>1.63k</td>
    <td>6.06k</td>
    <td>888.09</td>
    <td>5.11 MiB</td>
    <td>41.42</td>
    <td>9.35</td>
    <td>50.09</td>
</tr>
</table>