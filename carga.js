const read = require ('./read')
const escribir = require ('./escritura')

const carga = (brand, model, year, price) => {
var moviles = read ();
var objautos = {
    id: moviles.length + 1,
    brand: brand,
    model: model,
    year: year,
    price: price,
}

moviles.push(objautos);
console.log(moviles)

escribir (moviles)
}

// console.log(carga("Ford","Fiesta","2016","120000")) 

module.exports = carga;