const array = require('./read.js')
const escribir= require('./writeJSON')



const crear =(idn,brand,model,year,price)=>{

        array.forEach(element => { 
            if(element.id==idn) {
                return "el id ya se encuentra en la lista";
            }else {array.push({id:"idn",})}
            
            
        });

}