const leer= require('./leer')
const write = require('./write')

const carDatabase= leer()

const borrar = function(idBorrar){

  for (let i = 0; i < carDatabase.length; i++) {
      if(carDatabase[i].id===idBorrar){
          let item =i
          carDatabase.splice(item,1)
      }
  }  
//console.log(carDatabase);
write(carDatabase)


}
//borrar(1)

module.exports=borrar