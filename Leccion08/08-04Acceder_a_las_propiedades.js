let persona = {
    nombre: "juan",
    apellido: "lastra",
    email: "mewamata@wii.com",
    edad: 20,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }

}

persona["apellido"];
console.log(persona["apellido"]);

//for in 

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);


}