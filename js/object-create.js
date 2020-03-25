// function Declaration

// method karyawan = object khusus untuk menyimpan mmethod dari Objeck utama yaitu Objeck Karyawan

const methodKaryawan = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.name}, selamat makan, energi anda bertambah menjadi ${this.energy} `);
  },
  play: function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.name}, selamat makan, energi anda berkurang menjadi ${this.energy} `);
  },


}
// createObjectKaryawan = bisa memanggil method yang terpisah dari objek ini, menggunkan Object.create(objeck berisi method)
function createObjectKaryawan(name, energy) {
  // Object.create() = object kosong yang dapat diisi parameter, dalam hal ini paramter nya adalah objek yang berisi method untuk mendukung objek ini sendiri
  let karyawan = Object.create(methodKaryawan);
  karyawan.name = name;
  karyawan.energy = energy;
  return karyawan;
}
let irfan = createObjectKaryawan('irfan fauzi', 10);
let surya = createObjectKaryawan('surya', 15);