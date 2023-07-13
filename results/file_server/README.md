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
    <td>15.44k</td>
    <td>16.84k</td>
    <td>930.95</td>
    <td>81.71 MiB</td>
    <td>4.13</td>
    <td>1.50</td>
    <td>6.36</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>91.52%</td>
    <td>91.46%</td>
    <td>14.13k</td>
    <td>16.03k</td>
    <td>1.49k</td>
    <td>74.75 MiB</td>
    <td>4.52</td>
    <td>1.54</td>
    <td>7.56</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>86.22%</td>
    <td>86.14%</td>
    <td>13.31k</td>
    <td>15.06k</td>
    <td>1.48k</td>
    <td>70.40 MiB</td>
    <td>4.79</td>
    <td>1.51</td>
    <td>7.79</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>71.33%</td>
    <td>71.39%</td>
    <td>11.01k</td>
    <td>13.88k</td>
    <td>1.52k</td>
    <td>58.39 MiB</td>
    <td>5.79</td>
    <td>2.95</td>
    <td>10.31</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>37.74%</td>
    <td>36.86%</td>
    <td>5.83k</td>
    <td>13.36k</td>
    <td>2.57k</td>
    <td>30.16 MiB</td>
    <td>11.21</td>
    <td>4.94</td>
    <td>17.09</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>32.76%</td>
    <td>32.67%</td>
    <td>5.06k</td>
    <td>8.27k</td>
    <td>1.22k</td>
    <td>26.73 MiB</td>
    <td>12.64</td>
    <td>6.99</td>
    <td>20.44</td>
</tr>
<tr>
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>14.44%</td>
    <td>9.99%</td>
    <td>2.23k</td>
    <td>213.73k</td>
    <td>10.95k</td>
    <td>8.17 MiB</td>
    <td>41.35</td>
    <td>8.36</td>
    <td>48.16</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>13.88%</td>
    <td>10.02%</td>
    <td>2.14k</td>
    <td>227.84k</td>
    <td>8.97k</td>
    <td>5.13 MiB</td>
    <td>41.24</td>
    <td>9.47</td>
    <td>46.04</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>13.60%</td>
    <td>10.06%</td>
    <td>2.10k</td>
    <td>27.82k</td>
    <td>2.60k</td>
    <td>8.22 MiB</td>
    <td>41.08</td>
    <td>5.58</td>
    <td>44.90</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve + serveDir</a></td>
    <td>10.61%</td>
    <td>9.97%</td>
    <td>1.64k</td>
    <td>6.84k</td>
    <td>863.65</td>
    <td>5.11 MiB</td>
    <td>41.41</td>
    <td>11.41</td>
    <td>61.35</td>
</tr>
</table>