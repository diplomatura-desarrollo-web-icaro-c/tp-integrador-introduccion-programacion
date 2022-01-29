const fs = require("fs");

const read = () => JSON.parse(fs.readFileSync("./listaLibros.json", "utf-8"));

module.exports = read;
