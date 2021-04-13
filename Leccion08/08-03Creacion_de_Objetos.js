let x = 10;
console.log(x.lenght);

let persona = {
    nombre: "juan",
    apellido: "lastra",
    email: "mewamata@wii.com",
    edad: 20,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }

}

console.log(persona.nombre);
console.log(persona.edad)
console.log(persona.apellido);

console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = "carla";
persona2.direccion = "Rosas 5555";
persona.tel = "+56 925845";

console.log(persona2.nombre);