// execution context contoh 1

console.log(kota);
var kota = 'majalengka';
// saat program diatas dijalankan
// ada sesuatu yang disebut = Creation Phase

// 1. Creation Phase
// creation phase (terjadi di context global / tidak didalam function)
// a.Creation phase -> akan mengecek apakah ada variable / function didalam kodingannya
// if (ada variable ){
//      variable = undifine       
// }
// if (ada function() ){
//      javascript akan menampilkan nama functionnya saja (function tidak dijalankan)
//      function = fn()       
// }
// b. javascript akan mendefinisikan object window = global object
// 
// konsep diatas disebut HOISTING

// 2. Execution Phase
//    menjalankan programnya dari atas ke bawah

// Contoh 2
console.log(sayHello());
var nama = 'fauzi';
var umur = 73;

function sayHello() {
  console.log(`halo nama saya ${nama}, saya berusia ${umur}`);

}
// jika didalam