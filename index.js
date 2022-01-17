//const cargarAuto = require('./comandos/find')
const getCars = require('./comandos/getCars')
const add = require('./comandos/addCar')
const editCars = require('./comandos/editCar')
const deleteCars = require('./comandos/deleteCars')



switch (process.argv[2]) {
  case 'read':
    console.log('La lista de autos es: ')
    getCars();
    break
  case 'add':
    add(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
    break
  case 'edit':
    editCars(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);
    break
  case 'delete':
    deleteCars(process.argv[3]);
    break
  default:
    console.log('ocurrio algun error');
    break
}
