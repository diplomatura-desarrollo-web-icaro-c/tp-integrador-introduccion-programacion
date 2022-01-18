const fs = require ("fs");
const leer = require ('./leer');
const writeJson = require('./writeJson');

const eliminar = (id) => {
    let autos = leer ()
    let EliminarAuto
    console.log (autos);
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].id === id) {
        EliminarAuto = i
        autos.splice(EliminarAuto, 1)
        writeJson(autos)
        console.log('Auto Eliminado')
        return
      }
    }
    console.log('El Auto no se puede eliminar')
  }

module.exports = eliminar;