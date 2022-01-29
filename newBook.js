const read = require ('./read')
const write = require ('./write')

const newBook = (title, author,genre, year, cost, price, id) => {
var stock = read ();
var newlist = {
    title: title,
    author: author,
    genre: genre,
    year: year,
    cost: cost,
    price: price,
    id: stock.length + 1
}

stock.push(newlist);
//console.log(stock);

write(stock)
}

module.Exports = newBook; 