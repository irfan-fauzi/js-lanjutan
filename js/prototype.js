// constructor function
function Karyawankita(name, energy) {
    this.name = name;
    this.energy = energy;
    // yang terjadi dibelakang layar adalah :
    // javascript mengerjakan {
    // let this = {};
    //}
    // return this
    // secara default constructor function sudah punya perent namanya Prototype
}
// prototype = untuk kasih tau bahwa method yang dibuat ini terhubung dengan Objek utama (dalam hal ini Object KaryawanKita)
Karyawankita.prototype.makan = function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.name}, selamat makan, energi anda bertambah menjadi ${this.energy} `);
}
const irfan = new Karyawankita('irfan', 10);