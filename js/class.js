// konsep class 
class Karyawan {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    makan(porsi) {
        this.energy += porsi;
        console.log(`halo ${this.name}, selamat makan, energi anda bertambah menjadi ${this.energy} `);
    }
    play(jam) {
        this.energy -= jam;
        console.log(`halo ${this.name}, selamat makan, energi anda bertambah menjadi ${this.energy} `);
    }

}
let irfan = new Karyawan('irfan', 40);