let alumnos = [ 
    {nombre: 'Gustavo', edad: 25, isVivo: true},
    {nombre: 'Pedro', edad: 28, isVivo: true},
    {nombre: 'Jesús', edad: 19, isVivo: true}
]

alumnos.forEach((alumno) => {
    console.log(alumno.nombre, alumno.edad)
})


let miArray = ['⚽️', '🏀', '🎾'];

let [futbol, baloncesto, tenis] = miArray 



const container = document.getElementById('container') // trae el contanedor "container" a javascript
const newElement = document.createElement('div'); //crea un nuevo elemento div.

newElement.classList.add('new-element');
newElement.innerHTML = `<p>Hola, soy un nuevo elemento!</p>`; //añade una clase y contenido al elemento

container.appendChild(newElement); //añade el elemento al "container" y finalmente lo mostramos en la pagina