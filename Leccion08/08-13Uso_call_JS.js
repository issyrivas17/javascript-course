let persona1 = {
    nombre: "Rebeca",
    apellido: "Martinez",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;

    }
}
let persona2 = {
    nombre: "Luis",
    apellido: "lara"
}

// Uso de call para usar 
// el metodo persona1.nombreCompleto con los datos del persona 2
console.log(persona1.nombreCompleto());
persona1.nombreCompleto;
console.log(persona1.nombreCompleto.call(persona2));