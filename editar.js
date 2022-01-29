const read = require ('./read');
const write = require ('./write');

const libro = read ();

const editar = (id, title, author, genre, year, cost, price) => {
for (let i = 0; i < libro.length; i++) {
    if (libro[i].id === id) {
        libro[i].title = title,
        libro[i].author = author,
        libro[i].genre = genre,
        libro[i].year = year,
        libro[i].cost = cost,
        libro[i].price = price; 

        write (libro)
        console.log('Editado')
        return
    }
}
console.log ('No se encontró el ID');

}

//editar('5', 'diario de ana frank', 'ana frank', 'biografia', '1947', '2000', '2500')

//editar('1', 'diario de ana frank', 'ana frank', 'biografia', '1947', '2000', '2500')

module.exports = editar;
