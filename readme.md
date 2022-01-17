# ICARO - INTRODUCCIÓN A LA PROGRAMACIÓN

## Trabajo Integrador

Aquí están las consignas planteadas para la entrega del Trabajo Integrador de Intro a la Programación para la **Diplomatura Universitaria en Programación Web Full Stack** de Icaro.

### Aplicación de concesionaria de autos 🚗

Se deberá crear una aplicación de consola que permita la **carga**, **lectura**, **edición** y **borrado** de distintos autos a una pequeña _"base de datos"_ de una concesionaria.

Deberá contar con una _"base de datos"_ 📜, que será un archivo JSON con un array de Objetos Literales que representará cada uno de los vehículos.

Todo el código deberá escribirse con la sintaxis moderna que se ha visto en clases. 💻

- **Carga ➕** 👉 Deberá tomar por consola el comando _cargar_ seguido de otros comandos basados en los siguientes campos:
  - brand (marca)
  - model (modelo)
  - year (año de manufactura)
  - price (precio)
  Aquí se deberán cargar strings para cada uno de esos campos.

  Luego deberá tomar esos datos y agregar un nuevo Objeto Literal con los mismos a la base de datos, tener en cuenta que se deberá agregar un campo _id_ (con los cálculos correspondientes para que siempre se le agregue un _id_ no existente) como identificador.

- **Lectura 🤓** 👉 Deberá tomar por consola el comando _leer_ y se deberá visualizar por consola el array completo de los autos presentes en la concesionaria.

- **Edición 📝** 👉 Deberá tomar por consola el comando _editar_ seguido del _id_ del auto a modificar y de los mismos campos que en la carga (con los datos finales del auto).

- **Borrado 🗑** 👉 Deberá tomar por consola el comando _borrar_ seguido del _id_ del auto a borrar.

-------

## Entrega

El formato de entrega será en este mismo repositorio, a través de una rama personalizada que se deberá llamar con el apellido del o los integrantes del grupo. Ej: _aguirre-rausch-reibel_.

Deberán clonar este repositorio en su entorno local así tienen la consigna disponible y ya queda seteado el remoto para empujar los cambios a medida que vayan trabajando.
Luego de clonarlo, deberán inmediatamente crear su propia rama y desde allí comenzar a trabajar.

**IMPORTANTE** Tener cuidado de no modificar o editar la rama _master_, y de hacerlo, descartar los cambios en la misma para que a la hora de empujar los cambios no se envíen hacia aquí, para que la rama _master_ quede limpia y solamente contenga el _readme.md_.
