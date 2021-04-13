let persona = {
    nombre: "juan",
    apellido: "lastra",
    email: "mewamata@wii.com",
    edad: 20,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }

}

persona.tel = "56945546";
console.log(persona);

//para eliminar

delete persona.tel;
console.log(persona);

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + " , " + persona.apellido);

//for in
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}
// objeto para imprimir
let personaArray = Object.values(persona);
console.log(personaArray);

// JSON

let personaString = JSON.stringify(persona);
console.log(personaString);