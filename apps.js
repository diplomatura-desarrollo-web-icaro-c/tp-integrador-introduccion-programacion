const leer= require('./comandos/leer')
const cargar= require('./comandos/cargar')
const editar=require('./comandos/editar')
const borrar=require('./comandos/borrar')

switch (process.argv[2]) {
    case "cargar":
        cargar(process.argv[3],process.argv[4],+process.argv[5],+process.argv[6]);
        break;

    case "leer":
        console.log(leer());
        break;

    case "editar":
        editar(+process.argv[3],process.argv[4],process.argv[5],+process.argv[6],+process.argv[7]);
        break;

    case "borrar":
        borrar(+process.argv[3]);
        break;

    default:
        console.log("Funcion no encontrada");
        break;
}