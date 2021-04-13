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
    nombreCompleto() {
            return this._nombre + " " + this._apellido;
        }
        //SObreescribiendo el metodo de la clase padre (objetc)
    toString() {
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia tipo padre 
        // o de tipo hijo 
        return this.nombreCompleto() + " " + this._departamento;
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
        //Sobreescritura 
    nombreCompleto() {
        return super.nombreCompleto() + " " + this._nombre + " " + this._apellido + " " + this._departamento;
    }

}


let persona1 = new Persona("juan", "Perez")
console.log(persona1.toString()); // get nombre 

let empleado1 = new Empleado("Karlota", "Mogollon", "sistemas")
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());