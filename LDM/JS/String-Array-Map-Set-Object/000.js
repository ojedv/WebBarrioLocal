"use strict"

//Declara un array vacío.
let array = [];

//Declara un array com mas de 5 elementos.
let arrayConSeis = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrayConSeis.length; i++) {
    console.log(arrayConSeis[i]);
}

//Encuentra la longitud de tu array.
let longitud = arrayConSeis.length;
console.log(longitud);

//Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let primerElemento = arrayConSeis[0];
let elementoMedio = arrayConSeis[Math.floor(longitud / 2)];
let ultimoElemento = arrayConSeis[longitud - 1];
console.log(primerElemento, elementoMedio, ultimoElemento);

//Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = [1, "string", true, "0", null, 3.14];
let longitudMixed = mixedDataTypes.length;
console.log(longitudMixed);
longitudMixed > 5 ? console.log("El array tiene más de 5 elementos") : console.log("El array tiene 5 o menos elementos");

//Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];