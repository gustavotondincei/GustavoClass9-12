// variables
let algo2 = 1
const algo = "si"

// Datos
let string = "1"
let number = 1
let isBoolean = "true"

// Operadores
number++ // 2
number-- // 1
number+= 3 // 4
number-= 3 // 1
string == number // true
string === number // false
3 > number // true
3 < number // false
string != number // true
string !== number // false

// Condicionales
const nombre = "Gustavo"
let edad = 25
let hasCarnet = true
let permiso

if (edad >= 18 && hasCarnet ==   true) {
    permiso = "puede"
}   else if (edad < 18 || hasCarnet == false) {
    permiso = "no puede"
}
console.log(`${nombre} ${permiso} conducir`)


console.clear

let contador = 3


function contar() {
    if (contador > 0) {
        contador--
        console.log(contador);
    } else if (contador <= 0) {
        console.log("Has terminado");
    }
}

