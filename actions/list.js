const carsFile = require('../carList.json');


module.exports = listCars = () => {
    let carsArray = [];
    for (var i = 0; i < carsFile.length; i ++) {
        carsArray.push(carsFile[i]);
    }
    return carsArray;
}