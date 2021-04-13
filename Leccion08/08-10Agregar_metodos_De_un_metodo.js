// funcion contructor de objetos tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;

    }
}

let padre = new Persona("Juan", "lastra", "mewamata@wii.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Maria", "De lastra", "MariaJ@ajak.com");
console.log(madre.nombreCompleto());

padre.nombre = "carlos";
console.log(padre);