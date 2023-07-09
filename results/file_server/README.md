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
    <td>15.78k</td>
    <td>16.99k</td>
    <td>783.75</td>
    <td>83.60 MiB</td>
    <td>4.04</td>
    <td>1.44</td>
    <td>6.41</td>
</tr>
<tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>87.73%</td>
    <td>87.61%</td>
    <td>13.84k</td>
    <td>15.77k</td>
    <td>1.51k</td>
    <td>73.26 MiB</td>
    <td>4.61</td>
    <td>1.85</td>
    <td>7.80</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>83.78%</td>
    <td>83.61%</td>
    <td>13.22k</td>
    <td>14.80k</td>
    <td>1.55k</td>
    <td>69.93 MiB</td>
    <td>4.83</td>
    <td>1.71</td>
    <td>7.88</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>69.06%</td>
    <td>68.97%</td>
    <td>10.90k</td>
    <td>13.08k</td>
    <td>1.43k</td>
    <td>57.71 MiB</td>
    <td>5.85</td>
    <td>2.94</td>
    <td>10.17</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>34.46%</td>
    <td>33.10%</td>
    <td>5.44k</td>
    <td>12.97k</td>
    <td>1.74k</td>
    <td>27.72 MiB</td>
    <td>12.19</td>
    <td>5.20</td>
    <td>15.98</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>31.72%</td>
    <td>31.60%</td>
    <td>5.00k</td>
    <td>10.07k</td>
    <td>1.41k</td>
    <td>26.47 MiB</td>
    <td>12.77</td>
    <td>6.77</td>
    <td>19.97</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>14.15%</td>
    <td>9.81%</td>
    <td>2.23k</td>
    <td>272.53k</td>
    <td>10.25k</td>
    <td>8.21 MiB</td>
    <td>41.12</td>
    <td>6.64</td>
    <td>45.79</td>
</tr>
<tr>
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>12.74%</td>
    <td>9.76%</td>
    <td>2.01k</td>
    <td>164.57k</td>
    <td>6.29k</td>
    <td>8.16 MiB</td>
    <td>41.36</td>
    <td>9.99</td>
    <td>48.90</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>10.84%</td>
    <td>9.79%</td>
    <td>1.71k</td>
    <td>11.94k</td>
    <td>1.19k</td>
    <td>5.13 MiB</td>
    <td>41.24</td>
    <td>9.36</td>
    <td>45.84</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve + serveDir</a></td>
    <td>10.25%</td>
    <td>9.73%</td>
    <td>1.62k</td>
    <td>10.45k</td>
    <td>899.49</td>
    <td>5.10 MiB</td>
    <td>41.47</td>
    <td>12.49</td>
    <td>63.97</td>
</tr>
</table>