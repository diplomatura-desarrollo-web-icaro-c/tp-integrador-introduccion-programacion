# ICARO - INTRODUCCIÓN A LA PROGRAMACIÓN

## Trabajo Integrador

Aquí están las consignas planteadas para la entrega del Trabajo Integrador de Intro a la Programación para la **Diplomatura Universitaria en Programación Web Full Stack** de Icaro.

### Aplicación de Tienda de Libros 📚

Se deberá crear una aplicación de consola que permita la **carga**, **lectura**, **edición** y **borrado** de distintos libros a una pequeña _"base de datos"_ de una tienda de libros.

Deberá contar con una _"base de datos"_ 📜, que será un archivo JSON con un array de Objetos Literales que representará el inventario de nuestra tienda.

Todo el código deberá escribirse con la sintaxis moderna que se ha visto en clases. 💻

- **Carga ➕** 👉 Deberá tomar por consola el comando _new_ seguido de otros comandos basados en los siguientes campos:
  
  - title (título)
  - author (autor)
  - genre (género)
  - year (año de publicación)
  - cost (precio de compra)
  - price (precio de venta)
  
  Aquí se deberán cargar strings para cada uno de esos campos.
  
  Luego deberá tomar esos datos y agregar un nuevo Objeto Literal con los mismos a la base de datos, tener en cuenta que se deberá agregar un campo _id_ (con los cálculos correspondientes para que siempre se le agregue un _id_ no existente) como identificador.
  
- **Lectura 🤓** 👉 Deberá tomar por consola el comando _read_ y se deberá visualizar por consola el array completo de los libros disponibles.
  
- **Edición 📝** 👉 Deberá tomar por consola el comando _edit_ seguido del _id_ del libro a modificar y de los mismos campos que en la carga (con los datos finales del libro).
  
- **Borrado 🗑** 👉 Deberá tomar por consola el comando _delete_ seguido del _id_ del libro a eliminar.
