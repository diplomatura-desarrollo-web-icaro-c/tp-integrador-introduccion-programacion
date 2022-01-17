const getCars = require('./read');
const writeList = require('./writte')
const uuidv4 = require('uuid')

const addCar = (brand, model, year, price) => {
  let cars = getCars();
  let car = {
    id: uuidv4.v4(),
    brand: brand,
    model: model,
    year: year,
    price: price
  };
  cars.push(car);
  writeList(cars)
  console.log(cars)
}

module.exports = addCar;