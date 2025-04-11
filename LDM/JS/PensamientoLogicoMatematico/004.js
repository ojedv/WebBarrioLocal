/* 004.js checkBirhday.js/.html
Crear un programa que pida adivinar 
tu cumpleaños ingresando por separado 
ingresar día y mes, en números, y 
mostrar luego si un mensaje si ha 
adivinado o no, cada parte, preguntar 
al usuario si quiere seguir jugando, 
darle 10 vidas 💚 que vaya perdiendo 
a medida que haga intentos. Y un 
mensaje al final de: //Has ganado 
// 🏅!! o uno de: // Has perdido 😿 
// !!!*/

"use strict"

let dia = 15;
let mes = 8;
let anyo = 2004;


let vidas = 10;
let respuesta = false;
let fechaIntro = 0;
let fechaIntroSplit = [];


do{

fechaIntro = prompt("Adivina mi cumpleaños!");
fechaIntro = fechaIntro.replace(/[-\/ ]/g, "/");
fechaIntroSplit = fechaIntro.split("/");
(checkBirthday())? alert("Has adivinado mi cumpleaños!! 🏅") : alert("No has adivinado mi cumpleaños 😿, te quedan " + vidas+" vidas");

}while (!respuesta) ;

function checkBirthday() {
    let diaIntro = parseInt(fechaIntroSplit[0]);
    let mesIntro = parseInt(fechaIntroSplit[1]);
    let anyoIntro = parseInt(fechaIntroSplit[2]);

    if (diaIntro === dia && mesIntro === mes && anyoIntro === anyo) {
        respuesta = true;
    } else {
        vidas--;
        respuesta = false;
    }
    return respuesta;
}
