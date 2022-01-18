const fs = require('fs')

 const write = (array) => {
  fs.writeFileSync('./base-de-dato.json', JSON.stringify (array , null , 2))
}

module.exports = write;

