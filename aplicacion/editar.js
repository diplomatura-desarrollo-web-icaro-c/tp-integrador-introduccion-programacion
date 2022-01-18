const fs = require ("fs");
const leer = require ('./leer');
const writeJson = require('./writeJson');

const editar = (id, brand, model, year, price) => {
    let autos = leer ()
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].id === id) {
        autos[i].brand = brand,
        autos[i].model = model
        autos[i].year = year
        autos[i].price = price
        console.log('Auto modificado')
        writeJson(autos)
        return
      }
    }
    console.log('No se encontró ID')
  }

 // console.log(editar("1","toyota","supra","2006","500000"));

module.exports = editar;