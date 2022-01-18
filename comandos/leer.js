const fs = require('fs')

const leer=function(){
        return JSON.parse(fs.readFileSync('./database.json','utf-8'))
}

//console.log(leer());
module.exports=leer