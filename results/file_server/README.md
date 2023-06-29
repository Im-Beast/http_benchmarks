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
    <td>92.04%</td>
    <td>20.45k</td>
    <td>23.57k</td>
    <td>1.83k</td>
    <td>616.14 MiB</td>
    <td>11.36</td>
    <td>2.67</td>
    <td>24.68</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>73.33%</td>
    <td>25.29%</td>
    <td>15.00k</td>
    <td>25148.52k</td>
    <td>577.73k</td>
    <td>283.27 MiB</td>
    <td>41.36</td>
    <td>4.97</td>
    <td>47.79</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>53.69%</td>
    <td>100.00%</td>
    <td>10.98k</td>
    <td>16.09k</td>
    <td>2.01k</td>
    <td>725.65 MiB</td>
    <td>10.46</td>
    <td>5.07</td>
    <td>25.43</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>20.87%</td>
    <td>37.42%</td>
    <td>4.27k</td>
    <td>11.01k</td>
    <td>1.28k</td>
    <td>262.23 MiB</td>
    <td>27.95</td>
    <td>6.50</td>
    <td>160.94</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>19.20%</td>
    <td>37.93%</td>
    <td>3.93k</td>
    <td>13.45k</td>
    <td>1.32k</td>
    <td>271.33 MiB</td>
    <td>27.58</td>
    <td>6.18</td>
    <td>156.12</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve serveDir</a></td>
    <td>9.08%</td>
    <td>24.59%</td>
    <td>1.86k</td>
    <td>193.63k</td>
    <td>5.89k</td>
    <td>269.85 MiB</td>
    <td>42.52</td>
    <td>0.33</td>
    <td>55.29</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve + serveDir from std</a></td>
    <td>7.99%</td>
    <td>25.97%</td>
    <td>1.63k</td>
    <td>24.79k</td>
    <td>1.11k</td>
    <td>301.00 MiB</td>
    <td>40.27</td>
    <td>0.30</td>
    <td>51.85</td>
</tr>
</table>