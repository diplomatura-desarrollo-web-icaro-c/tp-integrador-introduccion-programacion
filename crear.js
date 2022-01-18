const fs = require('fs')
const write = require('./write')
const read = require('./read')


const cargar = (id, brand, model, year, price) => {
    let nuevaLista = read()
    nuevaLista.push({id, brand, model, year, price});
    write(nuevaLista); 
    console.log(nuevaLista);
}

cargar("2", "Peugeot", "206", "2007", "180000")