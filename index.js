const listCars = require('./actions/list');
const addCar = require('./actions/add');
const deleteCar = require('./actions/delete');
const editCar = require('./actions/edit');
const getCarById = require('./actions/getById');

switch (process.argv[2]) {
    case 'leer':
      console.log(listCars())
      break
    case 'cargar':
      console.log(addCar(process.argv[3], process.argv[4], process.argv[5], process.argv[6]))
      break
    case 'borrar':
      console.log(deleteCar(process.argv[3]))
      break
    case 'editar':
      console.log(editCar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]))
      break
    case 'obtenerAuto':
      console.log(getCarById(process.argv[3]))
      break
    default:
      console.log('Debe seleccionar el método a ejecutar')
      break
  }
