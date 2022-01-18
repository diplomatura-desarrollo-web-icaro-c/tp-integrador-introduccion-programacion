const carsFile = require('../carList.json');


module.exports = addCar = (brand, model, year, price) => {
    let newCar = JSON.stringify({ id: carsFile.length + 1, brand: brand, model: model, year: year, price: price });
    carsFile.push(JSON.parse(newCar));

    return carsFile;
}