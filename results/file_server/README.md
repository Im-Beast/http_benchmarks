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
    <td>94.76%</td>
    <td>20.03k</td>
    <td>24.52k</td>
    <td>3.81k</td>
    <td>700.15 MiB</td>
    <td>10.12</td>
    <td>2.35</td>
    <td>20.37</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>63.11%</td>
    <td>100.00%</td>
    <td>12.64k</td>
    <td>23.46k</td>
    <td>1.61k</td>
    <td>787.77 MiB</td>
    <td>9.59</td>
    <td>4.78</td>
    <td>21.20</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>22.68%</td>
    <td>38.71%</td>
    <td>4.54k</td>
    <td>15.47k</td>
    <td>1.50k</td>
    <td>302.02 MiB</td>
    <td>24.77</td>
    <td>6.34</td>
    <td>133.65</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>21.50%</td>
    <td>37.08%</td>
    <td>4.31k</td>
    <td>11.12k</td>
    <td>1.32k</td>
    <td>288.03 MiB</td>
    <td>25.85</td>
    <td>6.49</td>
    <td>141.49</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve serveDir</a></td>
    <td>9.32%</td>
    <td>22.56%</td>
    <td>1.87k</td>
    <td>155.30k</td>
    <td>5.33k</td>
    <td>269.56 MiB</td>
    <td>42.50</td>
    <td>7.05</td>
    <td>55.10</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>9.28%</td>
    <td>23.25%</td>
    <td>1.86k</td>
    <td>205.47k</td>
    <td>6.10k</td>
    <td>284.42 MiB</td>
    <td>41.24</td>
    <td>0.30</td>
    <td>47.61</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve + serveDir from std</a></td>
    <td>8.56%</td>
    <td>23.78%</td>
    <td>1.71k</td>
    <td>61.07k</td>
    <td>2.70k</td>
    <td>299.21 MiB</td>
    <td>40.31</td>
    <td>0.26</td>
    <td>54.77</td>
</tr>
</table>