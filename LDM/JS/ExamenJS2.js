"use strict"

// Ejercicio 1 - Inventario de Productos

let productos = [
  { id: 1, categoria: "bebida", precio: 1.5, cantidad: 100 },
  { id: 2, categoria: "comida",   precio: 3.2, cantidad: 52 },
  { id: 3, categoria: "bebida", precio: 2.0, cantidad: 80 },
  { id: 4, categoria: "bebida", precio: 1.59, cantidad:  96 },
  { id: 5, categoria: "hogar", precio: 5.99, cantidad:  12 }
];

// A:
function calcularValorInventario(productos){
  let valorTotal = 0;
  productos.forEach(producto => { // Recorre el array de objetos
    valorTotal = valorTotal + (producto.precio * producto.cantidad);
  });
  return valorTotal;
}

// B:
function grupoPorCategoria(productos) {
    let mapa = new Map();  // Crear el Map donde almacenaremos las categorías y sus productos.
    
    productos.forEach(producto => {
      // Si la categoría ya existe en el Map, la obtenemos; si no, la inicializamos como un array vacío.
      if (!mapa.has(producto.categoria)) {
        mapa.set(producto.categoria, []);
      }
  
      // Añadimos el producto actual al array correspondiente a su categoría.
      mapa.get(producto.categoria).push(producto);
    });
  
    return mapa;  // Devolvemos el Map con los productos agrupados por categoría.
  }

// D:
function categoriasDisponibles(productos){
    let categoriasUnicas = new Set(); // Creamos el set dentro para no crearlo innecesariamente, solo cuando se llame.
    productos.forEach(producto => {
        categoriasUnicas.add(producto.categoria); // "add" es el "push" de la clase set.
    });
    return categoriasUnicas;
}

// Ejercicio 2 - “Bestiario Mágico”

// A:
let varitaLiteral = {nombre:"sauco", poder:"hielo", nivel:3};

// B:
function crearPocion(nombre, efecto, cantidad){
    let pocion = new Object(); // Creamos un objeto vacio para luego meterle las propiedades.
    pocion.name = nombre; // Le asignamos las propiedades al objeto.  
    pocion.efecto = efecto;
    pocion.cantidad = cantidad;

    return pocion; // Devolvemos el objeto creado.
  }
    let p1 = crearPocion("pocion1", "cura", 10); // Creamos una pocion con el constructor.
    let p2 = crearPocion("pocion2", "cura", 20); 

// C:
class Artefacto{
  constructor(nombre, material, rareza){
    this.name = nombre;
    this.mat = material;
    this.rare = rareza;
  }
  describir(){ // Como un toString basicamente.
    let str = `Artefacto: ${this.name} (material: ${this.mat}, rareza: ${this.rare})`;
    return str;
  }
}

// D:
class Reliquia {
    constructor(nombre, origen, nivelMágico){ // Pongo los nombres del objeto diferentes para diferenciarlos pero da igual realmente.
      this.name = nombre;
      this.orig = origen;
      this.magLvl = nivelMágico;
    }
    toString(){
        return `Reliquia ${this.name} de origen ${this.orig}, nivel mágico: ${this.magLvl}`;
    }
}
let tesoro = new Reliquia("CofreOro","Romano",4);
/*
PARA CASA, junto con todo hecho decentemente, si te da tiempo en examen hazlo después de entregar y avisar a tu profesora:
e) Crea un prototipo base let baseMagica = { activar() { return \Activando ${this.nombre}...; } }.

Usa Object.create(baseMagica) para generar un objeto amuleto al que le asignes luego con “dot notation” las propiedades nombre y poder.

Llama a amuleto.activar() y comprueba que funciona.
*/
let baseMagica = {
    activar() {
      return `Activando ${this.nombre}...`;
    }
  };
  
  let amuleto = Object.create(baseMagica);  // Creas amuleto con baseMagica como prototipo.
  amuleto.name = "Amuleto de la suerte";  // Asignas las propiedades.
  amuleto.poder = "suerte";
  
  console.log(amuleto.activar()); 

/*
f) Colección y análisis
Junta todos los objetos anteriores en un array bestiario = […].

Usa un Map para construir un mapeo de nombre → objeto (clave: nombre de cada objeto).

Usa un Set para obtener la lista de todos los “niveles” o “rareza” (la propiedad numérica o de texto que indique fuerza/rango) únicos de tu bestiario.

Finalmente, muestra por consola:

Nombre de cada objeto y su tipo de creación (literal, fábrica, constructor, …).

El tamaño del Set (cuántos niveles/rareza distintos hay).

*/
let bestiario = [varitaLiteral, p1, p2, tesoro];

// Creamos un Map donde la clave será el nombre y el valor el objeto
let mapaBestiario = new Map();
bestiario.forEach(objeto => {
  let nombre = objeto.name ;
  mapaBestiario.set(nombre, objeto);
});

// Creamos un Set para guardar los niveles o rarezas únicas
let nivelesUnicos = new Set();
bestiario.forEach(objeto => {
  if (objeto.nivel) nivelesUnicos.add(objeto.nivel);
  if (objeto.rare) nivelesUnicos.add(objeto.rare);
  if (objeto.magLvl) nivelesUnicos.add(objeto.magLvl);
});

// Mostramos los objetos y su tipo de creación
console.log("Objetos del bestiario:");
bestiario.forEach(objeto => {
  console.log(`Nombre: ${nombre}, Tipo: ${objeto.constructor.name}`);
});

// Mostramos info del Set
console.log(`Cantidad de niveles/rareza distintos: ${nivelesUnicos.si   ze}`);
console.log(nivelesUnicos.size); // Muestra el tamaño del Set


