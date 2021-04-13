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

// Uso de apply para usar 
// el metodo persona1.nombreCompleto con los datos del persona 2
console.log(persona1.nombreCompleto("ing", "565525"));
let arreglo = ["medico", "654454"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));