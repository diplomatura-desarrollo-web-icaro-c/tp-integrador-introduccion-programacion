const leer = require ('./read')
const escribir = require ('./escritura')

const moviles = leer ();

const borrar = (id) => {

    const borrado = moviles.filter (movil => movil.id != id)
    escribir (borrado)
    console.log(borrado)
}

module.exports = borrar;

// borrar (4);



