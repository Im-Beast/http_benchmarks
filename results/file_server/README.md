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
    <td>3.91k</td>
    <td>10.76k</td>
    <td>1.39k</td>
    <td>20.47 MiB</td>
    <td>16.52</td>
    <td>7.78</td>
    <td>27.38</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>97.78%</td>
    <td>98.39%</td>
    <td>3.82k</td>
    <td>11.30k</td>
    <td>1.40k</td>
    <td>20.13 MiB</td>
    <td>16.79</td>
    <td>7.99</td>
    <td>32.13</td>
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
    <td>5.67k</td>
    <td>847.66</td>
    <td>8.14 MiB</td>
    <td>41.45</td>
    <td>3.95</td>
    <td>51.06</td>
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
    <td>12.28k</td>
    <td>14.42k</td>
    <td>1.28k</td>
    <td>65.06 MiB</td>
    <td>5.19</td>
    <td>1.63</td>
    <td>15.20</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>84.76%</td>
    <td>84.73%</td>
    <td>10.41k</td>
    <td>12.99k</td>
    <td>1.78k</td>
    <td>55.14 MiB</td>
    <td>6.12</td>
    <td>1.97</td>
    <td>21.15</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>67.09%</td>
    <td>66.90%</td>
    <td>8.24k</td>
    <td>11.96k</td>
    <td>1.67k</td>
    <td>43.54 MiB</td>
    <td>7.75</td>
    <td>3.77</td>
    <td>25.09</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>19.58%</td>
    <td>12.59%</td>
    <td>2.41k</td>
    <td>139.92k</td>
    <td>7.54k</td>
    <td>8.20 MiB</td>
    <td>41.21</td>
    <td>2.57</td>
    <td>46.95</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>17.10%</td>
    <td>12.57%</td>
    <td>2.10k</td>
    <td>159.72k</td>
    <td>5.98k</td>
    <td>8.18 MiB</td>
    <td>41.27</td>
    <td>8.05</td>
    <td>49.10</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>13.37%</td>
    <td>12.53%</td>
    <td>1.64k</td>
    <td>4.73k</td>
    <td>901.42</td>
    <td>5.11 MiB</td>
    <td>41.38</td>
    <td>10.69</td>
    <td>49.03</td>
</tr>
</table>