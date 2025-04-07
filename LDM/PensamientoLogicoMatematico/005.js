/* 005 chooseIngredients.js/.html

Crear un programa que pregunte por separado si tiene 5 ingredientes. 
Según los ingredientes que tenga, mostrar un mensaje con todas las 
comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 
ingredientes. Para cada cantidad, debe haber al menos 2 
comidas/recetas posibles (excepto para la de 5). Se deben mostrar 
todas las posibles, incluyendo las que requieran menos ingredientes 
que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se 
pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse 
también debe mostrarse un mensaje.*/

"use strict"

let ingredientes = ["🧅Huevos","🥔Patatas","🧀Queso","🍞Pan","🥓Bacon"];

let numIngredientes = prompt("¿Cuántos ingredientes tienes? (2-5)","5");

if (numIngredientes < 2 || numIngredientes > 5) {
    alert("Número de ingredientes no válido. Debe ser entre 2 y 5.");
} else {
    let recetas = [];

    if (numIngredientes >= 2) {
        recetas.push("Huevos revueltos con queso (" + ingredientes[0] + " + " + ingredientes[2] + ")");
        recetas.push("Pan con bacon crujiente (" + ingredientes[3] + " + " + ingredientes[4] + ")");
    }
    if (numIngredientes >= 3) {
        recetas.push("Sandwich de pan, queso y bacon (" + ingredientes[3] + " + " + ingredientes[2] + " + " + ingredientes[4] + ")");
        recetas.push("Tortilla rápida con patatas y queso (" + ingredientes[0] + " + " + ingredientes[1] + " + " + ingredientes[2] + ")");
    }
    if (numIngredientes >= 4) {
        recetas.push("Desayuno energético (" + ingredientes[3] + " + " + ingredientes[0] + " + " + ingredientes[4] + " + " + ingredientes[2] + ")");
        recetas.push("Tortilla completa con bacon (" + ingredientes[0] + " + " + ingredientes[1] + " + " + ingredientes[2] + " + " + ingredientes[4] + ")");
    }
    if (numIngredientes == 5) {
        recetas.push("Mega tortilla brunch con todo (" + ingredientes[0] + " + " + ingredientes[1] + " + " + ingredientes[2] + " + " + ingredientes[4] + " + " + ingredientes[3] + ")");
    }

    alert("Puedes hacer:\n" + recetas.join("\n"));
}
    







