/*006 verifyLuhn.js/.html

Algoritmo de Luhn: Se utiliza para verificar la validez de una tarjeta, pin, etc. Crear una función que devuelva si un número pasa el algoritmo 
de Luhn o no.

Número de ejemplo: 4012-8888-8888-1881

Se divide el número en dígitos.    4 0 1 2 8 8 8 8 8 8 8 8 1 8 8 1

Se multiplica por 2 los dígitos que ocupan las posiciones pares contando de derecha a izquierda y empezando por 1, no por 0. 

 8 0 2 2 16 8 16 8 16 8 16 8 2 8 16 1

Los números mayor a 9 se restan por 9.  8 0 2 2 7 8 7 8 7 8 7 8 2 8 7 1

Se suman todos los números. 90

Si el resto de dividirlo por 10 es 0, el número es válido. ✅*/

"use strict"

let numTarjeta = prompt("Introduce el número de tarjeta (sin guiones):","4012888888881881");
let suma = 0;
let tarjetArray = []; // Array para almacenar los dígitos de la tarjeta

luhn(numTarjeta); // Llama a la función luhn con el número de tarjeta ingresado por el usuario

function luhn(num) {  // Función para verificar la validez del número de tarjeta usando el algoritmo de Luhn
    
    tarjetArray = num.split("");
    tarjetArray = tarjetArray.reverse();

    for (let i = 0; i < tarjetArray.length; i++) {
        tarjetArray[i] = parseInt(tarjetArray[i]);
        if(i % 2 != 0) {
            tarjetArray[i] = tarjetArray[i] * 2;
            if (tarjetArray[i] > 9) {
                tarjetArray[i] = tarjetArray[i] - 9;
            }
        }
        suma = suma + tarjetArray[i];       
    }
    if (suma % 10 === 0) { // Si la suma es divisible por 10, el número es válido
        alert("Tarjeta válida");
    }
    else {
        alert("Tarjeta no válida");
    }


}