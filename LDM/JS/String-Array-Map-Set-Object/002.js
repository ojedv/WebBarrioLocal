//002usingArrayFruits.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:

"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.splice(0,0,"Cereza");

//Añadimos melocotón al final
fruits.push("Melocotón");

//Mostrar el array elemento a elemento con forEach
fruits.forEach(fruit => {
    console.log(fruit);
  });
  
//Eliminamos el primer elemento.
fruits.shift();

//Eliminamos el último elemento.
fruits.pop();

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.*/
for (const fruit of fruits) { // Recorre el contenido
    console.log(fruit);
}
for (const index in fruits) { // Recorre el índice
    console.log(fruits[index]);
}




