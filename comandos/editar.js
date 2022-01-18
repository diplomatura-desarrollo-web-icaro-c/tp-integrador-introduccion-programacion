const leer= require('./leer')
const write = require('./write')

const carDatabase= leer()

const editar = function(id,brand,model,year,price){
    let idFound= carDatabase.some(auto=>auto.id===id)
    if(!idFound){
        return "no se encuentra ese id"
    } else {
        let carDatabaseEdited=carDatabase.map(auto=>{
            if(auto.id===id){
                auto.brand=brand;
                auto.model=model;
                auto.year=year;
                auto.price=price;
            }
            return auto
        })
        write(carDatabaseEdited)
    }
    
}

//editar(2,"Toyota","hilux",2010,20000)

module.exports=editar