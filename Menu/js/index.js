
// menu toggle

const navMenu = document.getElementById('nav-menu')
const menuBtn = document.getElementById('menu-btn')
const btnX = document.getElementById('btn-x')

function toggleMenu() {
    navMenu.classList.toggle('activeMenu')
    menuBtn.classList.toggle('activeBtn')
}

menuBtn.addEventListener('click', toggleMenu)
btnX.addEventListener('click', toggleMenu)




if (notaEncuesta !== 10) {
    pedro = 'triste'
}