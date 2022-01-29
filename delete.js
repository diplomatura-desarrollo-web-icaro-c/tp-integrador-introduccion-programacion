const bookList = require('./read')
const write = require('./write')


const deleteBook = (id_delete)  => { 
    for (let i = 0; i < bookList.length; i++) {
      if(bookList[i].id==id_delete){
          bookList.splice(i,1);
      }
  }  

write(bookList);
}


module.exports = deleteBook;