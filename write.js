const fs = require('fs');

const write = (concesionariaN) => {
  fs.writeFileSync('./concesionaria.json', JSON.stringify(concesionariaN, null, 2))
}

module.exports = write;