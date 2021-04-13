class Persona {
    static contadorPersonas = 0; // atributos de nuestra clase
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.ContadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.ContadorPersonas;
        } else {
            console.log("Se han superado el maximo de objetos permitidos");
        }
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
            return this.idPersona + " " + this._nombre + " " + this._apellido;
        }
        //SObreescribiendo el metodo de la clase padre (objetc)
    toString() {
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia tipo padre 
        // o de tipo hijo 
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde chilezuela");
    }
    static saludar2(persona) {
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(); // llamar al constructor de la clase padre
        this.nombre = nombre;
        this.apellido = apellido;
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
console.log(persona1.toString());


let empleado1 = new Empleado("Karlota", "Mogollon", "sistemas")
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Juana", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);

Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ)

let persona3 = new Persona("Fabricio", "Toledo");
let persona4 = new Persona("Rubi", "Rivas");
let persona5 = new Persona("Amanda", "Fuentes");
let persona6 = new Persona("Maria", "Chavez")