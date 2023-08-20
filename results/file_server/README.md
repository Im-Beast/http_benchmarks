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
    <td>99.80%</td>
    <td>4.62k</td>
    <td>10.24k</td>
    <td>1.46k</td>
    <td>24.22 MiB</td>
    <td>13.95</td>
    <td>8.67</td>
    <td>18.19</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>99.20%</td>
    <td>100.00%</td>
    <td>4.59k</td>
    <td>7.28k</td>
    <td>1.32k</td>
    <td>24.24 MiB</td>
    <td>13.93</td>
    <td>8.35</td>
    <td>22.01</td>
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
    <td>2.03k</td>
    <td>134.43k</td>
    <td>5.46k</td>
    <td>8.21 MiB</td>
    <td>41.12</td>
    <td>5.99</td>
    <td>52.48</td>
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
    <td>13.81k</td>
    <td>15.20k</td>
    <td>1.01k</td>
    <td>73.19 MiB</td>
    <td>4.61</td>
    <td>1.39</td>
    <td>7.39</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>92.33%</td>
    <td>92.23%</td>
    <td>12.76k</td>
    <td>14.84k</td>
    <td>1.37k</td>
    <td>67.54 MiB</td>
    <td>5.00</td>
    <td>1.70</td>
    <td>8.00</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>72.59%</td>
    <td>72.17%</td>
    <td>10.03k</td>
    <td>14.23k</td>
    <td>1.44k</td>
    <td>52.87 MiB</td>
    <td>6.39</td>
    <td>3.55</td>
    <td>10.88</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>16.64%</td>
    <td>11.26%</td>
    <td>2.30k</td>
    <td>176.66k</td>
    <td>7.68k</td>
    <td>8.25 MiB</td>
    <td>40.95</td>
    <td>8.19</td>
    <td>44.00</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>15.19%</td>
    <td>11.24%</td>
    <td>2.10k</td>
    <td>164.65k</td>
    <td>7.09k</td>
    <td>8.23 MiB</td>
    <td>41.01</td>
    <td>6.71</td>
    <td>45.97</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>14.67%</td>
    <td>11.21%</td>
    <td>2.03k</td>
    <td>145.03k</td>
    <td>7.36k</td>
    <td>5.15 MiB</td>
    <td>41.13</td>
    <td>9.89</td>
    <td>48.22</td>
</tr>
</table>