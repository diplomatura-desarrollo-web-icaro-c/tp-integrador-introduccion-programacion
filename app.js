const read = require('./read')
const newBook = require('./newBook')
const edit = require('./edit')
const deleteBook = require('./delete')



switch (process.argv[2]) {
  case 'Leer':
    console.log('Srock de libros: ')
    read();
    break
  case 'new':
    newBook(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
    break
  case 'edit':
    edit(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);
    break
  case 'borrar':
    deleteBook (process.argv[3]);
    break
  default:
    console.log('No se realizo la accion correctamente');
    break
}