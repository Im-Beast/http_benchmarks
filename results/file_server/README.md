# File server
## Benchmarks groupped by headers they respond with

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
    <td>1.64k</td>
    <td>8.45k</td>
    <td>1.01k</td>
    <td>8.17 MiB</td>
    <td>41.33</td>
    <td>3.48</td>
    <td>50.39</td>
</tr>
</table>

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
    <td>5.66k</td>
    <td>44.70k</td>
    <td>3.82k</td>
    <td>28.45 MiB</td>
    <td>11.88</td>
    <td>5.73</td>
    <td>17.27</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>85.55%</td>
    <td>90.12%</td>
    <td>4.84k</td>
    <td>8.18k</td>
    <td>1.40k</td>
    <td>25.64 MiB</td>
    <td>13.18</td>
    <td>6.38</td>
    <td>20.80</td>
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
    <td>15.26k</td>
    <td>16.53k</td>
    <td>939.26</td>
    <td>80.78 MiB</td>
    <td>4.18</td>
    <td>1.56</td>
    <td>6.57</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>88.02%</td>
    <td>87.93%</td>
    <td>13.43k</td>
    <td>15.69k</td>
    <td>1.69k</td>
    <td>71.06 MiB</td>
    <td>4.75</td>
    <td>1.69</td>
    <td>8.69</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>66.08%</td>
    <td>65.98%</td>
    <td>10.09k</td>
    <td>12.55k</td>
    <td>1.47k</td>
    <td>53.36 MiB</td>
    <td>6.33</td>
    <td>3.14</td>
    <td>11.72</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>21.14%</td>
    <td>10.16%</td>
    <td>3.23k</td>
    <td>299.44k</td>
    <td>18.23k</td>
    <td>8.22 MiB</td>
    <td>41.10</td>
    <td>0.59</td>
    <td>48.70</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>19.77%</td>
    <td>10.15%</td>
    <td>3.02k</td>
    <td>562.05k</td>
    <td>23.65k</td>
    <td>8.21 MiB</td>
    <td>41.15</td>
    <td>5.78</td>
    <td>45.58</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>11.74%</td>
    <td>10.12%</td>
    <td>1.79k</td>
    <td>124.53k</td>
    <td>4.65k</td>
    <td>5.12 MiB</td>
    <td>41.29</td>
    <td>0.74</td>
    <td>46.24</td>
</tr>
</table>