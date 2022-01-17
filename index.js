const listCars = require('./actions/list');
const addCar = require('./actions/add');
const deleteCar = require('./actions/delete');
const editCar = require('./actions/edit');
const getCarById = require('./actions/getById');

console.log(editCar(3, 'Fiat', 'Palio', '2002', '12345667.00'));
console.log(deleteCar(4));
//console.log(addCar('Otro', 'Default', '1999', '987654321.00'));
console.log(listCars());

