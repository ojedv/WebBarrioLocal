//008createDogs.js/.html:

//Crear un objeto vacío llamado dog 🐶
let dog = {}; 

//Imprime el objeto dog en la consola
console.log(dog); 

//Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog = {
    name: "willy",
    legs: 4,
    color: "black",
    age: 3,
    bark() {
        return "woof woof";
    }
};

//Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(dog.name); // Muestra el nombre del perro
console.log(dog.legs); // Muestra el número de patas del perro
console.log(dog.color); // Muestra el color del perro
console.log(dog.age); // Muestra la edad del perro
console.log(dog.bark()); // Muestra el sonido que hace el perro

//Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "labrador"; // Añade la propiedad breed al objeto dog
dog.getDogInfo = function() { // Añade la propiedad getDogInfo al objeto dog
    return `El perro ${this.name} es un ${this.breed} de color ${this.color}.`;
};


