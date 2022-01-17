const fs = require('fs');

const readCars = () => JSON.parse(fs.readFileSync('./autosData.json', 'utf-8'));

module.exports = readCars;