// HTML Fragments
// didalamnya kita bisa simpan pengulangan, pengkondisian, expression dalam fragmen bersarang

// 1. Looping
// const data = [{
//     nama: 'irfan fauzi',
//     email: 'irfanfauzi@yahoo.com'
// }, {
//     nama: 'surya kencana',
//     email: 'suryakencana@yahoo.com'
// }, {
//     nama: 'tubagus maulana',
//     email: 'tubagusmaulana@yahoo.com'
// }]

// let el = `<div class="data">
//             ${data.map(m => `<ul>
//                 <li>${m.nama}</li>
//                 <li>${m.email}</li>
//             </ul>`
//             // join('') supaya tanda koma hilang
//           ).join('')}</div>`;

// document.body.innerHTML = el;

// 2. pengkondisian (if else)
// let musik = {
//   lagu: 'master of puppets',
//   band: 'metalica',
//   // featuring: 'limpbizkit'

// }
// // arti dari = <li>${musik.featuring ? `(feat. ${musik.featuring})` : '' } </li>
// // (jika dalam object musik terdapat method featuring) maka (?) tampilkan ke layar method featuring, jika tidak (:) tampilkan kosong ''
// let el = `<div class="data">
//            <ul>
//               <li>${musik.lagu}</li>
//               <li>${musik.band} ${musik.featuring ? `(feat. ${musik.featuring})` : '' } </li>
//              </ul>
//           </div>`;

// document.body.innerHTML = el;

// 3. NESTED (bersarang)
let data = {
  nama: 'irfan',
  semester: 5,
  mataKuliah: ['matemathic', 'fisika', 'kimia']
};
let cetakMatakuliah = function (params) {
  return `<ol>
            ${

              
              params.map(el => `<li>${el}</li>` ).join('')
            
            
            }
          </ol>
  `;
}


let el = `<div class="data">
            <h2> nama : ${data.nama}</h2>
            <p class="semester">semester : ${data.semester}</p>
            <h4>mata kuliah</h4>
            ${cetakMatakuliah(data.mataKuliah)}
          </div>`;


document.body.innerHTML = el;