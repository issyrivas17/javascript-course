let persona = {
    nombre: "juan",
    apellido: "lastra",
    email: "mewamata@wii.com",
    edad: 20,
    idioma: "fr",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }

}
console.log(persona.lang);
persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);