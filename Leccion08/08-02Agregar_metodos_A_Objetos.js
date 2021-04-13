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