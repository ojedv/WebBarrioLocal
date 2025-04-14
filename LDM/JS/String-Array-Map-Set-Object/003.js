//003usingArrayDisney.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:

"use strict"

 let disney = [
   { nombre: "Hércules", pelicula: "Hércules" },
   { nombre: "Megana", pelicula: "Hércules" },
   { nombre: "Hades", pelicula: "Hércules" },
   { nombre: "Campanilla", pelicula: "Peter Pan" },
   { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });

//Pintar el array
console.log(disney);

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.splice(0, 0, { nombre: "El capitán Garfio", pelicula: "Peter Pan" });

//Meter al cocodrilo detrás del capitán, no olvides la película
disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan" });

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
let peliPeter = []; // Array para almacenar los personajes de Peter Pan
for (const personajes of disney) { // Recorre el array
    if (personajes.includes("Peter Pan")) { // Si la película es Peter Pan
        peliPeter.push(personajes.nombre); // Añade el personaje al array
        console.log(personajes.nombre); // Muestra el personaje
    }
}

//Encontrar el índice de Campanilla.
let campanillaIndex = disney.findIndex(personaje => personaje.nombre.includes("Campanilla")); // Busca el índice de Campanilla
console.log(campanillaIndex); // Muestra el índice de Campanilla

//Buscar al cocodrilo.
for(const aux of disney)  {
    if(aux.nombre.includes("Cocodrilo")) { // Busca al cocodrilo
        console.log(aux); // Muestra el personaje
    }
}

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
shuffle(disney); // Llama a la función shuffle que baraja el array
console.log(disney); // Muestra el array barajado
