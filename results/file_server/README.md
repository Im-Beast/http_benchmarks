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
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>11.67k</td>
    <td>13.69k</td>
    <td>2.07k</td>
    <td>61.65 MiB</td>
    <td>5.92</td>
    <td>3.96</td>
    <td>16.70</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>85.50%</td>
    <td>86.40%</td>
    <td>9.97k</td>
    <td>12.69k</td>
    <td>1.71k</td>
    <td>52.85 MiB</td>
    <td>6.85</td>
    <td>3.91</td>
    <td>14.89</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>40.95%</td>
    <td>40.11%</td>
    <td>4.78k</td>
    <td>30.65k</td>
    <td>2.69k</td>
    <td>25.12 MiB</td>
    <td>14.76</td>
    <td>8.11</td>
    <td>26.47</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>40.45%</td>
    <td>40.63%</td>
    <td>4.72k</td>
    <td>19.76k</td>
    <td>2.21k</td>
    <td>24.80 MiB</td>
    <td>14.58</td>
    <td>8.69</td>
    <td>27.17</td>
</tr>
<tr>
    <td><a href="./deno_serve_custom.ts.md">Deno.serve + custom response</a></td>
    <td>33.81%</td>
    <td>14.39%</td>
    <td>3.94k</td>
    <td>514.47k</td>
    <td>28.35k</td>
    <td>8.22 MiB</td>
    <td>41.14</td>
    <td>14.27</td>
    <td>46.01</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve + serveDir from std</a></td>
    <td>18.23%</td>
    <td>14.29%</td>
    <td>2.13k</td>
    <td>344.12k</td>
    <td>12.75k</td>
    <td>8.18 MiB</td>
    <td>41.45</td>
    <td>12.26</td>
    <td>52.12</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>17.26%</td>
    <td>14.32%</td>
    <td>2.01k</td>
    <td>271.78k</td>
    <td>10.01k</td>
    <td>5.12 MiB</td>
    <td>41.37</td>
    <td>10.69</td>
    <td>47.03</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve serveDir</a></td>
    <td>15.45%</td>
    <td>14.22%</td>
    <td>1.80k</td>
    <td>181.48k</td>
    <td>6.68k</td>
    <td>5.10 MiB</td>
    <td>41.65</td>
    <td>13.29</td>
    <td>67.67</td>
</tr>
</table>