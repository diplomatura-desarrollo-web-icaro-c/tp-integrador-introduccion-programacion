const fs = require('fs')
const read = require('./read')
const write = require('./write')

const editar = (id, brand, model, year, price) => {
    let nuevosCampos = read()
    for (let i = 0; i < nuevosCampos.length; i++) {
      if (nuevosCampos[i].id == id) {
        nuevosCampos[i].brand = brand
        nuevosCampos[i].model = model
        nuevosCampos[i].year = year
        nuevosCampos[i].price = price
        
        console.log('Auto editado correctamente')
        write(nuevosCampos)
        return
      }
    }
    console.log('No se encontro el auto, inserte id correcto')
  }

editar("1", "MercedesBenz", "C200", "2005", "800000")
