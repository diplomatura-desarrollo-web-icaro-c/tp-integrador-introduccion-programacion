const leer = require('./read')
const borrar = require('./borrar')
const cargar = require ('./carga')
const editar = require ('./edicion')


let comando = process.argv[2];
let id = process.argv[3];
let brand = process.argv[4];
let model = process.argv[5];
let year = process.argv[6];
let price = process.argv[7];


const moviles = () => {console.log (leer ())}


switch (comando) {
    case 'leer': moviles();
       break;
    case 'borrar':borrar(id);
        break;
    case 'cargar': cargar(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
        break;
    case 'editar': editar (id, brand, model, year, price)
        break;
    default: console.log ("El comando solicitado no existe")
        break;
}