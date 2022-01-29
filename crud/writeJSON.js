const fs = require("fs");

const writeJSON = (array) =>
  fs.writeFileSync("./listaLibros.json", JSON.stringify(array, null, 2));

module.exports = writeJSON;
