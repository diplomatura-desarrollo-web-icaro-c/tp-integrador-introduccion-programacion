const leer = require("./crud/read.js");
const create = require("./crud/create");
const deleteBook = require("./crud/delete.js");
const updata = require("./crud/updata");

//parametros
let p1 = process.argv[3];
let p2 = process.argv[4];
let p3 = process.argv[5];
let p4 = process.argv[6];
let p5 = process.argv[7];
let p6 = process.argv[8];
let p7 = process.argv[9];

switch (process.argv[2]) {
  case "read":
    console.log(leer());
    break;

  case "new":
    console.log(create(p1, p2, p3, +p4, +p5, +p6));
    break;

  //al ejecutar 'edit' colocar comillas ("") cuando no se quiera modificar el campo en cuestion
  case "edit":
    console.log(updata(+p1, p2, p3, p4, +p5, +p6, +p7));
    break;

  case "delete":
    console.log(deleteBook(+p1));
    break;

  default:
    console.log(
      "No se encontro el comando ingresado. Porfavor intente nuevamente con algunos de los siguientes comandos validos: "
    );
    console.log("  'read', 'new','edit', 'delete' ");
    console.log("Para mas informacion consulte documento readme.md ");

    break;
}
