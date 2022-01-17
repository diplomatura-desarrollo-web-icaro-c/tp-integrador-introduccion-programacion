const getCars = require('./read');
const writeList = require('./writte')

const deleteCar = (idCar) => {
  let cars = getCars();
  let carFound = cars.find(car => car.id == idCar);
  (!carFound) ? generateMessage() : removeCar(cars, idCar);
}

function removeCar(cars, idCar) {
  let carsFiltered = cars.filter(cars => cars.id != idCar);
  writeList(carsFiltered);
}
function generateMessage() {
  console.log('El auto no existe');
}

module.exports = deleteCar;