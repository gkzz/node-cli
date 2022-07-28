const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.option("--gfm", "GFM Enabled");
program.parse(process.argv);
const filePath = program.args[0];

const opt = program.opts();

const cliOptions = {
    // opt.gfm に false を代入するかどうかなので、`??=` を使うべき
    // https://jsprimer.net/use-case/nodecli/md-to-html/
    //gfm: opt.gfm ?? false
    gfm: opt.gfm ??= false
}

/*
 * ファイルを非同期で読み込む
 * fsモジュールのコールバック関数の第一引数には常にエラーオブジェクト
 */
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        // 終了ステータス 1（一般的なエラー）としてプロセスを終了する
        process.exit(1);
        return;
    }
    const html = marked.parse(file, {
        gfm: cliOptions.gfm,
    });
    console.log(html);
});
