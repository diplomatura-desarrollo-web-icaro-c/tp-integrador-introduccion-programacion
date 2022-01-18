const listCars = require('./actions/list');
const addCar = require('./actions/add');
const deleteCar = require('./actions/delete');
const editCar = require('./actions/edit');
const getCarById = require('./actions/getById');

switch (process.argv[2]) {
    case 'listCars':
      console.log(listCars())
      break
    case 'addCar':
      console.log(addCar(process.argv[3], process.argv[4], process.argv[5], process.argv[6]))
      break
    case 'deleteCar':
      console.log(deleteCar(process.argv[3]))
      break
    case 'editCar':
      console.log(editCar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]))
      break
    case 'getCarById':
      console.log(getCarById(process.argv[3]))
      break
    default:
      console.log('Debe seleccionar el método a ejecutar')
      break
  }
