# Name: NHttp 
  
  ### Version: 1.2.23
  ### Deno version: 1.35.0

## Summary
<table>
<tr>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr>
<tr>
    <td>82.27k</td>
    <td>92.14k</td>
    <td>8.82k</td>
    <td>1.44 MiB</td>
    <td>0.77</td>
    <td>0.56</td>
    <td>3.67</td>
</tr>
</table>

## Percentiles

<table>
<tr>
  <td align="center">Mesaure</td>
  <td align="center">p10</td>
  <td align="center">p25</td>
  <td align="center">p50</td>
  <td align="center">p75</td>
  <td align="center">p90</td>
  <td align="center">p95</td>
  <td align="center">p99</td>
</tr>
<tr>
  <td>Throughput (rps)</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>89798.75k</td>
  <td>92141.68k</td>
  <td>92141.68k</td>
</tr>
<tr>
  <td>Latency (ms)</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.99</td>
  <td>1.20</td>
  <td>1.79</td>
</tr>
</table>

## Individual test steps

### Throughput

<table>
<tr>
  <td align="center" rowspan="2">Step</td>
  <td align="center" rowspan="2">Mean</td>
  <td align="center" rowspan="2">Max</td>
  <td align="center" rowspan="2">Standard deviation</td>
  <td align="center" rowspan="2">Size per second</td>
  <td align="center" colspan="7">Percentiles</td>
</tr>
<tr>
  <!-- still Step -->
  <!-- still Mean -->
  <!-- still Max -->
  <!-- still Standard deviation -->
  <!-- still Size per second -->
  <td align="center">p10</td>
  <td align="center">p25</td>
  <td align="center">p50</td>
  <td align="center">p75</td>
  <td align="center">p90</td>
  <td align="center">p95</td>
  <td align="center">p99</td>
</tr>
<tr>
  <td>/random_number</td>
  <td>82.27k</td>
  <td>92.14k</td>
  <td>8.82k</td>
  <td>1.44</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>66217.76k</td>
  <td>89798.75k</td>
  <td>92141.68k</td>
  <td>92141.68k</td>
</tr><tr>
  <td>/hello_world</td>
  <td>87.83k</td>
  <td>99.91k</td>
  <td>11.88k</td>
  <td>0.93</td>
  <td>77900.68k</td>
  <td>77900.68k</td>
  <td>77900.68k</td>
  <td>77900.68k</td>
  <td>99414.48k</td>
  <td>99911.03k</td>
  <td>99911.03k</td>
</tr><tr>
  <td>/plus_1</td>
  <td>86.79k</td>
  <td>97.68k</td>
  <td>8.92k</td>
  <td>0.17</td>
  <td>78018.41k</td>
  <td>78018.41k</td>
  <td>78018.41k</td>
  <td>78018.41k</td>
  <td>94602.22k</td>
  <td>97682.15k</td>
  <td>97682.15k</td>
</tr><tr>
  <td>/count</td>
  <td>88.59k</td>
  <td>100.85k</td>
  <td>10.64k</td>
  <td>0.09</td>
  <td>74203.60k</td>
  <td>74203.60k</td>
  <td>74203.60k</td>
  <td>74203.60k</td>
  <td>100458.26k</td>
  <td>100845.54k</td>
  <td>100845.54k</td>
</tr><tr>
  <td>/minus_1</td>
  <td>85.83k</td>
  <td>99.38k</td>
  <td>8.97k</td>
  <td>0.16</td>
  <td>73400.03k</td>
  <td>73400.03k</td>
  <td>73400.03k</td>
  <td>73400.03k</td>
  <td>94686.25k</td>
  <td>99381.95k</td>
  <td>99381.95k</td>
</tr></table>

### Latency

<table>
<tr>
  <td align="center" rowspan="2">Step</td>
  <td align="center" rowspan="2">Avg</td>
  <td align="center" rowspan="2">Min</td>
  <td align="center" rowspan="2">Max</td>
  <td align="center" colspan="7">Percentiles</td>
</tr>
<tr>
  <!-- still Avg -->
  <!-- still Min -->
  <!-- still Max -->
  <td>p10</td>
  <td>p25</td>
  <td>p50</td>
  <td>p75</td>
  <td>p90</td>
  <td>p95</td>
  <td>p99</td>
</tr>
<tr>
  <td>/random_number</td>
  <td>0.77</td>
  <td>0.56</td>
  <td>3.67</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.62</td>
  <td>0.99</td>
  <td>1.20</td>
  <td>1.79</td>
</tr><tr>
  <td>/hello_world</td>
  <td>0.72</td>
  <td>0.54</td>
  <td>3.03</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.59</td>
  <td>0.91</td>
  <td>1.15</td>
  <td>1.80</td>
</tr><tr>
  <td>/plus_1</td>
  <td>0.73</td>
  <td>0.53</td>
  <td>3.13</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.94</td>
  <td>1.14</td>
  <td>2.09</td>
</tr><tr>
  <td>/count</td>
  <td>0.70</td>
  <td>0.52</td>
  <td>2.70</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.58</td>
  <td>0.87</td>
  <td>1.11</td>
  <td>1.58</td>
</tr><tr>
  <td>/minus_1</td>
  <td>0.74</td>
  <td>0.55</td>
  <td>3.40</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.60</td>
  <td>0.93</td>
  <td>1.14</td>
  <td>1.71</td>
</tr></table>