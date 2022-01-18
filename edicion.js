const leer = require ('./read')
const escribir = require ('./escritura')
const moviles = leer ();


const editar = (id, marca, modelo, año, precio) => {
for (let i = 0; i < moviles.length; i++) {
    if (moviles[i].id === id) {
        moviles[i].brand = marca;
        moviles[i].model = modelo;
        moviles[i].year = año;
        moviles[i].price = precio;
        escribir (moviles)
        console.log('Editado')
        return
    }
}
console.log ('No se encontró el ID')

}


module.exports = editar;

//editar('2', 'fiat', 'palio', '2012', '500000')



    
