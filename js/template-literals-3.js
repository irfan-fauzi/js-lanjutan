const obj = [{
    name: 'irfan fauzi',
    usia: 30,
    profesi: 'peneliti',
    kota: 'london',
    bio: 'assalamualaikum beijing'
  }, {
    name: 'zainudin mz',
    usia: 30,
    profesi: 'peneliti',
    kota: 'london',
    bio: 'assalamualaikum beijing'
  },
  {
    name: 'jaya kusuma',
    usia: 30,
    profesi: 'peneliti',
    kota: 'london',
    bio: 'assalamualaikum beijing'
  }
]
// simpan kedalam variabel
let tampilData = function (param) {
  return param.map(function (el) {
    return `<li>${el.name}</li>
            <li>${el.usia}</li>
            <li>${el.kota}</li>
            <li>${el.bio}</li>
            `
  });

}

const el = `<div class="obj">
              <h2>Biodata Pribadi</h2>
              <ul>
                  ${tampilData(obj)}
              </ul>
           </div>`;

document.body.innerHTML = el;