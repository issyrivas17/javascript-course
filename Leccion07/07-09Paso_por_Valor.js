// valor primitivo 
let x = 10;

function cambiarValor(a) {
    a = 20;
    return;
}
// Paso por valor 
cambiarValor(x); //10 

console.log(x);
console.log(a);

// repasar esto.