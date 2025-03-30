5 > 4 // true

"apple" > "microsoft" // False JavaScript compara cadenas carácter por carácter usando el código Unicode. "a" tiene el código Unicode 97, y "m" tiene 109.

"2" > "12" // True Compara el unicode de la cadena en este caso 2 = 50 mayor que 1 = 49 

undefined == null // True Cuando se comparan estas dos no son realmente lo mismo pero a la hora de compararlos si.

undefined === null // False Son diferentes Tipos (undefined - object)

null == "\n0\n" // False null solo puede ser comparado con null o undefined

null === +"\n0\n" // False el + convierte la cadena en numero y son diferentes tipos