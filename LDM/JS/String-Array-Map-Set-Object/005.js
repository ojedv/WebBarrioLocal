//005practiceWithBands.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:

"use strict"

 let grupos = [
   {nombre: "ACDC", genero: "Rock"},
   {nombre: "Cold Play", genero: "Pop"},
   {nombre: "NCT Dream", genero: "K-Pop"},
   {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let gruposHeavyMetal = grupos.filter(grupo => grupo.genero.includes("Heavy Metal")); // Filtra los grupos por género Heavy Metal

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let grupoColdPlay = grupos.find(grupo => grupo.nombre.includes("Cold Play")); // Busca el grupo Cold Play

//¿En qué posición del array se encuenta “Cold Play”?

let indexColdPlay = grupos.findIndex(grupo => grupo.nombre.includes("Cold Play")); // Busca el índice de Cold Play
console.log(indexColdPlay); // Muestra el índice de Cold Play

let indiceColdPlay = devolverIndice(grupos, "Cold Play"); // Llama a la función devolverIndice que devuelve el índice de Cold Play
console.log(indiceColdPlay); // Muestra el índice de Cold Play

function devolverIndice (array, name){
    for (const aux in array){
        if(array[aux].nombre.includes(name)){
            return parseInt(aux); // Guarda el índice de Cold Play
        }        
    
    }
    return -1; // Si no lo encuentra, devuelve -1

}

