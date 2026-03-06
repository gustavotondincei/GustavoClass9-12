let emojis = ['⚽️', '🏀', '🏐']
console.log(emojis)

emojis.unshift('🏐')
console.log(emojis)


emojis.reverse()
console.log(emojis.join('-'))

console.clear()



emojis.forEach((emoji) => {
    console.log(emoji)
})

const home = document.getElementById('home')
const btnEmojis = document.getElementById('btnEmojis')

btnEmojis.addEventListener('click', () => {
    emojis.forEach((emoji) => {
        home.innerHTML = `
        <span>emoji</span>
    `;
    })
})


