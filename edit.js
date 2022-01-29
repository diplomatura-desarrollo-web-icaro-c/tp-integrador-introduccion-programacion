const read = require('./read')
const write = require('./write')

const edition = (title, author,genre, year, cost, price, id) => {
    let bookEdit = read()
    for (let i = 0; i < bookEdit.length; i++) {
      if (bookEdit[i].id == id) {
        bookEdit[i].title = title
        bookEdit[i].author = author
        bookEdit[i].genre = genre
        bookEdit[i].year= year
        bookEdit[i].cost= cost
        bookEdit[i].price = price

        write(bookEdit)
        return
      }
    }
}
module.exports = bookEdit;