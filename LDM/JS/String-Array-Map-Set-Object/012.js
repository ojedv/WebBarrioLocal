//012manageCourses.js/html

"use strict"

//Crea una clase que gestione cursos online. Cada curso tendrá estudiantes registrados. 
// Usa objetos Set para asegurarte de que no se repitan estudiantes dentro de un curso. 
// El ejercicio debe realizar las siguientes operaciones claramente separadas:


class estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre; // Nombre del estudiante
        this.edad = edad; // Edad del estudiante
    }
}
class curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso; // Nombre del curso
        this.estudiantes = new Set(); // Conjunto de estudiantes registrados en el curso
    }
}

class gestionEstudiantes {
    añadirEstudiante(estudiante,curso){
        curso.estudiantes.add(estudiante); 
        console.log(`Estudiante ${estudiante.nombre} añadido al curso.`); 
    }
    eliminarEstudiante(estudiante,curso){
        curso.estudiantes.delete(estudiante); 
        console.log(`Estudiante ${estudiante.nombre} eliminado del curso.`); 
    }
    unirEstudiantes(curso1, curso2) {
        let estudiantesUnidos = new Set([...curso1.estudiantes, ...curso2.estudiantes]); // El ...curso es para convertir el Set en un array y luego unirlo con el otro array
        console.log(`Estudiantes unidos de ${curso1.nombreCurso} y ${curso2.nombreCurso}.`);
        return estudiantesUnidos;
    }
    estudiantesComunes(curso1, curso2) {
        let comunes = new Set();
        for (let estudiante of curso1.estudiantes) {
            if (curso2.estudiantes.has(estudiante)) {
                comunes.add(estudiante);
            }
        }
        return comunes;
    }
    comprobarEstudiante(estudiante, curso) {
        return curso.estudiantes.has(estudiante);
    }
    vaciarCurso(curso) {
        curso.estudiantes.clear();
        console.log(`El curso ${curso.nombreCurso} ha sido vaciado.`);
    }
}

//Crear una función para añadir estudiantes a un curso.
//Crear una función para eliminar estudiantes de un curso.
//Crear una función para unir estudiantes de dos cursos diferentes.
//Crear una función para obtener estudiantes comunes entre dos cursos.
//Crear una función que compruebe si un estudiante está en un curso específico.
//Crear una función para vaciar completamente un curso
