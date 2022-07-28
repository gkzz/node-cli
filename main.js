//console.log("Hello World!");

//console.log(process.argv);

/*
const myModule = require("./my-module");
console.log(myModule.foo); // => "foo"

// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
// コマンドライン引数をパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
console.log(filePath);
*/

const program = require("commander");
const fs = require("fs");

program.parse(process.argv);
const filePath = program.args[0];

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
    console.log(file);
});
