/*003 chooseVegetarian.js/.html

Recomendación de comida

Crear un programa que pregunte si va el usuario va
 a almorzar o cenar, y si es vegetariano o no. 
 Dependiendo de las respuestas, debe recomendar 
 un plato (es decir, debe haber cuatro platos 
 posibles). 🍝🥗🥙🍣
 */

 "use strict"

 let plato1 = "Arroz con pollo";
 let plato2 = "Pizza vegetariana";
 let plato3 = "Pizza carbonara";
 let plato4 = "Ensalada de pasta";

let almuerzo = true;
let vegetarian = false;

let respuesta1 = prompt("Vas a comer o a cenar?")
let respuesta2 = prompt("Eres vegano/a?")
respuesta1 = respuesta1.toLowerCase();
respuesta2 = respuesta2.toLowerCase();


function checkLunch(par1,par2){
    par1.includes("comer")?almuerzo = true: almuerzo = false; //El metodo contains en JS es includes.
    par2.includes("si")?vegetarian = true: vegetarian = false;
}
checkLunch(respuesta1,respuesta2);


almuerzo && vegetarian?alert(plato4):almuerzo && !vegetarian?alert(plato1):!almuerzo && vegetarian?alert(plato2):alert(plato3)

