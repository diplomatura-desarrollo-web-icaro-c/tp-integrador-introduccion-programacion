const fs = require('fs')
const read = require('./read')
const write = require('./write')

const Borrar = (id) => {
    let nuevaLista = read()
    let autoBorrar
    for (let i = 0; i < nuevaLista.length; i++) {
      if (nuevaLista[i].id == id) {
        autoBorrar = i
        nuevaLista.splice(autoBorrar, 1)
        write(nuevaLista)
        console.log('El auto ha sido eliminado')
        return
      }
    }
    console.log('No se encontro el auto, inserte id correcto')
  }

  Borrar("2")