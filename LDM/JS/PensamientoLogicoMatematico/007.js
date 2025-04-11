"use strict"

let num = prompt("Introduce el número de tarjeta (sin guiones):", "4012888888881881");
let tipoTarjeta = "";

if (!valido(num)) {
    tipoTarjeta = "❌ invalid";
} else {
    if (num.length === 15 && (num.startsWith("34") || num.startsWith("37"))) {
        tipoTarjeta = "💳 American Express ✅";
    }
    else if ((num.length === 13 || num.length === 16) && num.startsWith("4")) {
        tipoTarjeta = "💳 Visa ✅";
    }
    else if (num.length === 16 &&
        (num.startsWith("51") || num.startsWith("52") || num.startsWith("53") ||
         num.startsWith("54") || num.startsWith("55"))) {
        tipoTarjeta = "💳 MasterCard ✅";
    }
    else {
        tipoTarjeta = "❌ invalid";
    }
}

alert(tipoTarjeta);

function valido(num) { // Validar el número de tarjeta usando el algoritmo de Luhn
    let tarjetArray = num.split("").reverse();
    let suma = 0;

    for (let i = 0; i < tarjetArray.length; i++) {
        let digito = parseInt(tarjetArray[i]);

        if (i % 2 !== 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        suma += digito;
    }

    return suma % 10 === 0; // Si la suma es divisible por 10, el número es válido
}
