const fs = require('fs')

 const write = (upgrade) => { fs.writeFileSync('./DataBase.JSON', JSON.stringify (upgrade , null , 2))
}

module.exports = write;