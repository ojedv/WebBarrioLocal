//007setCode.js/.html

//Crear un Set vacío llamado code.
let code = new Set();

//Añadir al Set los siguientes elementos (respetando el orden): "JavaScript", "Python", "Java", "JavaScript" (duplicado), "C++".
code.add("JavaScript");
code.add("Python");
code.add("Java");
code.add("JavaScript"); // Este es un duplicado y no se añadirá al Set
code.add("C++");

//Mostrar por consola el contenido inicial del Set y observar si se han insertado elementos duplicados.
console.log(code); // Mostrar el Set por consola

//Comprobar mediante el método has() si existen los elementos "Java" y "Ruby". Mostrar los resultados en consola.
console.log(code.has("Java")); // true
console.log(code.has("Ruby")); // false

//Eliminar el elemento "C++" usando el método delete() y mostrar el contenido actualizado.
code.delete("C++"); // Elimina el elemento C++
console.log(code); // Mostrar el Set actualizado

//Iterar sobre los elementos del Set utilizando forEach() e imprimir cada elemento por consola.
code.forEach(element => {
    console.log(element); // Mostrar cada elemento del Set
});

//Mostrar el número total de elementos actuales en el Set utilizando la propiedad size.
console.log(code.size); // Mostrar el tamaño del Set

//Eliminar todos los elementos del Set con el método clear() y mostrar el Set vacío y su nuevo tamaño. 
code.clear(); // Elimina todos los elementos del Set
console.log(code); // Mostrar el Set vacío
console.log(code.size); // Mostrar el tamaño del Set (debería ser 0)