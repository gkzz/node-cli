# node-cli

本リポジトリは、以下の Web サイトに掲載されているチュートリアルを手を動かした作業メモです。

- [Node.jsでCLIアプリ · JavaScript Primer #jsprimer](https://jsprimer.net/use-case/nodecli/)

## Technologies Used
```
$ node -v
v16.16.0
$ npm -v
8.11.0
$ grep commander package.json
    "commander": "5.0"
```

## Usage

```
$ node main.js found.md
hello

$ node main.js notfound.md
ENOENT: no such file or directory, open 'notfound.md'

$ node main.js --gfm sample.md
<h1 id="sample">sample</h1>
<p>これはサンプルです。
<a href="https://jsprimer.net/">https://jsprimer.net/</a></p>
<ul>
<li>サンプル1</li>
<li>サンプル2</li>
</ul>
```
