"use strict";

let thor = "Thor es el hijo de Odín";

// Largo de la cadena --> thor.length
console.log(thor.length); // 27

//Encontrar la letra o --> thor.indexOf("o")
console.log(thor.indexOf("o")); // 4

//Encontrar el carácter que ocupa la posición 3
console.log(thor.charAt(3)); // r

//¿Qué carácter ocupa la posición 1?
console.log(thor.charAt(1)); // h

//Trocea la cadena usando los espacios en blanco
let thorCortada = thor.split(" "); // Troceo la cadena usando el espacio como divisor
console.log(thorCortada); // ["Thor", "es", "el", "hijo", "de", "Odín"]

//Reemplaza Thor por Loki
thor = thor.replace("Thor", "Loki"); // Reemplazo Thor por Loki
console.log(thor); 

//Recorta la cadena para que devuelva la palabra Odín
let thorSubs = thor.substring(thor.indexOf("Odín"), thor.length); // Recorto la cadena para que devuelva la palabra Odín
console.log(thorSubs); // Odín Opcion 1
console.log(thorCortada[thorCortada.length - 1]); // Odín Opcion 2

//¿Puedes encontrar la letra a? Demuéstralo
let existeA = thor.includes("a"); // Compruebo si existe la letra a en la cadena
console.log(existeA); // false

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

let mitad = Math.floor(thor.length / 2); // Calculo la mitad de la cadena
for (let i = mitad; i > 0; i--) {
    let letra = thor.charAt(i) // Recorro la cadena desde la mitad
    if (letra !== " ") { // Si no es un espacio
        thor.replace(letra, letra.toLowerCase()); // Reemplazo el carácter por su versión en minúsculas
    }
} 

class MiString extends String{ // Como la clase String no tiene un metodo para devolver cuantas veces aparece un caracter, creo una clase que lo haga, aunque no sea necesario, lo he visto interesante
    constructor(cadena) {
        super(cadena); // llama al constructor de String
    }
    
    caracterPosicion(posicion) {
        return this.cadena.charAt(posicion); // Devuelve el carácter en la posición dada
    }
    
    contarCaracter(caracter) { // Contamos el número de veces que aparece un carácter en la cadena
        let contador = 0;
        for (let i = 0; i < this.cadena.length; i++) {
            if (this.cadena.charAt(i) === caracter) { // Si el carácter coincide, incrementamos el contador
                contador++; 
            }
        }
        return contador; // Devuelve el número de veces que aparece el carácter
    }
}