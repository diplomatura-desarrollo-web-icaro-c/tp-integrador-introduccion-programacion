var array = require('./read.js')
const escribir= require('./writeJSON')



const editar =(idm,brandm,modelm,yearm,pricem)=>{
    
    array.forEach(element => {
        if (element.id==idm){
            element.brand=brandm;
            element.model=modelm;
            element.year=yearm;
            element.price=pricem;
        }
        
    });
    escribir(array);
}


//editar('46','mercedez','compresor','1998','2000');

module.exports = editar;