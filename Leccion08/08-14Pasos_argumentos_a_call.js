let persona1 = {
    nombre: "Rebeca",
    apellido: "Martinez",
    nombreCompleto: function(titulo, tel) {
        return titulo + ":" + this.nombre + " " + this.apellido + " " + tel;

    }
}
let persona2 = {
    nombre: "Luis",
    apellido: "lara"
}

// Uso de call para usar 
// el metodo persona1.nombreCompleto con los datos del persona 2
console.log(persona1.nombreCompleto("Ingeniera", "+5985454"));
persona1.nombreCompleto;
console.log(persona1.nombreCompleto.call(persona2, "Medico", "+5685121"));