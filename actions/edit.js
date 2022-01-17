const carsFile = require('../carList.json');

module.exports = editCar = (id, brand, model, year, price) => {
    for (var i = 0; i < carsFile.length; i ++) {
        if (id == carsFile[i].id) {
            carsFile[i].brand = brand;
            carsFile[i].model = model;
            carsFile[i].year = year;
            carsFile[i].price = price;
            return carsFile[i];
        }
    }
    return "No se encontró el auto seleccionado!";
}