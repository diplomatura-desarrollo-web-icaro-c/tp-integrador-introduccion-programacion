const getBooks = require("./read");
const books = getBooks();
const writeJSON = require("./writeJSON");

const editar = (numeroID, title, author, genre, year, cost, price) => {
  const locateID = books.some((book) => book.id == numeroID);
  if (!locateID) {
    console.log("                                        ***");
    console.log(
      "El ID seleccionado no existe. Porfavor, consulte los ID disponibles con el comando **leer** e intente nuevamente"
    );
    console.log("                                        ***");
  } else {
    books.map((book) => {
      if (book.id == numeroID) {
        book.title = title ? title : book.title;
        book.author = author ? author : book.author;
        book.genre = genre ? genre : book.genre;
        book.year = year ? year : book.year;
        book.cost = cost ? cost : book.cost;
        book.price = price ? price : book.price;
      }
    });
    // console.log(books);
    writeJSON(books);
    console.log("                                                    ***");
    return `El elemento ID: *${numeroID}* de la base de datos  ha sido actualizado correctamente`;
  }
};

module.exports = editar;
// editar(2, null, null, "Belico", 1999);
