const fs = require('fs');


const write =(array)=>{

    fs.writeFileSync('./baseDeDatos.JSON',JSON.stringify(array,null,2));

}

//write([{'id': '4' , 'brand': 'renault','model':'logan', 'year':'2000','price':'855' }]);
module.exports=write;