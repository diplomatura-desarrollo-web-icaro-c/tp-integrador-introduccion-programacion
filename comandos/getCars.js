const getCars = require('./read');

const getListCars = () => {
  let cars = getCars();
  console.log(cars)
}

module.exports = getListCars;