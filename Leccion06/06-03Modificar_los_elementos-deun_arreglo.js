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
// Practicar estox2