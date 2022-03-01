console.log("Operadores de posfix");
let i: number = 10;
i++;
console.log("i++" + i);

let j: number = 10;
j--;
console.log("j-- =" + j);

console.log("Operadores de prefijo");
let h: number = 10;
console.log("++h = " + ++h);
console.log("--h = " + --h);

console.log("Operador terniario (?)");
let movieReleased: boolean = true;
let message: string = movieReleased ? "Movie is released" : "Not released yet";
console.log(message);

console.log("Loop");
for(let x = 0; x < 3; x++){
    console.log("Se ejecuta la linea " + x);
}

console.log("Loop - arreglo");
let arr = [10, 20, 30, 40];
for(var val of arr){
    console.log(val);
}


console.log("Funciones");
function userDef(){
    console.log("Ejecuta la funcion");
}
userDef();


console.log("Objetos en Typescript");
let planet = new Object(); //Objeto 1
let planeta = {}; //Objeto 2


import { Planet } from "./interface/planeta";
let planeta1: Planet = {
    name: "marte",
    galaxy: "sistema solar"
}



function buscarNumero(numero:number, array:number[]){
    let arr: number[] = array.filter(element => element === numero); //si fuera objeto (element.numero)
    if(arr.length == 0){
        console.log("No hay datos");
    }else{
        console.log("Si existe");
    }
}

let arregloP: number[] = [3,6,5,8,9,8,3,3,2,6,2,7];
buscarNumero(4,arregloP);
buscarNumero(8,arregloP);