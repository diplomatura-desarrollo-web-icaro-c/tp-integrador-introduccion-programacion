const carsFile = require('../carList.json');

module.exports = getCarById = (id) => {
    for (var i = 0; i < carsFile.length; i ++) {
        if (id == carsFile[i].id) {
            return carsFile[i];
        }
    }
    return "No se encontró el auto seleccionado!";
}