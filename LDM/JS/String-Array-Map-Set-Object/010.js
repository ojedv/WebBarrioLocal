//010exploringtheunexplored.js/.html 🎈

"use strict"

//Crea un objeto Map vacío llamado personajesUp.
let personajesUp = new Map();

//Añade al Map los siguientes personajes y sus roles en la película:
/*Clave: "Carl Fredricksen", Valor: "Protagonista principal"
Clave: "Russell", Valor: "Explorador entusiasta"
Clave: "Dug", Valor: "Perro que habla"
Clave: "Kevin", Valor: "Ave tropical gigante"
Clave: "Charles Muntz", Valor: "Antagonista"*/
personajesUp.set("Carl Fredricksen", "Protagonista principal");
personajesUp.set("Russell", "Explorador entusiasta");
personajesUp.set("Dug", "Perro que habla");
personajesUp.set("Kevin", "Ave tropical gigante");
personajesUp.set("Charles Muntz", "Antagonista");


//Muestra por consola el contenido inicial del Map.
console.log(personajesUp); // Mostrar el Map por consola

////Comprueba con has() si existen los personajes "Russell" y "Alpha" (el perro alfa). Muestra el resultado.
console.log(personajesUp.has("Russell")); // true
console.log(personajesUp.has("Alpha")); // false

//Obtén y muestra el rol del personaje "Dug" con get().
console.log(personajesUp.get("Dug")); 

//Actualiza el valor asociado a "Russell" a "Explorador leal y valiente" y muestra el nuevo valor.
personajesUp.set("Russell", "Explorador leal y valiente");
console.log(personajesUp.get("Russell"));

//Elimina al personaje "Charles Muntz" del Map usando delete() y muestra el contenido restante.
personajesUp.delete("Charles Muntz");

//Itera sobre los personajes y sus descripciones con forEach() y muestra cada par formateado así: "Carl Fredricksen: Protagonista principal"
personajesUp.forEach(personaje => {
    console.log(`${personaje[0]}: ${personaje[1]}`); // Mostrar cada par clave-valor del Map, cada elemento del .map es un array [clave, valor]
})

//Muestra cuántos personajes hay actualmente en el Map utilizando size.
console.log(personajesUp.size); 

//Vacía el Map usando clear() y verifica que esté vacío mostrando su contenido y tamaño.*/
personajesUp.clear(); 
console.log(personajesUp);
console.log(personajesUp.size);
