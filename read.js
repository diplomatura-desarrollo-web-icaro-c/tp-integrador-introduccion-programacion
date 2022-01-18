const fs = require('fs');



const read = () =>{
    return JSON.parse(fs.readFileSync('./baseDeDatos.JSON','utf-8'));
}

//console.log(read());

module.exports=read();