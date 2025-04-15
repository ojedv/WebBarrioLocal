//009studyAtHogwarts.js/.html

//Crea una función-objeto llamada hogwartsStudent que sea capaz de gestionar la siguiente información:
let hogwartsStudent = {
  nombre: "Hermione Granger",
  casa: "Gryffindor",
  mascota: "Crookshanks",
  asignaturas: ["Pociones", "Transformaciones", "Encantamientos"],
  año: 3,
  sangre: "mestiza",
  prefecto: true
}

//Muestra por consola el nombre completo del estudiante, la casa a la que pertenece y su mascota.
console.log(hogwartsStudent.nombre); 
console.log(hogwartsStudent.casa);
console.log(hogwartsStudent.mascota);

//Añade una nueva propiedad al objeto llamada patronus y asígnale el valor "Nutria".
hogwartsStudent.patronus = "Nutria";

//Agrega una nueva asignatura al array asignaturas, llamada "Defensa Contra las Artes Oscuras".
hogwartsStudent.asignaturas.push("Defensa Contra las Artes Oscuras");

//Cambia el valor de la propiedad año a 4.
hogwartsStudent.año = 4;

//Elimina la propiedad sangre del objeto.
delete hogwartsStudent.sangre;

//Crea una función printHogwartsStudent que reciba el objeto hogwartsStudent y muestre 
// por consola un resumen como este:
/*Hermione Granger es una estudiante de Gryffindor en su cuarto año. 
Tiene una mascota llamada Crookshanks y su patronus es una Nutria. 
Sus asignaturas son: Pociones, Transformaciones, Encantamientos, Defensa Contra las Artes Oscuras.*/

function printHogwartsStudent(par1) {
    console.log(`${par1.nombre} es una estudiante de ${par1.casa} en su ${par1.año} año. 
        Tiene una mascota llamada ${par1.mascota} y su patronus es una ${par1.patronus}. 
        Sus asignaturas son: ${par1.asignaturas.join(", ")}.`);
    
}
printHogwartsStudent(hogwartsStudent); 

//Reutiliza la función-objeto y muestra:

/*Ginny Weasley es una estudiante de Gryffindor en su cuarto año. 
Tiene una mascota llamada Arnold y su patronus es un Caballo. 
Sus asignaturas son: Encantamientos, Vuelo, Pociones, Defensa Contra las Artes Oscuras.*/

let hogwartsStudent2 = {
    nombre: "Ginny Weasley",
    casa: "Gryffindor",
    año: 4,
    mascota: "Arnold",
    patronus: "Caballo",
    asignaturas: ["Encantamientos", "Vuelo", "Pociones", "Defensa Contra las Artes Oscuras"],
  };

  printHogwartsStudent(hogwartsStudent2); 