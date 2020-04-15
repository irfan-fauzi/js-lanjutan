// template literal 

// string lieral yang memungkinkan adanya expression didalamnya
// String literal dalam javascript :
// let nama = 'irfan fauzi';
// let nip = "87853845";
// let email = `irfanfauzi24@yahoo.com`;

// dalam javascript ketiga jenis itu sama saja fungsinya yaitu menampilkan string, tetapi dalam bahasa pemrogrman lain seperti PHP, tanda ("") kutip dua bisa lebih sakti,

//  template literal 
// 1.menggunakan `` backtick
// 2.multi line string => sebelumnya tidak bisa dilakukan oleh '/"
// 3.embedded expression
// 4.HTML Fragment
// 5.Expression Interpolation
// 6.Tagged Template

// Contoh Template Literal

// 1. Multi Line String
// `string text baris 1
//  string text baris 2
//  string text baris 3`
// //  menggabungkan string dan js (embeded expression)
// `string text ${expression} string text`
// // tagged template => dengan menuliskan tag didepan
// tag `string text ${expression} string text`

// 2. Multi line string (HTML Fragment)

// cara lama :
// const obj = {
//     name: "irfan fauzi",
//     usia: 77,
//     nip: 9992384,
//     email: 'irfanfauzi24@yahoo.com'
// };
// let el = '';
// el += '<div class ="obj">';
// el += '<h2>' + obj.name + '</h2>';
// el += '<span class = "nip">' + obj.nip + '</span>';
// el += '</div>';
// console.log(el);

// cara baru :
// const obj = {
//     name: "irfan fauzi",
//     usia: 77,
//     nip: 9992384,
//     email: 'irfanfauzi24@yahoo.com'
// };
// let el = `<div class ="obj">
//           <h2>${obj.name}</h2>
//           <span class="nip">${obj.nip}</span>
//           </div>`;

// let body = document.querySelector('body');
// body.innerHTML = el;
const nama = 'irfan fauzi';
const umur = 90;

let sayHello = () => `hallo nama saya ${nama} ,usia saya ${umur} tahun`;
console.log(sayHello());