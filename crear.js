const { write } = require('fs');
var array = require('./read.js')
const escribir= require('./writeJSON')



const crear =(brand,model,year,price)=>{

  
        var arrayOrdenado = array.sort(function(a,b){ return a.id - b.id});
                                

        var idn= arrayOrdenado[arrayOrdenado.length -1].id;
        idn++;
        arrayOrdenado.push({'id':idn,'brand':brand,'model':model,'year':year,'price':price}) ;

        escribir(arrayOrdenado);




        
  
  
    

}

crear('kia','mustang','1998','1254');