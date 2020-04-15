// closure
function init() {

    function tampilNama(name, panjang) {
        console.log(name, panjang);
    }
    return tampilNama;
}
let panggilnama = init();
panggilnama('irfan', 'fauzi');