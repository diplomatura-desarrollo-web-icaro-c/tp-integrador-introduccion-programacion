const fs = require('fs')
const read = require('./read')

const leer = () => {
    const leer = read()
    return console.log(leer);

}

leer()