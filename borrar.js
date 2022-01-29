const read = require ('./read');
const write = require ('./write');

const libro = read ();

const borrar = (id) => {

    const eliminado = libro.filter (libro => libro.id != id)
    write (eliminado)
    console.log(eliminado);
}

//borrar (1);

module.exports = borrar;

