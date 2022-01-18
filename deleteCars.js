
const carsList = require('./read')
const write = require('./writeJSON')


const deleteCarsList = (id_delete)  => {

  for (let i = 0; i < carsList.length; i++) {
      if(carsList[i].id==id_delete){
          //let car =i;
          carsList.splice(i,1);
      }
  }  

write(carsList);
}

deleteCarsList(45);

module.exports = deleteCarsList;