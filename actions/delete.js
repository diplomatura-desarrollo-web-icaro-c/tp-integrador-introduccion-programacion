const carsFile = require('../carList.json');

module.exports = deleteCar = (id) => {
    for (var i = 0; i < carsFile.length; i ++) {
        if (id == carsFile[i].id) {
            carsFile.splice(i, 1);
            return carsFile;
        }
    }
    return 'No se encontró el auto seleccionado!';
}