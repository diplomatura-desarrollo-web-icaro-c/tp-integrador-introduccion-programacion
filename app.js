const read = require('./read')
const cargar = require('./cargar')
const editar = require('./editar')
const borrar = require('./borrar')

switch (process.argv[2]) {
    case "read":
        console.log(read());
        break;

    case "cargar":
        cargar(process.argv[3],process.argv[4],process.argv[5],process.argv[6]);
        break;

    case "editar":
        editar(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7]);
        break;

    case "borrar":
        borrar(process.argv[3]);
        break;

    default:
        console.log("Funcion no encontrada");
        break;
}