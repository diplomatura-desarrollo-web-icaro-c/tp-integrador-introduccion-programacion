const getBooks = require("./read");
const writeJSON = require("./writeJSON");
let books = getBooks();

// console.log(books);
const borrar = (deleteid) => {
  let locateID = books.some((book) => book.id == deleteid);
  if (!locateID) {
    console.log(
      `no se ha encontrado el ID correspondiente, intente con alguno mayor a 0 y menor o igual a ${books.length}`
    );
  } else {
    books.map((book, index) => {
      if (book.id == deleteid) {
        books.splice(index, 1);
      }
    });
    books.map((book, index) => (book.id = index + 1));
    writeJSON(books);
    console.log("                                                    ***");
    return ` Se ha borrado exitosamente el elemento ID: ${deleteid}`;
    // console.log(books);
  }
};

// borrar(1);
module.exports = borrar;
