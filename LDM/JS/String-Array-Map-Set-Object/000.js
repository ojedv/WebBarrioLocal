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

//Imprima el array usando console.log().
console.log(itCompanies);

//Imprima el número de empresas en el array.
console.log(itCompanies.length);

//Imprime la primer empresa , la intermedia y la última empresa
let primeraEmpresa = itCompanies[0];
let empresaIntermedia = itCompanies[Math.floor(itCompanies.length / 2)];
let ultimaEmpresa = itCompanies[itCompanies.length - 1];

//Imprime cada empresa.
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}

//Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
let oracion = itCompanies.join();
console.log("${oracion} son grandes empresas de TI.");

//Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
nombreEmpresa = prompt("Ingrese el nombre de la empresa a buscar:");
let exist = false;

for (let i = 0; i < itCompanies.length; i++) { // Recorro el array de empresas
    if (itCompanies[i].includes(nombreEmpresa)) { // Compruebo si el string introducido por el usuario existe en el array
        exist = true;
    } 
}
if (exist) { // Si existe, imprimo el mensaje
    console.log("La empresa existe en el array.");
}
else {  
    console.log("La empresa no existe en el array.");
}

//Filtre las empresas que tienen más de una 'o' sin el método filter()
let nuevoArray = new Set(); // Creo un set para cuando compruebo si tiene mas de 2 "o" no meter el mismo varias veces
contador = 0;
for (let i = 0; i < itCompanies.length; i++) {  // Recorro el array de empresas
    itCompanies[i]
    for (let j = 0; j < itCompanies[i].length; j++) { // Recorro el string de cada empresa
        if (itCompanies[i][j] === "o") {
            contador++;
        }
        if (contador > 1) {
            nuevoArray.add(itCompanies[i]); // Si tiene mas de 1 "o" lo añado al set
        }
    }
    contador = 0;
}
console.log(nuevoArray);
    
//Ordene el array usando el método sort()
nuevoArray.sort(); // Ordeno el array de empresas
console.log(itCompanies);

//Invierte la array usando el método reverse()
nuevoArray.reverse(); // Invierto el array de empresas con +1 "o"
console.log(itCompanies);

//Cortar las primeras 3 empresas del array
nuevoArray.splice(0, 3); // Elimino las 3 primeras empresas del array
console.log(itCompanies);

//Cortar las últimas 3 empresas del array   
nuevoArray.splice(-3, 3); // Elimino las 3 últimas empresas del array el - nos indica que empieza desde el final
console.log(itCompanies);   

//Cortar la empresa o empresas intermedias de TI del array
itCompanies.length / 2 % 2 === 0 ? // Si el array tiene un número impar de elementos elimino la empresa del medio
nuevoArray.splice((itCompanies.length / 2) - 1, 2) : // Si el array tiene un número par de elementos elimino las dos empresas del medio
nuevoArray.splice(Math.floor(itCompanies.length / 2), 1); // Si es impar elimino la empresa intermedia del array

//Eliminar la primera empresa de TI del array
itCompanies.shift(); // Elimino la primera empresa del array
console.log(itCompanies);

//Eliminar la empresa o empresas intermedias de TI del array
itCompanies.length / 2 % 2 === 0 ? // Si el array tiene un número impar de elementos elimino la empresa del medio
nuevoArray.splice((itCompanies.length / 2) - 1, 2) : // Si el array tiene un número par de elementos elimino las dos empresas del medio
nuevoArray.splice(Math.floor(itCompanies.length / 2), 1); // Si es impar elimino la empresa intermedia del array

//Elimine la última empresa de TI del array
itCompanies.pop(); // Elimino la última empresa del array
console.log(itCompanies);

//Eliminar todas las empresas de TI
itCompanies.splice(0, itCompanies.length); // Elimino todas las empresas del array
console.log(itCompanies);