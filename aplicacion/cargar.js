const fs = require ("fs");
const leer = require ('./leer');

const cargar = function (id,brand,model,year,price) {
    var objcars ={
        id: id,
        brand : brand,
        model : model,
        year : year,
        price : price,
    }
    var autos = leer();
    autos.push(objcars);
    console.log (autos)
    fs.writeFileSync ('../CarsData.json', JSON.stringify(autos,null,2));
}
//console.log(cargar('6','Dodge','Ram', '2010','5000000'));

module.exports = cargar;