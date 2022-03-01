"use strict";
class Clase {
    constructor(nombre, numero, boleano, arreglo) {
        this.nombre = nombre;
        this.numero = numero;
        this.boleano = boleano;
        this.arreglo = arreglo;
    }
    getUsuario(nombre, edad, rol) {
        let texto = "El usuario " + nombre + " pertenece al rol " + rol;
        if (edad != 0) {
            texto += " y tiene la edad de " + edad;
        }
        texto += "\n";
        return texto;
    }
    toString() {
        return "Nombre: " + this.nombre + "\n" +
            "Numero: " + this.numero + "\n" +
            "Boleano: " + this.boleano + "\n" +
            "Arreglo: " + this.arreglo + "\n";
    }
}
console.log("Tarea 1");
let arr = [10, 20, 30, 40];
let clase = new Clase("Miguel", 25, true, arr);
console.log(clase.toString());
let nom1 = "Miguel";
let edad1 = 24;
console.log(clase.getUsuario(nom1, edad1, "Usuario"));
let nom2 = "Carlos";
let edad2 = 0;
console.log(clase.getUsuario(nom2, edad2, "Usuario"));
//# sourceMappingURL=app.js.map