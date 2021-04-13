let persona = {
    nombre: "juan",
    apellido: "lastra",
    email: "mewamata@wii.com",
    edad: 20,
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }

}
console.log(persona.nombreCompleto);