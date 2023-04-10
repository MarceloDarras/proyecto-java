//console.log("Hola mundo");
//alert("Hola mundo");

//comentario de una linea
/*  */

let variableUno = "Hola";
let variableDos = "mundo";
console.log(variableUno + " " + variableDos);
//alert(variableUno + " " + variableDos);
const constante = 10;


let numeroUno = 50;
let numeroDos = 20;


let result = numeroUno + numeroDos;

result += 100;



console.log("La suma de dos numeros es : " + result);


let color = "verde";

if (color == "rojo") {
    console.log("Es de color rojo.");
}
else{
    console.log("No es de color rojo.");
}



let var1 = 10;
let var2 = 20;

if (var1 === var2) {
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}


if (var1 > var2 && var1 > 15 ) {
    console.log("Es mayor  111");
}
else{
    console.log("Es menor 1111");
}


if (var1 > var2 || var1 > 5 ) {
    console.log("Es mayor  222");
}
else{
    console.log("Es menor 222");
}


if (var1 > var2) {
    console.log("Es menor var1", var1);
}
else if (var1 > 20) {
    console.log("Es mayor a 20");
}else{
    console.log("No se cumplió");
}


function miFuncion(nomUser) {
    console.log("Mi primera funcion",nomUser);
}

miFuncion(10);

let condicional = true;

//1 = true
//0 = false

if (condicional === 1) {
    console.log("Es verdadera");
}else{
    console.log("Es falso");
}

function eventOnblur(){
    //console.log("Evento onBlur");
    ontenerValorInput();
}

function eventFocus(){
    console.log("Evento onFocus");
}

function eventClick(){
    console.log("Evento click");
}

function eventKeyDown(){
    console.log("Evento key down");
}

function eventKeyUp(){
    console.log("Evento key up");
}

function eventDblClick(){
    console.log("Evento doble click");
}

function eventChange(){
    console.log("Evento change");
}
function datos(){
    let miVariable = 10;
}
function ontenerValorInput(){
    let var1 = document.getElementById("txtNumero1").value;
    console.log("Valor input: " + var1);

    console.log("Valor variable uno: ", variableUno);
    console.log("Esta es la variable que está en la función: ", miVariable);
}

document.getElementById("ocultar").style.display = "none";



function pass(){
    let input = document.getElementById("txtContraseña");

    if(input.type == "password"){
        input.type = "text"
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";
    }else{
        input.type = "password"
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
    }
}




