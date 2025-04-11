/*008chooseHeadOrTails.js/.html
Cara o cruz
Crear un programa que permita escoger entre cara (🪙) o cruz (✖️).
El programa luego debe generar un resultado aleatorio y mostrar si
se acertó o no. El programa debe mostrar en cada vuelta cuántas 
rondas seguidas acertadas van, y si en algún momento se erra, 
reiniciar el contador a 0. También debe llevar una cuenta de la 
cantidad máxima de rondas seguidas que se hizo sin errar. Cuando 
se ingresa la opción SALIR (🚪), en vez de CARA o CRUZ, el programa 
debe mostrar la cantidad máxima de rondas seguidas acertadas junto 
a un mensaje de despedida, y terminar su ejecución. */

"use strict"
let eleccion = ""; // Variable para almacenar la elección del usuario
do{
let randomNum = Math.random(); // Variable para almacenar el número aleatorio
let resultado = "";
let contador = 0; // Contador de aciertos

randomNum < 0.5 ? resultado = "🪙" : resultado = "✖️";

eleccion = prompt("Elige cara (🪙) o cruz (✖️) o salir (🚪)", "cara").toLowerCase(); // Variable para almacenar la elección del usuario

eleccion = convertResult(eleccion)
eleccion === resultado? alert("¡Acertaste! " + resultado) && contador++: eleccion == "🚪" ? alert("Saliendo") :alert("Fallaste, el resultado fue: " + resultado); // Mensaje de acierto o error

}while(eleccion != "salir" && eleccion != "🚪"); // Mientras la elección no sea salir

function convertResult(eleccion){
    if(eleccion.includes("cara")){
        return "🪙"
    }
    if(eleccion.includes("cruz")){
        return "✖️"
    }
    if(eleccion.includes("salir")){
        return "🚪"
    }

}




