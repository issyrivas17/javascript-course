const autos = ["BMW", "VOLVO", "MERCEDES BENZ"];
console.log(autos);

console.log(autos[2]);
console.log(autos[0]);

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

for (let i = 0; i < autos.length; i++) {
    console.log(i + " :" + autos[i]);
}

autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

autos[autos.length] = "Ford";
console.log(autos);
console.log(autos.length)

autos[5] = "Porshe";
console.log(autos);

Array.isArray(autos);
console.log(Array.isArray(autos));

console.log(autos instanceof Array);