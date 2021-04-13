const persona = {
    nombre: "Petra",
    apellido: "Angulo" // referencia
}

function cambiarValorObjeto(p1) {
    p1.nombre = "Guadalupe";
    p1.apellido = "Rodriguez";
}
//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);