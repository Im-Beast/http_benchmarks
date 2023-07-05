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
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>13.31k</td>
    <td>15.32k</td>
    <td>1.58k</td>
    <td>70.42 MiB</td>
    <td>4.79</td>
    <td>1.58</td>
    <td>8.45</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>92.44%</td>
    <td>92.31%</td>
    <td>12.30k</td>
    <td>14.77k</td>
    <td>1.50k</td>
    <td>65.05 MiB</td>
    <td>5.19</td>
    <td>1.56</td>
    <td>9.15</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>79.36%</td>
    <td>79.35%</td>
    <td>10.56k</td>
    <td>13.31k</td>
    <td>1.64k</td>
    <td>55.95 MiB</td>
    <td>6.04</td>
    <td>2.94</td>
    <td>11.16</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>40.07%</td>
    <td>37.40%</td>
    <td>5.33k</td>
    <td>13.46k</td>
    <td>2.74k</td>
    <td>26.39 MiB</td>
    <td>12.81</td>
    <td>4.60</td>
    <td>20.01</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>36.28%</td>
    <td>36.01%</td>
    <td>4.83k</td>
    <td>10.84k</td>
    <td>1.58k</td>
    <td>25.40 MiB</td>
    <td>13.31</td>
    <td>6.91</td>
    <td>20.68</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>19.75%</td>
    <td>11.65%</td>
    <td>2.63k</td>
    <td>441.70k</td>
    <td>19.35k</td>
    <td>8.22 MiB</td>
    <td>41.11</td>
    <td>2.30</td>
    <td>44.96</td>
</tr>
<tr>
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>15.07%</td>
    <td>11.58%</td>
    <td>2.00k</td>
    <td>184.88k</td>
    <td>8.68k</td>
    <td>8.16 MiB</td>
    <td>41.36</td>
    <td>4.92</td>
    <td>50.03</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>15.01%</td>
    <td>11.61%</td>
    <td>2.00k</td>
    <td>208.12k</td>
    <td>7.73k</td>
    <td>5.12 MiB</td>
    <td>41.28</td>
    <td>10.33</td>
    <td>46.05</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve + serveDir</a></td>
    <td>11.99%</td>
    <td>11.56%</td>
    <td>1.60k</td>
    <td>5.75k</td>
    <td>679.62</td>
    <td>5.10 MiB</td>
    <td>41.46</td>
    <td>2.42</td>
    <td>62.98</td>
</tr>
</table>