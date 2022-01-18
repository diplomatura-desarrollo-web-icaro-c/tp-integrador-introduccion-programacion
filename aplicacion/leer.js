const fs = require ("fs");
const leer = function (){
    return JSON.parse(fs.readFileSync('./CarsData.json','utf-8'));
}

module.exports = leer;