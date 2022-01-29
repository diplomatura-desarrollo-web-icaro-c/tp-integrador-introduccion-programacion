const fs = require('fs');

 const write = (array) => {
  fs.writeFileSync('./baseDeDatos.json', JSON.stringify(array, null , 2));
}

//console.log(write())

module.exports = write;