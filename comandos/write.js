const fs = require('fs')

const write = function(objetoJs){
    fs.writeFileSync('./database.json',JSON.stringify(objetoJs,null,2))
}

module.exports=write