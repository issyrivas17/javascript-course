// Parametros: Se conoce como parametro la lista de valores que va a recibir una funcion.
// Argumentos: Son los valores que pasamos a nuestra funcion.

let sumar = function(a = 4, b = 5) {
    console.log(arguments[0]);
    console.log(arguments[1])
    console.log(arguments[2])
    return a + b
};

resultado = sumar();
console.log(resultado);