let horaDia = 0;
let mensaje;

if (horaDia >= 6 && horaDia <= 11) {
    mensaje = "Buenos dias";
} else if (horaDia >= 13 && horaDia <= 18) {
    mensaje = "Buenas tardes";
} else if (horaDia <= 18 && horaDia >= 23) {
    mensaje = "Buenas noches";
} else if (horaDia <= 0 && horaDia <= 5) {
    mensaje = "A mimir";
}
console.log(mensaje);