class Mobil {
    // Adalah sebuah method/function yang di jalankan pertama kali ketika object di buat. Misalnya seperti contoh kode di atas ketika const = new Car('suv', 'red') di jalankan maka method constructor langsung di jalankan juga, yang isinya adalah memasukkan parameter suv dan red ke dalam property car this.type dan this.color .
    constructor(pabrikan, warna) {
        this.pabrikan = pabrikan;
        this.warna = warna;
        this.engineStatus = 'off';
    }
    engineStart() {
        this.engineStatus = 'on';
        console.log('engine start broommmm....');
    }
    engineOff() {
        this.engineStatus = 'off';
        console.log('engine off pfffffffffffffff......');
    }
    // Adalah method yang sama seperti class method, tetapi untuk menjalankannya tidak perlu meng instance class, cukup menggunakan NamaClass.namaMehod()
    static isEngineOn(mobil) {
        if (mobil.engineStatus == 'on') {
            console.log(`mesin mobil ${this.pabrikan} segera menyala !!! brremmm..`);
        } else {
            console.log('emesin matieee.. genjiee...!!');
        }
    }
}
let avanza = new Mobil('toyota', 'merah');
let xenia = new Mobil('daihatsu', 'hijau');
// 
class Motor {
    constructor(merek, tahun, mesin) {
        this.merek = merek;
        this.tahun = tahun;
        this.mesin = mesin;
    }
}
let vixion = new Motor('yamaha', 2008, 150);