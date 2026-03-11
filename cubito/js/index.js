const cubito = document.getElementById('cubito')
const body = document.getElementById('body')
const stopBtn = document.getElementById('stop')
const playBtn = document.getElementById('play')

let animationSpeed = 1000

const oneBtn = document.getElementById('1x').addEventListener('click', () => {
    animationSpeed = 1000
})
const twoBtn = document.getElementById('2x').addEventListener('click', () => {
    animationSpeed = 500
})
const threeBtn = document.getElementById('4x').addEventListener('click', () => {
    animationSpeed = 250
})






playBtn.addEventListener ('click', () => {
    cubito.style.transition = `${animationSpeed}`

    const ballAnimation = setInterval(() => {
        setTimeout(()=> {
            cubito.style = 'transform: translateY(15rem);'
        }, 0);

        setTimeout(() => {
            cubito.style = 'transform: translateY(-15rem); border-radius: 0; background-color: rgb(251, 249, 245);'
            body.style = 'background-color: rgb(107, 114, 143);'
        }, animationSpeed * 1);

        setTimeout(() => {
            cubito.style = 'transform: translateY(0px) rotate(90deg); border-radius: 0; background-color: rgb(251, 249, 245);'
            body.style = 'background-color: rgb(107, 114, 143);'
        }, animationSpeed * 2);

        setTimeout(() => {
            cubito.style = 'transform: translateY(0px) rotate(0deg); border-radius: 100px;'
            body.style = 'background-color: rgb(251, 249, 245);'
        }, animationSpeed * 3);

    }, animationSpeed * 4)
})

stopBtn.addEventListener('click', () => {
    clearInterval(ballAnimation)
})

playBtn.addEventListener('click', () => {

})