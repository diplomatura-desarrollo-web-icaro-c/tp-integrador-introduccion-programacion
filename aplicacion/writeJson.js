const fs = require('fs')

const writeJson = (autos) => {
  fs.writeFileSync('../CarsData.json', JSON.stringify(autos, null, 2))
}

module.exports = writeJson;