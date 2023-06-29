# HTTP Benchmarks

### 🏎️ List of web frameworks for [Deno](https://deno.land/) raced against each other

Check benchmarks here:

|                      Name                      |                                   Description                                   |
| :--------------------------------------------: | :-----------------------------------------------------------------------------: |
| [Hello world](./results/hello_world/README.md) |                Server responds with simple `"hello world"` text                 |
| [File server](./results/file_server/README.md) | Static file server, where server needs to respond with files in given directory |

More benchmarks are planned! <br> However if you have an idea for real-world scenario that frameworks speed should be
tested for, please create an issue about it!

## 🏁 Benchmarking

Benchmarks are done on my PC! <br> This is because `Github Actions` is too slow to unleash the beast from some of the
frameworks and provides unreliable results.

My CPU is an `AMD Ryzen 7 5700G` and is cooled well enough where temps don't exceed 55°C during heavy-use. <br> I make
sure that nothing is running in the background while doing benchmarks.

Benchmarks are run after:

- Every update to any of the modules
- Change has been made to source code of benchmarking tool
- New benchmarks have been added
- New Deno version is out

## 🤝 Contributing

**http_benchmarks** is open for any contributions.
<br /> If you feel like you can enhance this project - please open an issue and/or pull request.

This project follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

Benchmark code should look like so:<br> _Description is optional, you can leave it as empty string._

```ts
export const NAME = "";
export const DESCRIPTION = "";
export const VERSION = "";

if (import.meta.main) {
  // ...your framework code
}
```

## 🙏 To dear web framework developers

If you can, please contribute to this project by creating a pull request where you add code for benchmarks for your
framework. <br> I should be able to update versions of them myself from that time, and I'll try to add as many
benchmarks as I can.
</br> However that'd make it a lot easier, since you know how to write code for that framework better (and faster!).

## 📝 Licensing

This project is available under **MIT** License conditions.
