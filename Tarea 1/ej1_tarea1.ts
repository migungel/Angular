class Clase{
    nombre: string;
    numero: number;
    boleano: boolean;
    arreglo: number[];

    constructor(nombre:string, numero:number, boleano:boolean, arreglo: number[]){
        this.nombre = nombre;
        this.numero = numero;
        this.boleano = boleano;
        this.arreglo = arreglo;
    }

    toString(): string{
        return "Nombre: " + this.nombre + "\n" +
        "Numero: " + this.numero + "\n" +
        "Boleano: " + this.boleano + "\n" +
        "Arreglo: " + this.arreglo + "\n";
    }

    getUsuario(nombre:string, edad?:number, rol = "Usuario"): string{
        let texto: string = "El usuario " + nombre + " pertenece al rol " + rol;
        texto = edad ? texto + " y tiene la edad de " + edad : texto;
        texto += "\n"
        return texto;
    }

}

interface Camaleon{
    tipo: string;
    peculiaridad: string;
    largo: number;
    ancho: number;
}

var camaleon: Camaleon = {
    tipo: "reptil",
    peculiaridad: "camuflarse",
    largo: 20,
    ancho: 10
};



interface Producto{
    descripcion: string;
    precio: number;
}

interface Pedido{
    producto: Producto;
    cantidad: number;
}


console.log("Tarea 1");
console.log("1. Probando metodo toString");
let arr = [10, 20, 30, 40];
let clase = new Clase("Miguel",25,true,arr);
console.log(clase.toString());


console.log("Prueba ingresando una edad");
let nom1: string = "Jose";
let edad1: number = 30;
console.log(clase.getUsuario(nom1,edad1));

console.log("Prueba sin ingresar edad");
let nom2: string = "Carlos";
console.log(clase.getUsuario(nom2));


let arregloProducto: Producto[];
let arregloPedido: Pedido[];

let prod1: Producto = {
    descripcion: "pollo",
    precio: 3.40
}
let prod2: Producto = {
    descripcion: "papa",
    precio: 1
}
let prod3: Producto = {
    descripcion: "leche",
    precio: 2.30
}
let prod4: Producto = {
    descripcion: "manzana",
    precio: 0.40
}

arregloProducto = [prod1,prod2,prod3,prod4];

let ped1: Pedido = {
    producto: prod1,
    cantidad: 4
}
let ped2: Pedido = {
    producto: prod2,
    cantidad: 5
}
let ped3: Pedido = {
    producto: prod3,
    cantidad: 1
}
let ped4: Pedido = {
    producto: prod4,
    cantidad: 3
}

arregloPedido = [ped1,ped2,ped3,ped4];

function valorTotal(arrPed:Pedido[]): number{
    let total: number = 0;
    for(var val of arrPed){
        total += (val.cantidad*val.producto.precio);
    }
    return total;
}

console.log("El valor total de la vente es: " + valorTotal(arregloPedido));


let arr2 = [10,20,30,40];
for (var index30 in arr2){
    console.log(index30);
}
console.log(index30);
console.log(" ");

for (let index2 in arr2){
    console.log(index2);
}
//console.log(index2);

var e = "bu";


function Gr(greeting: string, ...names:string[]){
    return greeting + " " + names.join(", ") + "!";
}
console.log(Gr("Hello", "steve", "bill"));
console.log(Gr("Hello"));


function disp(code: (string|number)){
    if (typeof(code) === "number")
        console.log("number")
    else if(typeof(code) === "string")
        console.log("string")
}
disp(123);
disp("ABC");


var num1:number = 1;
function varDeclaration(){
    var num2: number=2;

    if (num2>num1){
        var num3: number=3-num2;
        num3++;
    }

    while(num1<num2){
        var num4: number=4+num1;
        num1++;
    }

    console.log("1 " + num1);
    console.log("2 " + num2);
    console.log("3 " + num3);
    console.log("4 " + num4);
}

varDeclaration();

let b: string[] = ["a","apr","man"];
var ef = "asd";
console.log(typeof(b));
console.log(typeof(ef));

