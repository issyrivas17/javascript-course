class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

    }
}
let persona1 = new Persona("juan", "Perez");
console.log(persona1);

let persona2 = new Persona("carla", "perez");
console.log(persona2);