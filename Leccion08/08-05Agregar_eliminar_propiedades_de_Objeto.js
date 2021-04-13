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