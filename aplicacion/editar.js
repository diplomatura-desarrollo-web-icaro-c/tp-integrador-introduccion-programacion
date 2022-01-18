const fs = require ("fs");
const leer = require ('./leer');
const writeJson = require('./writeJson');

const editar = (id, brand, model, year, price) => {
  let autos
  for (let i = 0; i < leer.length; i++) {
    if (autos[i].id === id) {
      autos = autos[i]
      autos.id = id
      return "Auto encontrado y modificado"
    }
  }
  return 'Auto no encontrado'
}

console.log (editar("1","toyota","supra", "2006", "500000"))

//module.exports = editar;