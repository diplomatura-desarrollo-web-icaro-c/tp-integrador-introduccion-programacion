const leer= require('./leer')
const write = require('./write')

const carDatabase= leer()

const cargar=function(brand,model,year,price){
    listaId=[]
    carDatabase.forEach(auto => { listaId.push(auto.id)});
    ultimoId=Math.max(...listaId)

    carDatabase.push({id:ultimoId+1,brand:brand,model:model,year:year,price:price})
    write(carDatabase)
    //console.log(listaId);
}

//cargar("Fiat","Fiesta",2001,13000);

module.exports=cargar