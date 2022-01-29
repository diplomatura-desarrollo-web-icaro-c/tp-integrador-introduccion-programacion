const getBooks = require("./read");
const writeJSON = require("./writeJSON");
let books = getBooks();

const idGenerator = () => {
  let id = books.length + 1;
  return id;
};

const cargarLibro = (title, author, genre, year, cost, price, id) => {
  books.push({
    id: idGenerator(),
    title,
    author,
    genre,
    year,
    cost,
    price,
  });
  writeJSON(books);
  // console.log(books);
  console.log("                                                    ***");
  return `Se ha cargado con exito el libro ID: ${books.length}`;
};

// cargarLibro("La odisea", "Homero", "belico", 2015, 1000, 1700);
module.exports = cargarLibro;
