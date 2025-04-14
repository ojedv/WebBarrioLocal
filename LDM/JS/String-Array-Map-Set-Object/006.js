//006writeSeven.js/.html :

//Escribe una función que devuelva un array de siete números aleatorios en un rango 
// de 0-9. Todos los números deben ser únicos.

"use strict"

function crearArray(){
    let array = new Set(); // Crea un nuevo Set para almacenar números únicos
    while(array.size < 7){
        let numRandom = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 9
        array.add(numRandom); // Añade el número al Set
    }
    return array; // Devuelve el Set
}

let nuevoArray = crearArray(); // Llama a la función crearArray y almacena el resultado en nuevoArray
console.log(nuevoArray); // Muestra el Set
