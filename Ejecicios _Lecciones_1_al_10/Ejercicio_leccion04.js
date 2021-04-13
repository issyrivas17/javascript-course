// Estaciones del año 
let mes = 4;
let estacion;

if (mes == 1 || mes == 12 || mes == 2 || mes == 3) {
    estacion = "verano";
} else if (mes == 4 || mes == 5 || mes == 6) {
    estacion = "Otoño";

} else if (mes == 7 || mes == 8 || mes == 9) {
    estacion = "Invierno";

} else if (mes == 10 || mes == 11 || mes == 12) {
    estacion = "Primavera";

}

console.log(estacion);

// calculo del año con switch 


let mes1 = 8;
let estacion1;

switch (mes1) {
    case 12:
    case 1:
    case 3:
    case 2:
        estacion = "Verano";
        break;

    case 7:
    case 8:
    case 9:
        estacion = "invierno";
        break;

    case 4:
    case 5:
    case 6:
        estacion = "Otoño";
        break;
    case 10:
    case 11:
    case 12:
        estacion = "Primavera";
        break;
}
console.log(estacion);

// Mandar mensaje a consola depende de la hora del dia

let horaDeldia = 13;
let mensaje;

if (horaDeldia >= 6 && horaDeldia <= 11) {
    mensaje = "Buenos dias";
} else if (horaDeldia >= 13 && horaDeldia <= 18) {
    mensaje = "Buenas tardes";
} else if (horaDeldia <= 18 && horaDeldia >= 23) {
    mensaje = "Buenas noches";
} else if (horaDeldia <= 0 && horaDeldia <= 5) {
    mensaje = "A mimir";
}
console.log(mensaje);