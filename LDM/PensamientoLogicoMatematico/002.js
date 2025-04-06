/*002eatBananas.js/.html

Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas).
Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si 
hay suficientes bananas para cada mono. Ejemplo:
Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
Cuántas bananas come cada mono?: en este caso 2 bananas , 
2 bananas y 1 banana, es decir, no se comparten, pero todos se comen alguna.
o en caso de que no haya suficientes:
¡Oh no!¡No hay suficientes bananas para los monos! 😭
*/

let monos = 0;
let bananas = 0;

let input = prompt("Introduce aqui 🐵🍌", "🐵🍌").split("");

for (let i = 0;i < input.length;i++){
    (input[i] == "🐵")? monos++ : bananas++; 

}

let reparticion = function splitBananas(monos,bananas){
    let result = bananas / monos;
    let frase = (result < 1)?
    "¡Oh no!¡No hay suficientes bananas para los monos! 😭":
    "Cada mono se come: " + Math.floor(result) + " Sobran: " + bananas%monos + " bananas." ;
    return frase;
}
alert(reparticion(monos,bananas));
