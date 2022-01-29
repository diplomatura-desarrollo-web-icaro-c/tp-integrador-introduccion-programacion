const fs = require('fs');

 const read = () => {
  return JSON.parse(fs.readFileSync('./baseDeDatos.json', 'utf-8'));
}

//console.log(read())

module.exports = read