const fs = require('fs');

const writeList = (updatedCarsList) => {
  fs.writeFileSync('./autosData.json', JSON.stringify(updatedCarsList, null, 2))
}

module.exports = writeList;