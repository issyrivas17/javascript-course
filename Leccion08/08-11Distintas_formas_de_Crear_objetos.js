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

let miObjeto = new Object();
let miObjeto = {};

let miCadena1 = new String("hola");
let miCadena2 = Hola;

let miNumero = new Number(1);
let miNumero2 = 2;

let miBoolean = new Boolean(false);
let miBoolean = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function() {};