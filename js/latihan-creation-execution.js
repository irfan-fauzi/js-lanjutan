// console.log(sayHello());

// function sayHello() {
//     var nama = 'fauzi';
//     var umur = 73;
//     console.log(`halo nama saya ${nama}, saya berusia ${umur}`);

// }

// var nama = 'irfan fauzi';
// var username = '@irfan.fw';

// function tampilUrl(username) {
//     var url = 'http://instagram.com/';
//     return url + username;
// }
// console.log(tampilUrl(username));

function satu() {
    var nama = 'irfan';
    console.log(nama);
}

function dua() {
    console.log(arguments[0]);
    console.log(nama);
}

// run
// dibawah ini pasti hasilnya undifine , karena nama belum didefinisikan
console.log(nama);
var nama = 'erik';
satu();
dua('dodi');
console.log(nama);