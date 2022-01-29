const fs = require('fs')

const read = () => { return JSON.parse(fs.readFileSync('./DataBase.JSON', 'utf-8'))}

  module.exports = read;