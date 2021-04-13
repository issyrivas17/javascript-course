// funcion contructor de objetos tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;

    }
}
Persona.prototype.tel = "+56952455"
let padre = new Persona("Juan", "lastra", "mewamata@wii.com");
padre.tel = "55645";
console.log(padre.tel);

let madre = new Persona("Maria", "De lastra", "MariaJ@ajak.com");
console.log(madre.tel);

padre.nombre = "carlos";
console.log(padre);