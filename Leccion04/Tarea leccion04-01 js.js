let hora = 23;
console.log(typeof hora);
let mensaje;
if (hora == 2 || hora == 3 || hora == 4) {
    mensaje = "Buenas tardes";
} else if (hora == 5 || hora == 6 || hora == 8) {
    mensaje = "Buenas noches";
} else if (hora == 23 || hora == 00) {
    mensaje = "A mimir";
}
console.log(mensaje);