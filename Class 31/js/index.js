const btnActivar = document.getElementById('btnActivar')
const contador = document.getElementById('contador')

let contadorValue = 20


btnActivar.addEventListener('click', () => {
    const interval = setInterval(() => {
        console.log('K pacha!')
    }, 1000)
    clearInterval(interval)
})

setInterval(() => {
    if (contadorValue > 0) {
        contadorValue--;
        contador.innerText = contadorValue
    } else {
        contador.innerText = 'boom'
    }
}, 1000)

