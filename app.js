const leerautos = require('./aplicacion/leer')
const editarautos = require('./aplicacion/editar')
const cargarautos = require('./aplicacion/cargar')
const borrarautos = require('./aplicacion/borrar')

switch (process.argv[2]) {
    case 'leer':
      console.log(leerautos());
      break;
    case 'editar':
        console.log(editarautos());
        break;
    case 'cargar':
        console.log(cargarautos());
        break;
    case 'borrar':
        console.log(borrarautos());
        break;
default:
    "Ingrese una función válida"
    break
}    

//console.log(leerautos());
//console.log(borrarautos(5));
//console.log(cargarautos('7','Dodge','Ram', '2010','5000000'));
//console.log(editarautos("1","toyota","supra","2006","500000"));
