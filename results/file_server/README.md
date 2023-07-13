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
    <td>15.36k</td>
    <td>16.83k</td>
    <td>806.61</td>
    <td>81.45 MiB</td>
    <td>4.14</td>
    <td>1.48</td>
    <td>5.69</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>90.20%</td>
    <td>89.96%</td>
    <td>13.85k</td>
    <td>15.83k</td>
    <td>1.45k</td>
    <td>73.30 MiB</td>
    <td>4.61</td>
    <td>1.51</td>
    <td>7.69</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>87.14%</td>
    <td>86.92%</td>
    <td>13.38k</td>
    <td>14.80k</td>
    <td>1.31k</td>
    <td>70.82 MiB</td>
    <td>4.77</td>
    <td>1.54</td>
    <td>8.09</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>72.66%</td>
    <td>72.40%</td>
    <td>11.16k</td>
    <td>14.31k</td>
    <td>1.49k</td>
    <td>59.03 MiB</td>
    <td>5.72</td>
    <td>2.84</td>
    <td>10.11</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>37.88%</td>
    <td>36.41%</td>
    <td>5.82k</td>
    <td>15.83k</td>
    <td>3.12k</td>
    <td>29.70 MiB</td>
    <td>11.38</td>
    <td>5.28</td>
    <td>17.55</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>33.15%</td>
    <td>33.01%</td>
    <td>5.09k</td>
    <td>8.97k</td>
    <td>1.29k</td>
    <td>26.92 MiB</td>
    <td>12.55</td>
    <td>7.09</td>
    <td>19.94</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>13.78%</td>
    <td>10.09%</td>
    <td>2.12k</td>
    <td>157.68k</td>
    <td>8.05k</td>
    <td>8.22 MiB</td>
    <td>41.08</td>
    <td>6.67</td>
    <td>46.00</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>13.66%</td>
    <td>10.05%</td>
    <td>2.10k</td>
    <td>156.61k</td>
    <td>7.71k</td>
    <td>5.13 MiB</td>
    <td>41.23</td>
    <td>9.52</td>
    <td>46.00</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve + serveDir</a></td>
    <td>12.90%</td>
    <td>10.01%</td>
    <td>1.98k</td>
    <td>213.82k</td>
    <td>9.78k</td>
    <td>5.11 MiB</td>
    <td>41.41</td>
    <td>11.34</td>
    <td>61.57</td>
</tr>
<tr>
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>12.48%</td>
    <td>10.04%</td>
    <td>1.92k</td>
    <td>169.46k</td>
    <td>6.32k</td>
    <td>8.18 MiB</td>
    <td>41.27</td>
    <td>6.48</td>
    <td>47.06</td>
</tr>
</table>