// cara untuk membuat object pada javascript
// 1. Object Literal
// kelemahan = tidak cocok untul objek yang banyak
const karyawan = {
  name: 'irfan fauzi',
  energy: 10,
  // buat method didalam object
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    // menggunakan tanda `` untuk string supaya bisa menyatukan script dan string
    // gunakan tanda $ dan {} untuk memisahkan script dan string
    console.log(`halo ${this.name}, selamat makan, energi anda ${this.energy} `);

  }
}
// 2. function declaration
// kelemahannya = dibalik layar, objeck nya tetap dibuat berulang, sama saja dengan object literar (menggunakan banyak memory) 
function createObjectKaryawan(name, energy) {
  // object kosong
  let karyawan = {}
  karyawan.name = name;
  karyawan.energy = energy;
  // method atau function didalam function
  karyawan.makan = function (porsi) {
    // caranya sama dengan dibawah ini tapi ada versi singkatnya :
    // this.energy = this.energy + porsi; sama dengan this.energy += porsi;
    this.energy += porsi;
    console.log(`halo ${this.name}, selamat makan, energi anda bertambah ${this.energy} `);
  }
  karyawan.play = function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.name}, selamat makan, energi anda berkurang ${this.energy} `);
  }
  return karyawan;
}
let irfan = createObjectKaryawan('irfan fauzi', 10);
let surya = createObjectKaryawan('surya', 15);

// 3. constructor Function
function Karyawankita(name, energy) {
  this.name = name;
  this.energy = energy;
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.name}, selamat makan, energi anda bertambah ${this.energy} `);
  }
}
let jawas = new Karyawankita('jawas', 10);

// 4. Object Create 