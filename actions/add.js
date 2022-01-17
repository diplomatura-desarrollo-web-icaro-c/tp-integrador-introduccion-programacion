const carsFile = require('../carList.json');


module.exports = addCar = (brand, model, year, price) => {
    let carsArray = [];
    for (var i = 0; i < carsFile.length; i ++) {
        carsArray.push(carsFile[i]);
    }

    carsArray[carsFile.length].id = carsFile.length + 1;
    carsArray[carsFile.length].brand = brand;
    carsArray[carsFile.length].model = model;
    carsArray[carsFile.length].year = year;
    carsArray[carsFile.length].price = price;

    return carsArray;
}