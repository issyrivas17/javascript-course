class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre() {
        return this._nombre;

    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;

    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this.apellido = apellido;
    }
}


let persona1 = new Persona("juan", "Perez")
console.log(persona1); // get nombre 

let empleado1 = new Empleado("Karlota", "Mogollon", "sistemas")
console.log(empleado1);
console.log(empleado1.nombre);

//REPASAR MUCHITO