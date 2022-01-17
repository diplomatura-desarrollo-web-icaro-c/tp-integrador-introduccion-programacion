const getCars = require('./read');
const writeList = require('./writte')

const editCars = (idCar, brand, model, year, price) => {
  let cars = getCars();
  let carFound = cars.find(car => car.id == idCar);
  (!carFound) ? generateMessage() : edit(cars, idCar, brand, model, year, price);
  writeList(cars);
}

function edit(cars, idCar, brand, model, year, price) {
  cars.forEach(car => {
    if (car.id == idCar) {
      car.brand = brand ? brand : car.brand;
      car.model = model ? model : car.model;
      car.year = year ? year : car.year;
      car.price = price ? price : car.price;
    }
  });
}

function generateMessage() {
  console.log('El auto no existe');
}

module.exports = editCars;