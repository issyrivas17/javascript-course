function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}
let resultado = miFuncion(2, 3);

console.log(resultado);
// Declaracion funcion de tipo expresion
let x = function(a, b) { return a + b };

resultado = x(1, 2);
console.log(resultado);

(function(a, b) {
    console.log("Ejecutando la funcion" + (a + b));
})(3, 4);

// metodo toSting

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);