
let contador = 10
let nombre = prompt('nombre')

function contar() {
    if (contador > 0) {
        contador--
        console.log(contador);
    } else {
        console.log("Has terminado");
    }
}

function saludar(nombreSaludar) {
    console.log("hola " + nombreSaludar);
    
}

saludar(nombre)
