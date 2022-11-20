// indexedDBの名前などの設定

const dbName = "kakeiboDB";
const storeName = "kakeiboStore";
const dbVersion = 1;

// 変数dbNameはデータベースの名前を格納した変数です。
// 変数storeNameはオブジェクトストアの名前を格納した変数です。
// 変数dbVersionはデータベースにバージョンの番号を設定します。



//データベース接続する。データベースが未作成なら新規作成する。
let database = indexedDB.open(dbName, dbVersion);

// 上記のようにIndexedDB.openの第一引数にデータベース名、
// 第二引数にバージョンを設定することでデータベースを作成することができます。



//データベースとオブジェクトストアの作成
database.onupgradeneeded = function (event) {
    let db = event.target.result;
    db.createObjectStore(storeName, { keyPath: "id" });
    console.log("データベースを新規作成しました");
 }

//  db.createObjectStore(storeName, { keyPath: "id" });でオブジェクトストアを作成しています。
// keyPath:"id"の部分はキーと呼ばれるもので、このあとのパートでデータをデータベースに登録するときにidという項目を作ってデータを登録します。


//データベースに接続成功した時に発生するイベント
database.onsuccess = function (event) {
    let db = event.target.result;
    //接続を解除する
    db.close();
    console.log('データベースに接続できました');
}
database.onerror = function (event) { 
    console.log('データベースに接続できませんでした');
}