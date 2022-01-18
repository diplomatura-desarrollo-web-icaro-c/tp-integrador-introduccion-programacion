const fs = require('fs')

 const read = () => {
  return JSON.parse(fs.readFileSync('./base-de-dato.json', 'utf-8'))
}

module.exports = read;


