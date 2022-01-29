const read = require ('./read')
const write = require ('./write')

const carga = (title, author, genre, year, cost, price) => {
var libro = read ();
var libronuevo= {
    id: libro.length + 1,
    title: title,
    author: author,
    genre: genre,
    year: year,
    cost: cost,
    price: price,
}

libro.push(libronuevo);
console.log(libro)

write(libro)
}

//console.log(carga("Harry Potter","J.K. Rowling","novela","1997","3200","3800")) 

module.exports = carga;