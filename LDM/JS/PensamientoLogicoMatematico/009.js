/*009SimonSays.js/.html

Replicar el juego de "Simón dice". El programa debe mostrar una secuencia de colores, 
agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores 
de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), 
el programa debe terminar. Los colores posibles son: rojo🔴, azul🔵, verde 🟢y 
amarillo🟡. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que 
se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite 
elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si 
se llega a esa cantidad de rondas sin errarle a la secuencia.*/

"use strict"

let colors = ["🔴", "🔵", "🟢", "🟡"]; // Colores 

let secuencia = []; // Secuencia de colores
let round = 0; // Ronda actual
let fallo = false;

do {
    secuencia = agregarColor(secuencia); // Agregar color a la secuencia
    mostrarSecuencia(secuencia); // Mostrar la secuencia de colores
    let numero = prompt("Introduce la secuencia de colores (🔴, 🔵, 🟢, 🟡)");

    // Comprobar si la secuencia introducida es correcta
    if (numero !== secuencia.join('')) {
        fallo = true; // Si hay fallo, termina el juego
        alert("¡Fallaste! Fin del juego.");
    }

    round++; // Incrementa ronda

} while (!fallo);



function agregarColor(secuencia){
    let numRandom = Math.floor(Math.random() * 4); // Número aleatorio entre 0 y 3
    let color = colors[numRandom]; // Elegir color de la lista
    secuencia.push(color); // Agregar color a la secuencia
    return secuencia;
}

function mostrarSecuencia(secuencia){
    alert("Secuencia: " + secuencia.join(' ')); // Mostrar la secuencia de colores
}




