"" + 1 + 0 // "10" El + actua como concatenador y convierte todo lo que tenga cadena en cadena.

"" - 1 + 0 // -1 El - solo actua con numeros y convierte "" en 0.

true + false // 1 Se convierten en numeros true - 1 false - 0

6 / "3" // 2 Al ser "/" un operador lo convierte en 3

"2" * "3" // 6 Convierte las cadenas en numeros

4 + 5 + "px" // 9 Suma normal

"$" + 4 + 5 // "$45" Concatena todo 

"4" - 2 // 2 Convierte "4" en 4

"4px" - 2 // NaN Como los operadores en las cadenas esperan numeros y en este hay letras el resultado es NaN not a number

" -9 " + 5 // " -9 5" Concatena el 5

" -9 " - 5 // -14 Los operadores ignoran los espacios -9 - 5 

null + 1 // 1 Null se convierte en 0 con operadores

undefined + 1 // NaN undefined a diferencia de null no se convierte en 0 sino en NaN entonces NaN + 1 NaN

" \t \n" - 2 // -2 (Espacios, tabulaciones y saltos de línea) se convierte en 0.