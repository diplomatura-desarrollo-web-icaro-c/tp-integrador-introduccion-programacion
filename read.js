const fs = require('fs')

  const read = () => {
    return JSON.parse(fs.readFileSync('./concesionaria.JSON', 'utf-8'))
  }
  module.exports = read;